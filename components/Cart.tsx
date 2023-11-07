import CartIcon from "./CartIcon";

export default function Cart() {
    return (
        <button className="py-2 px-2 rounded-md no-underline bg-inherit hover:text-white border-black hover:bg-[#363636] border text-black">
            <CartIcon />
        </button>
    )
}
