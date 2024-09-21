"use server";

import { Cart, ServerActionResponse } from "@/utils/app.types";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function validateCart(
	cart: Cart
): Promise<ServerActionResponse> {
	try {
		const productIds = Object.keys(cart);

		if (!productIds.length) {
			return {
				ok: false,
				result: null,
				error: {
					type: "CLIENT_ERROR",
					response: "No products provided",
				},
			};
		}
		const cookieStore = cookies();
		const supabase = createClient(cookieStore);
		const { data, error } = await supabase
			.from("product")
			.select("*")
			.eq("is_released", true)
			.eq("is_in_stock", true)
			.in("id", productIds);

		if (error) {
			return {
				ok: false,
				result: null,
				error: {
					type: "DATABASE_ERROR",
					response: `A database error occured: ${JSON.stringify(error)}`,
				},
			};
		}

		productIds.forEach((productId) => {
			const product = data?.find((product) => product.id === productId);
			if (
				product &&
				cart[productId].purchaseQuantity <= product.stock_quantity
			) {
				cart[productId].handle = product.handle;
				cart[productId].id = product.id;
				cart[productId].image = product.images[0]; // surely this doesn't cause any problems
				cart[productId].name = product.name;
				cart[productId].price = product.price;
				cart[productId].stockQuantity = product.stock_quantity;
				cart[productId].stockQuantity = product.stock_quantity;
			} else {
				delete cart[productId];
			}
		});

		return {
			ok: true,
			result: cart,
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
