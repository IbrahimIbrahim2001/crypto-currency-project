import { auth } from "@clerk/nextjs/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function fetchUserId() {
    const { userId: clerkUserId } = await auth();
    if (clerkUserId) {
        const user = await prisma.user.findUnique({
            where: { clerkUserId }
        });
        return user?.id;
    }
    // throw new Error("Error Loading your Data");
}
export async function fetchSavedNews() {
    const userId = await fetchUserId();
    const savedNews = await prisma.saved_news.findMany({
        where: {
            userId: userId
        }
    });
    return savedNews;
}
export async function postNews(newsId: number, text: string, publisher: string) {
    const userId = await fetchUserId();
    const isNewsItemIdFound = await getNewsItemId(newsId);
    if (!userId) {
        throw new Error("User not found in database");
    }

    if (!isNewsItemIdFound) {
        const news = await prisma.saved_news.create({
            data: {
                userId: userId,
                newsId: newsId,
                text,
                publisher
            }
        });
        return news;
    }
    return await deleteSavedNews(newsId);
}

export async function getNewsItemId(newsId: number) {
    const userId = await fetchUserId();
    const newsItem = await prisma.saved_news.findUnique({
        where: {
            userId,
            newsId
        },
    });
    return !!newsItem;
}

export async function deleteSavedNews(newsId: number) {
    const userId = await fetchUserId();

    const newsItem = await prisma.saved_news.findFirst({
        where: {
            newsId,
            userId
        }
    });

    if (!newsItem) {
        throw new Error("News item not found or doesn't belong to user");
    }

    return await prisma.saved_news.delete({
        where: {
            id: newsItem.id
        }
    });
}