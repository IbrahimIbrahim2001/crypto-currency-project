import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";

import DrawerProvider from "@/context/DrawerProvider";
import ModalProvider from "@/context/ModalProvider";
import ThemeProvider from "@/context/ThemeProvider";
import { ClerkProvider } from '@clerk/nextjs';
// const inter = Inter({
//     subsets: ["latin"],
//     display: "swap",
// })

export const metadata: Metadata = {
    title: "Crypto Currencies Dashboard",
    description: "List of Crypto Currencies Prices in US Dollars",

};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ClerkProvider>
            <html lang="en" suppressHydrationWarning>
                <head>
                    <meta name="apple-mobile-web-app-title" content="Crypto" />
                </head>
                <ThemeProvider>
                    <body className={` text-primary dark:text-primary-dark md:bg-main-background dark:bg-dark-background`}>
                        <DrawerProvider>
                            <ModalProvider>
                                {children}
                            </ModalProvider>
                        </DrawerProvider>
                    </body>
                </ThemeProvider>
            </html >
        </ClerkProvider>
    );
}
