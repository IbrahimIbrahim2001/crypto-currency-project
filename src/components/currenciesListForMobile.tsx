import { COIN } from "@/types/coin";
import { Coin } from "./coin";

export default function CurrenciesListForMobile({ coins }: { coins: COIN[] }) {
    return (
        <>
            {coins?.map((coin: COIN) => (
                <Coin key={coin.id} coin={coin} />
            ))
            }
        </>
    )
}
