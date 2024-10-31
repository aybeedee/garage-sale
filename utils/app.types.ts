import { Tables } from "./database.types";

export type Category = {
	name: string;
	path: string;
};

export type ProfileMenuOption = {
	name: string;
	path: string;
};

export type Product = {
	id: string;
	handle: string;
	name: string;
	description: string;
	price: number;
	quantity: number;
	images: string[];
	timestamp: number;
};

export type SortType = {
	type: string;
	slug: string;
};

export type CartContextType = {
	cart: Cart;
	setCart: React.Dispatch<React.SetStateAction<Cart>>;
	isCartOpen: boolean;
	toggleCartOpen: (open: boolean) => void;
	addToCart: (cartItem: CartItem) => void;
	updateCart: (
		productId: string,
		action: "increment" | "decrement" | "remove"
	) => void;
	clearCart: () => void;
};

export type CartItem = {
	id: string;
	handle: string;
	name: string;
	price: number;
	purchaseQuantity: number;
	stockQuantity: number;
	image: string;
};

export type Cart = { [productId: string]: CartItem };

export type ShippingDetails = {
	firstName: string;
	lastName: string;
	phoneNumber: string;
	addressLine1: string;
	addressLine2: string;
	country: string;
	postalCode: string;
};

export type PopulatedOrder = Tables<"order"> & {
	order_items: (Tables<"order_item"> & {
		product_details: Tables<"product">;
	})[];
};

export interface ServerActionResponse<T> {
	ok: boolean;
	result: T | null;
	error: {
		// TODO: there should be an enum for this type
		type: "DATABASE_ERROR" | "SERVER_ERROR" | "CLIENT_ERROR";
		response: any;
	} | null;
}
