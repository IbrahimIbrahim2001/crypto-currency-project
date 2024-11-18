const sliceBoundary = 16

export const CoinName = ({ coinName }: { coinName: string }) => {
    const name = coinName.length >= sliceBoundary ? coinName.slice(0, sliceBoundary) + "..." : coinName;
    return (
        <p className="overflow-hidden truncate max-w-52" >{name}</ p>
    )
}
