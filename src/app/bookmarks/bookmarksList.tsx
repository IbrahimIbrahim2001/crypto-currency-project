"use client";

import DeleteBookmarkButton from "@/components/deleteBookmarkButton";
import { News } from "@/components/news/news";
import { NEWS } from "@/types/news";
import { Fragment, useOptimistic, useTransition } from "react";
import { motion } from "motion/react";
import { deleteBookmark } from "@/actions/bookmarks";
import { scrollVariant } from "@/animation/scrollAnimation";

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
    const [, startTransition] = useTransition();
    const [optimisticBookmarks, setOptimisticBookmarks] = useOptimistic(
        bookmarks,
        (currentBookmarks, newsId) => {
            return currentBookmarks.filter((bookmark) => bookmark.newsId !== newsId)
        });

    const handleGestureDelete = (newsId: number) => {
        startTransition(async () => {
            setOptimisticBookmarks(newsId);
            await deleteBookmark(newsId);
        });
    }

    if (!bookmarks || bookmarks.length === 0 || !optimisticBookmarks || optimisticBookmarks.length === 0) {
        return <div className="text-center text-3xl place-content-center">No bookmarks found</div>;
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
                        <motion.div
                            drag="x"
                            dragSnapToOrigin={true}
                            dragConstraints={{ right: 0 }}
                            onDragEnd={(_, { offset, velocity }) => {
                                if (offset.x < -100 || velocity.x < -500) {
                                    handleGestureDelete(bookmark.newsId);
                                }
                            }}
                            style={{ x: 0 }}
                            whileDrag={{
                                border: "1px solid #fca5a5",
                                borderRadius: 12,
                                padding: "12px",
                                color: "#fca5a5",
                                textDecoration: "line-through",
                                transition: { duration: 0.2 }
                            }}
                            variants={scrollVariant}

                            initial={{ borderRadius: 12, ...scrollVariant.hidden }}
                            whileInView="visible"
                            viewport={scrollVariant.viewport}
                            className="bg-transparent dark:bg-dark-box sm:rounded-md sm:border dark:border-transparent px-0 py-3 sm:px-3 border-b sm:border-none  border-primary-light dark:border-primary last:border-hidden transition-all duration-300"
                        >
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
                        </motion.div>
                    </Fragment>
                );
            })
            }
        </>
    )
}
