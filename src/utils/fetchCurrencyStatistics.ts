import { error } from "console";
const api = process.env.NEXT_PUBLIC_COINGECKO_URL;
const key = process.env.NEXT_PUBLIC_COINGECKO_KEY

export const fetchCurrencyStatistics = async (coinId: string) => {
    const res = await fetch(`${api}/coins/${coinId}?localization=true&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true?x_cg_demo_api_key=${key}`);
    if (res.ok) {
        return await res.json();
    } else {
        return error();
    }
}