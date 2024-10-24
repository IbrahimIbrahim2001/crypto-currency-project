import { Fragment } from "react";

export default function SkeletomLoadinForSmallScreens({ array }: { array: number[] }) {
    return (
        <div className="md:hidden scrollbar-hidden rounded-xl py-1 overflow-hidden">
            {
                array.map((_ele: number, index: number) => (
                    <Fragment key={index}>
                        <div className="py-2 px-2 h-14  border-b-2">
                            <div className="animate-pulse">
                                <div className="flex items-center justify-start gap-x-2">
                                    <div className="flex items-center gap-x-2 flex-1">

                                        <div className="rounded-full bg-slate-400 h-10 w-10"></div>
                                        <div>
                                            <div className="bg-slate-400 rounded h-3 w-24 mb-2"></div>
                                            <div className="bg-slate-400 rounded h-3 w-20"></div>
                                        </div>
                                    </div>
                                    <div className="ml-10">
                                        <div className="bg-slate-400 rounded h-3 w-20 mb-2 "></div>
                                        <div className="bg-slate-400 rounded h-3 w-16"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fragment >
                ))
            }
        </div >
    )
}
