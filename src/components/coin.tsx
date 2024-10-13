import Image from "next/image";
import { COIN } from "@/types/coin";
import ArrowUpIcon from "./icons/arrowUpIcon";
import ArrowDownIcon from "./icons/arrowDownIcon";
import DollarIcon from "./icons/dollarIcon";

export default function Coin({ coin }: { coin: COIN }) {
    const pricePer24hr = Math.abs(coin.price_change_percentage_24h).toFixed(2);
    const pricePer24hrColor = coin.price_change_percentage_24h < 0 ? "text-red-400" : "text-green-400";
    const arrow = coin.price_change_percentage_24h > 0 ? <ArrowUpIcon /> : <ArrowDownIcon />
    return (
        <>
            <tr className="h-14 px-2 py-2 w-full rounded-xl">
                <td className="flex items-center gap-x-2 sticky left-0 h-14 bg-white">
                    <Image src={coin.image} alt={"coin image"} width={30} height={30} />
                    <p className="overflow-hidden truncate max-w-52">{coin.name}</p>
                </td>
                <td>
                    <div className="flex items-center">
                        <DollarIcon />
                        <p className="span">{coin.current_price}</p>
                    </div>
                </td>
                <td>{coin.market_cap}</td>
                <td className={`${pricePer24hrColor}`}>
                    <p className="flex items-center gap-x-1">
                        {pricePer24hr}{arrow}
                    </p>
                </td>
            </tr>
        </>
    )
}
