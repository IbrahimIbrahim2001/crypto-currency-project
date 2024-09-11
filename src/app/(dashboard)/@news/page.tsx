import Link from 'next/link'
import React from 'react'

export default function News() {
    return (
        <div className="w-full sm:w-80 sm:px-4 h-fit max-h-80 sm:bg-white font-semibold rounded-xl mb-5">
            <div className='sticky top-0'>
                <div className="flex justify-between items-center mb-4 bg-white border-b-2  h-14">
                    <p>News</p>
                    <Link href="news">See All</Link>
                </div>
            </div>
            <div className='overflow-y-auto h-fit max-h-64 pb-4'>
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
