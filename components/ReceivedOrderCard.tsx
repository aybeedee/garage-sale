"use client";

import { PopulatedOrder } from "@/utils/app.types";
import OrderItem from "./OrderItem";
import { useState } from "react";
import updateOrderStatus from "@/actions/updateOrderStatus";
import { Database } from "@/utils/database.types";
import { useRouter } from "next/navigation";

export default function ReceivedOrderCard({
	order,
}: {
	order: PopulatedOrder;
}) {
	const [showDetails, setShowDetails] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [error, setError] = useState<any>(null);

	const router = useRouter();

	const handleUpdateOrder = async (
		status: Database["public"]["Enums"]["order_status"]
	) => {
		setIsLoading(true);
		try {
			const { ok, result, error } = await updateOrderStatus(
				status,
				order.id,
				order.order_items
			);
			if (!ok) {
				throw new Error(error!.response);
			}

			if (result) {
				// TODO: terrible
				router.refresh();
			}
		} catch (error) {
			setError(error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="flex flex-col w-full lg:w-9/12 p-6 gap-4 rounded-xl border border-gray-200 shadow-lg bg-white">
			<div className="flex flex-col sm:flex-row justify-between items-center text-start w-full">
				<div className="flex flex-col w-full whitespace-nowrap">
					<p className="font-medium">
						Order ID:{" "}
						<span className="font-light text-sm sm:text-base">{order.id}</span>
					</p>
					<p className="font-medium">
						Name:{" "}
						<span className="font-light">{`${order.first_name} ${order.last_name}`}</span>
					</p>
					<p className="font-medium">
						Status: <span className="font-light">{order.status}</span>
					</p>
				</div>
				<div className="flex flex-col whitespace-nowrap w-full sm:w-fit">
					<p className="font-medium">
						Ordered At:{" "}
						<span className="font-light">
							{new Date(order.created_at).toLocaleString()}
						</span>
					</p>
					<p className="font-medium">
						Order Total: <span className="font-light">Rs. {order.total}</span>
					</p>
					<p className="font-medium">
						Number of Products:{" "}
						<span className="font-light">{order.item_count}</span>
					</p>
				</div>
			</div>
			<div className="flex flex-row w-full justify-end">
				{order.status === "PENDING" ? (
					<button
						onClick={() => handleUpdateOrder("PROCESSING")}
						className={`${isLoading && "disabled"} w-full sm:w-min whitespace-nowrap px-6 py-2.5 text-sm font-medium text-center text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-100 focus:ring-opacity-80`}
					>
						Confirm Order
					</button>
				) : order.status === "PROCESSING" ? (
					<div className="flex flex-row gap-4 w-full justify-end">
						<button
							onClick={() => handleUpdateOrder("SHIPPED")}
							className={`${isLoading && "disabled"} w-full sm:w-min whitespace-nowrap px-6 py-2.5 text-sm font-medium text-center text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-100 focus:ring-opacity-80`}
						>
							Mark as Shipped
						</button>
						<button
							onClick={() => handleUpdateOrder("DELIVERED")}
							className={`${isLoading && "disabled"} w-full sm:w-min whitespace-nowrap px-6 py-2.5 text-sm font-medium text-center text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-100 focus:ring-opacity-80`}
						>
							Mark as Delivered
						</button>
					</div>
				) : (
					<></>
				)}
			</div>
			<div className="w-full">
				{error && (
					<p className="text-red-500 text-center">
						An unexpected error occured. Reload the page or try again.
					</p>
				)}
			</div>
			<div className="border-t border-neutral-400">
				<h2>
					<button
						className={`${
							showDetails ? `` : `transition-none rounded-b-md`
						} relative flex w-full text-primaryColor items-center rounded-t-md py-2 sm:py-4 text-left text-base sm:text-lg transition focus:outline-none`}
						type="button"
						onClick={() => {
							setShowDetails(!showDetails);
						}}
					>
						Show Details
						<span
							className={`${
								showDetails
									? `rotate-[-180deg] -mr-1`
									: `rotate-0 fill-[#212529]`
							} text-black ml-auto h-5 w-5 shrink-0 transition-transform duration-200 ease-in-out motion-reduce:transition-none`}
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
				{showDetails && (
					<div className="flex flex-col">
						<p className="font-medium">
							Address:{" "}
							<span className="font-light">{`${order.address_line_1} ${order.address_line_2} ${order.country} ${order.postal_code}`}</span>
						</p>
						<p className="font-medium">
							Phone Number:{" "}
							<span className="font-light">{order.phone_number}</span>
						</p>
						<div className="flex flex-col gap-2">
							<p className="font-medium">Products:</p>
							<div className="flex flex-col">
								{order.order_items.map((orderItem) => (
									<OrderItem key={orderItem.product_id} orderItem={orderItem} />
								))}
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
