import Loader from "@/components/Loader";
/*
 * apparently, the only difference in how we're managing loading, error, and data empty/null states in client and server components is the loading state, need to have this file for it, and can have a layout too if want to show some header etc along with the loading ui
 * read more: https://nextjs.org/docs/app/building-your-application/routing#component-hierarchy
 */
export default function Loading() {
	return (
		<div className="flex flex-row w-full h-[50vh] items-center justify-center">
			<Loader size={75} />
		</div>
	);
}
