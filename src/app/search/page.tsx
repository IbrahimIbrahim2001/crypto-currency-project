import { CoinCurrentPrice, CoinImage, CoinName, CoinPriceChangePer24hr } from "@/components/coin";
import TabsContent from "@/components/tabsContent";
import { fetchCurrencyStatistics } from "@/utils/fetchCurrencyStatistics";
import * as Tabs from '@radix-ui/react-tabs';

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ coin: string }> }) {
    const coinId = (await searchParams).coin;
    const searchResult = await fetchCurrencyStatistics(coinId);

    if (!coinId) {
        return <div>Please enter a valid coin name</div>;
    }
    if (!searchResult) {
        return <div><span className="font-extrabold text-lg">{coinId}</span> is not a valid coin name</div>;
    }

    return (
        <div className="w-full grid grid-cols-2 place-items-center">
            <div className="col-span-2 flex items-center gap-4 mb-8 place-self-start md:place-self-center">
                <CoinImage coinImage={searchResult.image.large} />
                <div>
                    <CoinName coinName={searchResult.name} />
                    <div className="flex items-center gap-4 mt-2">
                        <CoinCurrentPrice currentPrice={searchResult.market_data.current_price.usd} />
                        <CoinPriceChangePer24hr percentage={searchResult.market_data.price_change_percentage_24h} />
                    </div>
                </div>
            </div>
            <TabsContent searchResult={searchResult} />
        </div>
    );
}