"use client";

import { useBookmarkNotification } from "@/context/BookmarkNotificationProvider";
import { useOptimistic, useTransition } from "react";
import { CiBookmark } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";
import { motion } from "motion/react";

export const SaveNewsButtonIcon = ({ initialBookmarked }: { initialBookmarked?: boolean }) => {
    const [_isPending, startTransition] = useTransition();
    const [optimisticBookmarked, setOptimisticBookmarked] = useOptimistic(
        initialBookmarked,
        (current) => !current
    )
    const { setNotificationText, showNotification } = useBookmarkNotification();

    async function handleSubmit() {
        startTransition(() => {
            setOptimisticBookmarked(initialBookmarked);
            setNotificationText(optimisticBookmarked);
            showNotification(true);
        })
    }

    return (
        <>
            <motion.button
                whileTap={{ scale: 1.5 }}
                type="submit"
                onClick={handleSubmit}>
                {
                    optimisticBookmarked ? (
                        <FaBookmark className='text-primary' />
                    ) : (
                        <CiBookmark className='text-primary' />
                    )
                }
            </motion.button>
        </>
    )
}
