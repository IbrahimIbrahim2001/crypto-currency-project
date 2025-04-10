import { NewsBoxContent } from "@/components/news/newsBoxContent";

export default function NewsLoader() {
    return (
        <>
            <NewsBoxContent className='h-60 flex items-center justify-center'>
                <div
                    className="inline-block h-10 w-10  animate-spin rounded-full border-4 border-solid border-[#7da6e3] border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
                    role="status">
                </div>
            </NewsBoxContent>
        </>
    )
}
