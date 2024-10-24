import { Fragment } from "react";

export default function SkeletonLoadingForLargeScreens({ array }: { array: number[] }) {
    return (
        <div className="hidden md:table sm:bg-white overflow-auto sm:pr-5 h-1/2 scrollbar-hidden rounded-xl pt-10 pb-2">
            {
                array.map((_ele: number, index: number) => (
                    <Fragment key={index}>
                        <div className="border border-blue-100 shadow rounded-md py-2 px-2 h-14 my-2">
                            <div className="animate-pulse  space-x-4 grid grid-cols-4 items-center">
                                <div className="flex items-center justify-start gap-x-2">
                                    <div className="rounded-full bg-slate-400 h-10 w-10"></div>
                                    <div className="bg-slate-400 rounded h-6 w-24"></div>
                                </div>
                                <div className="bg-slate-400 rounded h-6 w-48 mr-20"></div>
                                <div className="bg-slate-400 rounded h-6 w-48 justify-self-end"></div>
                                <div className="bg-slate-400 rounded h-6 w-12 justify-self-end"></div>
                            </div>
                        </div>
                    </Fragment>
                ))
            }
        </div>
    )
}
