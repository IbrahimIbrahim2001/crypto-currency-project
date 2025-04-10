import { News } from "@/components/news/news";
import { NewsBoxContent } from "@/components/news/newsBoxContent";
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
                        <News news={news} >
                            <News.Title title={news.title} />
                            <p className="text-sm flex space-x-0.5 text-primary-light">
                                <News.Publisher name={news.source.title} />
                                <span>|</span>
                                <News.PublishTime publishedAt={news.published_at ? news.published_at : ""} />
                            </p>
                        </News>
                    </div>
                </Fragment>
            ))}
        </NewsBoxContent>
    )
}
