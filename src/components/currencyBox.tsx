import { COIN_for_currencyBox } from "@/types/coin";
import { fetchCurrencyStatistics } from "@/utils/fetchCurrencyStatistics";
import { CoinCurrentPrice, CoinImage, CoinName, CoinPriceChangePer24hr } from "./coin";
import CoinChart from "./coinChart";
import { fetchHistoricalData } from "@/utils/fetchHistoricalData";

export const CurrencyBox = async ({ coinId, styles }: { coinId: string, styles: string }) => {

    const coin: COIN_for_currencyBox = await fetchCurrencyStatistics(coinId);
    const historicalData = await fetchHistoricalData(coinId);
    return (
        <div className={`rounded-3xl ${styles}  sm:w-full h-32 sm:h-40 lg:h-28 flex flex-col justify-center space-y-3 sm:space-y-0 p-4 md:py-0 lg:py-4 overflow-hidden dark:bg-transparent dark:border dark:border-dark`}>
            <div className="flex justify-start items-center font-bold text-xl sm:text-lg gap-x-2">
                <CoinImage coinImage={coin.image.large} />
                <CoinName coinName={coin.name} />
            </div>
            <div className="flex justify-between sm:block lg:flex opacity-75 h-2/3">
                <div className='space-y-2 sm:space-y-0 lg:space-y-2 md:flex md:justify-between md:items-center lg:block'>
                    <CoinCurrentPrice currentPrice={coin.market_data.current_price.usd} />
                    <CoinPriceChangePer24hr percentage={coin.market_data.price_change_percentage_24h} />
                </div>
                <CoinChart historicalData={historicalData} />
            </div>
        </div>
    )
    // return null;
}