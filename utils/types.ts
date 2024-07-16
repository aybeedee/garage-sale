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
};
