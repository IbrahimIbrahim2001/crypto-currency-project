const api = process.env.NEXT_PUBLIC_COINGECKO_URL;

export async function GET() {
    try {
        const res = await fetch(`${api}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`);
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await res.json();
        return new Response(JSON.stringify(data), {
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error: any) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
