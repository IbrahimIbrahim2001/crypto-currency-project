import { NEWS } from '@/types/news';
import { News } from '@/components/news';
import { Fragment } from 'react';
import { fetchCurrenciesNews } from '@/utils/fetchCurrenciesNews';
// import { CiBookmark } from 'react-icons/ci';
// import { FaBookmark } from "react-icons/fa";
export default async function NewsList() {
    const newsArray = await fetchCurrenciesNews();
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-5 sm:p-3 overflow-y-scroll scrollbar-hidden sm:max-h-[40rem]'>
            {newsArray?.results.map((news: NEWS) => (
                <Fragment key={news.id}>
                    <div className='relative bg-transparent dark:bg-dark-box rounded-md sm:border dark:border-transparent px-0 py-3 sm:px-3'>
                        {/* <CiBookmark className='absolute top-1 right-1 text-red-500' /> */}
                        {/* <FaBookmark className='absolute top-1 right-1 text-primary' /> */}
                        <News news={news} />
                    </div>
                </Fragment>
            ))}
        </div>
    )
}