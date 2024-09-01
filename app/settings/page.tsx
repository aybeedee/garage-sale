import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Settings() {
	const cookieStore = cookies();
	const supabase = createClient(cookieStore);

	const {
		data: { user },
	} = await supabase.auth.getUser();

	if (!user) {
		return redirect("/login");
	}

	return (
		<div className="px-5 py-12 sm:px-0 sm:py-28 w-full flex flex-col items-center gap-2 justify-center bg-white/10 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur">
			<h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize">
				SETTINGS
			</h1>
			<p className="text-lg">
				Webpage is currently under construction. Thank you for your patience!
			</p>
		</div>
	);
}
