import { error } from "console";
const api = process.env.NEXT_PUBLIC_COINGECKO_URL;
const key = process.env.NEXT_PUBLIC_COINGECKO_KEY

export const fetchHistoricalData = async (coinId: string) => {
    const res = await fetch(`${api}/coins/${coinId}/market_chart?vs_currency=usd&days=10&interval=daily&x_cg_demo_api_key=${key}`);
    if (res.ok) {
        return await res.json();
    } else {
        return error();
    }
}