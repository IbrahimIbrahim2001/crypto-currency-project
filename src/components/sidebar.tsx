import React from 'react'

import { navElements } from './navElements'
import LinkElement from './linkElement'

// only visible on sm screens and above
export default function Sidebar() {
    return (
        <section className='hidden sm:block w-40 rounded-xl py-2'>
            {navElements.map((ele) => (
                <LinkElement key={ele.id} ele={ele} />
            ))}
        </section >
    )
}
