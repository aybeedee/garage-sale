export type Category = {
    name: string;
    path: string;
};

export type Product = {
    name: string;
    description: string;
    price: number;
    quantity: number;
    image: string;
    timestamp: number;
};

export type SortType = {
    type: string;
    slug: string;
};
