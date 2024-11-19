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
            <table className="table-auto w-full hidden md:table">
                <CurrenciesListTable coins={coins} />
            </table>
            <div className="md:hidden">
                <CurrenciesListForMobile coins={coins} />
            </div>
        </>
    )
}
