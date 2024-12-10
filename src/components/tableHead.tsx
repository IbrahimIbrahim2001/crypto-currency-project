export const TableHead = () => {
    return (
        <thead className="table-header-group sticky top-0 bg-white h-14 z-10">
            <tr className="table-row">
                <th className="text-start sticky top-0 left-0">Currency Name</th>
                <th className="text-start">Current Price</th>
                <th className="text-start">Market Capacity</th>
                <th className="text-start">24hr%</th>
            </tr>
        </thead>
    )
}
