interface CoinImage {
    large: string
}

interface CoinCurrentPrice {
    current_price: {
        usd: number
    },
    price_change_percentage_24h: number
}

export type COIN = {
    id: number,
    name: string,
    image: string,
    current_price: number,
    market_cap: number,
    price_change_percentage_24h: number,
}

/*currencyBox component the problem is the different between the endpoint I am fetching from.. 
    the first endpoint /coins the image is string and current_price is string
    the second endpoint /coins/${coinId} the image is object {large:string} and the current_price is accessible only 
    from market_data:
    {
        current_price: {
            usd: number
        }
    }
*/
export type COIN_for_currencyBox = {
    id: number,
    name: string,
    image: CoinImage,
    market_data: CoinCurrentPrice
}