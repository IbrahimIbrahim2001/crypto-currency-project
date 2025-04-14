import { deleteBookmark } from "@/actions/bookmarks";
import Form from "next/form";
import { MdDelete } from "react-icons/md";
import * as motion from "motion/react-client";


const motionVariant = {
    parent: {
        initial: {
            border: "1px solid transparent",
            borderRadius: 6
        },
        hover: {
            border: "1px solid #EF4444",
            borderRadius: 12,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    },
    child: {
        initial: {
            opacity: 0,
            width: 0
        },
        hover: {
            opacity: 1,
            width: "auto",
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    }
}


export default function DeleteBookmarkButton({ newsId, onDelete }: { newsId: number, onDelete: () => void }) {
    const handleOptimisticDeleteState = async () => {
        onDelete();
        await deleteBookmark(newsId);
    }
    return (
        <Form action={handleOptimisticDeleteState}>
            <div className="flex justify-end">
                <button type="submit">
                    <motion.div variants={motionVariant.parent} initial="initial" whileHover="hover"
                        className="flex w-20 justify-between space-x-1 p-1 border sm:border-0 rounded-md sm:rounded-none border-red-500 sm:border-none">
                        <motion.span
                            variants={motionVariant.child}
                            className="text-red-500 text-sm">delete</motion.span>
                        <MdDelete className="size-5 text-red-500 justify-self-end" />
                    </motion.div>
                </button>
            </div>
        </Form >
    )
}
