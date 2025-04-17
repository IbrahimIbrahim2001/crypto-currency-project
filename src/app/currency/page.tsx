import CurrencyExchangeFormContent from '@/components/currencyExchangeFormContent';
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Crypto Currencies Form",
    description: "Exchange form and chart for currencies",
};

export default function Currency() {
    return (
        <>
            <CurrencyExchangeFormContent />
        </>
    )
}
