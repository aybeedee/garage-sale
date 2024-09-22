export default function OrdersLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="px-5 py-12 sm:py-10 w-full flex flex-col items-center gap-8 bg-white/10 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur">
			<h1 className="text-2xl font-semibold text-gray-700 capitalize">
				YOUR ORDERS
			</h1>
			{children}
		</div>
	);
}
