'use client';

import { useEffect, useState } from 'react';
export const HideOnScroll = ({ children }: { children: React.ReactNode }) => {
    const [hide, setHide] = useState(false);
    const [lastScrollTop, setLastScrollTop] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                setHide(true);
            } else {
                setHide(false);
            }
            setLastScrollTop(scrollTop);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollTop]);

    return (
        <div className={`transition-transform duration-1000 sticky top-0 ${hide ? '-translate-y-full pb-2' : 'translate-y-0'}`}>
            {children}
        </div>
    );
}