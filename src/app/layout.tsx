import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import DrawerProvider from "@/context/DrawerProvider";
import ModalProvider from "@/context/ModalProvider";
import ThemeProvider from "@/context/ThemeProvider";
import { ClerkProvider } from '@clerk/nextjs';
const inter = Inter({ subsets: ["latin"] });

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
                <ThemeProvider>
                    <body className={`${inter.className} text-primary md:bg-main-background dark:bg-dark-background`}>
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
