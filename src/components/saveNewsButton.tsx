import { auth } from '@clerk/nextjs/server';
import { getNewsItemId } from '@/app/bookmarks/api';
import { NEWS } from '@/types/news';
import { SaveNewsButtonIcon } from './saveNewsButtonIcon';
import { handlePostNews } from '@/actions/bookmarks';
import Form from 'next/form';

export default async function SaveNewsButton({ news }: { news: NEWS }) {
    const { userId: clerkUserId } = await auth();
    const newsId = news.id; // this is from news api
    const isBookmarked = await getNewsItemId(newsId);

    if (!clerkUserId) return null;

    return (
        <Form action={handlePostNews.bind(null, news)}>
            <div className='flex justify-end mb-2'>
                <SaveNewsButtonIcon initialBookmarked={isBookmarked} />
            </div>
        </Form>
    )
}
