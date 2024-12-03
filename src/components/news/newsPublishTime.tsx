import { calculateHoursDifference } from "@/utils/calculateHoursDifference";

export const NewsPublishTime = ({ publishedAt }: { publishedAt: string }) => {
    const currentDateTime = new Date().toISOString();
    const hoursDifference = calculateHoursDifference(currentDateTime, publishedAt);
    return (
        <span>{Math.abs(parseInt(hoursDifference.toFixed(0)))}h</span>
    )
}
