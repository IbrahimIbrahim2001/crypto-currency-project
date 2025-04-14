"use client";
import { useModal } from "@/context/ModalProvider";
import { Errors, FormState } from "@/utils/fetchCurrencyStatistics";
import Form from "next/form";
import { useRouter } from "next/navigation";
import { useActionState } from "react";
export const SearchModalContent = () => {
    const router = useRouter();
    const { closeModal } = useModal();
    const initialState: FormState = {
        errors: {},
    };
    const searchCurrency = async (_prevState: FormState, formData: FormData) => {
        const coinId = formData.get("coinId") as string;
        const errors: Errors = {};
        if (!coinId) {
            errors.coinId = "Coin name is not valid";
            return { errors };
        }
        router.push(`/search?coin=${encodeURIComponent(coinId)}`);
        closeModal();
        return { errors: {} };
    };

    const [state, formAction, isPending] = useActionState(searchCurrency, initialState);
    return (
        <Form action={formAction}>
            <div className="flex flex-col my-3 space-y-2">
                <label htmlFor="coinId">Enter your coin name:</label>
                <input type="text" placeholder='coin ID' name='coinId' className='bg-main-background dark:bg-dark-background dark:border  rounded-md focus:outline-0
             px-2.5 h-10 disabled:bg-gray-200 dark:disabled:bg-gray-700'/>
                {state.errors?.coinId &&
                    <p className='col-span-3 ps-3 text-red-500 opacity-80 text-sm'>{state.errors.coinId}
                    </p>
                }
            </div>
            <div className="flex justify-end">
                <button type="submit" className="bg-primary py-2 px-3 text-white rounded-md  disabled:bg-gray-200 disabled:dark:bg-gray-400" disabled={isPending}>
                    {isPending ? "Searching" : "Search"}
                </button>
            </div>
        </Form>
    )
}
