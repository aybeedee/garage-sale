"use client";

import { useEffect, useRef, useState } from 'react';
import { ProfileMenuOption } from '@/utils/types';
import { profileMenuList } from '@/utils/constants';
import ProfileIcon from './ProfileIcon';

export default function ProfileMenu() {

    const [openProfileMenu, setOpenProfileMenu] = useState<boolean>(false);
    const profileMenuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (profileMenuRef.current && !profileMenuRef.current.contains(event.target as Node)) {
                setOpenProfileMenu(false);
            }
        };

        window.addEventListener('click', handleClickOutside);
        return () => window.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <div ref={profileMenuRef} className="relative w-full lg:w-auto">
            <button type="button"
                className="py-2 px-2 rounded-md no-underline bg-inherit hover:text-white border-black hover:bg-[#363636] border text-black"
                onClick={() => {
                    setOpenProfileMenu(!openProfileMenu);
                }}
            >
                <ProfileIcon />
            </button>

            {
                openProfileMenu &&
                <div className="absolute z-10 bg-white divide-y divide-gray-700 rounded-lg shadow-black/25 shadow-lg w-max right-0 text-center animate-out">
                    <ul className="py-2 text-sm text-gray-700">
                        {profileMenuList.map((profileMenuOption: ProfileMenuOption, index: number) => (
                            <li key={index}>
                                <a
                                    href={`/${profileMenuOption.path}`}
                                    className="block px-4 py-2 hover:bg-gray-100"
                                    onClick={() => {
                                        setOpenProfileMenu(false);
                                    }}
                                >
                                    {profileMenuOption.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            }
        </div>

    );
}