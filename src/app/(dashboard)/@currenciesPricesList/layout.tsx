import { Suspense } from "react";
import LoadingSkeleton from "./loading";

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="hidden md:block sm:bg-white overflow-auto sm:pl-5 h-1/2 scrollbar-hidden rounded-xl">  {/* for md and sm screens */}
                <Suspense fallback={<LoadingSkeleton />}>
                    {children}
                </Suspense>
            </div>
            <div className="md:hidden px-4 min-h-96 overflow-scroll scrollbar-hidden mb-4 hello"> {/* for xs and sm screens */}
                <Suspense fallback={<LoadingSkeleton />}>
                    {children}
                </Suspense>
            </div>
        </>
    )
}
