"use client";

import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useRouter, useParams, useSearchParams } from 'next/navigation';
import SearchIcon from "./SearchIcon";

export default function Search() {

    const [isOpen, setIsOpen] = useState(false);
    const openSearch = () => setIsOpen(true);
    const closeSearch = () => setIsOpen(false);

    const router = useRouter();
    const params = useParams();
    const searchParams = useSearchParams();

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();
    
        const val = e.target as HTMLFormElement;
        const search = val.search as HTMLInputElement;
        const newParams = new URLSearchParams(searchParams.toString());
    
        if (search.value) {
            
            newParams.set('q', search.value);
        } 
        
        else {
            
            newParams.delete('q');
        }
    
        if (params.category) {

            router.push(`/products/${params.category}?${newParams}`);
        }

        else {

            router.push(`/products?${newParams}`);
        }

        closeSearch();
      }

    return (
        <>
            <button onClick={openSearch} className="ml-2 py-2 px-2 rounded-md no-underline bg-inherit hover:text-white border-black hover:bg-[#363636] border text-black">
                <SearchIcon />
            </button>

            <Transition show={isOpen}>

                <Dialog onClose={closeSearch} className="fixed inset-0 flex items-center justify-center z-50">

                    <Transition.Child
                        as={Fragment}
                        enter="transition-all ease-in-out duration-300"
                        enterFrom="opacity-0 backdrop-blur-none"
                        enterTo="opacity-100 backdrop-blur-[4px]"
                        leave="transition-all ease-in-out duration-200"
                        leaveFrom="opacity-100 backdrop-blur-[4px]"
                        leaveTo="opacity-0 backdrop-blur-none"
                    >
                        <div className="fixed inset-0 bg-black/10" />
                    </Transition.Child>

                    <Transition.Child
                        as={Fragment}
                        enter="transition-all ease-in-out duration-300"
                        enterFrom="translate-y-[-100%]"
                        enterTo="translate-y-0"
                        leave="transition-all ease-in-out duration-200"
                        leaveFrom="translate-y-0"
                        leaveTo="translate-y-[-100%]"
                    >

                    <Dialog.Panel className="relative max-w-xl w-full bg-white p-3 rounded-xl mx-3">

                        <form onSubmit={onSubmit}>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input name="search" className="block w-full p-4 ps-10 pe-28 text-lg text-gray-900 rounded-lg bg-gray-50 focus:ring-primaryColor focus:border-primaryColor outline-none" placeholder="Search Products..." required />
                                <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-primaryColor hover:bg-primaryColor/80 focus:ring-4 focus:outline-none focus:ring-primaryColor/20 font-medium rounded-lg text-base px-5 py-2.5">Search</button>
                            </div>
                        </form>

                    </Dialog.Panel>

                    </Transition.Child>

                </Dialog>

            </Transition>
        </>
    )
}
