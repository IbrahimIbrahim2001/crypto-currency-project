export default function layout({
  children,
  currenciesPricesList,
  currencyStatistics,
  newsList,
}: {
  children: React.ReactNode;
  currenciesPricesList: React.ReactNode;
  currencyStatistics: React.ReactNode;
  newsList: React.ReactNode;
}) {
  return (
    <>
      <div className="flex-1 flex flex-col h-[calc(100vh-160px)]  md:h-[calc(100vh-96px)]">
        {currencyStatistics}
        {currenciesPricesList}
      </div>
      {newsList}
      {children}
    </>
  )
}
