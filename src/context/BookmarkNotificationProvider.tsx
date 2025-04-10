"use client";
import { useState, createContext, useContext } from "react";
import { toast } from "react-toastify";
import { MdBookmarkAdded, MdOutlineBookmarkRemove } from "react-icons/md";

const REMOVE_FROM_BOOKMARKS = `Removed from your bookmark`;
const NEW_ITEM = "Added new item to your bookmarks";


interface BookmarkNotificationContextType {
    setNotificationText: (isBookmarked?: boolean) => void
    showNotification: (show: boolean) => void
}

const BookmarkNotificationContext = createContext<BookmarkNotificationContextType | undefined>(undefined);

export default function BookmarkNotificationProvider({ children }: { children: React.ReactNode }) {
    const [_text, setText] = useState<string>("");
    const [_show, setShow] = useState<boolean>(false);

    const showNotification = (show: boolean) => {
        setShow(show);
    }

    const setNotificationText = (isBookmarked?: boolean) => {
        toast(
            <div className="flex items-center gap-x-2">
                {isBookmarked ? (
                    <>
                        <MdOutlineBookmarkRemove />
                        <span>{REMOVE_FROM_BOOKMARKS}</span>
                    </>
                ) : (
                    <>
                        <MdBookmarkAdded />
                        <span>{NEW_ITEM}</span>
                    </>
                )}
            </div>)
    }

    return (
        <BookmarkNotificationContext.Provider value={{ setNotificationText, showNotification }}>
            {children}
        </BookmarkNotificationContext.Provider>
    )
}

export function useBookmarkNotification() {
    const context = useContext(BookmarkNotificationContext);
    if (!context) {
        throw new Error("useBookmarkNotification must be used within BookmarkNotificationProvider");
    }
    return context;
}