"use client";

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";

export default function CheckoutDetails() {
	const [phoneNumber, setPhoneNumber] = useState<string>("");

	const router = useRouter();
	const { cart, toggleCartOpen } = useCart();

	if (cart === null || !Object.keys(cart).length) {
		router.push("/products");
		toggleCartOpen(true);
	}

	return (
		<div className="flex flex-row justify-center w-full gap-10">
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
		</div>
	);
}
