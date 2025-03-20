'use client';
import useTheme from 'next-theme';
import { CiLight } from 'react-icons/ci';
import { MdDarkMode } from 'react-icons/md';

interface ThemeSwitcherButtonProps {
    theme: 'light' | 'dark';
}

export default function ThemeSwitcherButton({ theme }: ThemeSwitcherButtonProps) {
    const { setTheme, theme: currentTheme } = useTheme();
    const activeStyle = theme === currentTheme ? "border-none bg-primary-light text-white" : "hover:bg-gradient-to-tr from-main-background to-primary to-dark-background";
    return (
        <div className={`border rounded-lg border-main-background h-16 w-full place-content-center place-items-center ${activeStyle}`}
            onClick={() => setTheme(theme)}>
            {theme === 'dark' ?
                <MdDarkMode className='w-10 h-10' /> :
                <CiLight className='w-10 h-10' />
            }
        </div>
    )
}
