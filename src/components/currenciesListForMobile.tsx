import { COIN } from "@/types/coin";
import Image from "next/image";
export default function CurrenciesListForMobile({ coins }: { coins: COIN[] }) {
    // if name length > 20 truncate otherwise still the same daahhh
    return (
        <>
            {coins?.map((coin: COIN) => (
                <div key={coin.id} className="flex flex-row items-center justify-between py-1 my-2 border-b h-14">
                    <div className="flex items-center justify-start gap-x-3 overflow-hidden">
                        <Image src={coin.image} alt={"coin image"} width={35} height={35} className="" />
                        <div>
                            <p className="overflow-hidden truncate ">{coin.name}</p>
                            <p>{coin.price_change_percentage_24h}</p>
                        </div>
                    </div>
                    <div className="overflow-hidden w-1/3">
                        <p>{coin.market_cap}</p>
                        <p>{coin.current_price}</p>
                    </div>
                </div>
            ))
            }
        </>
    )
}
