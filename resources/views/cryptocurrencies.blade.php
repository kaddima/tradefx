@extends('layout.layout')

@section('title', 'Markets | Cryptocurrencies')

@section('content')
    <div>
        
       <div class="bg-blue-50 text-center px-5 py-6">
            <div class="lg:w-3/5 mx-auto">
                <h1 class="font-bold text-xl mb-5">Trade Cryptocurrency CFDs</h1>
                <p>Trade cryptocurrencies like Bitcoin, Litecoin, Ripple and Ethereum without having the burden of owning or storing them. Trading CFDs on cryptocurrencies allows for leveraged trading and higher liquidity.</p>
                <a href="/register" class="w-40 block mt-5 py-4 rounded-lg mx-auto bg-orange-400 text-white font-semibold">Get started</a>
            
            </div>
           
        </div>

        <div class="w-4/5 mx-auto mt-5">
            <div class="text-xs">
                <h1 class="font-bold text-sm">Trade cryptocurrency CFDs with Tradefx</h1>
                <p>What is a cryptocurrency? A cryptocurrency is a digital asset conceived for use as a medium of exchange, which uses cryptography to secure transactions, control the supply of additional units and corroborate transfers. In short, cryptocurrency is a decentralised electronic currency.</p>
            </div>

            <div class="text-xs mt-4">
                <h1 class="font-bold text-sm">Why trade cryptocurrencies?</h1>
                <p>Cryptocurrencies have the tendency to be particularly volatile, so they provide various opportunities for traders to open positions with big movements. Leveraged trading provides high liquidity, matched with the reputation cryptocurrencies have for being highly volatile, means that trading cryptocurrencies with Tradefx provides greater opportunities in markets.</p>
            </div>

            <div class="text-xs mt-4">
                <h1 class="font-bold text-sm">What cryptocurrencies can be traded with Tradefx?</h1>
                <p>Tradefx offers a variety of cryptocurrencies that can be traded in relation to many different currencies. We offer pairings with the following cryptocurrencies: Bitcoin, Litecoin, Ripple, TRON, Ethereum and many others. Study cryptocurrency price charts with Tradefx</p>
            </div>


            <div class="mt-4 text-xs">
                <h1 class="font-bold text-sm">Investing vs. trading cryptocurrency</h1>
                <p>There are two options when trading in the cryptocurrency market. You can buy actual cryptocurrency on exchanges, where you own the underlying asset. This is considered a long-term investment, as you are waiting for the price to rise significantly before selling.</p>
                <p>Alternatively, you can trade cryptocurrency CFDs. A CFD is a popular type of derivative that allows you to trade on margin, providing you with greater exposure to the financial markets. CFDs are a type of derivative so you do not buy the underlying asset itself. Instead, you buy or sell units for a given financial instrument depending on whether you think the underlying price will rise or fall.</p>
                <p>When buying cryptocurrency, it is stored in a wallet, but when trading CFDs the position is held in your trading account, which is regulated by a financial authority.</p>
            </div>
        </div>

        <div class="bg-main-dark-bg text-gray-100 my-8 py-10">
            <div class="w-4/5 mx-auto">
                <div class="flex flex-col md:flex-row gap-4 items-center">
                    <div>
                        <span class="text-xl text-orange-300 font-bold">Why</span>
                        <span class="text-lg font-bold">Tradefx</span>
                    </div>
                    <div class="flex-1 flex text-xs gap-4 items-center justify-center">
                        <div>
                            <div class="flex flex-col items-center justify-cente space-y-2">
                                <span class="material-icons text-3xl text-orange-300 font-bold">candlestick_chart</span>
                                <p>Simple and intuitive platform</p>
                            </div>
                        </div>
                        <div>
                            <div class="flex flex-col items-center space-y-2">
                                <span class="text-2xl text-orange-300 font-bold">0%</span>
                                <p>No commission</p>
                            </div>
                        </div>
                        <div>
                            <div class="flex flex-col items-center space-y-2">
                                <span class="material-icons text-orange-300 text-3xl font-bold">auto_graph</span>
                                <p>Competitive spreads </p>
                            </div>
                        </div>
                    </div>
                    <div class="">
                        <a href="/register" class="w-32 block text-center py-3 rounded-lg 
                        bg-orange-300 text-gray-700 font-semibold">Get started</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-6 mx-auto px-3">
            <div class="flex flex-col md:flex-row gap-2 justify-between text-xs w-full">
                <div class="flex md:w-1/3 p-4 bg-gray-100">
                    <div class="w-1/3 mb-4">
                        <div class="w-16 h-16 text-gray-200 flex justify-center items-center rounded-full bg-gradient-to-r from-indigo-500 to-indigo-300">
                             <span class="material-icons text-4xl">edgesensor_high</span>
                        </div>
                       
                    </div>
                    <div class="w-2/3">
                        <h1 class="text-sm font-bold mb-3">Trade cryptocurrencies with leverage</h1>
                        <p>Cryptos are available to trade with up to 2:1 leverage. Start trading with as little as $100 to control a position of $200</p>
                    </div>
                </div>
                <div class="flex justify-between md:w-1/3 p-4 bg-gray-100">
                    <div class="w-1/3 mb-4">
                        <div class="w-16 h-16 text-gray-200 flex justify-center items-center rounded-full bg-gradient-to-r from-green-500 to-green-300">
                             <span class="material-icons text-4xl">verified_user</span>
                        </div>
                       
                    </div>
                    <div class="w-2/3">
                        <h1 class="text-sm font-bold mb-3">Crypto CFD’s</h1>
                        <p>Trade 24/7 on a wide range of cryptos</p>
                        <p>Buy and sell cryptos to take advantage of rises and falls in price</p>
                        <p>No need to setup crypto wallets and private keys</p>
                    </div>
                </div>
                <div class="flex justify-between p-4 md:w-1/3 bg-gray-100">
                    <div class="w-1/3 mb-4">
                        <div class="w-16 h-16 text-gray-200 flex justify-center items-center rounded-full bg-gradient-to-r from-orange-600 to-orange-400">
                             <span class="material-icons text-4xl">switch_access_shortcut</span>
                        </div>
                       
                    </div>
                    <div class="w-2/3">
                        <h1 class="text-sm font-bold mb-3">Profit and loss control</h1>
                        <p>You can easily define Stops and Limits to request positions to close at a specified price.</p>
                        <p>Set up price alerts to be informed of big moves.</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="bg-gray-900 text-white font-bold mt-8">
            <div class="w-10/12 md:w-4/5 mx-auto text-xs text-center py-10">
                <h1 class="text-lg">Still looking for a broker you can trust?</h1>
                <p class="text-xs font-semibold">Join the 50.000+ investors  that chose to trade with Tradefx</p>
                
                <div class="mt-6 flex flex-col gap-3 md:flex-row md:justify-between ">
                    <div class="flex flex-col md:justify-center items-center">
                        <div class="w-12 h-12 mb-4 flex justify-center items-center border rounded-full"><span class="material-icons">person_add</span></div>
                        <p>1. Create & verify your account</p>
                    </div>
                    <div class="flex flex-col md:justify-center items-center">
                        <div class="w-12 h-12 mb-4 flex justify-center items-center border rounded-full"><span class="material-icons">credit_card</span></div>
                        <p>2. Make your first deposit</p>
                    </div>
                    <div class="flex flex-col md:justify-center items-center">
                        <div class="w-12 h-12 mb-4 flex justify-center items-center border rounded-full"><span class="material-icons">stacked_line_chart</span></div>
                        <p>3. You’re all set. Start trading</p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
@endsection