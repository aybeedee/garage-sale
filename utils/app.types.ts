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
	first_name: string;
	last_name: string;
	phone_number: string;
	address_line_1: string;
	address_line_2: string;
	country: string;
	postal_code: string;
};

export interface ServerActionResponse<T> {
	ok: boolean;
	result: T | null;
	error: {
		type: "DATABASE_ERROR" | "SERVER_ERROR" | "CLIENT_ERROR";
		response: any;
	} | null;
}
