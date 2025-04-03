import ThemeSwitcherButton from "./themeSwitcherButton";
import UserLoginStatus from "./userLoginStatus";

export default function DrawerContent() {
    return (
        <div className="p-4 bg-white dark:bg-gray-900 rounded-t-[10px] flex-1">
            <UserLoginStatus />
            <div aria-hidden className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-8  sm:hidden " />
            <div className="max-w-md mx-auto">
                <p className="mb-3 font-bold">Preferred Theme:</p>
                <div className='flex items-center justify-between gap-x-2'>
                    <ThemeSwitcherButton theme="dark" />
                    <ThemeSwitcherButton theme="light" />
                </div>

            </div>
        </div>

    )
}
