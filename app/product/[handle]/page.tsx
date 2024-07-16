"use client";

import { useState, useEffect } from "react";
import { notFound, useRouter } from "next/navigation";
import { sampleProductsList } from "@/utils/constants";
import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";
import { useCart } from "@/context/CartContext";

export default function ProductPage({
	params,
}: {
	params: { handle: string };
}) {
	const product = sampleProductsList.find(
		(product) => product.handle === params.handle
	);

	if (!product) {
		return notFound();
	}

	const [accordionOpen, setAccordionOpen] = useState<boolean>(false);
	const [itemCount, setItemCount] = useState<number>(1);
	const [mainImageIndex, setMainImageIndex] = useState<number>(0);
	const [user, setUser] = useState<User | null>(null);
	const { toggleCartOpen } = useCart();
	// { product_id: count, ... }
	// cartLS: cart local storage
	const [cartLS, setCartLS] = useState<{ [key: string]: number }>(() => {
		let currentValue;
		try {
			currentValue = JSON.parse(localStorage.getItem("cart") || String({}));
		} catch (error) {
			currentValue = {};
		}
		return currentValue;
	});

	const router = useRouter();
	const supabase = createClient();

	const addToCart = () => {
		if (!user) {
			router.push("/login");
		} else {
			console.log("add to cart");
			// todo: add to cart functionality
			// - set cart (and local storage as a consequence)
			// - open cart (shows the item added as cart gets it from local storage)
			setCartLS((prevState) => ({
				...prevState,
				[product.id]: itemCount,
			}));
			toggleCartOpen(true);
		}
	};

	const buyNow = () => {
		if (!user) {
			router.push("/login");
		} else {
			console.log("buy now");
			// todo: buy now functionality
		}
	};

	const fetchUser = async () => {
		try {
			const {
				data: { user },
			} = await supabase.auth.getUser();
			setUser(user);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		fetchUser();
		// add supabase to dependencies array ?
	}, []);

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cartLS));
	}, [cartLS]);

	return (
		<div className="w-full items-center px-2 py-12 bg-white/10 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur 2xl:px-10">
			<div className="flex flex-row justify-center w-[100%] p-4 sm:py-10 sm:px-12 2xl:px-24 rounded-xl border border-gray-200 shadow-lg bg-white max-lg:flex-wrap">
				<div className="flex flex-col-reverse w-full lg:float-left box-border h-full lg:min-w-[55%] lg:flex-row">
					<div className="flex items-center justify-center my-8 gap-4 mt-4 sm:gap-8 sm:mt-8 grow shrink 2xl:grow-0 2xl:shrink-0 lg:my-0 lg:flex-col lg:items-end h-full">
						{product.images.map(
							(imageSrc, index: number) =>
								mainImageIndex !== index && (
									<img
										key={index}
										src={imageSrc}
										className="cursor-pointer object-contain lg:max-2xl:object-fill h-[10vh] max-sm:max-w-[25vw] max-sm:object-fill rounded-xl"
										onClick={() => {
											setMainImageIndex(index);
										}}
									/>
								)
						)}
					</div>

					<div className="flex justify-center lg:justify-start rounded-xl lg:ml-8 grow shrink basis-auto relative box-border h-full">
						<img
							src={product.images[mainImageIndex]}
							className="object-contain h-full sm:max-h-[75vh] rounded-xl"
						/>
					</div>
				</div>

				<div className="flex flex-col ml-0 lg:max-w-[750px] gap-12 lg:ml-8">
					<div className="flex flex-col">
						<p className="mb-1 font-extrabold text-base sm:text-lg bg-gradient-to-r from-primaryColor to-secondaryColor inline-block text-transparent bg-clip-text capitalize">
							NEW
						</p>
						<h1 className="font-semibold text-4xl sm:text-5xl mb-4">
							{product.name}
						</h1>

						<div className="flex justify-between mb-3">
							<h2 className="font-semibold text-2xl sm:text-3xl text-gray-700">
								Rs. {product.price}
							</h2>
							{product.quantity > 0 ? (
								<p className="text-primaryColor text-xl sm:text-2xl font-semibold">
									In Stock
								</p>
							) : (
								<p className="text-primaryColor text-xl sm:text-2xl font-semibold">
									Sold Out
								</p>
							)}
						</div>

						<p className="text-base mb-6 text-neutral-800">
							{product.description}
						</p>

						<div className="rounded-md border border-neutral-200 bg-white">
							<h2 className="mb-0">
								<button
									className={`${
										accordionOpen
											? `[box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
											: `transition-none rounded-b-md`
									} group relative flex w-full items-center rounded-t-md border-0 bg-white px-3 py-2 sm:px-5 sm:py-4 text-left text-base sm:text-lg font-normal text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
									type="button"
									onClick={() => {
										setAccordionOpen(!accordionOpen);
									}}
								>
									Shipping & Returns
									<span
										className={`${
											accordionOpen
												? `rotate-[-180deg] -mr-1`
												: `rotate-0 fill-[#212529]`
										} ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none`}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth="1"
											stroke="currentColor"
											className="h-5 w-5 sm:h-6 sm:w-6"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M19.5 8.25l-7.5 7.5-7.5-7.5"
											/>
										</svg>
									</span>
								</button>
							</h2>
							{accordionOpen && (
								<div className="!visible">
									<div className="px-5 py-4 text-neutral-800">
										We ensure swift processing and dispatch within{" "}
										<strong>1-2 business days</strong> reaching you within{" "}
										<strong>5-7 days</strong>. If you're not completely
										satisfied, our hassle-free return policy allows you to
										initiate returns within <strong>30 days</strong>, with
										exchanges for damaged items accepted within{" "}
										<strong>14 days</strong>.
									</div>
								</div>
							)}
						</div>
					</div>

					<div className="flex flex-col">
						<div className="flex justify-between mb-4">
							<div className="max-sm:min-w-[20%] max-sm:max-w-[20%] max-2xl:min-w-[25%] max-2xl:max-w-[25%]">
								<div className="h-full xs:w-full rounded-md inline-flex items-center justify-between bg-neutral-800">
									<button
										type="button"
										className="text-white transition duration-200 px-2 sm:px-4 hover:scale-125"
										onClick={() => {
											if (itemCount > 1) {
												setItemCount((prevItemCount) => prevItemCount - 1);
											}
										}}
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
										{itemCount}
									</span>
									<button
										type="button"
										className="text-white transition duration-200 px-2 sm:px-4 hover:scale-125"
										onClick={() => {
											if (itemCount < product.quantity) {
												setItemCount((prevItemCount) => prevItemCount + 1);
											}
										}}
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

							<button
								onClick={addToCart}
								className="max-sm:min-w-[50%] max-sm:max-w-[50%] max-2xl:min-w-[55%] max-2xl:max-w-[55%] w-full xl:ml-10 block px-5 text-base sm:text-lg font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-neutral-800 rounded-md hover:bg-neutral-700"
							>
								Add to Cart
							</button>
						</div>

						<button
							onClick={buyNow}
							className="w-full block px-5 py-[7px] sm:py-[11px] text-base sm:text-lg font-medium tracking-wider text-center text-neutral-800 transition-colors duration-300 transform bg-white border border-neutral-800 rounded-md hover:text-white hover:bg-neutral-800"
						>
							Buy Now
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
