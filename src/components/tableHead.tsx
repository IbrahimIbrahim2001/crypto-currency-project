export const TableHead = () => {
    return (
        <thead className="table-header-group sticky top-0 bg-main-box dark:bg-dark-box h-14 ">
            <tr className="table-row">
                <th className="text-start">Currency Name</th>
                <th className="text-start">Current Price</th>
                <th className="text-start">Market Capacity</th>
                <th className="text-start">24hr%</th>
            </tr>
        </thead>
    )
}
