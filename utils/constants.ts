import { Category, SortType } from '@/utils/types';

export const categories: Category[] = [
    {
        name: "Kitchenware",
        path: "kitchenware"
    },
    {
        name: "Home Decor",
        path: "home-decor"
    },
    {
        name: "Women",
        path: "women"
    },
    {
        name: "Miscellaneous",
        path: "miscellaneous"
    }
];

export const sortingList: SortType[] = [
    {
        type: "Most Recent",
        slug: "recent-desc",
    },
    {
        type: "Price: Low to High",
        slug: "price-asc",
    },
    {
        type: "Price: High to Low",
        slug: "price-desc",
    }
];