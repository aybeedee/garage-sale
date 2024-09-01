"use client";

import { useEffect, useRef, useState } from "react";
import { notFound, usePathname } from "next/navigation";
import { Product, SortType } from "@/utils/app.types";
import ProductCard from "@/components/ProductCard";
import { sortingList, sampleProductsList } from "@/utils/constants";

export default function ProductsPage({
	searchParams,
}: {
	searchParams?: { [key: string]: string | string[] | undefined };
}) {
	const { sort, q } = searchParams as { [key: string]: string };
	const pathname = usePathname();

	if (
		sort &&
		sortingList.find((sortType) => sortType.slug === sort) === undefined
	) {
		return notFound();
	}

	const [openSortSelect, setpenSortSelect] = useState(false);
	let productsList: Product[] = [];
	const dropdownRef = useRef<HTMLDivElement>(null);

	// sorting
	if (sort) {
		const selectedSortType = sortingList.find(
			(sortType) => sortType.slug === sort
		)?.slug;

		if (selectedSortType === "recent-desc") {
			productsList = [...sampleProductsList].sort((product1, product2) =>
				product1.timestamp < product2.timestamp
					? 1
					: product1.timestamp > product2.timestamp
						? -1
						: 0
			);
		} else if (selectedSortType === "price-asc") {
			productsList = [...sampleProductsList].sort((product1, product2) =>
				product1.price > product2.price
					? 1
					: product1.price < product2.price
						? -1
						: 0
			);
		} else if (selectedSortType === "price-desc") {
			productsList = [...sampleProductsList].sort((product1, product2) =>
				product1.price < product2.price
					? 1
					: product1.price > product2.price
						? -1
						: 0
			);
		}
	} else {
		productsList = sampleProductsList;
	}

	// searching
	if (q) {
		productsList = [...productsList].filter((product) =>
			product.name.toLowerCase().includes(q.toLowerCase())
		);
	}

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setpenSortSelect(false);
			}
		};

		window.addEventListener("click", handleClickOutside);
		return () => window.removeEventListener("click", handleClickOutside);
	}, []);

	return (
		<div className="flex flex-col w-full px-7 py-10 bg-white/10 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur">
			<div className="flex flex-col gap-5 w-full justify-between items-center lg:flex-row lg:gap-0">
				<h2 className="text-4xl font-extrabold bg-gradient-to-r from-primaryColor to-secondaryColor inline-block text-transparent bg-clip-text capitalize">
					All Products
				</h2>
				<p className="text-gray-500 lg:fixed lg:inset-x-0 lg:w-full lg:h-min lg:flex lg:items-center lg:justify-center">
					Showing {productsList.length} results {q && `for "${q}"`}
					{sort ? (
						<>
							{" "}
							| {sortingList.find((sortType) => sortType.slug === sort)?.type}
						</>
					) : (
						<></>
					)}
				</p>
				<div ref={dropdownRef} className="relative w-full lg:w-auto">
					<button
						type="button"
						className="w-full text-white bg-primaryColor hover:bg-primaryColor/80 focus:ring-4 focus:outline-none focus:ring-primaryColor/20 font-medium rounded-lg text-base px-5 py-2.5 text-center items-center flex justify-center lg:w-36"
						onClick={() => {
							setpenSortSelect(!openSortSelect);
						}}
					>
						Sort By
						<svg
							className="w-2.5 h-2.5 ms-3"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 10 6"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="m1 1 4 4 4-4"
							/>
						</svg>
					</button>

					{openSortSelect && (
						<div className="absolute z-10 bg-white divide-y divide-gray-700 rounded-lg shadow-lg w-full text-center animate-out">
							<ul
								className="py-2 text-sm text-gray-700"
								aria-labelledby="dropdownDefaultButton"
							>
								{sortingList.map((sortType: SortType, index: number) => (
									<li key={index}>
										<a
											href={`${pathname}?${new URLSearchParams({
												...(q && { q: q }),
												...(sortType.slug && { sort: sortType.slug }),
											})}`}
											className="block px-4 py-2 hover:bg-gray-100"
											onClick={() => {
												setpenSortSelect(false);
											}}
										>
											{sortType.type}
										</a>
									</li>
								))}
							</ul>
						</div>
					)}
				</div>
			</div>

			<div className="mx-auto min-h-screen mt-6">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
					{productsList.map((product: Product, index: number) => (
						<ProductCard key={index} product={product} />
					))}
				</div>
			</div>
		</div>
	);
}
