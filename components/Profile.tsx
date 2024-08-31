import ProfileIcon from "./ProfileIcon";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { cookies } from "next/headers";
import ProfileMenu from "./ProfileMenu";
import { redirect } from "next/navigation";

export default async function Profile() {
	const cookieStore = cookies();
	const supabase = createClient(cookieStore);

	const {
		data: { user },
	} = await supabase.auth.getUser();

	const signOut = async () => {
		"use server";

		const cookieStore = cookies();
		const supabase = createClient(cookieStore);
		await supabase.auth.signOut();
		return redirect("/login");
	};

	return user ? (
		<ProfileMenu email={user?.email} signOut={signOut} />
	) : (
		<Link
			href="/login"
			className="py-2 px-2 rounded-md no-underline bg-inherit hover:text-white border-black hover:bg-[#363636] border text-black"
		>
			<ProfileIcon />
		</Link>
	);
}
