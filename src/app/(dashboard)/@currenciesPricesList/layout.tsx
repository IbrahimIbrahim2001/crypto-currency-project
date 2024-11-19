import { Suspense } from "react";
import LoadingSkeleton from "./loading";

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="h-3/4 md:h-1/2 md:min-h-0 scrollbar-hidden block px-4 md:pl-5 md:pr-0 mb-4 md:mb-0 overflow-scroll rounded-2xl md:rounded-xl  backdrop-blur-[5px] md:backdrop-blur-none border border-[#ffffff4d] md:border-none bg-[#fff3] sm:bg-white shadow-special md:shadow-none">
                <Suspense fallback={<LoadingSkeleton />}>
                    {children}
                </Suspense>
            </div>
        </>
    )
}