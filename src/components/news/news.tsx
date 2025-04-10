import { NEWS } from "@/types/news";
import { NewsTitle } from "./newsTitle";
import { NewsPublishTime } from "./newsPublishTime";
import { NewsPublisher } from "./newsPublisher";

export const News = ({ news, children }: { news: NEWS, children: React.ReactNode }) => {
    return (
        <>
            {children}
        </>
    )
}

News.Title = NewsTitle;
News.Publisher = NewsPublisher;
News.PublishTime = NewsPublishTime;