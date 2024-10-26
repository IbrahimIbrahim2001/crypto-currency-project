const sliceBoundary = 8;
export default function CoinMarketCapacity({ marketCapacity }: { marketCapacity: number }) {
    const marketCap = marketCapacity.toString().length > sliceBoundary ? marketCapacity.toString().slice(0, sliceBoundary) + "..." : marketCapacity.toString()
    return (
        <p>{marketCap}</p>
    )
}
