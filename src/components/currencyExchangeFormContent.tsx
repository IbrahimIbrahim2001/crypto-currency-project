"use client";

import { exchangeRate, FormState } from "@/actions/exchangeProduct";
import SubmitButton from "@/components/submitButton";
import Form from 'next/form';
import { usePathname } from "next/navigation";
import { lazy, Suspense, useActionState } from "react";

const CurrencyExchangeForm = lazy(() => import("@/components/currencyExchangeForm"));
const CurrencyExchangeRatesChart = lazy(() => import("./currencyExchangeRatesChart"))
export default function CurrencyExchangeFormContent() {
    const initialState: FormState = {
        errors: {},
    };

    const [state, formAction] = useActionState(exchangeRate, initialState);
    const transformedChartData = state.chartData ? {
        labels: state.chartData.labels,
        datasets: [{
            label: 'Exchange Rate',
            data: state.chartData.rates,
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderWidth: 2,
            tension: 0.2
        }]
    } : undefined;
    const pathName = usePathname();
    const CurrencyPath: boolean = pathName.includes("currency")
    const additionalStylesFormMainDiv = CurrencyPath ? "sm:h-main-layout w-full sm:grid sm:place-content-center sm:place-items-center" : "px-3"
    const additionalStylesFomInnerDiv = CurrencyPath ? "bg-white dark:bg-transparent rounded-md sm:h-96 grid place-content-center place-items-center sm:w-9/12" : "flex justify-between"
    return (
        <Suspense fallback={<div className="w-full flex justify-center items-center text-xl font-bold">loading...</div>}>
            <div className={additionalStylesFormMainDiv}>
                <div className={additionalStylesFomInnerDiv}>
                    <CurrencyExchangeRatesChart chartData={transformedChartData} />
                    <div className={CurrencyPath ? "md:w-2/3" : "w-1/2"}>
                        <Form action={formAction}>
                            <CurrencyExchangeForm name="currencyFrom" errorMsg={state.errors?.amount} />
                            <CurrencyExchangeForm disabled name="currencyTo" convertedAmount={state.convertedAmount} />
                            <SubmitButton />
                        </Form>
                    </div>
                </div>
            </div >
        </Suspense>
    )
}
