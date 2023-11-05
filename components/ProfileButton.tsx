export default function ProfileButton() {
    return (
        <button className="py-2 px-2 rounded-md no-underline bg-inherit hover:text-white border-black hover:bg-[#363636] border text-black">
            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hover:scale-110 transition-all ease-in-out">
                <circle cx="12" cy="6" r="4" fill="currentColor" />
                <ellipse cx="12" cy="17" rx="7" ry="4" fill="currentColor" />
            </svg>
        </button>
    )
}
