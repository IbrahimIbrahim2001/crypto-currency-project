import Avatar from "./avatar";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center mb-5">

            <p className="font-semibold  text-[#e5b030] text-sm sm:text-base">Crypto<span className="text-[#0339bf]">Currnecy</span> </p>
            <div className="flex justify-between items-center gap-x-3">
                <p>notification</p>
                <div className="flex gap-x-1 items-center">
                    <Avatar />
                    {/* <p className="truncate">Bero255</p> */}
                </div>
            </div>
        </nav>
    )
}
