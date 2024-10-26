import ArrowDownIcon from "./arrowDownIcon";
import ArrowUpIcon from "./arrowUpIcon";

export default function CoinPriceChangePer24hr({ percentage }: { percentage: number }) {
    const pricePer24hr = Math.abs(percentage).toFixed(2);
    const pricePer24hrColor = percentage < 0 ? "text-red-400" : "text-green-400";
    const arrow = percentage > 0 ? <ArrowUpIcon /> : <ArrowDownIcon />
    return (
        <p className={`flex items-center gap-x-1 ${pricePer24hrColor}`}>
            {pricePer24hr}{arrow}
        </p>
    )
}
