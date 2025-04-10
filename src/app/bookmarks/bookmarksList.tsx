"use client";

import { useOptimistic, useTransition } from "react";
import DeleteBookmarkButton from "@/components/deleteBookmarkButton";
import { News } from "@/components/news/news";
import { NEWS } from "@/types/news";
import { Fragment } from "react";

interface Bookmark {
    id: string;
    newsId: number;
    text: string;
    publisher: string;
    userId: string;
}
interface BookmarksListProps {
    bookmarks: Bookmark[];
}

export const BookmarksList = ({ bookmarks }: BookmarksListProps) => {
    const [optimisticBookmarks, setOptimisticBookmarks] = useOptimistic(
        bookmarks,
        (currentBookmarks, newsId) => {
            return currentBookmarks.filter((bookmark) => bookmark.newsId !== newsId)
        });

    if (!bookmarks || bookmarks.length === 0) {
        return <div className="text-center py-10">No bookmarks found</div>;
    }
    return (
        <>
            {optimisticBookmarks.map((bookmark: Bookmark, index: number) => {
                const newsItem: NEWS = {
                    id: bookmark.newsId,
                    title: bookmark.text,
                    published_at: '',
                    source: { title: bookmark.publisher },
                };
                return (
                    <Fragment key={bookmark.id}>
                        <div className="bg-transparent dark:bg-dark-box sm:rounded-md sm:border dark:border-transparent px-0 py-3 sm:px-3 border-b sm:border-none  border-primary-light dark:border-primary last:border-hidden">
                            <div className="hidden sm:block">
                                <DeleteBookmarkButton newsId={bookmark.newsId} onDelete={() => setOptimisticBookmarks(bookmark.newsId)} />
                            </div>
                            <News news={newsItem}>
                                <News.Title title={newsItem.title} />
                                <News.Publisher name={newsItem.source.title} />
                            </News>
                            <div className="block sm:hidden">
                                <DeleteBookmarkButton newsId={bookmark.newsId} onDelete={() => setOptimisticBookmarks(bookmark.newsId)} />
                            </div>
                        </div>
                    </Fragment>
                );
            })
            }
        </>
    )
}
