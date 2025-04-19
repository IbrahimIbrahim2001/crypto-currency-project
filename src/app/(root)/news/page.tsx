import { NEWS } from '@/types/news';
import { News } from '@/components/news/news';
import { Fragment } from 'react';
import { fetchCurrenciesNews } from '@/utils/fetchCurrenciesNews';
import SaveNewsButton from '@/components/saveNewsButton';
import BookmarkNotificationProvider from '@/context/BookmarkNotificationProvider';
import BookmarkNotificationToastContainer from '@/components/BookmarkNotificationToastContainer';
import * as motion from "motion/react-client";
import { scrollVariant } from '@/animation/scrollAnimation';

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "News List ",
    description: "List of Crypto Currencies News",
};

export default async function NewsList() {
    const newsArray = await fetchCurrenciesNews();
    return (
        <BookmarkNotificationProvider>
            <BookmarkNotificationToastContainer />
            <div
                className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-5 sm:p-3 overflow-y-scroll scrollbar-hidden sm:max-h-[40rem]'>
                {newsArray?.results.map((news: NEWS) => (
                    <Fragment key={news.id}>
                        <motion.div
                            variants={scrollVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={scrollVariant.viewport}
                            className='bg-transparent dark:bg-dark-box rounded-md sm:border dark:border-transparent px-0 py-3 sm:px-3'>
                            <SaveNewsButton news={news} />
                            <News news={news} >
                                <News.Title title={news.title} />
                                <p className="text-sm flex space-x-0.5  opacity-70">
                                    <News.Publisher name={news.source.title} />
                                    <span>|</span>
                                    <News.PublishTime publishedAt={news.published_at ? news.published_at : ""} />
                                </p>
                            </News>
                        </motion.div>
                    </Fragment>
                ))}
            </div>
        </BookmarkNotificationProvider>
    )
}