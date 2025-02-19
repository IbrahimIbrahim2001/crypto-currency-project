import { News, NewsBoxContent } from '@/components/news';
import { NEWS } from '@/types/news';
import { fetchCurrenciesNews } from '@/utils/fetchCurrenciesNews';
import { Fragment } from 'react';



export default async function NewsList() {
    const newsArray = await fetchCurrenciesNews();
    return (
        <NewsBoxContent className='overflow-y-scroll scrollbar-hidden h-fit max-h-80 pt-4'>
            {newsArray?.results.map((news: NEWS) => (
                <Fragment key={news.id}>
                    <div className="h-1/4 mb-4">
                        <News news={news} />
                    </div>
                </Fragment>
            ))}
        </NewsBoxContent>
    )
}
