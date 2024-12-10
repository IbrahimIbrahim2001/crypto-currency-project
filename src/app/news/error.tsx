'use client';

import { NewsBoxContent } from "@/components/news";

export default function error({ error, reset }: { error: Error, reset: () => void }) {
    return (
        <NewsBoxContent>
            <div>{error.message}</div>
            <button type="button" onClick={() => reset()} className="flex items-center justify-center px-2 h-10 border border-[#eee] rounded-md bg-[#658ecc] text-white font-bold">Try again</button>
        </NewsBoxContent>
    )
}