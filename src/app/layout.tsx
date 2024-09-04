import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navbar";
import DrawerElement from "@/components/drawer";
import Sidebar from "@/components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crypto Currencies Dashboard",
  description: "List of Crypto Currencies Prices in US Dollars",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/*  dark:bg-[#050863] */}
      <body className={`${inter.className} p-5 text-[#7da6e3] bg-[#f6f8ff] h-screen`}>
        <Navbar />
        <DrawerElement />
        <div className="block sm:flex gap-x-5">
          <Sidebar />
          {children}
        </div>
      </body>
      {/* e5b030 658ecc 545456 e9f2ff*/}
    </html >
  );
}
