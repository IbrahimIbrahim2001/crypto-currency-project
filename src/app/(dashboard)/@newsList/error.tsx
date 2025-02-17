'use client';

import { NewsBoxContent } from "@/components/news";

export default function error({ error, reset }: { error: Error, reset: () => void }) {
    return (
        <NewsBoxContent>
            <div>{error.message}</div>
            <button type="button" onClick={() => reset()}>Try again</button>
        </NewsBoxContent>
    )
}