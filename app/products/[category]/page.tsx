export default async function Category({ params }: { params: { category: string } }) {
    
    return (
        <div className="flex-1 w-full flex flex-col items-center">
            <div className="h-[720px] bg-lime-800 w-full text-white">
                first test div: {params.category}
            </div>
            <div className="h-[720px] bg-lime-600 w-full text-white">
                second test div
            </div>
            <div className="h-[720px] bg-lime-400 w-full text-white">
                third test div
            </div>
        </div>
    )
}