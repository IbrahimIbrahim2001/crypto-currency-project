'use client';
import { useDrawer } from "@/context/DrawerProvider";
import { FaUserCircle } from "react-icons/fa";

export default function Avatar() {
    const { openDrawer } = useDrawer();
    const handleClick = () => {
        openDrawer();
    }
    return (
        <>
            {/* <div className="w-10 h-10 flex justify-center items-center  bg-gray-400 shadow-sm rounded-full" onClick={handleClick}> */}
            <div onClick={handleClick}>
                <FaUserCircle className="w-8 h-8 dark:text-white" />
            </div>
            {/* </div> */}
        </>
    )
}
