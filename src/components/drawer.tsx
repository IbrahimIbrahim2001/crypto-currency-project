'use client'

import { useState } from 'react'
import Drawer from 'react-modern-drawer'

import 'react-modern-drawer/dist/index.css'

import { navElements } from './navElemetns'
import LinkElement from './linkElement'

// only visible on xs screens --- not used
export default function DrawerElement() {
    // const [isOpen, setIsOpen] = useState<boolean>(false)
    // const toggleDrawer = () => {
    //     setIsOpen((prevState) => !prevState)
    // }
    // return (
    //     <div className='block sm:hidden'>
    //         <button type='button' onClick={toggleDrawer}>Show</button>
    //         <Drawer
    //             open={isOpen}
    //             onClose={toggleDrawer}
    //             direction='left'
    //             size={'250px'}
    //             className='mr-2 bg-[#f6f8ff] p-4'
    //             style={{ backgroundColor: "#f6f8ff" }}
    //         >
    //             <section className='w-40 rounded-xl py-2'>
    //                 {navElements.map((ele) => (
    //                     <LinkElement key={ele.id} ele={ele} />
    //                 ))}
    //             </section >
    //         </Drawer>
    //     </div>
    // )
    return null;
}
