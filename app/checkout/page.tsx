import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import CheckoutDetails from "@/components/CheckoutDetails";

export default async function Checkout() {
	const cookieStore = cookies();
	const supabase = createClient(cookieStore);

	const {
		data: { user },
	} = await supabase.auth.getUser();

	if (!user) {
		return redirect("/login");
	}

	// const testThing = async () => {
	// 	try {
	// 		const { data, error } = await supabase.auth.updateUser({
	// 			data: { first_name: "abdullah" },
	// 		});
	// 		console.log(data);
	// 	} catch (err) {
	// 		console.error(err);
	// 	}
	// };

	return (
		<div className="p-12 w-full flex flex-col gap-10 justify-center items-center bg-white/10 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur">
			<div className="container px-6 mx-auto">
				<h1 className="text-4xl font-bold text-center text-gray-800 lg:text-5xl">
					Checkout
				</h1>
				{/* <button onClick={testThing}>Test</button> */}
				<div className="flex justify-center mx-auto mt-6">
					<span className="inline-block w-40 h-1 bg-gradient-to-r from-primaryColor to-secondaryColor rounded-full"></span>
					<span className="inline-block w-3 h-1 mx-1 bg-primaryColor rounded-full"></span>
					<span className="inline-block w-1 h-1 bg-primaryColor rounded-full"></span>
				</div>
			</div>
			<CheckoutDetails />
		</div>
	);
}
