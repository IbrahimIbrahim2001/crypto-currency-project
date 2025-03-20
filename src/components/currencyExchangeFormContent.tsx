"use client";

import { exchangeRate, FormState } from "@/actions/exchangeProduct";
import CurrencyExchangeForm from "@/components/currencyExchangeForm";
import SubmitButton from "@/components/submitButton";
import { usePathname } from "next/navigation";
import { useActionState } from "react";

export default function CurrencyExchangeFormContent() {
    const pathName = usePathname();
    const CurrencyPath: boolean = pathName.includes("currency")
    const additionalStylesFormMainDiv = CurrencyPath ? "sm:h-main-layout w-full sm:grid sm:place-content-center sm:place-items-center" : "px-3"
    const additionalStylesFomInnerDiv = CurrencyPath ? "bg-white dark:bg-transparent rounded-md sm:h-96 grid place-content-center place-items-center sm:w-9/12" : "flex justify-between"
    const initialState: FormState = {
        errors: {},
    };
    const [state, formAction] = useActionState(exchangeRate, initialState);
    return (
        <div className={additionalStylesFormMainDiv}>
            <div className={additionalStylesFomInnerDiv}>
                <div>chart</div>
                <div className={CurrencyPath ? "md:w-2/3" : "w-1/2"}>
                    <form action={formAction}>
                        <CurrencyExchangeForm name="currencyFrom" errorMsg={state.errors?.amount} />
                        <CurrencyExchangeForm disabled name="currencyTo" convertedAmount={state.convertedAmount} />
                        <SubmitButton />
                    </form>
                </div>
            </div>
        </div >
    )
}
