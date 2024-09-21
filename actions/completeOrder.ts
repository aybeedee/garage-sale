"use server";

import { Cart, ShippingDetails, ServerActionResponse } from "@/utils/app.types";
import { deliveryCharges } from "@/utils/constants";
import { Tables } from "@/utils/database.types";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function completeOrder(
	cart: Cart,
	shippingDetails: ShippingDetails
): Promise<ServerActionResponse<Tables<"order">>> {
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

		// fetching user/updating user shipping details
		const {
			data: { user },
			error: authError,
		} = await supabase.auth.updateUser({
			data: {
				first_name: shippingDetails.first_name,
				last_name: shippingDetails.last_name,
				phone_number: shippingDetails.phone_number,
				address_line_1: shippingDetails.address_line_1,
				address_line_2: shippingDetails.address_line_2 ?? null,
				country: shippingDetails.country,
				postal_code: shippingDetails.postal_code,
			},
		});

		if (authError || !user) {
			return {
				ok: false,
				result: null,
				error: {
					type: "CLIENT_ERROR",
					response: `Could not authenticate user ${authError && ": " + JSON.stringify(authError)}`,
				},
			};
		}

		// validating cart items
		const { data: productsData, error: productsError } = await supabase
			.from("product")
			.select("*")
			.eq("is_released", true)
			.eq("is_in_stock", true)
			.in("id", productIds);

		if (productsError) {
			return {
				ok: false,
				result: null,
				error: {
					type: "DATABASE_ERROR",
					response: `A database error occured: ${JSON.stringify(productsError)}`,
				},
			};
		}

		if (!productsData.length) {
			return {
				ok: false,
				result: null,
				error: {
					type: "CLIENT_ERROR",
					response: "No valid products provided",
				},
			};
		}

		productIds.forEach((productId) => {
			const product = productsData?.find((product) => product.id === productId);
			if (
				!(product && cart[productId].purchaseQuantity <= product.stock_quantity)
			) {
				delete cart[productId];
			}
		});

		{
			Object.values(cart).reduce(
				(sum, product) => sum + product.price * product.purchaseQuantity,
				0
			) + deliveryCharges;
		}

		// creating order record
		const { data: orderData, error: orderError } = await supabase
			.from("order")
			.insert({
				user_id: user.id,
				item_count: productsData.length,
				total:
					productsData.reduce(
						(sum, product) =>
							sum + product.price * cart[product.id].purchaseQuantity,
						0
					) + deliveryCharges,
				first_name: shippingDetails.first_name,
				last_name: shippingDetails.last_name,
				phone_number: shippingDetails.phone_number,
				address_line_1: shippingDetails.address_line_1,
				address_line_2: shippingDetails.address_line_2 ?? null,
				country: shippingDetails.country,
				postal_code: shippingDetails.postal_code,
			})
			.select();

		if (orderError || !orderData?.length) {
			return {
				ok: false,
				result: null,
				error: {
					type: "DATABASE_ERROR",
					response: `Could not create order ${orderError && ": " + JSON.stringify(orderError)}`,
				},
			};
		}

		// creating order items record
		const orderItems = productsData.map((product) => ({
			order_id: orderData[0].id,
			product_id: product.id,
			purchase_quantity: cart[product.id].purchaseQuantity,
		}));

		const { error: orderItemsError } = await supabase
			.from("order_item")
			.insert(orderItems);

		if (orderItemsError) {
			return {
				ok: false,
				result: null,
				error: {
					type: "DATABASE_ERROR",
					response: `Could not create order items ${orderItemsError && ": " + JSON.stringify(orderItemsError)}`,
				},
			};
		}

		// updating product stock quantities
		// TODO: not checking for errors here since will be pointless if we don't actually implement the transactional logic all the way; so leaving for now until this scales further and the whole thing gets turned into a transaction function rpc call anyway
		await Promise.all(
			productsData.map(async (product) => {
				await supabase
					.from("product")
					.update({
						stock_quantity:
							product.stock_quantity - cart[product.id].purchaseQuantity,
					})
					.eq("id", product.id);
			})
		);

		return {
			ok: true,
			result: orderData[0],
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
