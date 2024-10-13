import { COIN } from "@/types/coin";
import Image from "next/image";
export default function CurrenciesListForMobile({ coins }: { coins: COIN[] }) {
    return (
        <>
            {coins?.map((coin: COIN) => (
                <div key={coin.id} className="flex flex-row items-center justify-between py-1 my-2 border-b">
                    <Image src={coin.image} alt={"coin image"} width={35} height={35} />
                    <div>
                        <p>{coin.name}</p>
                        <p>{coin.price_change_percentage_24h}</p>
                    </div>
                    <div>
                        <p>{coin.market_cap}</p>
                        <p>{coin.current_price}</p>
                    </div>
                </div>
            ))
            }
        </>
    )
}
