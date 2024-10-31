"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import { Tables } from "@/utils/database.types";
import { PopulatedOrder } from "@/utils/app.types";

export default function Admin() {
	// TODO: there should be an enum for this type
	const [filter, setFilter] = useState<"ALL" | "PENDING" | "PROCESSING">("ALL");
	const [orders, setOrders] = useState<PopulatedOrder[] | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [error, setError] = useState<any>(null);

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
			);

		if (filter === "PENDING" || filter === "PROCESSING") {
			query.eq("status", filter);
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
			// not firing these requests together since want to redirect away before fetchOrders if user not fetched/is not admin
			await validateAdmin();
			await fetchOrders();
		} catch (error) {
			setError(error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<div className="px-5 py-12 sm:px-0 sm:py-28 w-full flex flex-col items-center gap-2 justify-center bg-white/10 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur">
			<h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize">
				ADMIN PORTAL
			</h1>
			<p className="text-lg">
				This webpage is currently under construction. Thank you for your
				patience!
			</p>
		</div>
	);
}
