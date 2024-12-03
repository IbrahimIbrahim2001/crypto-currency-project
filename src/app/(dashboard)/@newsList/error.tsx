'use client';

import { NewsBox, NewsBoxContent, NewsBoxHeader } from "@/components/news";

export default function error({ error }: { error: Error }) {
    return (
        <NewsBox>
            <NewsBoxContent>
                <div>{error.message}</div>
            </NewsBoxContent>
        </NewsBox>
    )
}