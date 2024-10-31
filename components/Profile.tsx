import ProfileIcon from "./ProfileIcon";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { cookies } from "next/headers";
import ProfileMenu from "./ProfileMenu";
import { redirect } from "next/navigation";
import { Tables } from "@/utils/database.types";

export default async function Profile() {
	let user: Tables<"user"> | null = null;
	const cookieStore = cookies();
	const supabase = createClient(cookieStore);

	const {
		data: { user: authUser },
	} = await supabase.auth.getUser();

	// TODO: at this point, just create a context or store for user
	if (authUser) {
		const { data: dbUser } = await supabase
			.from("user")
			.select("*")
			.eq("id", authUser.id);
		if (dbUser) {
			user = dbUser[0];
		}
	}

	console.log(user);

	const signOut = async () => {
		"use server";

		const cookieStore = cookies();
		const supabase = createClient(cookieStore);
		await supabase.auth.signOut();
		return redirect("/login");
	};

	return user ? (
		<ProfileMenu user={user} signOut={signOut} />
	) : (
		<Link
			href="/login"
			className="py-2 px-2 rounded-md no-underline bg-inherit hover:text-white border-black hover:bg-[#363636] border text-black"
		>
			<ProfileIcon />
		</Link>
	);
}
