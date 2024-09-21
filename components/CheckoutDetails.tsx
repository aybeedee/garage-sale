"use client";

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import validateCart from "@/actions/validateCart";
import { User } from "@supabase/supabase-js";
import { createClient } from "@/utils/supabase/client";
import Loader from "@/components/Loader";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";

export default function CheckoutDetails() {
	const [phoneNumber, setPhoneNumber] = useState<string>("");
	const [user, setUser] = useState<User | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [error, setError] = useState<any>(null);

	const router = useRouter();
	const { cart, setCart, toggleCartOpen, clearCart } = useCart();

	const supabase = createClient();

	const fetchUser = async () => {
		const {
			data: { user },
			error,
		} = await supabase.auth.getUser();
		if (error) {
			throw error;
		}
		setUser(user);
	};

	const loadCart = async () => {
		const { ok, result, error } = await validateCart(cart);
		if (!ok) {
			// error is always != null when ok is false
			if (error!.type !== "SERVER_ERROR") {
				clearCart();
			}
			throw new Error(error!.response);
		}
		if (result) setCart(result);
	};

	const getData = async () => {
		try {
			await Promise.all([fetchUser(), loadCart()]);
		} catch (error) {
			setError(error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		if (!cart || !Object.keys(cart).length) {
			router.push("/products");
			toggleCartOpen(true);
		}
	}, [cart]);

	useEffect(() => {
		getData();
	}, []);

	return (
		<div className="flex flex-row justify-center w-full gap-10">
			{isLoading ? (
				<div className="flex flex-row w-full h-[50vh] items-center justify-center">
					<Loader size={75} />
				</div>
			) : error !== null ? (
				<div className="flex flex-col justify-center items-center gap-2 px-6 h-[50vh]">
					<h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize text-center">
						Oops
					</h1>
					<p className="text-lg text-center">
						An unexpected error occured :/ Try reloading the page.
					</p>
				</div>
			) : (
				<>
					<div className="flex flex-col gap-8 justify-center w-2/5 rounded-xl border border-gray-200 shadow-lg bg-white">
						<h1 className="rounded-t-xl w-full text-white text-center text-3xl font-medium bg-neutral-800 py-4 px-6">
							Shipping
						</h1>
						<div className="flex flex-col gap-4 px-8 pb-8">
							<div className="flex flex-row items-center">
								<label
									className="w-44 text-base mb-2 whitespace-nowrap"
									htmlFor="firstName"
								>
									First Name<span className="text-primaryColor">*</span>
								</label>
								<input
									className="w-full px-4 py-2 text-gray-700 bg-white border rounded-md border-gray-200 focus:border-primaryColor focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-primaryColor/10"
									name="firstName"
									placeholder="First Name"
									type="text"
									required
								/>
							</div>
							<div className="flex flex-row items-center">
								<label
									className="w-44 text-base mb-2 whitespace-nowrap"
									htmlFor="lastName"
								>
									Last Name<span className="text-primaryColor">*</span>
								</label>
								<input
									className="w-full px-4 py-2 text-gray-700 bg-white border rounded-md border-gray-200 focus:border-primaryColor focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-primaryColor/10"
									name="lastName"
									placeholder="Last Name"
									type="text"
									required
								/>
							</div>
							<div className="flex flex-row items-center">
								<label
									className="w-44 text-base mb-2 whitespace-nowrap"
									htmlFor="email"
								>
									Email<span className="text-primaryColor">*</span>
								</label>
								<input
									className="w-full px-4 py-2 text-gray-700 bg-white border rounded-md border-gray-200 focus:border-primaryColor focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-primaryColor/10"
									name="email"
									placeholder="you@example.com"
									type="email"
									required
								/>
							</div>
							<div className="flex flex-row items-center">
								<label
									className="w-44 text-base mb-2 whitespace-nowrap"
									htmlFor="postalCode"
								>
									Postal Code<span className="text-primaryColor">*</span>
								</label>
								<input
									className="w-full px-4 py-2 text-gray-700 bg-white border rounded-md border-gray-200 focus:border-primaryColor focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-primaryColor/10"
									name="postalCode"
									placeholder="44000"
									type="text"
									maxLength={5}
									required
								/>
							</div>
							<div className="flex flex-row items-center">
								<label
									className="w-44 text-base mb-2 whitespace-nowrap"
									htmlFor="addressLine1"
								>
									Address Line 1<span className="text-primaryColor">*</span>
								</label>
								<input
									className="w-full px-4 py-2 text-gray-700 bg-white border rounded-md border-gray-200 focus:border-primaryColor focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-primaryColor/10"
									name="addressLine1"
									placeholder="Your Address"
									type="text"
									required
								/>
							</div>
							<div className="flex flex-row items-center">
								<label
									className="w-44 text-base mb-2 whitespace-nowrap"
									htmlFor="addressLine2"
								>
									Address Line 2
								</label>
								<input
									className="w-full px-4 py-2 text-gray-700 bg-white border rounded-md border-gray-200 focus:border-primaryColor focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-primaryColor/10"
									name="addressLine2"
									placeholder="Optional Address Details"
									type="text"
									required
								/>
							</div>
							<div className="flex flex-row items-center">
								<label
									className="w-44 text-base mb-2 whitespace-nowrap"
									htmlFor="country"
								>
									Country<span className="text-primaryColor">*</span>
								</label>
								<div className="w-full text-gray-700 bg-white border rounded-md border-gray-200">
									<select
										className="w-full px-4 py-2 rounded-md border-transparent border-r-8 cursor-not-allowed focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-primaryColor/10 disabled:bg-gray-200"
										name="country"
										defaultValue="pakistan"
										disabled
										required
									>
										<option value="pakistan">Pakistan</option>
									</select>
								</div>
							</div>
							<div className="flex flex-row items-center">
								<label
									className="w-44 text-base mb-2 whitespace-nowrap"
									htmlFor="phoneNumber"
								>
									Phone Number<span className="text-primaryColor">*</span>
								</label>
								<PhoneInput
									country={"pk"}
									value={phoneNumber}
									onChange={(number) => setPhoneNumber(number)}
									inputStyle={{
										width: "100%",
										color: "#374151",
										backgroundColor: "#FFFFFF",
										border: "1px solid #E2E8F0",
										borderRadius: "0.375rem",
										outline: "none",
										fontSize: "1rem",
										lineHeight: "1.5rem",
										fontWeight: 400,
									}}
								/>
							</div>
						</div>
					</div>
					<div className="px-6 py-4 flex flex-row justify-center w-2/5 rounded-xl border border-gray-200 shadow-lg bg-white">
						<h1 className="w-full text-left text-3xl font-medium">Summary</h1>
					</div>
				</>
			)}
		</div>
	);
}
