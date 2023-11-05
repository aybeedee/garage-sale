export default function MenuButton() {
    return (
        <button className="py-2 px-2 rounded-md no-underline bg-inherit hover:text-white border-black hover:bg-[#363636] border text-black">
            <svg width="24px" height="24px" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 12.32H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 18.32H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 6.32001H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </button>
    )
}