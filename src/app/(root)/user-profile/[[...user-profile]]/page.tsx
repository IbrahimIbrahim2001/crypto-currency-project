import { UserProfile } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "User Profile Page",
    description: "Crypto Currencies - User Profile Page",
};


export default function UserProfilePage() {
    return (
        <div className="sm:h-main-layout-bigger-screens overflow-y-scroll scrollbar-hidden rounded-xl">
            <UserProfile path="/user-profile" appearance={{
                baseTheme: dark,
            }} />
        </div>
    )
}
