import Link from "next/link";
import { CartItem } from "@/utils/app.types";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

export default function CheckoutItemCart({ cartItem }: { cartItem: CartItem }) {
	const { updateCart, toggleCartOpen } = useCart();
	const router = useRouter();

	return (
		<div className="flex flex-row justify-between items-center border-b border-gray-300 pb-4">
			<div className="flex flex-row gap-4 h-full">
				<img
					className="object-cover w-16 lg:w-24 h-16 lg:h-24 rounded-xl aspect-square cursor-pointer"
					src={cartItem.image}
					onClick={() => {
						router.push(`/product/${cartItem.handle}`);
						toggleCartOpen(false);
					}}
				/>
				<div className="flex flex-col h-full justify-between">
					<div className="flex flex-col">
						<h1 className="text-base lg:text-lg xl:text-xl font-normal">
							{cartItem.name}
						</h1>
						<p className="text-sm xl:text-base text-gray-500">
							Price {"(1 unit)"}: Rs. {cartItem.price}
						</p>
					</div>
					<p className="text-sm lg:text-base">
						Total: Rs. {cartItem.price * cartItem.purchaseQuantity}
					</p>
				</div>
			</div>
			<div className="flex flex-col h-full justify-between items-end gap-6">
				<button
					onClick={() => updateCart(cartItem.id, "remove")}
					className="py-1 px-1 bg-[#363636] w-min justify-end rounded-md no-underline text-white"
				>
					<svg
						width="14px"
						height="14px"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="hover:scale-110 transition-all ease-in-out"
					>
						<path
							d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
							fill="currentColor"
						/>
					</svg>
				</button>
				<div className="h-min w-min rounded-md inline-flex items-center justify-between bg-neutral-800">
					<button
						type="button"
						className="text-white transition duration-200 px-2 hover:scale-125"
						onClick={() => updateCart(cartItem.id, "decrement")}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
							fill="none"
							strokeWidth="1"
							stroke="currentColor"
							className="w-3 lg:w-4 h-3 lg:h-4"
						>
							<path
								d="M12.6667 7.49988H3.33341C3.1566 7.49988 2.98703 7.57012 2.86201 7.69514C2.73699 7.82016 2.66675 7.98973 2.66675 8.16654C2.66675 8.34336 2.73699 8.51292 2.86201 8.63795C2.98703 8.76297 3.1566 8.83321 3.33341 8.83321H12.6667C12.8436 8.83321 13.0131 8.76297 13.1382 8.63795C13.2632 8.51292 13.3334 8.34336 13.3334 8.16654C13.3334 7.98973 13.2632 7.82016 13.1382 7.69514C13.0131 7.57012 12.8436 7.49988 12.6667 7.49988Z"
								fill="currentColor"
							></path>
						</svg>
					</button>
					<span className="text-base text-black bg-white h-full w-full px-3 py-1 lg:py-2 border border-neutral-800">
						{cartItem.purchaseQuantity}
					</span>
					<button
						type="button"
						className="text-white transition duration-200 px-2 hover:scale-125"
						onClick={() => updateCart(cartItem.id, "increment")}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
							fill="none"
							strokeWidth="1"
							stroke="currentColor"
							className="w-3 lg:w-4 h-3 lg:h-4"
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
