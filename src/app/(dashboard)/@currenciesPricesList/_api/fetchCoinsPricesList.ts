const api = process.env.COINGECKO_URL;

export const fetchCoinsPricesList = async () => {
    const res = await fetch(`${api}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`);
    if (res.ok) {
        return res.json();
    }
}