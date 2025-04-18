"use client";
import { useModal } from '@/context/ModalProvider';
import * as Dialog from '@radix-ui/react-dialog';
import { IoCloseSharp } from "react-icons/io5";

export default function Modal({ children }: { children?: React.ReactNode }) {
    const { isOpen, closeModal } = useModal();
    return (
        <Dialog.Root open={isOpen}>
            <Dialog.Portal>
                <Dialog.Title />
                <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50" />
                <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-dark-background rounded-md shadow-lg z-50 p-6  sm:mx-0 w-[calc(100vw-16px)] sm:w-full max-w-md border border-primary">
                    {children}
                    <Dialog.Close className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={closeModal}>
                        <IoCloseSharp className='size-6' />
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}