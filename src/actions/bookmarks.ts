'use server';

import { deleteSavedNews, postNews } from '@/app/(root)/bookmarks/api';
import { revalidatePath } from 'next/cache';

export async function handlePostNews(news: {
    id: number;
    title: string;
    source: { title: string };
}) {
    const newsId = news.id; // this is from news api
    console.log(news.title);
    const text = news?.title ?? "";
    const publisher = "Anonymous";
    await postNews(newsId, text, publisher);
    revalidatePath("/news");
}

export async function deleteBookmark(newsId: number) {
    await deleteSavedNews(newsId);
    revalidatePath("/bookmarks");
}