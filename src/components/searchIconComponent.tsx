'use client';
import { useModal } from '@/context/ModalProvider';
import { FaSearch } from 'react-icons/fa';

export const SearchIconComponent = () => {
    const { isOpen, openModal } = useModal();
    return (
        <FaSearch onClick={openModal} />
    )
}
