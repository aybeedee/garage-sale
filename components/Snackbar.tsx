'use client'

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Snackbar({ type, email }: { type: string; email: string | undefined; }) {

    const [snackBarOpen, setSnackBarOpen] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => {
            setSnackBarOpen(!snackBarOpen);
        }, 5000);
    }, []);

    return (
        <div className={`${(snackBarOpen && ((type === "signed-in") || (type === "signed-up"))) ? "" : "hidden"} fixed top-[90%] max-sm:top-[85%] z-40 flex flex-row max-sm:flex-col justify-between animate-in gap-2 align-middle items-center px-3 py-2 border rounded-xl border-gray-200 shadow-lg bg-white`}>
            <p className="max-sm:text-sm">
                Logged in as: {email}
            </p>
            {
                type === "signed-in" ?
                    <Link
                        href="/profile/orders"
                        className="block px-4 py-2.5 max-sm:w-full max-sm:text-xs text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-neutral-800 rounded-lg focus:outline-none hover:bg-neutral-700 focus:ring focus:ring-neutral-300 focus:ring-opacity-80 md:w-auto"
                    >
                        View My Orders
                    </Link>
                    : type === "signed-up" ?
                        <Link
                            href="/profile/address"
                            className="block px-4 py-2.5 max-sm:w-full max-sm:text-xs text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-neutral-800 rounded-lg focus:outline-none hover:bg-neutral-700 focus:ring focus:ring-neutral-300 focus:ring-opacity-80 md:w-auto"
                        >
                            Set Delivery Address
                        </Link>
                        : ''
            }
        </div>
    )
}