import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/nextjs"
import { currentUser } from "@clerk/nextjs/server"
import Link from "next/link"
import { FaBookmark, FaSign, FaSignOutAlt, FaUserAlt } from "react-icons/fa";

export default async function UserLoginStatus() {
    const user = await currentUser();
    return (
        <>
            <SignedOut>
                <SignInButton mode="modal" >
                    <div className="flex gap-x-2 my-3 text-center font-bold border rounded-lg border-main-background h-16 w-full place-content-center place-items-center">
                        <FaSign /> Sign in
                    </div>
                </SignInButton>
            </SignedOut>
            <SignedIn>
                <p className="mb-3 font-semibold text-xl">Signed In as: {user?.username?.toUpperCase()}</p>
                <Link href='/user-profile' >
                    <div className="flex gap-x-2 my-3 text-center font-bold border rounded-lg border-main-background h-16 w-full place-content-center place-items-center">
                        <FaUserAlt /> User Profile
                    </div>
                </Link>
            </SignedIn>
            <Link href="/bookmarks">
                <div className="flex gap-x-2 my-3 text-center font-bold border rounded-lg border-main-background h-16 w-full place-content-center place-items-center">
                    <FaBookmark /> Bookmarks
                </div>
            </Link>
            <SignedIn>
                <SignOutButton >
                    <div className="flex gap-x-2 my-3 text-center font-semibold border rounded-lg border-red-500 text-red-500 h-16 w-full place-content-center place-items-center">
                        Sign out <FaSignOutAlt />
                    </div>
                </SignOutButton>
            </SignedIn>
        </>
    )
}
