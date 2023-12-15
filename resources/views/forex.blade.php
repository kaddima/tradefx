@extends('layout.layout')

@section('title', 'Market | Forex')

@section('content')
    <div>
        
       <div class="bg-blue-50 text-center px-5 py-6">
            <div class="lg:w-3/5 mx-auto">
                <h1 class="font-bold text-xl mb-5">Trade Forex CFDs </h1>
                <p>Trade CFDs on a wide variety of the world’s most popular currency pairs. Follow the major economic announcements on Tradefx’s economic calendar and take advantage of the volatile FX market that doesn’t sleep.</p>
                <a href="/register" class="w-40 block mt-5 py-4 rounded-lg mx-auto bg-orange-400 text-white font-semibold">Get started</a>
            
            </div>
           
        </div>

        <div class="w-4/5 mx-auto mt-5">
            <div class="text-xs">
                <h1 class="font-bold text-sm">Trade Forex CFDs with Tradefx</h1>
                <p>The FX market is one of the world’s biggest markets. You can trade currency pairs from every corner of the world. However, there are a handful of pairs that are worth mentioning: more traded than any other currency pairs, the ‘majors’ dominate the FX market.</p>
                <p>The four most traded currency pairs in the world have been coined the ‘majors’. They involve the following currencies: euro, US dollar, Japanese yen and pound sterling. The most popular pairing is the EUR/USD, followed by the USD/JPY, GBP/USD and USD/CHF pairs respectively.</p>
                <p>There are a few other currencies that deserve to be mentioned. Informally known as the ‘commodity pairs’, the AUD/USD or ‘Aussie’, USD/CAD and NZD/USD are all frequently traded currency pairs. Unsurprisingly, this group of currencies derives its nickname from the fact that they come from countries that possess large quantities of natural resources.</p>
            </div>

            <div class="mt-4 text-xs">
                <h1 class="font-bold text-sm">Advantages of trading currency pairs</h1>
                <p>The FX market is one of the most exciting and fast-paced for traders. Open 24/6 and being the biggest global market means it is extremely liquid; you can instantly buy and sell, so you’re never stuck in a trade. Daily currency fluctuations are usually fairly small, political disasters aside, moving around 1% or 100 pips. Study live forex rates and charts here. You can trade forex CFDs with Tradefx. The availability of leveraged trading in this market can amplify wins, but similarly, can amplify losses.</p>
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
                        <h1 class="text-sm font-bold mb-3">Trade forex with leverage</h1>
                        <p>Currencies are available to trade with up to 30:1 leverage. Start trading with as little as $100 to control a position of $3000</p>
                    </div>
                </div>
                <div class="flex justify-between md:w-1/3 p-4 bg-gray-100">
                    <div class="w-1/3 mb-4">
                        <div class="w-16 h-16 text-gray-200 flex justify-center items-center rounded-full bg-gradient-to-r from-green-500 to-green-300">
                             <span class="material-icons text-4xl">verified_user</span>
                        </div>
                       
                    </div>
                    <div class="w-2/3">
                        <h1 class="text-sm font-bold mb-3">Forex CFDs</h1>
                        <p>Trade 24/6 on a wide range of Forex</p>
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
                        <p>Set up price alerts to be informed of big moves</p>
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