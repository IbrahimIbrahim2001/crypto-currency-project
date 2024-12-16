import { NEWS } from "@/types/news";
import { NewsPublishTime, NewsPublisher, NewsTitle } from "./index";

export const News = ({ news }: { news: NEWS }) => {
    return (
        <>
            <NewsTitle title={news.title} />
            <p className="text-sm flex space-x-0.5 text-primary-light">
                <NewsPublisher name={news.source.title} />
                <span>|</span>
                <NewsPublishTime publishedAt={news.published_at} />
            </p>
        </>
    )
}