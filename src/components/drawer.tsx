'use client';
import { useDrawer } from '@/context/DrawerProvider';
import { Drawer } from 'vaul';
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import useTheme from 'next-theme';

// only visible on xs screens
export default function DrawerComponent() {
    const { isOpen, closeDrawer } = useDrawer();
    const { setTheme } = useTheme();
    return (
        <div className='sm:hidden'>
            <Drawer.Root open={isOpen} onClose={closeDrawer}>
                <Drawer.Portal>
                    <Drawer.Overlay className="fixed inset-0 bg-black/40" />
                    <Drawer.Content className="bg-gray-100 flex flex-col rounded-t-[10px] mt-24 h-fit fixed bottom-0 left-0 right-0 outline-none">
                        <div className="p-4 bg-white dark:bg-gray-900 rounded-t-[10px] flex-1">
                            <div aria-hidden className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-8" />
                            <div className="max-w-md mx-auto">
                                <Drawer.Title className="font-medium mb-4 text-gray-900">Drawer for React.</Drawer.Title>
                                <p>Preferred Theme:</p>
                                <div className='flex items-center justify-between gap-x-2'>
                                    <div className='border rounded-lg border-main-background h-16 w-full' onClick={() => setTheme('dark')}>
                                        <p>
                                            Dark Mode

                                        </p>
                                        <MdDarkMode />
                                    </div>
                                    <div className='border rounded-lg border-main-background h-16 w-full' onClick={() => setTheme('light')}>
                                        <p>light Mode</p>
                                        <CiLight />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Drawer.Content>
                </Drawer.Portal>
            </Drawer.Root>
        </div>
    )
}

