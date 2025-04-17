import { SignIn } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { fetchSavedNews } from "./api";
import { BookmarksList } from "./bookmarksList";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "bookmarks",
    description: "List of bookmarks",
};

export default async function Bookmarks() {
    const { userId: clerkUserId } = await auth();
    const bookmarks = await fetchSavedNews();

    if (!clerkUserId) return (
        <div className="grid place-items-center w-full">
            <SignIn />
        </div>
    );

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-5 sm:p-3 overflow-y-scroll scrollbar-hidden sm:max-h-[40rem]">
            <BookmarksList bookmarks={bookmarks} />
        </div>
    )
}