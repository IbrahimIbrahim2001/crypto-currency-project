import { error } from "console";
const NEWS_API_KEY = process.env.NEXT_PUBLIC_PAPRICKA_API_KEY;
export const fetchCurrenciesNews = async () => {
    const res = await fetch(`https://cryptopanic.com/api/free/v1/posts/?auth_token=${NEWS_API_KEY}&filter=rising`, { cache: "no-store" });
    if (res.ok) {
        const data = await res.json();
        return data;
    } else {
        return error();
    }
}