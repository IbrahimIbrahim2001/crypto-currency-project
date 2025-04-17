import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import BottomNavbar from "@/components/bottomNavbar";
import ThemeProvider from "@/context/ThemeProvider";
import DrawerProvider from "@/context/DrawerProvider";
import DrawerComponent from "@/components/drawer";
import DrawerContent from "@/components/drawerContent";
import { Modal } from "@/components/modal";
import ModalProvider from "@/context/ModalProvider";
import { ClerkProvider } from '@clerk/nextjs'
import { SearchModalContent } from "@/components/searchModalContent";

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
                                <Navbar />
                                <div className="p-5 md:py-0 mb-10 sm:mb-0 select-none">
                                    <div className="block sm:flex gap-x-5">
                                        <Sidebar /> {/*visible on sm screens and above */}
                                        {children}
                                    </div>
                                </div>
                                <BottomNavbar /> {/*visible on xs screens (mobiles) */}
                                <DrawerComponent> {/*on xs screens (mobiles) the drawer direction is bottom, on sm screens and above the drawer if from yhe right*/}
                                    <DrawerContent />
                                </DrawerComponent>
                                <Modal>
                                    <SearchModalContent />
                                </Modal>
                            </ModalProvider>
                        </DrawerProvider>
                    </body>
                </ThemeProvider>
            </html >
        </ClerkProvider>
    );
}
