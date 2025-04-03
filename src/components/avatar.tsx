'use client';
import { useDrawer } from "@/context/DrawerProvider";
import { FaUserCircle } from "react-icons/fa";
import { useUser } from "@clerk/clerk-react";
import Image from "next/image";


export default function Avatar() {
    const { user } = useUser();
    const { openDrawer } = useDrawer();
    const handleClick = () => {
        openDrawer();
    }
    if (!user) return (
        <div onClick={handleClick}>
            <FaUserCircle className="w-8 h-8 dark:text-white" />
        </div>

    )
    return (
        <>
            <div className="rounded-full" onClick={handleClick}>
                <Image src={user?.imageUrl} width={40} height={40} className="rounded-full" alt={"user profile"} />
            </div>
        </>
    )
}
