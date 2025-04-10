"use client";

import useTheme from "next-theme";
import { Slide, ToastContainer } from "react-toastify";

export default function BookmarkNotificationToastContainer() {
    const { theme } = useTheme();
    return (
        <ToastContainer
            position="top-center"
            toastStyle={{
                borderRadius: "10px",
                background: `${theme === 'dark' ? "#1e293b" : "#f2f2f2"}`,
                color: "#7da6e3c1",
                border: "1px solid",
                borderColor: "#7da6e3c1"
            }}
            autoClose={2000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick={true}
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover={false}
            theme="colored"
            transition={Slide}
            closeButton={false}
        />
    )
}
