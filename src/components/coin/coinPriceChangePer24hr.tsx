import ArrowDownIcon from "../icons/arrowDownIcon";
import ArrowUpIcon from "../icons/arrowUpIcon";

export const CoinPriceChangePer24hr = ({ percentage }: { percentage: number }) => {
    const pricePer24hr = Math.abs(percentage).toFixed(2);
    const pricePer24hrColor = percentage < 0 ? "text-red-400" : "text-green-400";
    const arrow = percentage > 0 ? <ArrowUpIcon /> : <ArrowDownIcon />
    return (
        <p className={`flex items-center gap-x-1 ${pricePer24hrColor}`}>
            {arrow}{pricePer24hr}
        </p>
    )
}
