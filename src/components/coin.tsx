import Image from "next/image";
import { COIN } from "@/types/coin";

export default function Coin({ coin }: { coin: COIN }) {
    const marketCap = coin.market_cap.toString().slice(0, 5);
    const pricePer24hr = coin.price_change_percentage_24h.toFixed(2);
    return (
        <>
            <tr className="h-14 my-5 px-2 py-2 w-full rounded-xl">
                <td className="flex items-center gap-x-2 sticky left-0 h-14 bg-white">
                    <Image src={coin.image} alt={"coin image"} width={30} height={30} />
                    <p className="overflow-hidden truncate max-w-52">{coin.name}</p>
                </td>
                <td>{coin.current_price}</td>
                <td>{marketCap}</td>
                <td>{pricePer24hr}</td>
            </tr>
        </>
    )
}
