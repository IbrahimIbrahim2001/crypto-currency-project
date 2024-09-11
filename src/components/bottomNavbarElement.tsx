'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation';
import navElement from './navElemetns';

interface LinkElementProps { ele: navElement };

export default function BottomNavbarElement({ ele }: LinkElementProps) {
    const pathname = usePathname();
    const isActive = pathname === ele.href;

    return (
        <Link href={ele.href} className="w-1/3">
            <ul className={`flex flex-col items-center justify-center ${isActive ? "text-[#0339bf] font-semibold" : "text-[#e5b030]"}`}>
                <li>{ele.icon}</li>
                <li className='text-sm'>{ele.name}</li>
            </ul >
        </Link >
    )
}
