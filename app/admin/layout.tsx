export default function AdminLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="px-5 py-12 sm:py-10 w-full flex flex-col items-center gap-8 bg-white/10 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur">
			<div className="container px-6 mx-auto">
				<h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 lg:text-5xl">
					Orders Received
				</h1>
				<div className="flex justify-center mx-auto mt-6">
					<span className="inline-block w-40 h-1 bg-gradient-to-r from-primaryColor to-secondaryColor rounded-full"></span>
					<span className="inline-block w-3 h-1 mx-1 bg-primaryColor rounded-full"></span>
					<span className="inline-block w-1 h-1 bg-primaryColor rounded-full"></span>
				</div>
			</div>
			{children}
		</div>
	);
}
