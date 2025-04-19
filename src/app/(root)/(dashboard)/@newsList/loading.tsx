import { NewsBoxContent } from "@/components/news/newsBoxContent";
import Spinner from "@/components/spinner";

export default function NewsLoader() {
    return (
        <>
            <NewsBoxContent className='h-60 flex items-center justify-center'>
                <Spinner />
            </NewsBoxContent>
        </>
    )
}
