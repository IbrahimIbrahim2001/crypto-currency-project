import DollarIcon from "../icons/dollarIcon"

export const CoinCurrenctPrice = ({ currentPrice }: { currentPrice: number }) => {
    return (
        <div className="flex items-center">
            <p>
                {currentPrice.toFixed(2)}
            </p>
            <DollarIcon />
        </div>
    )
}
