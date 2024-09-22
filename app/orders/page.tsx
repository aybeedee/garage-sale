import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import OrderCard from "@/components/OrderCard";
import { PopulatedOrder } from "@/utils/app.types";

export default async function Orders() {
	let orders: PopulatedOrder[] | null = null;
	let error: any = null;

	try {
		const cookieStore = cookies();
		const supabase = createClient(cookieStore);

		const {
			data: { user },
			error: authError,
		} = await supabase.auth.getUser();
		if (authError || !user) {
			return redirect("/login");
		}

		// alias:join_table
		// nested join by wrapping lower level join with the higher one
		const { data, error: ordersError } = await supabase
			.from("order")
			.select(
				"*, order_items:order_item!inner(*, product_details:product!inner(*))"
			)
			.eq("user_id", user.id);
		if (ordersError) {
			throw ordersError;
		}
		orders = data;
	} catch (catchError) {
		error = catchError;
	}

	return (
		<>
			{error !== null ? (
				<div className="flex flex-col justify-center items-center gap-2 px-6 h-[50vh]">
					<h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize text-center">
						Oops
					</h1>
					<p className="text-lg text-center">
						An unexpected error occured :/ Try reloading the page.
					</p>
				</div>
			) : orders?.length ? (
				<div className="flex flex-col justify-center items-center w-full gap-4">
					{orders.map((order) => (
						<OrderCard key={order.id} order={order} />
					))}
				</div>
			) : (
				<div className="flex flex-col justify-center items-center gap-2 px-6 h-[50vh]">
					<h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize text-center">
						No Orders Found
					</h1>
					<p className="text-lg text-center">
						Seems like you haven't placed any orders yet.
					</p>
				</div>
			)}
		</>
	);
}
