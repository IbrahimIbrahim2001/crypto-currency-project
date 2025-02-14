import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import BottomNavbar from "@/components/bottomNavbar";
import ThemeProvider from "@/context/ThemeProvider";

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
        <html lang="en" suppressHydrationWarning>
            <ThemeProvider>
                <body className={`${inter.className} text-primary md:bg-main-background`}>
                    {/* <main className=""> */}
                    <Navbar />
                    <div className="p-5 md:py-0 mb-10 sm:mb-0 select-none">
                        <div className="block sm:flex gap-x-5">
                            <Sidebar /> {/*visible on sm screens and above */}
                            {children}
                        </div>
                    </div>
                    <BottomNavbar /> {/*visible on xs screens (mobiles) */}
                    {/* </main> */}
                </body>
            </ThemeProvider>
        </html >
    );
}
