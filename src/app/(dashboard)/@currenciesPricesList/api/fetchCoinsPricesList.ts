import { error } from "console";
const api = process.env.NEXT_PUBLIC_COINGECKO_URL;

export const fetchCoinsPricesList = async () => {
    const res = await fetch(`${api}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`, { cache: "no-store" });
    if (res.ok) {

        return res.json();
    } else {
        return error();
    }
}