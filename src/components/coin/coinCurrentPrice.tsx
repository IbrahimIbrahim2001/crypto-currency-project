
export const CoinCurrentPrice = ({ currentPrice }: { currentPrice: number }) => {
    return (
        <div className="flex items-center gap-x-1">
            $
            <p>
                {currentPrice.toFixed(2)}
            </p>
        </div>
    )
}
