import ProfileIcon from "./ProfileIcon";
import { createClient } from '@/utils/supabase/server';
import Link from 'next/link';
import { cookies } from 'next/headers';

export default async function Profile() {

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
  
    const {
      data: { user },
    } = await supabase.auth.getUser()

    return user ? (
        <button className="py-2 px-2 rounded-md no-underline bg-inherit hover:text-white border-black hover:bg-[#363636] border text-black">
            {/* <p>{user.email ? user.email : ''}</p> */}
            <ProfileIcon />
        </button>
    ) : (
        <Link
            href="/login"
            className="py-2 px-2 rounded-md no-underline bg-inherit hover:text-white border-black hover:bg-[#363636] border text-black"
        >
            <ProfileIcon />
        </Link>
    )
}
