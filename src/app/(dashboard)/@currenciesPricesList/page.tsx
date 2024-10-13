//api
import { fetchCoinsPricesList } from "./api/fetchCoinsPricesList";

//types
import { COIN } from "@/types/coin";

//components
import CurrenciesListTable from "@/components/currenciesListTable";
import CurrenciesListForMobile from "@/components/currenciesListForMobile";
import Coin from "@/components/coin";

export default async function CurrenciesPricesList() {
    const coins: COIN[] = await fetchCoinsPricesList();
    return (
        <>

            <CurrenciesListTable coins={coins} /> {/* availbe for md screens and above */}
            <CurrenciesListForMobile coins={coins} /> {/* availbe for xs and sm screens only */}
        </>
    )
}
