import {
	Category,
	SortType,
	Product,
	ProfileMenuOption,
} from "@/utils/app.types";

export const categories: Category[] = [
	{
		name: "Kitchenware",
		path: "kitchenware",
	},
	{
		name: "Home Decor",
		path: "home-decor",
	},
	{
		name: "Women",
		path: "women",
	},
	{
		name: "Miscellaneous",
		path: "miscellaneous",
	},
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
	},
];

export const profileMenuList: ProfileMenuOption[] = [
	{
		name: "My Orders",
		path: "orders",
	},
	{
		name: "Edit Address",
		path: "address",
	},
	{
		name: "Settings",
		path: "settings",
	},
];

export const sampleProductsList: Product[] = [
	{
		id: "1",
		handle: "eco-glide-bottle",
		name: "Eco Glide Bottle",
		description:
			"Stay hydrated in style with the Eco Glide Green Water Bottle. Its eco-friendly design and vibrant green color make it a perfect companion for your daily adventures.",
		price: 225.0,
		quantity: 5,
		images: [
			"https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			"https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			"https://images.unsplash.com/photo-1633431871820-ca72e0da2e2b?q=80&w=1969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			"https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		],
		timestamp: 1702890161000,
	},
	{
		id: "2",
		handle: "stealth-beat-headphones",
		name: "Stealth Beat Headphones",
		description:
			"Immerse yourself in your favorite tunes with the Stealth Beat Black Headphones. Sleek and stylish, these headphones deliver high-quality sound for a superior audio experience.",
		price: 899.99,
		quantity: 15,
		images: [
			"https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			"https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			"https://images.unsplash.com/photo-1633431871820-ca72e0da2e2b?q=80&w=1969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			"https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		],
		timestamp: 1702890111000,
	},
	{
		id: "3",
		handle: "blossom-time-wristwatch",
		name: "Blossom Time Wristwatch",
		description:
			"Embrace simplicity with the Blossom Time Modern Wristwatch. This timepiece features a clean, modern design with a unique floral watchface, adding a touch of nature to your everyday style.",
		price: 1100.0,
		quantity: 1,
		images: [
			"https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			"https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			"https://images.unsplash.com/photo-1633431871820-ca72e0da2e2b?q=80&w=1969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			"https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		],
		timestamp: 1702890061000,
	},
	{
		id: "4",
		handle: "mini-prickly-pot-cactus",
		name: "Mini Prickly Pot Cactus",
		description:
			"Add a charming touch to your space with the Mini Prickly Pot Cactus. This petite cactus in a stylish pot brings a hint of the desert indoors, making it a delightful addition to your decor.",
		price: 950.0,
		quantity: 3,
		images: [
			"https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			"https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			"https://images.unsplash.com/photo-1633431871820-ca72e0da2e2b?q=80&w=1969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			"https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		],
		timestamp: 1702880161000,
	},
	{
		id: "5",
		handle: "pear-glow-pottery",
		name: "Pear Glow Pottery",
		description:
			"Enhance your home decor with the Pear Glow Pottery. This uniquely shaped pear-inspired pottery adds a touch of elegance to any space, combining artistry and functionality in one exquisite piece.",
		price: 325.0,
		quantity: 3,
		images: [
			"https://plus.unsplash.com/premium_photo-1693011409978-0127e057bf68?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			"https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			"https://images.unsplash.com/photo-1633431871820-ca72e0da2e2b?q=80&w=1969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			"https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		],
		timestamp: 1702870161000,
	},
	{
		id: "6",
		handle: "golden-pineapple-paste",
		name: "Golden Pineapple Paste",
		description:
			"Indulge in the rare and exquisite flavor of our Golden Pineapple Paste. This unique culinary delight is made from the finest pineapples, offering a taste of tropical luxury that is truly one-of-a-kind.",
		price: 1300.0,
		quantity: 1,
		images: [
			"https://images.unsplash.com/photo-1525904097878-94fb15835963?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			"https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			"https://images.unsplash.com/photo-1633431871820-ca72e0da2e2b?q=80&w=1969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			"https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		],
		timestamp: 1702810161000,
	},
	{
		id: "7",
		handle: "vintage-bolsey-c22",
		name: "Vintage Bolsey C22",
		description:
			"Elevate your photography with the Vintage Bolsey C22 camera. Timeless design meets reliable functionality for enthusiasts and collectors.",
		price: 4375.0,
		quantity: 1,
		images: [
			"https://images.unsplash.com/photo-1511184059754-e4b5bbbcef75?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			"https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			"https://images.unsplash.com/photo-1633431871820-ca72e0da2e2b?q=80&w=1969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			"https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		],
		timestamp: 1702800061000,
	},
	{
		id: "8",
		handle: "scarlet-marble-mug",
		name: "Scarlet Marble Mug",
		description:
			"Sip your favorite beverages in style with the Scarlet Marble Mug. The rich red marble design adds a touch of sophistication to your coffee or tea routine, making every sip a luxurious experience.",
		price: 359.99,
		quantity: 11,
		images: [
			"https://images.unsplash.com/photo-1554345788-bb4dd42878c1?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			"https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			"https://images.unsplash.com/photo-1633431871820-ca72e0da2e2b?q=80&w=1969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			"https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		],
		timestamp: 1702700061000,
	},
	{
		id: "9",
		handle: "stained-glass-vase",
		name: "Stained Glass Vase",
		description:
			"Innovate your floral arrangements with the Vibrant Glass Blossom Vase. Crafted with exquisite stained glass, this vase adds a touch of artistry to your space, creating a stunning showcase for your favorite blooms.",
		price: 1270.0,
		quantity: 3,
		images: [
			"https://images.unsplash.com/photo-1505941625782-5f8710bdd9f3?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			"https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			"https://images.unsplash.com/photo-1633431871820-ca72e0da2e2b?q=80&w=1969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			"https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		],
		timestamp: 1702700169000,
	},
	{
		id: "10",
		handle: "marsupial-rucksack",
		name: "Marsupial Rucksack",
		description:
			"Experience unparalleled convenience with the Kangaroo Carry Rucksack. Inspired by marsupials, this unique backpack design offers ample storage space and functionality, making it the perfect companion for your adventures.",
		price: 3300.0,
		quantity: 2,
		images: [
			"https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			"https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			"https://images.unsplash.com/photo-1633431871820-ca72e0da2e2b?q=80&w=1969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			"https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		],
		timestamp: 1702600311010,
	},
];
