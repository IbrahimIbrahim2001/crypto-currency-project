'use client';
import { useDrawer } from '@/context/DrawerProvider';
import { useEffect, useState } from 'react';
import { Drawer } from 'vaul';

interface DrawerComponentProps {
    children: React.ReactNode;
}

export default function DrawerComponent({ children }: DrawerComponentProps) {
    const { isOpen, closeDrawer } = useDrawer();
    const [drawerDirection, setDrawerDirection] = useState<'right' | 'bottom' | undefined>(undefined);

    useEffect(() => {
        const handleDirection = () => {
            if (window.innerWidth < 640)
                setDrawerDirection('bottom');
            else setDrawerDirection('right');
        };

        handleDirection();
        window.addEventListener('direction', handleDirection);
        return () => window.removeEventListener('direction', handleDirection);
    }, []);
    return (
        <>
            <Drawer.Root open={isOpen} onClose={closeDrawer} direction={drawerDirection}>
                <Drawer.Title />
                <Drawer.Portal>
                    <Drawer.Overlay className="fixed inset-0 bg-black/40" />
                    <Drawer.Content className="sm:h-screen w-full sm:w-[310px] bg-gray-100 flex flex-col rounded-t-[10px] mt-24 h-fit fixed bottom-0 right-0 z-50 outline-none" style={{ '--initial-transform': 'calc(100% + 8px)' } as React.CSSProperties}>
                        {children}
                    </Drawer.Content>
                </Drawer.Portal>
            </Drawer.Root>
        </ >
    )
}

