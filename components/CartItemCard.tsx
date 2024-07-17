import Link from "next/link";
import { CartItem } from "@/utils/types";

export default function CartItemCard({
	cartItem,
	handleUpdateCart,
}: {
	cartItem: CartItem;
	handleUpdateCart: (
		productId: string,
		action: "increment" | "decrement" | "remove"
	) => void;
}) {
	return (
		<div className="flex flex-row">
			<Link href={`/product/${cartItem.handle}`} className="">
				<img
					className="object-cover w-full rounded-xl aspect-square"
					src={cartItem.image}
				/>
			</Link>
			<div className="flex flex-col">
				<h1 className="text-2xl font-semibold text-gray-700">
					{cartItem.name}
				</h1>
				<p className="text-gray-500">
					Price {"(1 unit)"}: Rs. {cartItem.price}
				</p>
				<div className="h-full xs:w-full rounded-md inline-flex items-center justify-between bg-neutral-800">
					<button
						type="button"
						className="text-white transition duration-200 px-2 sm:px-4 hover:scale-125"
						onClick={() => handleUpdateCart(cartItem.id, "decrement")}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="17"
							viewBox="0 0 16 17"
							fill="none"
							strokeWidth="1"
							stroke="currentColor"
						>
							<path
								d="M12.6667 7.49988H3.33341C3.1566 7.49988 2.98703 7.57012 2.86201 7.69514C2.73699 7.82016 2.66675 7.98973 2.66675 8.16654C2.66675 8.34336 2.73699 8.51292 2.86201 8.63795C2.98703 8.76297 3.1566 8.83321 3.33341 8.83321H12.6667C12.8436 8.83321 13.0131 8.76297 13.1382 8.63795C13.2632 8.51292 13.3334 8.34336 13.3334 8.16654C13.3334 7.98973 13.2632 7.82016 13.1382 7.69514C13.0131 7.57012 12.8436 7.49988 12.6667 7.49988Z"
								fill="currentColor"
							></path>
						</svg>
					</button>
					<span className="text-base text-black bg-white h-full w-full px-4 py-2 sm:px-6 sm:py-3 border border-neutral-800">
						{cartItem.quantity}
					</span>
					<button
						type="button"
						className="text-white transition duration-200 px-2 sm:px-4 hover:scale-125"
						onClick={() => handleUpdateCart(cartItem.id, "increment")}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="17"
							viewBox="0 0 16 17"
							fill="none"
							strokeWidth="1"
							stroke="currentColor"
						>
							<path
								d="M12.6667 7.4998H8.66675V3.4998C8.66675 3.32299 8.59651 3.15342 8.47149 3.02839C8.34646 2.90337 8.17689 2.83313 8.00008 2.83313C7.82327 2.83313 7.6537 2.90337 7.52868 3.02839C7.40365 3.15342 7.33341 3.32299 7.33341 3.4998V7.4998H3.33341C3.1566 7.4998 2.98703 7.57003 2.86201 7.69506C2.73699 7.82008 2.66675 7.98965 2.66675 8.16646C2.66675 8.34327 2.73699 8.51284 2.86201 8.63787C2.98703 8.76289 3.1566 8.83313 3.33341 8.83313H7.33341V12.8331C7.33341 13.0099 7.40365 13.1795 7.52868 13.3045C7.6537 13.4296 7.82327 13.4998 8.00008 13.4998C8.17689 13.4998 8.34646 13.4296 8.47149 13.3045C8.59651 13.1795 8.66675 13.0099 8.66675 12.8331V8.83313H12.6667C12.8436 8.83313 13.0131 8.76289 13.1382 8.63787C13.2632 8.51284 13.3334 8.34327 13.3334 8.16646C13.3334 7.98965 13.2632 7.82008 13.1382 7.69506C13.0131 7.57003 12.8436 7.4998 12.6667 7.4998Z"
								fill="currentColor"
							></path>
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
}
