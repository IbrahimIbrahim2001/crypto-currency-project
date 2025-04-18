'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation';
import navElement from './navElements';
import { motion } from "motion/react";

interface LinkElementProps { ele: navElement };

export default function BottomNavbarElement({ ele }: LinkElementProps) {
    const pathname = usePathname();
    const isActive = pathname === ele.href;

    return (
        <Link href={ele.href} className="w-1/3" prefetch={true}>
            <motion.ul
                whileTap={{ scale: 0.95 }}
                className={`flex flex-col items-center justify-center ${isActive ? "text-[#0339bf] font-semibold" : "text-[#e5b030]"}`}>
                <motion.li
                    initial={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    {ele.icon}
                </motion.li>
                <li className='text-sm'>{ele.name}</li>
                {isActive && (
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: 'calc(100% / 3)' }}
                        transition={{ duration: 0.3 }}
                        className="absolute bottom-0 h-[2px] bg-[#0339bf]"
                    />
                )}
            </motion.ul >
        </Link >
    )
}
