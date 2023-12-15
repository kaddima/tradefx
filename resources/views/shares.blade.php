@extends('layout.layout')

@section('title', 'Markets | Shares')

@section('content')
    <div>
        
       <div class="bg-blue-50 text-center px-5 py-6">
            <div class="lg:w-3/5 mx-auto">
                <h1 class="font-bold text-xl mb-5">Trade Share CFDs</h1>
                <p>Speculate on over 5000+ shares with Tradefx’s award-winning platform. Identify trading opportunities with over 75 indicators and drawing tools.</p>
                <a href="/register" class="w-40 block mt-5 py-4 rounded-lg mx-auto bg-orange-400 text-white font-semibold">Get started</a>
            
            </div>
           
        </div>

        <div class="w-4/5 mx-auto mt-5">
            <div class="text-xs">
                <h1 class="font-bold text-sm">Shares CFDs Trading</h1>
                <p>Speculate on specific sectors of the market with shares CFD trading. Take a look on this page to discover all the shares you can trade with us. You can organise the entirety of our shares instrument table by the most traded, most volatile, top risers and top fallers. Our interactive table displays prices in real time as well as shows the past two days percentage change.</p>
            </div>

            <div class="text-xs mt-4">
                <h1 class="font-bold text-sm">Why trade shares?</h1>
                <p>Share trading is one of the most popular forms of trading on offer. Whether that be in stock markets or trading derivatives like CFDs. Join Tradefx and start online stocks and shares trading.</p>
            </div>

            <div class="text-xs mt-4">
                <h1 class="font-bold text-sm">What cryptocurrencies can be traded with Tradefx?</h1>
                <p>If you trade CFDs on shares you are exempt for stamp duty that you would pay on shares normally. CFDs can be traded on margin, providing greater leverage for your capital, making the markets more accessible. With CFDs you have the ability to short sell, so you can trade both a rising or falling market. Leveraged trading allows you to take greater advantage of smaller moves in the markets. CFD trading can amplify your wins but also your losses, however with zero balance protection, your balance will never fall before zero.</p>
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
                        <h1 class="text-sm font-bold mb-3">Trade shares with leverage</h1>
                        <p>Shares are available to trade with up to 5:1 leverage. Start trading with as little as $100 to control a position of $500</p>
                    </div>
                </div>
                <div class="flex justify-between md:w-1/3 p-4 bg-gray-100">
                    <div class="w-1/3 mb-4">
                        <div class="w-16 h-16 text-gray-200 flex justify-center items-center rounded-full bg-gradient-to-r from-green-500 to-green-300">
                             <span class="material-icons text-4xl">verified_user</span>
                        </div>
                       
                    </div>
                    <div class="w-2/3">
                        <h1 class="text-sm font-bold mb-3">Shares CFD’s</h1>
                        <p>Trade 24/5 on a wide range of shares</p>
                        <p>Trading opportunities in both a rising and falling market</p>
                    
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