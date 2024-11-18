const SLICEBOUNDARY = 8;
export const CoinMarketCapacity = ({ marketCapacity }: { marketCapacity: number }) => {
    const marketCap = marketCapacity.toString().length > SLICEBOUNDARY ? marketCapacity.toString().slice(0, SLICEBOUNDARY) + "..." : marketCapacity.toString()
    return (
        <p>{marketCap}</p>
    )
}
