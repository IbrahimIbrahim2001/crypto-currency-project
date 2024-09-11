
import Avatar from "./avatar";
import { HideOnScroll } from "./HOC/hideOnScroll";
import NotificationIcon from "./icons/notificationIcon";

export default function Navbar() {
    return (
        <HideOnScroll>
            <nav className="flex justify-between bg-white sm:bg-transparent items-center mb-5 border-b-2 sm:border-0 pb-3 sm:py-0">
                <p className="font-bold text-[rgb(229,176,48)] text-xl">Crypto<span className="text-[#0339bf]">Currnecy</span> </p>
                <div className="flex justify-between items-center gap-x-3">
                    <NotificationIcon />
                    <div className="flex gap-x-2 items-center">
                        <Avatar />
                        <p className="hidden sm:block w-2/3 truncate">Bero255</p>
                    </div>
                </div>
            </nav>
        </HideOnScroll>
    )
}
