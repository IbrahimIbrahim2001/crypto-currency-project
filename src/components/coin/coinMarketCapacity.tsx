
const SLICEBOUNDARY = 8;
export const CoinMarketCapacity = ({ marketCapacity }: { marketCapacity: number }) => {
    const marketCap = marketCapacity.toString().length > SLICEBOUNDARY ? marketCapacity.toString().slice(0, SLICEBOUNDARY) + "..." : marketCapacity.toString()
    return (
        <div className="flex items-center justify-start gap-x-1 opacity-70 sm:opacity-100">$<p>{marketCap}</p></div>
    )
}
