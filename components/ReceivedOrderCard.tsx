import { PopulatedOrder } from "@/utils/app.types";
import OrderItem from "./OrderItem";
import { useState } from "react";

export default function ReceivedOrderCard({
	order,
}: {
	order: PopulatedOrder;
}) {
	const [showDetails, setShowDetails] = useState<boolean>(false);

	return (
		<div className="flex flex-col w-full lg:w-9/12 p-6 gap-4 rounded-xl border border-gray-200 shadow-lg bg-white">
			<div className="flex flex-col sm:flex-row justify-between items-center text-start w-full">
				<div className="flex flex-col w-full whitespace-nowrap">
					<p className="font-medium">
						Order ID: <span className="font-light">{order.id}</span>
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
