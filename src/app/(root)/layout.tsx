import BottomNavbar from "@/components/bottomNavbar";
import DrawerContent from "@/components/drawerContent";
import Navbar from "@/components/navbar";
import { SearchModalContent } from "@/components/searchModalContent";
import Sidebar from "@/components/sidebar";
import { lazy } from 'react';


const Modal = lazy(() => import("@/components/modal"));
const DrawerComponent = lazy(() => import("@/components/drawer"));

export default function layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            <Modal>
                <SearchModalContent />
            </Modal>
            <div className="p-5 md:py-0 mb-10 sm:mb-0 select-none">
                <div className="block sm:flex gap-x-5">
                    <Sidebar /> {/*visible on sm screens and above*/}
                    {children}
                </div>
            </div>
            <DrawerComponent> {/*on xs screens (mobiles) the drawer direction is bottom, on sm screens and above the drawer if from yhe right*/}
                <DrawerContent />
            </DrawerComponent>
            <BottomNavbar /> {/*visible on xs screens (mobiles)*/}
        </>
    )
}
