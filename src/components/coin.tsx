import { COIN } from "@/types/coin";
import CoinCurrenctPrice from "./coinCurrenctPrice";
import CoinImage from "./coinImage";
import CoinName from "./coinName";
import CoinPriceChangePer24hr from "./icons/coinPriceChangePer24hr";
import CoinMarketCapacity from "./coinMarketCapacity";

export default function Coin({ coin }: { coin: COIN }) {
    return (
        <>
            <tr className="h-14 px-2 py-2 w-full rounded-xl">
                <td className="flex items-center gap-x-2 sticky left-0 h-14 bg-white">
                    <CoinImage coinImage={coin.image} />
                    <CoinName coinName={coin.name} />
                </td>
                <td>
                    <CoinCurrenctPrice currentPrice={coin.current_price} />
                </td>
                <td>
                    <CoinMarketCapacity marketCapacity={coin.market_cap} />
                </td>
                <td>
                    <CoinPriceChangePer24hr percentage={coin.price_change_percentage_24h} />
                </td>
            </tr>
        </>
    )
}
