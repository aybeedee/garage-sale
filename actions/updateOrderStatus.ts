"use server";

import { ServerActionResponse, PoplatedOrderItem } from "@/utils/app.types";
import { Database, Tables } from "@/utils/database.types";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function updateOrderStatus(
	newStatus: Database["public"]["Enums"]["order_status"],
	orderId: string,
	orderItems: PoplatedOrderItem[]
): Promise<ServerActionResponse<Tables<"order">>> {
	try {
		const cookieStore = cookies();
		const supabase = createClient(cookieStore);

		// lots of bad edge cases here; just as an example - sending in a request to set PROCESSING on an already PROCESSING order can rededuct stock counts
		if (newStatus === "PROCESSING") {
			const reducedOrderItems = orderItems.map((orderItem) => ({
				id: orderItem.product_id,
				purchaseQuantity: orderItem.purchase_quantity,
			}));
			// ensure all order items are in sufficient quantity
			const { data, error: fetchProductsError } = await supabase
				.from("product")
				.select("*")
				.in(
					"id",
					reducedOrderItems.map((orderItem) => orderItem.id)
				);

			if (fetchProductsError || !data?.length) {
				return {
					ok: false,
					result: null,
					error: {
						type: "DATABASE_ERROR",
						response: `A database error occured: ${JSON.stringify(fetchProductsError)}`,
					},
				};
			}

			const allProductAvailable = reducedOrderItems.every((orderItem) => {
				const foundProduct = data.find(
					(product) => product.id === orderItem.id
				);
				if (!foundProduct) return false;
				return foundProduct.stock_quantity >= orderItem.purchaseQuantity;
			});

			if (!allProductAvailable) {
				return {
					ok: false,
					result: null,
					error: {
						type: "CLIENT_ERROR",
						response: "Some of the ordered items are no longer available",
					},
				};
			}

			// -- order item stock counts can become insufficient/any other issues can occur in these timeframes - will require transactional logic to make foolproof

			// many better ways to do this probably - one example: making the reducedOrderItems a map/object instead of array; would quicken logic above too; another way: do both availability check and this in same loop etc etc
			const updatedProducts = data.map((product) => ({
				...product,
				stock_quantity:
					product.stock_quantity -
					reducedOrderItems.find((orderItem) => orderItem.id === product.id)!
						.purchaseQuantity,
			}));
			// upsert for bulk update seems terrible, this can probably become either promise.all updates or a db function etc
			const { error } = await supabase.from("product").upsert(updatedProducts);

			if (error) {
				return {
					ok: false,
					result: null,
					error: {
						type: "DATABASE_ERROR",
						response: `A database error occured: ${JSON.stringify(fetchProductsError)}`,
					},
				};
			}
		}
		const { data, error } = await supabase
			.from("order")
			.update({ status: newStatus })
			.eq("id", orderId)
			.select();

		if (error || !data?.length) {
			return {
				ok: false,
				result: null,
				error: {
					type: "DATABASE_ERROR",
					response: `A database error occured: ${JSON.stringify(error)}`,
				},
			};
		}

		return {
			ok: true,
			result: data[0],
			error: null,
		};
	} catch (error) {
		return {
			ok: false,
			result: null,
			error: {
				type: "SERVER_ERROR",
				response: `An unexpected error occured: ${JSON.stringify(error)}`,
			},
		};
	}
}
