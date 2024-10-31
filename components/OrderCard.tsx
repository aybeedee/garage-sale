import { PopulatedOrder } from "@/utils/app.types";
import OrderItem from "./OrderItem";

export default function OrderCard({ order }: { order: PopulatedOrder }) {
	return (
		<div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-start w-full md:w-4/5 lg:w-7/12 p-6 rounded-xl border border-gray-200 shadow-lg bg-white">
			<div className="flex flex-col">
				<p className="font-light">
					Order ID: <span className="font-medium">{order.id}</span>
				</p>
				<p className="font-light">
					Status: <span className="font-medium">{order.status}</span>
				</p>
			</div>
			<div className="flex flex-col">
				<p className="font-light">
					Total: <span className="font-medium">Rs. {order.total}</span>
				</p>
				<p className="font-light">
					Products: <span className="font-medium">{order.item_count}</span>
				</p>
			</div>
		</div>
		// <div className="flex flex-row gap-4 items-center border-b border-gray-300 pb-4 relative">
		// 	order card data {order.order_items[0].product_details.name}
		// 	<div>
		// 		{order.order_items.map((orderItem) => (
		// 			<OrderItemCard key={orderItem.product_id} />
		// 		))}
		// 	</div>
		// </div>
	);
}

// type Row = {
// 	address_line_1: string;
// 	address_line_2: string | null;
// 	country: string;
// 	created_at: string;
// 	first_name: string;
// 	id: string;
// 	item_count: number;
// 	last_name: string;
// 	phone_number: string;
// 	postal_code: string;
// 	status: Database["public"]["Enums"]["order_status"];
// 	total: number;
// 	user_id: string;
// };

// type order_item = {
// 	Row: {
// 		created_at: string;
// 		order_id: string;
// 		product_id: string;
// 		purchase_quantity: number;
// 	};
// };

// type product = {
// 	Row: {
// 		category_id: string;
// 		created_at: string;
// 		description: string | null;
// 		handle: string;
// 		id: string;
// 		images: string[];
// 		is_in_stock: boolean;
// 		is_released: boolean;
// 		name: string;
// 		price: number;
// 		stock_quantity: number;
// 		search_name_description: string | null;
// 	};
// };
