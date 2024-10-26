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
      <div className="flex-1 flex flex-col h-[calc(100vh-160px)]  md:h-[calc(100vh-96px)]">
        {currencyStatistics}
        {currenciesPricesList}
      </div>
      {news}
      {children}
    </>
  )
}
