'use client';

import Image from "next/image";

import { useDrawer } from "@/context/DrawerProvider";
import myImage from "../assets/photo_2024-06-30_08-16-32.jpg";

export default function Avatar() {
    const { openDrawer } = useDrawer();
    const handleClick = () => {
        openDrawer();
    }
    return (
        <>
            <div className="w-10 h-10 bg-white shadow-sm rounded-full" onClick={handleClick}>
                <Image src={myImage} width={40} height={40} alt="avatar" className="rounded-full" />
            </div>
        </>
    )
}
