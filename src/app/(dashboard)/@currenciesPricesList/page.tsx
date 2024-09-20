import { Coin } from "@/types/coin";
import Image from "next/image";
import { Suspense } from "react";

const api = process.env.COINGECKO_URL;

export default async function CurrenciesPricesList() {
    const res = await fetch(`${api}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`)
    const coins: Coin[] = await res.json();
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <div className="sm:bg-white rounded-xl py-2 sm:px-2 h-1/2 overflow-auto" >
                {coins?.map((coin: Coin) => (
                    <div key={coin.id} className="flex justify-between my-5 px-2">
                        <Image src={coin.image} alt={"coin image"} width={30} height={30} />
                        <p>{coin.name}</p>
                        <p>{coin.currentPrice}</p>
                        <p>{coin.market_cap}</p>
                        <p>{coin.price_change_percentage_24h}</p>
                    </div>
                ))}
            </div>
        </Suspense>
    )
}
