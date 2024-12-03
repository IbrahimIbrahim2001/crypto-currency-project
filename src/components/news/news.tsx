import { NEWS } from "@/types/news";

import { NewsPublishTime, NewsPublisher, NewsTitle } from "./index";

export const News = ({ news }: { news: NEWS }) => {
    return (
        <>
            <div className="h-1/4 mb-4">
                <NewsTitle title={news.title} />
                <p className="text-sm flex space-x-0.5">
                    <NewsPublisher name={news.source.title} />
                    <span>|</span>
                    <NewsPublishTime publishedAt={news.published_at} />
                </p>

            </div>
        </>
    )
}
