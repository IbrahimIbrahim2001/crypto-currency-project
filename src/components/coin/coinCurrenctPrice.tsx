import DollarIcon from "../icons/dollarIcon"

export const CoinCurrenctPrice = ({ currentPrice }: { currentPrice: number }) => {
    return (
        <div className="flex items-center justify-start">
            <DollarIcon />{currentPrice.toFixed(2)}
        </div>
    )
}
