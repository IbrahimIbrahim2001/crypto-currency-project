//api
import { fetchCoinsPricesList } from "./api/fetchCoinsPricesList";

//types
import { COIN } from "@/types/coin";

//components
import CurrenciesListForMobile from "@/components/currenciesListForMobile";
import CurrenciesListTable from "@/components/currenciesListTable";

export default async function CurrenciesPricesList() {
    const coins: COIN[] = await fetchCoinsPricesList();
    return (
        <>
            <div className="hidden md:block">
                <CurrenciesListTable coins={coins} /> {/* availbe for md screens and above */}
            </div>
            <div className="block md:hidden">
                <CurrenciesListForMobile coins={coins} /> {/* availbe for xs and sm screens only */}
            </div>
        </>
    )
}
