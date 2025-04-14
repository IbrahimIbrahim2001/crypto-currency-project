'use server';

import { deleteSavedNews, postNews } from '@/app/bookmarks/api';
import { revalidatePath } from 'next/cache';

export async function handlePostNews(news: {
    id: number;
    title: string;
    source: { title: string };
}) {
    const newsId = news.id; // this is from news api
    const text = news.title;
    const publisher = news.source.title;
    await postNews(newsId, text, publisher);
    revalidatePath("/news");
}

export async function deleteBookmark(newsId: number) {
    await deleteSavedNews(newsId);
    revalidatePath("/bookmarks");
}