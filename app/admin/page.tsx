"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import { PopulatedOrder } from "@/utils/app.types";
import ReceivedOrderCard from "@/components/ReceivedOrderCard";
import Loader from "@/components/Loader";

export default function Admin() {
	// TODO: there should be an enum for this type
	const [filter, setFilter] = useState<"ALL" | "PENDING" | "PROCESSING">("ALL");
	const [orders, setOrders] = useState<PopulatedOrder[] | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [error, setError] = useState<any>(null);
	const [isFirstRender, setIsFirstRender] = useState<boolean>(true);

	const router = useRouter();
	const supabase = createClient();

	const validateAdmin = async () => {
		const {
			data: { user: authUser },
			error,
		} = await supabase.auth.getUser();
		if (error || !authUser) {
			router.push("/login");
		}
		if (authUser) {
			const { data: dbUser } = await supabase
				.from("user")
				.select("*")
				.eq("id", authUser.id);
			if (!dbUser?.length || !dbUser[0].is_admin) {
				router.push("/");
			}
		}
	};

	const fetchOrders = async () => {
		// alias:join_table
		// nested join by wrapping lower level join with the higher one
		const query = supabase
			.from("order")
			.select(
				"*, order_items:order_item!inner(*, product_details:product!inner(*))"
			)
			.order("created_at", { ascending: false });

		if (filter === "PENDING") {
			query.eq("status", filter);
		} else if (filter === "PROCESSING") {
			// warra syntax, surely there's a better way to do this?
			query.or("status.eq.PROCESSING,status.eq.SHIPPED");
		}

		const { data, error } = await query;
		if (error) {
			setError(error);
			return;
		}
		setOrders(data);
		console.log(data);
	};

	const getData = async () => {
		try {
			if (isFirstRender) {
				await validateAdmin();
				setIsFirstRender(false);
			}
			await fetchOrders();
		} catch (error) {
			setError(error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		getData();
	}, [filter]);

	return (
		<>
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
				<div className="flex flex-col w-full gap-4">
					<div className="flex flex-row justify-center gap-2">
						{
							// TODO: terrible
							["ALL", "PENDING", "PROCESSING"].map((status, index) => (
								<button
									key={index}
									className={`px-5 py-2 font-medium text-center border border-neutral-800 rounded-md transition-colors duration-300 transform ${status === filter ? "text-white bg-neutral-800" : "bg-white hover:bg-neutral-100"}`}
									onClick={() => {
										if (status !== filter) {
											// TODO: ...
											setFilter(status as "ALL" | "PENDING" | "PROCESSING");
										}
									}}
								>
									{status}
								</button>
							))
						}
					</div>
					{orders?.length ? (
						<div className="flex flex-col justify-center items-center w-full gap-4">
							{orders.map((order) => (
								<ReceivedOrderCard key={order.id} order={order} />
							))}
						</div>
					) : (
						<div className="flex flex-col justify-center items-center gap-2 px-6 h-[50vh]">
							<h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize text-center">
								No Received Orders Found
							</h1>
							<p className="text-lg text-center">
								Seems like there aren't any received orders to show. Try
								changing the filter maybe?
							</p>
						</div>
					)}
				</div>
			)}
		</>
	);
}
