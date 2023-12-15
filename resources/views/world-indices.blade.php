@extends('layout.layout')

@section('title', 'Major world indices')

@section('content')
    <div class="dark">
        
       <div class="bg-slate-50 bg-blue-50 text-center px-5 py-6">
            <div class="lg:w-3/5 mx-auto">
                <h1 class="font-bold text-xl mb-5">Trade Indices CFDs</h1>
                <p>Go long or short on the world’s major stock indices. Speculate on market wide changes to popular indices such as the: Dow, FTSE 100, S&P 500 and DAX 30.</p>
                <a href="/register" class="w-40 block mt-5 py-4 rounded-lg mx-auto bg-orange-400 text-white font-semibold">Get started</a>
            
            </div>
           
        </div>

        <div class="w-4/5 mx-auto mt-5">
            <div class="text-xs">
                <h1 class="font-bold text-sm">Trade major world indices</h1>
                <p>A stock market index is a measurement of a section of the stock market. It is calculated from the prices of selected stocks. Stock market indices are used by investors to describe the market and compare the return on specific investments. Follow all the major world indices live with Tradefx.</p>
            </div>

            <div class="mt-4 text-xs">
                <h1 class="font-bold text-sm">What are some popular indices?</h1>
                <p>CFDs provide opportunities to trade the world’s most popular indices. Tradefx offers CFDs on a wide range of indices from all over the globe ranging from iconic indices like the NASDAQ 100, Dow Jones and FTSE 100 to more particular indices such as the Wig 20 or the IBEX 35.</p>
            
                <p>Take a look on this page to discover all the indices you can trade with us. You can organise the entirety of our indices instrument table by the most traded, most volatile, top risers and top fallers. Our interactive table displays prices in real time as well as shows the past two days percentage change. Follow live indices prices and charts here.</p>
            </div>

            <div class="mt-4 text-xs">
                <h1 class="font-bold text-sm">Trade CFDs on indices</h1>
                <p>The advantage of trading indices is that they have multiple components. We offer indices like the DAX that has 30 constituents, which measures the top performing German stocks, or much broader indices like the S&P 500. Multiple components not only diversify risk to an extent, but they offer the opportunity for greater volatility due to the fact that there are simply more moving parts. Trade CFDs on indices with Tradefx now.</p>
            </div>
            <div class="mt-4 text-xs">
                <h1 class="font-bold text-sm">Dividends and positions on indices</h1>
                <p>Dividends will be accrued to clients who hold positions on indices.</p>
            </div>
            <div class="mt-4 text-xs">
                <h1 class="font-bold text-sm">What is a dividend?</h1>
                <p>The distribution of a section of a company’s earnings to its shareholders is known as its dividends. Dividends are a portion of earnings chosen by the company’s board of directors and can be issued in the form of shares of stock, cash payment or property. When a company makes a profit it can reinvest this money back into the company and/or distribute the profits to its shareholders. If a company decides to pay its shareholders dividends, a fixed amount per share is designated and shareholders will receive this amount at a specific date. The ex-dividend date determines when trading in the underlying stock no longer includes an entitlement to the upcoming dividend payment and therefore on the ex-dividend date the value of the underlying share will decrease by the approximate dividend value. Anyone already holding a position in the underlying stock prior to and going into the ex-dividend date will be entitled to receive, or required to pay, the dividend depending on whether they are long or short. Anyone opening a position on the ex-dividend date will not be entitled to, or required to pay, the dividend.</p>
            </div>
            <div class="mt-4 text-xs">
                <h1 class="font-bold text-sm">Example of how dividends are applied for indices</h1>
                <p>An index typically reflects the weighted average share price of several underlying stocks trading on the same exchange, therefore if one of these stocks declares a dividend payment then the underlying share price will decrease by the dividend value and the index will also decrease by the equivalent weighted average value of the same dividend on the ex-dividend date. Clients that hold positions on indices will receive or pay the equivalent weighted average value of the same dividend on the ex-dividend date.</p>
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
                        <h1 class="text-sm font-bold mb-3">Trade indices with leverage</h1>
                        <p>Indices are available to trade with up to 20:1 leverage. Start trading with as little as $100 to control a position of $2000</p>
                    </div>
                </div>
                <div class="flex justify-between md:w-1/3 p-4 bg-gray-100">
                    <div class="w-1/3 mb-4">
                        <div class="w-16 h-16 text-gray-200 flex justify-center items-center rounded-full bg-gradient-to-r from-green-500 to-green-300">
                             <span class="material-icons text-4xl">verified_user</span>
                        </div>
                       
                    </div>
                    <div class="w-2/3">
                        <h1 class="text-sm font-bold mb-3">Indices CFDs</h1>
                        <p>Trade 24/5 on a wide range of indices

                            Trading opportunities in both a rising and falling market</p>
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
                        <p>You can easily define Stops and Limits to request positions to close at a specified price.

                            Set up price alerts to be informed of big moves.</p>
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