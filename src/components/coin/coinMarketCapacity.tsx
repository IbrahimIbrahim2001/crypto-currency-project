import DollarIcon from "../icons/dollarIcon";

const SLICEBOUNDARY = 8;
export const CoinMarketCapacity = ({ marketCapacity }: { marketCapacity: number }) => {
    const marketCap = marketCapacity.toString().length > SLICEBOUNDARY ? marketCapacity.toString().slice(0, SLICEBOUNDARY) + "..." : marketCapacity.toString()
    return (
        <div className="flex items-center justify-start text-primary-light"><DollarIcon />{marketCap}</div>
    )
}
