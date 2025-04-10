import { deleteBookmark } from "@/actions/bookmarks";
import Form from "next/form";
import { MdDelete } from "react-icons/md";

export default function DeleteBookmarkButton({ newsId, onDelete }: { newsId: number, onDelete: () => void }) {
    const handleOptimisticDeleteState = async () => {
        onDelete();
        await deleteBookmark(newsId);
    }
    return (
        <Form action={handleOptimisticDeleteState}>
            <div className="flex justify-end">
                <button type="submit">
                    <p className="p-1 border sm:border-0 rounded-md sm:rounded-none border-red-500 sm:border-none">
                        <MdDelete className="size-5 text-red-500" />
                    </p>
                </button>
            </div>
        </Form >
    )
}
