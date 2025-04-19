export default function layout({ children, currencyBoxContainer, currencyExchangeContainer }: { children: React.ReactNode, currencyBoxContainer: React.ReactNode, currencyExchangeContainer: React.ReactNode }) {
    return (
        <>
            {children}
            <div className="block sm:hidden"> {/*for the swiper component*/}
                {currencyBoxContainer}
            </div>
            <div className="hidden sm:block w-full md:bg-main-box dark:md:bg-dark-box dark:border dark:border-dark rounded-xl h-1/2 py-2 md:px-2 mb-5"> {/* visible on small screens and above*/}
                {currencyBoxContainer}
                {currencyExchangeContainer}
            </div>
        </>
    )
}
