import Link from "next/link";
import { CartItem } from "@/utils/app.types";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

export default function OrderItemCard() {
	return (
		<div className="flex flex-row gap-4 items-center border-b border-gray-300 pb-4 relative">
			order item data
		</div>
	);
}
