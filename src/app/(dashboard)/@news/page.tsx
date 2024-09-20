import Link from 'next/link'
import React from 'react'

export default function News() {
    return (
        <div className="w-full hidden lg:block lg:w-3/12 lg:px-4 h-fit max-h-80 lg:bg-white font-semibold rounded-xl mb-5 overflow-y-clip">
            <div className='sticky top-0'>
                <div className="flex justify-between items-center mb-4 bg-white border-b h-14">
                    <p>News</p>
                    <Link href="news">See All</Link>
                </div>
            </div>
            <div className='overflow-y-scroll h-fit max-h-60'>
                <div className="h-1/4 mb-4">
                    <p className="break-words mb-1">
                        newsnewsnewsnewsnewsnewsnewsnewsnewsnewsnews255
                    </p>
                    <p className="text-sm flex space-x-0.5">
                        <span>BBC</span>
                        <span>|</span>
                        <span>1h</span>
                    </p>
                </div>
                <div className="h-1/4 mb-4">
                    <p className="break-words mb-1">
                        newsnewsnewsnewsnewsnewsnewsnewsnewsnewsnews255
                    </p>
                    <p className="text-sm flex space-x-0.5">
                        <span>BBC</span>
                        <span>|</span>
                        <span>1h</span>
                    </p>
                </div>
                <div className="h-1/4 mb-4">
                    <p className="break-words mb-1">
                        newsnewsnewsnewsnewsnewsnewsnewsnewsnewsnews255
                    </p>
                    <p className="text-sm flex space-x-0.5">
                        <span>BBC</span>
                        <span>|</span>
                        <span>1h</span>
                    </p>
                </div>
                <div className="h-1/4 mb-4">
                    <p className="break-words mb-1">
                        newsnewsnewsnewsnewsnewsnewsnewsnewsnewsnews255
                    </p>
                    <p className="text-sm flex space-x-0.5">
                        <span>BBC</span>
                        <span>|</span>
                        <span>1h</span>
                    </p>
                </div>
            </div>
        </div>
    )
}
