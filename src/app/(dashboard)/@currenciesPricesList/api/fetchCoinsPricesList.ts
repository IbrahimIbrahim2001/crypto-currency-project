import { error } from "console";
const api = process.env.NEXT_PUBLIC_COINGECKO_URL;
const key = process.env.NEXT_PUBLIC_COINGECKO_KEY

export const fetchCoinsPricesList = async () => {
    const res = await fetch(`${api}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en&x_cg_demo_api_key=${key}`, { cache: "no-store" });
    if (res.ok) {
        return await res.json();
    } else {
        return error();
    }
}