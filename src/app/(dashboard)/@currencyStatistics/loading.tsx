import SwiperComponent from "@/components/Swiper";
import { Fragment } from "react";

const array = [1, 2, 3];

export default function Loading() {
    const CurrencyBoxSkeleton =
        array.map((_ele: number, index: number) => (
            <Fragment key={index}>
                <div className={`rounded-3xl sm:w-full h-32 bg-slate-100 sm:h-40 lg:h-28 flex flex-col justify-center space-y-3 sm:space-y-0 p-4 md:py-0 lg:py-4 overflow-hidden dark:bg-transparent dark:border dark:border-dark`}>
                    <div className="flex justify-start items-center font-bold text-xl sm:text-lg gap-x-2 mb-2">
                        <div className='rounded-full bg-slate-400 h-10 w-10' />
                        <div className='bg-slate-400 rounded h-6 w-24' />
                    </div>
                    <div className="flex justify-between sm:block lg:flex opacity-75 h-2/3">
                        <div className='space-y-2 sm:space-y-0 lg:space-y-2 md:flex md:justify-between md:items-center lg:block'>
                            <div className='bg-slate-400 rounded h-3 w-32' />
                            <div className='bg-slate-400 rounded h-3 w-32' />
                        </div>
                        <div></div>
                    </div>
                </div>
            </Fragment>
        ))
    return (
        <>
            <div className="hidden sm:block w-full md:bg-main-box dark:md:bg-dark-box dark:border dark:border-dark rounded-xl h-1/2 py-2 md:px-2 mb-5">{/* visible on small screens and above*/}
                <div className="flex justify-between sm:gap-x-3 md:gap-x-4 px-2 py-4">
                    {CurrencyBoxSkeleton}
                </div>
            </div>
            <SwiperComponent>
                {CurrencyBoxSkeleton}
            </SwiperComponent>
        </>
    )
}
