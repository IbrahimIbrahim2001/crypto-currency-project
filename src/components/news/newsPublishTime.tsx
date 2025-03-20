import { calculateHoursDifference } from "@/utils/calculateHoursDifference";

export const NewsPublishTime = ({ publishedAt }: { publishedAt: string }) => {
    const hoursDifference = calculateHoursDifference(publishedAt);
    const days = hoursDifference / 24;
    if (days < 1)
        return (
            <span>{hoursDifference.toFixed(0)} Hours Ago</span>
        )
    else if (days < 2)
        return (
            <span> A Day Ago</ span>
        )
    return (
        <span>{days.toFixed(0)} Days Ago</span>
    )
} 
