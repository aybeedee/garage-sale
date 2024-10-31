import { PoplatedOrderItem } from "@/utils/app.types";
import { useRouter } from "next/navigation";

export default function OrderItem({
	orderItem,
}: {
	orderItem: PoplatedOrderItem;
}) {
	const router = useRouter();

	return (
		<div className="flex flex-row justify-between items-center pb-2">
			<div className="flex flex-row gap-4 h-full">
				<img
					className="object-cover w-16 lg:w-24 h-16 lg:h-24 rounded-xl aspect-square cursor-pointer"
					src={orderItem.product_details.images[0]}
					onClick={() => {
						router.push(`/product/${orderItem.product_details.handle}`);
					}}
				/>
				<div className="flex flex-col h-full justify-between">
					<div className="flex flex-col">
						<h1 className="text-sm lg:text-base xl:text-lg font-normal">
							{orderItem.product_details.name}
						</h1>
						<p className="text-sm xl:text-base text-gray-500">
							Price {"(1 unit)"}: Rs. {orderItem.product_details.price}
						</p>
					</div>
					<p className="text-sm lg:text-base">
						Currently In Stock: {orderItem.product_details.stock_quantity}
					</p>
				</div>
			</div>
			<div className="flex flex-col h-full justify-between items-end gap-6 text-lg">
				x {orderItem.purchase_quantity}
			</div>
		</div>
	);
}
