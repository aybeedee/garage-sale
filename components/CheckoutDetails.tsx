"use client";

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import validateCart from "@/actions/validateCart";
import { User } from "@supabase/supabase-js";
import { createClient } from "@/utils/supabase/client";
import { deliveryCharges } from "@/utils/constants";
import Loader from "@/components/Loader";
import CheckoutItemCard from "@/components/CheckoutItemCard";
import "react-phone-input-2/lib/style.css";
import PhoneInput, { CountryData } from "react-phone-input-2";
import parsePhoneNumber, { CountryCode } from "libphonenumber-js";
import completeOrder from "@/actions/completeOrder";
import { Tables } from "@/utils/database.types";
import TickIcon from "./TickIcon";
import Link from "next/link";

export default function CheckoutDetails() {
	const firstNameRef = useRef<HTMLInputElement>(null);
	const lastNameRef = useRef<HTMLInputElement>(null);
	const postalCodeRef = useRef<HTMLInputElement>(null);
	const addressLine1Ref = useRef<HTMLInputElement>(null);
	const addressLine2Ref = useRef<HTMLInputElement>(null);
	const countryRef = useRef<HTMLSelectElement>(null);
	const [phoneNumber, setPhoneNumber] = useState<string>("");
	const [phoneValid, setPhoneValid] = useState<boolean>(true);
	const [user, setUser] = useState<User | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [isOrderComplete, setIsOrderComplete] = useState<boolean>(false);
	const [order, setOrder] = useState<Tables<"order"> | null>(null);
	const [error, setError] = useState<any>(null);

	const router = useRouter();
	const { cart, setCart, toggleCartOpen, clearCart } = useCart();

	const supabase = createClient();

	const isPhoneValid = (phone: string, country: CountryData) => {
		const { countryCode: countryCodePhoneInput, dialCode } = country;
		if (!countryCodePhoneInput || !dialCode) return true;

		const countryCode = countryCodePhoneInput.toUpperCase() as CountryCode;
		const phoneWithoutDialCode = phone.replace(dialCode, "");
		const phoneNumber = parsePhoneNumber(phoneWithoutDialCode, countryCode);
		return phoneNumber?.isValid();
	};

	const fetchUser = async () => {
		const {
			data: { user },
			error,
		} = await supabase.auth.getUser();
		if (error || !user) {
			router.push("/login");
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
			// not firing these requests together since want to redirect away before loadCart if user not fetched
			await fetchUser();
			await loadCart();
		} catch (error) {
			setError(error);
		} finally {
			setIsLoading(false);
		}
	};

	const handleCompleteOrder = async (
		event: React.FormEvent<HTMLFormElement>
	) => {
		event.preventDefault();

		if (!phoneNumber.length) {
			setPhoneValid(false);
			return;
		}
		if (
			!firstNameRef.current?.value ||
			!lastNameRef.current?.value ||
			!postalCodeRef.current?.value ||
			!addressLine1Ref.current?.value ||
			!addressLine2Ref.current ||
			!countryRef.current?.value
		) {
			return;
		}

		setIsLoading(true);
		try {
			const { ok, result, error } = await completeOrder(cart, {
				firstName: firstNameRef.current.value,
				lastName: lastNameRef.current.value,
				phoneNumber: phoneNumber,
				addressLine1: addressLine1Ref.current.value,
				addressLine2: addressLine2Ref.current.value,
				country: countryRef.current.value,
				postalCode: postalCodeRef.current.value,
			});
			if (!ok) {
				// error is always != null when ok is false
				if (error!.type !== "SERVER_ERROR") {
					clearCart();
				}
				throw new Error(error!.response);
			}

			if (result) {
				// this in turn will trigger isOrderComplete's useEffect below to clearCart; did this instead of inline after it to avoid risking batched state updates not doing it synchronously
				setIsOrderComplete(true);
				setOrder(result);
			}
		} catch (error) {
			setError(error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		if (isOrderComplete) clearCart();
	}, [isOrderComplete]);

	useEffect(() => {
		if ((!cart || !Object.keys(cart).length) && !isOrderComplete) {
			router.push("/products");
			toggleCartOpen(true);
		}
	}, [cart]);

	useEffect(() => {
		getData();
	}, []);

	return (
		<div className="flex flex-col md:flex-row justify-center items-center md:items-start w-full gap-4 lg:gap-10">
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
			) : isOrderComplete ? (
				<div className="flex flex-col items-center justify-center w-full md:w-3/5 lg:w-1/2 xl:w-2/5 pt-4 pb-10 rounded-xl border border-gray-200 shadow-lg bg-white">
					<TickIcon />
					<div className="flex flex-col items-center justify-center gap-4 mb-6">
						<h1 className="text-2xl sm:text-3xl font-bold">Order Completed</h1>
						<p className="text-sm sm:text-base px-8 lg:px-10 font-light text-center">
							Your order totalling{" "}
							<span className="font-medium">Rs. {order?.total}</span> {"("}Cash
							on Delivery{")"} will be on its way shortly. We'll get in touch
							with you via your <span className="font-medium">email</span>{" "}
							and/or <span className="font-medium">phone number</span>.
						</p>
						<p className="font-light">
							Order ID: <span className="font-medium">{order?.id}</span>
						</p>
					</div>
					<div className="flex flex-row gap-2">
						<Link
							href="/orders"
							className="block px-8 sm:px-10 py-2.5 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-neutral-800 rounded-lg focus:outline-none hover:bg-neutral-700 focus:ring focus:ring-neutral-300 focus:ring-opacity-80 md:w-auto"
						>
							My Orders
						</Link>
						<Link
							href="/products"
							className="block px-8 sm:px-10 py-2.5 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-neutral-800 rounded-lg focus:outline-none hover:bg-neutral-700 focus:ring focus:ring-neutral-300 focus:ring-opacity-80 md:w-auto"
						>
							Shop More
						</Link>
					</div>
				</div>
			) : (
				<>
					<div className="flex flex-col gap-8 w-full sm:w-4/5 md:w-1/2 xl:w-2/5 h-min rounded-xl border border-gray-200 shadow-lg bg-white">
						<h1 className="rounded-t-xl w-full text-white text-center text-2xl lg:text-3xl font-medium bg-neutral-800 py-4">
							Shipping
						</h1>
						<form
							id="shippingDetailsForm"
							className="flex flex-col gap-4 px-4 lg:px-8 pb-8"
							onSubmit={handleCompleteOrder}
						>
							<div className="flex flex-row items-center">
								<label className="w-44 whitespace-nowrap" htmlFor="firstName">
									First Name<span className="text-primaryColor">*</span>
								</label>
								<input
									className="w-full px-4 py-2 text-sm lg:text-base text-gray-700 bg-white border rounded-md border-gray-200 focus:border-primaryColor focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-primaryColor/10"
									name="firstName"
									placeholder="First Name"
									type="text"
									required
									ref={firstNameRef}
								/>
							</div>
							<div className="flex flex-row items-center">
								<label className="w-44 whitespace-nowrap" htmlFor="lastName">
									Last Name<span className="text-primaryColor">*</span>
								</label>
								<input
									className="w-full px-4 py-2 text-sm lg:text-base text-gray-700 bg-white border rounded-md border-gray-200 focus:border-primaryColor focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-primaryColor/10"
									name="lastName"
									placeholder="Last Name"
									type="text"
									required
									ref={lastNameRef}
								/>
							</div>
							<div className="flex flex-row items-center">
								<label className="w-44 whitespace-nowrap" htmlFor="email">
									Email<span className="text-primaryColor">*</span>
								</label>
								<input
									className="w-full px-4 py-2 text-sm lg:text-base text-gray-700 bg-white border rounded-md border-gray-200 focus:border-primaryColor focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-primaryColor/10 cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75"
									name="email"
									placeholder="you@example.com"
									type="email"
									required
									value={user?.email}
									disabled
								/>
							</div>
							<div className="flex flex-row items-center">
								<label className="w-44 whitespace-nowrap" htmlFor="postalCode">
									Postal Code<span className="text-primaryColor">*</span>
								</label>
								<input
									className="w-full px-4 py-2 text-sm lg:text-base text-gray-700 bg-white border rounded-md border-gray-200 focus:border-primaryColor focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-primaryColor/10"
									name="postalCode"
									placeholder="44000"
									type="text"
									maxLength={5}
									required
									ref={postalCodeRef}
								/>
							</div>
							<div className="flex flex-row items-center">
								<label
									className="w-44 whitespace-nowrap"
									htmlFor="addressLine1"
								>
									Address Line 1<span className="text-primaryColor">*</span>
								</label>
								<input
									className="w-full px-4 py-2 text-sm lg:text-base text-gray-700 bg-white border rounded-md border-gray-200 focus:border-primaryColor focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-primaryColor/10"
									name="addressLine1"
									placeholder="Your Address"
									type="text"
									required
									ref={addressLine1Ref}
								/>
							</div>
							<div className="flex flex-row items-center">
								<label
									className="w-44 whitespace-nowrap"
									htmlFor="addressLine2"
								>
									Address Line 2
								</label>
								<input
									className="w-full px-4 py-2 text-sm lg:text-base text-gray-700 bg-white border rounded-md border-gray-200 focus:border-primaryColor focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-primaryColor/10"
									name="addressLine2"
									placeholder="Optional Address Details"
									type="text"
									ref={addressLine2Ref}
								/>
							</div>
							<div className="flex flex-row items-center">
								<label className="w-44 whitespace-nowrap" htmlFor="country">
									Country<span className="text-primaryColor">*</span>
								</label>
								<div className="w-full text-gray-700 bg-white border rounded-md border-gray-200">
									<select
										className="w-full px-4 py-2 text-sm lg:text-base rounded-md border-transparent border-r-8 cursor-not-allowed focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-primaryColor/10 disabled:bg-gray-200"
										name="country"
										defaultValue="PK"
										disabled
										required
										ref={countryRef}
									>
										<option value="PK">Pakistan</option>
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
									onChange={(value, country: CountryData) => {
										if (isPhoneValid(value, country)) {
											setPhoneValid(true);
										} else {
											setPhoneValid(false);
										}
										setPhoneNumber(value);
									}}
									isValid={phoneValid}
									inputStyle={{
										width: "100%",
										color: "#374151",
										borderRadius: "0.375rem",
										outline: "none",
										fontSize: "1rem",
										lineHeight: "1.5rem",
										fontWeight: 400,
										...(phoneValid
											? { border: "1px solid #E2E8F0" }
											: { border: "1px solid #BD2828" }),
									}}
									buttonStyle={{
										...(phoneValid
											? { border: "1px solid #E2E8F0" }
											: { border: "1px solid #BD2828" }),
									}}
									dropdownStyle={{
										maxHeight: "10rem",
									}}
								/>
							</div>
						</form>
					</div>
					<div className="flex flex-col gap-8 w-full sm:w-4/5 md:w-1/2 xl:w-2/5 rounded-xl border border-gray-200 shadow-lg bg-white">
						<h1 className="rounded-t-xl w-full text-center text-2xl lg:text-3xl font-medium py-4">
							Summary
						</h1>
						<div className="flex flex-col justify-between h-full pb-8 px-4 lg:px-8 gap-8">
							<div className="flex flex-col gap-4 max-h-[75vh] overflow-y-auto px-2">
								{Object.entries(cart).map(([productId, cartItem]) => (
									<CheckoutItemCard cartItem={cartItem} key={productId} />
								))}
							</div>
							<div className="flex flex-col gap-2">
								<div className="flex flex-row items-center justify-between">
									<p>Delivery Charges</p>
									<p className="font-bold">Rs. {deliveryCharges}</p>
								</div>
								<div className="flex flex-row items-center justify-between">
									<p>Grand Total</p>
									<p className="font-bold">
										Rs.{" "}
										{Object.values(cart).reduce(
											(sum, product) =>
												sum + product.price * product.purchaseQuantity,
											0
										) + deliveryCharges}
									</p>
								</div>
								<div className="flex flex-row items-center gap-4">
									<label
										className="w-44 whitespace-nowrap"
										htmlFor="paymentMethod"
									>
										Payment Method<span className="text-primaryColor">*</span>
									</label>
									<div className="w-full text-gray-700 bg-white border rounded-md border-gray-200">
										<select
											className="w-full px-4 py-2 text-sm lg:text-base rounded-md border-transparent border-r-8 cursor-not-allowed focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-primaryColor/10 disabled:bg-gray-200"
											name="paymentMethod"
											defaultValue="cashOnDelivery"
											disabled
											required
										>
											<option value="cashOnDelivery">Cash on Delivery</option>
										</select>
									</div>
								</div>
								<p className="text-sm lg:text-base">
									Note: We ensure swift processing and dispatch within{" "}
									<strong>1-2 business days</strong> reaching you within{" "}
									<strong>5-7 days</strong>.
								</p>
							</div>
							<button
								form="shippingDetailsForm"
								type="submit"
								className="block py-3 font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-neutral-800 rounded-md hover:bg-neutral-700"
							>
								Complete Order
							</button>
						</div>
					</div>
				</>
			)}
		</div>
	);
}
