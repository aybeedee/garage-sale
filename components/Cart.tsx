"use client";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import CartIcon from "./CartIcon";
import { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

export default function Cart({ user }: { user: User | null }) {
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();

	const openCart = () => {
		if (!user) {
			router.push("/login");
		} else {
			setIsOpen(true);
		}
	};

	const closeCart = () => setIsOpen(false);

	return (
		<>
			<button
				onClick={openCart}
				className="py-2 px-2 rounded-md no-underline bg-inherit hover:text-white border-black hover:bg-[#363636] border text-black"
			>
				<CartIcon />
			</button>
			<Transition show={isOpen}>
				<Dialog onClose={closeCart} className="relative z-50">
					<Transition.Child
						as={Fragment}
						enter="transition-all ease-in-out duration-300"
						enterFrom="opacity-0 backdrop-blur-none"
						enterTo="opacity-100 backdrop-blur-[1px]"
						leave="transition-all ease-in-out duration-200"
						leaveFrom="opacity-100 backdrop-blur-[1px]"
						leaveTo="opacity-0 backdrop-blur-none"
					>
						<div className="fixed inset-0 bg-black/10" />
					</Transition.Child>
					<Transition.Child
						as={Fragment}
						enter="transition-all ease-in-out duration-300"
						enterFrom="translate-x-full"
						enterTo="translate-x-0"
						leave="transition-all ease-in-out duration-200"
						leaveFrom="translate-x-0"
						leaveTo="translate-x-full"
					>
						<Dialog.Panel className="overflow-auto max-w-sm fixed bottom-0 right-0 top-0 flex h-full w-full flex-col bg-white p-6">
							<div>
								<button
									onClick={closeCart}
									className="py-2 px-2 mb-4 bg-inherit justify-center rounded-md no-underline border border-black text-black hover:text-white hover:bg-[#363636]"
								>
									<svg
										width="20px"
										height="20px"
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
							</div>
						</Dialog.Panel>
					</Transition.Child>
				</Dialog>
			</Transition>
		</>
	);
}
