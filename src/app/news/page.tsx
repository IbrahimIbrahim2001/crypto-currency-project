import { NEWS } from '@/types/news';
import { News } from '@/components/news';

import { Fragment } from 'react';

const NEWS_API_KEY = process.env.NEXT_PUBLIC_PAPRICKA_API_KEY;

export default async function NewsList() {
    const res = await fetch(`https://cryptopanic.com/api/free/v1/posts/?auth_token=${NEWS_API_KEY}&filter=rising`);
    const data = await res.json();
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-5 sm:p-3 overflow-y-scroll scrollbar-hidden sm:max-h-[40rem]'>
            {data?.results.map((news: NEWS) => (
                <Fragment key={news.id}>
                    <div className='bg-white rounded-md border md:border-none p-3'>
                        <News news={news} />
                    </div>
                </Fragment>
            ))}
        </div>
    )
}
