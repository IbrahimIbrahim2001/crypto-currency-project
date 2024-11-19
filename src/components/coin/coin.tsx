import { COIN } from "@/types/coin";
import { CoinImage, CoinName, CoinMarketCapacity, CoinCurrenctPrice, CoinPriceChangePer24hr } from "./index";

export const Coin = ({ coin }: { coin: COIN }) => {
    const coinImage = <CoinImage coinImage={coin.image} />
    const coinName = <CoinName coinName={coin.name} />
    const coinCurrentPrice = <CoinCurrenctPrice currentPrice={coin.current_price} />
    const coinMarketCapacity = <CoinMarketCapacity marketCapacity={coin.market_cap} />
    const coinPriceChangePer24hr = <CoinPriceChangePer24hr percentage={coin.price_change_percentage_24h} />
    return (
        <>
            {/* hidden in xs and sm screens */}
            <tr className="h-14 px-2 py-2 w-full rounded-xl hidden md:table-row">
                <td className="flex items-center gap-x-2 sticky left-0 h-14 bg-white">
                    {coinImage}
                    {coinName}
                </td>
                <td>
                    {coinCurrentPrice}
                </td>
                <td>
                    {coinMarketCapacity}
                </td>
                <td>
                    {coinPriceChangePer24hr}
                </td>
            </tr>
            {/* visible only in xs and sm screens */}
            <div className="md:hidden flex flex-row items-center justify-between py-1 my-2 border-b last:border-b-0 h-14">
                <div className="flex items-center justify-start gap-x-3 overflow-hidden">
                    {coinImage}
                    <div>
                        {coinName}
                        {coinPriceChangePer24hr}
                    </div>
                </div>
                <div className="overflow-hidden w-1/3 flex flex-col items-start">
                    {coinMarketCapacity}
                    {coinCurrentPrice}
                </div>
            </div>
        </>
    )
}
