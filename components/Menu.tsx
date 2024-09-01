"use client";

import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import MenuIcon from "./MenuIcon";
import Link from "next/link";
import { categories as categories2 } from "@/utils/constants";
import { Category } from "@/utils/app.types";
import { createClient } from "@/utils/supabase/client";
import { Tables } from "@/utils/database.types";

export default function Menu() {
	const [categories, setCategories] = useState<Tables<"category">[] | null>(
		null
	);
	const [error, setError] = useState<any>(null);
	const [isOpen, setIsOpen] = useState(false);

	const supabase = createClient();

	const openMenu = () => setIsOpen(true);
	const closeMenu = () => setIsOpen(false);

	const fetchCategories = async () => {
		try {
			const { data, error } = await supabase.from("category").select("*");
			if (error) {
				setError(error);
				return;
			}
			console.log(data);
			setCategories(data);
		} catch (error) {
			setError(error);
		}
	};

	useEffect(() => {
		fetchCategories();
	}, [supabase]);

	return (
		<>
			<button
				onClick={openMenu}
				className="py-2 px-2 rounded-md no-underline bg-inherit hover:text-white border-black hover:bg-[#363636] border text-black"
			>
				<MenuIcon />
			</button>
			<Transition show={isOpen}>
				<Dialog onClose={closeMenu} className="relative z-50">
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
						enterFrom="-translate-x-full"
						enterTo="translate-x-0"
						leave="transition-all ease-in-out duration-200"
						leaveFrom="translate-x-0"
						leaveTo="-translate-x-full"
					>
						<Dialog.Panel className="overflow-auto max-w-sm fixed bottom-0 left-0 right-0 top-0 flex h-full w-full flex-col bg-white p-6">
							<div className="flex justify-end">
								<button
									onClick={closeMenu}
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
							<ul className="flex w-full flex-col">
								{error !== null ? (
									<div className="flex flex-col justify-center items-center gap-2">
										<h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize text-center">
											Oops
										</h1>
										<p className="text-lg text-center">
											An unexpected error occured :/ Try reloading the page.
										</p>
									</div>
								) : categories?.length ? (
									<>
										{categories.map(
											(category: Tables<"category">, index: number) => (
												<li key={index}>
													<div className="py-4 text-xl text-black transition-colors hover:text-neutral-500">
														<Link
															href={`/products/${category.path}`}
															onClick={closeMenu}
														>
															{category.name}
														</Link>
													</div>
													<hr className="h-[0.5px] my-1 dark:bg-gray-700"></hr>
												</li>
											)
										)}
									</>
								) : (
									<div className="flex flex-col justify-center items-center gap-2">
										<h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize text-center">
											No Categories Found
										</h1>
										<p className="text-lg text-center">
											Could not fetch any categories. Contact support for more
											information.
										</p>
									</div>
								)}
							</ul>
							<div className="mt-auto text-black transition-colors duration-300 hover:text-primaryColor">
								<svg
									width="24px"
									height="24px"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
										fill="currentColor"
									/>
									<path
										d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
										fill="currentColor"
									/>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
										fill="currentColor"
									/>
								</svg>
							</div>
						</Dialog.Panel>
					</Transition.Child>
				</Dialog>
			</Transition>
		</>
	);
}
