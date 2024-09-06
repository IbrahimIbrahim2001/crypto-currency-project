export default function layout({
  children,
  currenciesPricesList,
  currencyStatistics,
  news,
}: {
  children: React.ReactNode;
  currenciesPricesList: React.ReactNode;
  currencyStatistics: React.ReactNode;
  news: React.ReactNode;
}) {
  return (
    <>
      <div className="flex-1 mb-5">
        {currencyStatistics}
        {currenciesPricesList}
      </div>
      {news}
      {children}
    </>
  )
}
