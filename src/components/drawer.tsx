'use client'

import { useState } from 'react'
import Drawer from 'react-modern-drawer'

import 'react-modern-drawer/dist/index.css'

// only visible on xs screens
export default function DrawerElement() {
    const [isOpen, setIsOpen] = useState<boolean>(true)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    return (
        <div className='block sm:hidden'>
            <button type='button' onClick={toggleDrawer}>Show</button>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                size={'250px'}
                className='mr-2 bg-[#f6f8ff] p-4'
                style={{ backgroundColor: "#f6f8ff" }}
            >
                <div className='bg-red-500'>Hello World</div>
            </Drawer>
        </div>
    )
}
