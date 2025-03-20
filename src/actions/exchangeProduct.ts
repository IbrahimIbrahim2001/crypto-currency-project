"use server";

const API_URL = process.env.NEXT_PUBLIC_EXCHANGE_RATE_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_EXCHANGE_RATE_API_KEY;

export type Errors = {
    amount?: string,
}

export type FormState = {
    errors?: Errors;
    convertedAmount?: number
}
export async function exchangeRate(prevState: FormState, formData: FormData) {
    const amount = formData.get("amount") as string;
    const currencyFrom = formData.get("currencyFrom") as string;
    const currencyTo = formData.get("currencyTo") as string;
    const errors: Errors = {};
    if (!amount) {
        errors.amount = "Amount is required";
    }
    if (parseInt(amount) <= 0) {
        errors.amount = "number must be greater then 0";
    }
    if (Object.keys(errors).length > 0) {
        return { errors };
    }
    const res = await fetch(`${API_URL}/${API_KEY}/pair/${currencyFrom}/${currencyTo}`);
    const data = await res.json();
    const exchangeRate = data.conversion_rate;
    const convertedAmount = Number(amount) * exchangeRate;
    return { convertedAmount };
}
