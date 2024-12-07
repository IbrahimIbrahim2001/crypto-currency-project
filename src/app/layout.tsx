import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import BottomNavbar from "@/components/bottomNavbar";

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
        <html lang="en">
            {/*  dark:bg-[#050863] */}
            <body className={`${inter.className} text-[#7da6e3]  md:bg-[#e9f2ff] `}>
                <Navbar />
                <div className="p-5 md:py-0 mb-10 sm:mb-0 select-none">
                    <div className="block sm:flex gap-x-5">
                        <Sidebar /> {/*visible on sm screens and above */}
                        {children}
                    </div>
                </div>
                <BottomNavbar />
            </body>
            {/* e5b030 658ecc 545456 e9f2ff*/}
        </html >
    );
}
