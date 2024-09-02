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
	isCartOpen: boolean;
	toggleCartOpen: (open: boolean) => void;
	cart: { [productId: string]: CartItem };
	updateCart: (
		productId: string,
		action: "increment" | "decrement" | "remove"
	) => void;
	addToCart: (cartItem: CartItem) => void;
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
