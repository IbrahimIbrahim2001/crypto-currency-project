import Link from "next/link"
export const NewsBoxHeader = () => {
    return (
        <div className='sticky top-0'>
            <div className="flex justify-between items-center  bg-main-box dark:bg-dark-box border-b h-14">
                <p>News</p>
                <Link href="news" className="text-sm text-primary-light">See All</Link>
            </div>
        </div>
    )
}
