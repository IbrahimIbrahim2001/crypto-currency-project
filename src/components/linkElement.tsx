'use client';

import Link from 'next/link';
import navElement from './navElements';
import { usePathname } from 'next/navigation';
import ChivronRightIcon from './icons/chivronRightIcon';

interface LinkElementProps { ele: navElement };

export default function LinkElement({ ele }: LinkElementProps) {
    const pathname = usePathname();
    const isActive = pathname === ele.href;

    return (
        <Link href={ele.href}>
            <div className={`flex justify-between items-center py-1 my-2  ${isActive ? "block text-[#0339bf] font-semibold" : "text-[#e5b030]"}`}>
                <div className='flex justify-between gap-x-1'>
                    <p>{ele.icon}</p>
                    <p>{ele.name}</p>
                </div>
                {isActive && <ChivronRightIcon />}
            </div>
        </Link>
    )
}
