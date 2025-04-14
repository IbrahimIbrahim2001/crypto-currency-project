import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { CoinCurrentPrice, CoinImage, CoinName, CoinPriceChangePer24hr } from "@/components/coin";


export default function TabsContent({ searchResult }: { searchResult: any }) {
    return (
        <div className="col-span-2 w-full">
            <Tabs.Root defaultValue="overview">
                <Tabs.List className="flex border-b border-gray-200 dark:border-gray-700 mb-6">
                    <Tabs.Trigger
                        value="overview"
                        className="w-1/2 px-4 py-2 text-sm font-medium data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 dark:data-[state=active]:text-blue-400 dark:data-[state=active]:border-blue-400"
                    >
                        Overview
                    </Tabs.Trigger>
                    <Tabs.Trigger
                        value="markets"
                        className="w-1/2 px-4 py-2 text-sm font-medium data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 dark:data-[state=active]:text-blue-400 dark:data-[state=active]:border-blue-400"
                    >
                        Markets
                    </Tabs.Trigger>
                </Tabs.List>
                {/* Overview Tab */}
                <Tabs.Content value="overview" className="focus:outline-none">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                            <h3 className="font-bold text-lg mb-4">Market Data</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-gray-600 dark:text-gray-300">Market Cap</span>
                                    <span>${searchResult.market_data.market_cap.usd.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600 dark:text-gray-300">24h Trading Volume</span>
                                    <span>${searchResult.market_data.total_volume.usd.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600 dark:text-gray-300">Circulating Supply</span>
                                    <span>{searchResult.market_data.circulating_supply.toLocaleString()} {searchResult.symbol.toUpperCase()}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600 dark:text-gray-300">All-Time High</span>
                                    <span>${searchResult.market_data.ath.usd.toLocaleString()}</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                            <h3 className="font-bold text-lg mb-4">Price Changes</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-gray-600 dark:text-gray-300">1h</span>
                                    <CoinPriceChangePer24hr percentage={searchResult.market_data.price_change_percentage_1h_in_currency.usd} />
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600 dark:text-gray-300">24h</span>
                                    <CoinPriceChangePer24hr percentage={searchResult.market_data.price_change_percentage_24h} />
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600 dark:text-gray-300">7d</span>
                                    <CoinPriceChangePer24hr percentage={searchResult.market_data.price_change_percentage_7d_in_currency.usd} />
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600 dark:text-gray-300">30d</span>
                                    <CoinPriceChangePer24hr percentage={searchResult.market_data.price_change_percentage_30d_in_currency.usd} />
                                </div>
                            </div>
                        </div>
                    </div>
                </Tabs.Content>

                {/* Markets Tab */}
                <Tabs.Content value="markets" className="focus:outline-none">
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                        <h3 className="font-bold text-lg mb-4">Current Prices</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <div className="flex flex-col">
                                <span className="text-gray-600 dark:text-gray-300 text-sm">USD</span>
                                <span>${searchResult.market_data.current_price.usd}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-gray-600 dark:text-gray-300 text-sm">EUR</span>
                                <span>€{searchResult.market_data.current_price.eur}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-gray-600 dark:text-gray-300 text-sm">GBP</span>
                                <span>£{searchResult.market_data.current_price.gbp}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-gray-600 dark:text-gray-300 text-sm">BTC</span>
                                <span>{searchResult.market_data.current_price.btc}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-gray-600 dark:text-gray-300 text-sm">ETH</span>
                                <span>{searchResult.market_data.current_price.eth}</span>
                            </div>
                        </div>
                    </div>
                </Tabs.Content>
            </Tabs.Root>
        </div>
    )
}
