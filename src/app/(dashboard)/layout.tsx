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
      <div className="flex-1 flex flex-col h-main-layout md:h-main-layout-bigger-screens">
        {currencyStatistics}
        {currenciesPricesList}
      </div>
      {newsList}
      {children}
    </>
  )
}
