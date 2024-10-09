import Coin from "@/components/coin";
import { COIN } from "@/types/coin";
import { Suspense } from "react";
import { fetchCoinsPricesList } from "./_api/fetchCoinsPricesList";

export default async function CurrenciesPricesList() {
    const coins: COIN[] = await fetchCoinsPricesList();
    return (
        <>
            <Suspense fallback={<p>Loading...</p>}>
                {/* hidden for now on sm screens only */}
                <div className="sm:hidden md:block sm:bg-white sm:pl-5 h-1/2 rounded-xl overflow-auto scrollbar-hidden">
                    <table className="table-auto w-full">
                        <thead className="sticky top-0 bg-white h-14 z-10">
                            <th className="text-start sticky top-0 left-0 z-10 bg-white">Currency Name</th>
                            <th className="text-start">current price</th>
                            <th className="text-start">market capacity</th>
                            <th className="text-start">24hr%</th>
                        </thead>
                        {coins?.map((coin: COIN) => (
                            <tbody key={coin.id}>
                                <Coin coin={coin} />
                            </tbody>
                        ))}
                    </table>
                </div>
            </Suspense >
        </>
    )
}
