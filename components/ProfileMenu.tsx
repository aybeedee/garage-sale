"use client";

import { useEffect, useRef, useState } from "react";
import { ProfileMenuOption } from "@/utils/app.types";
import { profileMenuList } from "@/utils/constants";
import ProfileIcon from "./ProfileIcon";
import { Tables } from "@/utils/database.types";

export default function ProfileMenu({
	user,
	signOut,
}: {
	user: Tables<"user">;
	signOut: () => Promise<never>;
}) {
	const [openProfileMenu, setOpenProfileMenu] = useState<boolean>(false);
	const [menuList, setMenuList] =
		useState<ProfileMenuOption[]>(profileMenuList);
	const profileMenuRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				profileMenuRef.current &&
				!profileMenuRef.current.contains(event.target as Node)
			) {
				setOpenProfileMenu(false);
			}
		};

		// TODO: this seems like an iffy way to handle this tbh; even though shouldn't matter much if checking admin access on /admin mount anyway
		if (!user.is_admin) {
			setMenuList((prevMenuList) =>
				prevMenuList.filter(
					(profileMenuOption: ProfileMenuOption) =>
						profileMenuOption.path !== "admin"
				)
			);
		}

		window.addEventListener("click", handleClickOutside);
		return () => window.removeEventListener("click", handleClickOutside);
	}, []);

	return (
		<div ref={profileMenuRef} className="relative w-full lg:w-auto">
			<button
				type="button"
				className="py-2 px-2 rounded-md no-underline bg-inherit hover:text-white border-black hover:bg-[#363636] border text-black"
				onClick={() => {
					setOpenProfileMenu(!openProfileMenu);
				}}
			>
				<ProfileIcon />
			</button>

			{openProfileMenu && (
				<div className="absolute z-10 bg-white divide-y divide-gray-700 rounded-lg shadow-black/25 shadow-lg w-max right-0 text-center animate-out">
					<ul className="px-2 text-sm text-gray-700">
						<li className="text-xs opacity-75 block py-2 border-b border-gray-300">
							{user.email}
						</li>
						{menuList.map(
							(profileMenuOption: ProfileMenuOption, index: number) => (
								<li key={index}>
									<a
										href={`/${profileMenuOption.path}`}
										className="block py-2 hover:bg-gray-100"
										onClick={() => {
											setOpenProfileMenu(false);
										}}
									>
										{profileMenuOption.name}
									</a>
								</li>
							)
						)}
						<li className="block py-2 border-t border-gray-300">
							<button
								onClick={async () => {
									await signOut();
								}}
								className="w-full block py-2 text-center text-white transition-colors duration-300 transform bg-neutral-800 rounded-lg focus:outline-none hover:bg-neutral-700 focus:ring focus:ring-neutral-300 focus:ring-opacity-80"
							>
								Logout
							</button>
						</li>
					</ul>
				</div>
			)}
		</div>
	);
}
