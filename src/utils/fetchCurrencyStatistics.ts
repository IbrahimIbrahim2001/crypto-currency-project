import { redirect } from 'next/navigation';

const api = process.env.NEXT_PUBLIC_COINGECKO_URL;
const key = process.env.NEXT_PUBLIC_COINGECKO_KEY;

export type Errors = {
    coinId?: string,
}

export type FormState = {
    errors?: Errors;
}


export const fetchCurrencyStatistics = async (coinId: string) => {
    const res = await fetch(`${api}/coins/${coinId}?localization=true&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true?x_cg_demo_api_key=${key}`);
    if (res.ok) {
        return await res.json();
    }
}

export const searchCurrency = async (_prevState: FormState, formData: FormData) => {
    const coinId = formData.get("coinId") as string;
    const errors: Errors = {};
    if (!coinId) {
        errors.coinId = "Coin name is not valid";
    }
    if (Object.keys(errors).length > 0) {
        return { errors };
    }
    redirect(`/search?coin=${encodeURIComponent(coinId)}`);
}