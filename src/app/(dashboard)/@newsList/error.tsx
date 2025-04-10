'use client';

import { NewsBoxContent } from "@/components/news/newsBoxContent";


export default function error({ error, reset }: { error: Error, reset: () => void }) {
    return (
        <NewsBoxContent>
            <div className="font-bold text-red-400">There is an error please try again later</div>
            <button type="button" onClick={() => reset()}>Try again</button>
        </NewsBoxContent>
    )
}