import { News, NewsBoxContent } from '@/components/news';
import { NEWS } from '@/types/news';
import { Fragment } from 'react';

const NEWS_API_KEY = process.env.NEXT_PUBLIC_PAPRICKA_API_KEY;

export default async function NewsList() {
    const res = await fetch(`https://cryptopanic.com/api/free/v1/posts/?auth_token=${NEWS_API_KEY}&filter=rising`);
    const data = await res.json();
    return (
        <NewsBoxContent className='overflow-y-scroll scrollbar-hidden h-fit max-h-80 pt-4'>
            {data?.results.map((news: NEWS) => (
                <Fragment key={news.id}>
                    <div className="h-1/4 mb-4">
                        <News news={news} />
                    </div>
                </Fragment>
            ))}
        </NewsBoxContent>
    )
}
