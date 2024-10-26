import { COIN } from "@/types/coin";
import CoinImage from "./coinImage";
import CoinName from "./coinName";
import CoinPriceChangePer24hr from "./icons/coinPriceChangePer24hr";
import CoinCurrenctPrice from "./coinCurrenctPrice";
import CoinMarketCapacity from "./coinMarketCapacity";

export default function CurrenciesListForMobile({ coins }: { coins: COIN[] }) {
    return (
        <>
            {coins?.map((coin: COIN) => (
                <div key={coin.id} className="flex flex-row items-center justify-between py-1 my-2 border-b h-14">
                    <div className="flex items-center justify-start gap-x-3 overflow-hidden">
                        <CoinImage coinImage={coin.image} />
                        <div>
                            <CoinName coinName={coin.name} />
                            <CoinPriceChangePer24hr percentage={coin.price_change_percentage_24h} />
                        </div>
                    </div>
                    <div className="overflow-hidden w-1/3">
                        <CoinMarketCapacity marketCapacity={coin.market_cap} />
                        <CoinCurrenctPrice currentPrice={coin.current_price} />
                    </div>
                </div>
            ))
            }
        </>
    )
}
