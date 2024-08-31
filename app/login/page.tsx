import { headers, cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Login({
	searchParams,
}: {
	searchParams: { message: string };
}) {
	const cookieStore = cookies();
	const supabase = createClient(cookieStore);

	const {
		data: { user },
	} = await supabase.auth.getUser();

	if (user) {
		redirect("/");
	}

	const signIn = async (formData: FormData) => {
		"use server";

		const email = formData.get("email") as string;
		const password = formData.get("password") as string;
		const cookieStore = cookies();
		const supabase = createClient(cookieStore);

		const { error } = await supabase.auth.signInWithPassword({
			email,
			password,
		});

		if (error) {
			return redirect("/login?message=Could not authenticate user");
		}

		return redirect("/?message=signed-in");
	};

	const signUp = async (formData: FormData) => {
		"use server";

		const origin = headers().get("origin");
		const email = formData.get("email") as string;
		const password = formData.get("password") as string;
		const cookieStore = cookies();
		const supabase = createClient(cookieStore);

		const { error } = await supabase.auth.signUp({
			email,
			password,
			options: {
				emailRedirectTo: `${origin}/auth/callback`,
				data: {
					first_name: null,
					last_name: null,
					phone_number: null,
					address_line_1: null,
					address_line_2: null,
					country: null,
					postal_code: null,
				},
			},
		});

		if (error) {
			return redirect("/login?message=Could not sign up user");
		}

		return redirect("/login?message=Check email to continue sign in process");
	};

	return (
		<div className="px-5 py-12 sm:px-0 sm:py-28 w-full flex justify-center bg-white/10 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur">
			<form
				className="animate-in flex flex-col px-7 pt-8 pb-12 justify-center w-full max-w-md rounded-xl border border-gray-200 shadow-lg bg-white"
				action={signIn}
			>
				<p className="w-full text-center text-3xl font-semibold tracking-tight mb-7">
					Your Account
				</p>

				<label className="text-base font-medium mb-2" htmlFor="email">
					Email
				</label>
				<input
					className="px-4 py-2 mb-5 text-gray-700 bg-white border rounded-md border-gray-200 focus:border-primaryColor focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-primaryColor/10"
					name="email"
					placeholder="you@example.com"
					type="email"
					required
				/>

				<label className="text-base font-medium mb-2" htmlFor="password">
					Password
				</label>
				<input
					className="px-4 py-2 mb-9 text-gray-700 bg-white border rounded-md border-gray-200 focus:border-primaryColor focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-primaryColor/10"
					type="password"
					name="password"
					placeholder="••••••••"
					minLength={6}
					required
				/>
				<button className="w-full px-5 py-2 mb-1 text-base sm:text-lg font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-neutral-800 rounded-md hover:bg-neutral-700">
					Sign In
				</button>
				<button
					formAction={signUp}
					className="w-full block px-5 py-[7px] text-base sm:text-lg font-medium tracking-wider text-center text-neutral-800 transition-colors duration-300 transform bg-white border border-neutral-800 rounded-md hover:text-white hover:bg-neutral-800"
				>
					Sign Up
				</button>
				{searchParams?.message && (
					<p
						className={`${searchParams.message === "Check email to continue sign in process" ? "text-neutral-800" : "text-red-600"} mt-4 p-4 text-center`}
					>
						{searchParams.message}
					</p>
				)}
			</form>
		</div>
	);
}
