import BottomNavbarElement from './bottomNavbarElement';
import { navElements } from './navElemetns'

export default function BottomNavbar() {
    return (
        <section className='sm:px-5 w-full h-16 flex justify-between items-center sm:hidden fixed bottom-0 bg-white border-t border:gray-100 shadow-xl shadow-[#658ecc] dark:bg-dark-background dark:border-dark-background'>
            {
                navElements.map((ele) => (
                    <BottomNavbarElement key={ele.href} ele={ele} />
                ))
            }
        </section >
    )
}
