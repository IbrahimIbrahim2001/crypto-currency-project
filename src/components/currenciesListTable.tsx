import { COIN } from "@/types/coin";
import { Coin } from "./coin";
import { TableHead } from "./tableHead";


export default function CurrenciesListTable({ coins }: { coins: COIN[] }) {
    return (
        <>
            <TableHead />
            {coins?.map((coin: COIN) => (
                <tbody key={coin.id}>
                    <Coin coin={coin} />
                </tbody>
            ))}
        </>
    )
}
