'use client';


export default function Error({ error, reset }: { error: Error, reset: () => void }) {
    return (
        <div className="rounded-3xl border mb-3 sm:w-full h-32 sm:h-40 lg:h-1/2 flex flex-col justify-center space-y-3 sm:space-y-0 p-4 md:py-0 lg:py-4 ">
            <div>{error.message}</div>
            <button type="button" onClick={() => reset()} className="flex items-center justify-center px-2 h-10 border border-[#eee] rounded-md bg-[#658ecc] text-white font-bold">Try again</button>
        </div>
    )
}