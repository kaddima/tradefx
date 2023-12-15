@extends('layout.layout')

@section('title', 'Forex Trading | Trade CFD on forex | Tradefx')

@section('content')
<div>
   <div class="h-72 text-white " style="background-size: cover; background-repeat:no-repeat; background-image: url('{{asset('media/mp2.jpg')}}')">
        <div class="flex items-center h-full" style="background-color: rgba(0, 0, 0, 0.7)">
            <div class="w-11/12 md:w-4/5 h-3/5 mx-auto flex justify-center items-center">
                <div>
                    <h1 class="font-bold text-xl md:text-2xl mb-3 text-center">Forex trading explained</h1>
                    <p class="text-sm text-center font-semibold md:text-sm">This guide explains all you'll need to know about currency trading, how the market works, who trades on it and how to trade currency CFDs on online platforms.</p>
                    <a href="/register" class="w-40 block py-1 text-center mt-3 md:py-2 rounded-lg mx-auto bg-orange-400 text-white font-semibold">Get started</a>
            
                </div>
            
            </div>
        </div>
    </div> 

    <div class="px-7 text-gray-400 font-bold mt-2" style="font-size: 10px">
        <ul class="flex items-center gap-3">
            <li class="flex justify-between items-center gap-2">
                <span>Learn to trade</span>
                <span class='material-icons text-sm'>chevron_right</span>
            </li>
            <li class="flex justify-between items-center gap-2">
                <span>popular markets guide</span>
                <span class='material-icons text-sm'>chevron_right</span>
            </li>
            <li class="flex justify-between items-center gap-2">
                <span class="text-orange-300"> Forex trading guide</span>
              
            </li>
        </ul>
    </div>
</div>

<div>
    <div class="flex px-7 mt-7">
        <div class="md:w-4/6 text-sm space-y-4 ">
            <h1 class="font-bold text-2xl">
                What is forex trading?
            </h1>

            <p>Currency or foreign exchange trading – often known as forex, or simply FX – is the buying and selling of international currencies with the objective of making a profit.</p>
            <p>While assets such as equities and commodities are traded on regulated exchanges, currencies are bought and sold over the counter (OTC) – meaning that trades are conducted largely between institutional counterparties in major financial centres around the world. This is called the interbank market.</p>
            <p>The biggest and most liquid of these forex trading centres is London, followed by New York, although Tokyo, Hong Kong, Frankfurt and Singapore are also important currency trading centres.</p>
            
            <div class="">
                <img class="w-full" src="{{asset('media/-infographics-Guide-to-currency-trading-1.png')}}" alt=""> 
            </div>

            <h1 class="font-bold text-2xl">What is the forex market?</h1>
            <p>Forex investors trade currency pairs – sometimes called crosses for pairs that don’t include the US dollar – assessing when one currency is likely to rise against another. If a trader believes the euro will rise against the dollar – maybe because of strong economic data in the eurozone – a long position will be taken on the EUR/USD currency pair.</p>
            <p>We’ll talk more about the different currency pairs and positioning later.</p>

            <div class="">
                <img class="w-full" src="{{asset('media/-infographics-Guide-to-currency-trading-2.png')}}" alt=""> 
            </div>

            <h1 class="font-bold text-xl">Who trades forex?</h1>
            <p>The vast majority of transactions are executed by large institutions through the interbank market, often running into hundreds of millions of dollars at a time.</p>
            <p>But smaller investors are involved and – with the advent of online trading platforms - speculators and other individual traders can now get involved in the currency markets.But smaller investors are involved and – with the advent of online trading platforms - speculators and other individual traders can now get involved in the currency markets.</p>
            <p>Here's a run through of the major players in forex:</p>

            <h1 class="font-bold text-xl">Commercial and investment banks</h1>
            <p>The forex market is vast because it acts as the engine for international trade. For example, if a business in the US wants to import goods from the UK it needs to convert dollars to pay its bill in pounds.</p>
            <p>Large financial institutions such as commercial and investment banks help facilitate this trade by acting as brokers in the forex market. Businesses will also use such institutions for converting funds for takeovers and other large international deals.</p>
            <p>As well as operating on behalf of these business clients, many financial institutions have their own proprietary trading desks where speculative investments are made for the bank's profit alone.</p>

            <h1 class="font-bold text-xl">Central banks </h1>
            <p>Acting on behalf of government policy, central banks are also involved in the forex market, often to manage foreign exchange levels and, sometimes, in direct market interventions to help influence the competitiveness of their national currencies.</p>
            
            <h1 class="font-bold text-xl">Hedge funds and other asset managers</h1>
            <p>Most asset management firms, as part of their portfolio diversification, will have exposure to the currency markets in some form. This is often through the use of currency derivatives.</p>
            
            <h1 class="font-bold text-xl">Individuals</h1>
            <p>Still at very low volumes compared to forex trade by the above institutions, retail investment is gaining traction, thanks to the increase in availability of online trading platforms that offer currency trade in CFDs and other speculative products.</p>
        

            <h1 class="font-bold text-2xl">What are the different types of forex trades</h1>
            <p>In its 2019 Triennial Central Bank Survey of Foreign Exchange and OTC Derivatives Markets Activity, the Bank for International Settlements identifies five main ways in which currencies are traded, which add up to a daily total of around $6.6tn.</p>
            
            <ul class="list-disc space-y-2 pl-5">
                <li>
                    <p>Foreign exchange swaps - accounting for $3.2tn of the daily total, these derivative instruments allow companies that have funds in different currencies to manage them more efficientl</p>
                </li>
                <li>
                    <p>Spot market - accounting for $2tn of the total, this is a direct agreement between counterparties to buy one currency against selling another at an agreed price on settlement date</p>
                </li>
                <li>
                    <p>Outright forwards - accounting for a daily $1tn, this derivative instrument assumes a "delivery price" upon conclusion of the contract at the time the contract was entered into</p>
                </li>
                <li>
                    <p>Other products - at $294bn of the daily total this category includes foreign exchange options</p>
                </li>
                <li>
                    <p>Currency swaps - at $108bn of the daily total, this is another type of derivative instrument</p>
                </li>

            </ul>
            <div class="">
                   <img class="w-full" src="{{asset('media/-infographics-Guide-to-currency-trading-3.png')}}" alt=""> 
            </div>

            <h1 class="font-bold text-2xl">How can I trade forex?</h1>
            <p>Due to the large volumes involved most brokers won't indulge currency traders unless they can put up large amounts of cash for spot or derivatives trade.</p>
            <p>However, individuals can trade contracts for difference (CFDs) in forex on online trading platforms.</p>
            <p>A CFD is a financial contract between an investor and broker, where one party agrees to pay the other the difference in the value of an asset or security. </p>
            <p>This gives the investor the choice between trading the currency pair in both directions:</p>

            <ul class="list-disc space-y-2 pl-5">
            
                <li>
                    <p>Long - for example, if you think the euro will rise against the dollar you can take a long position on the EUR/USD</p>
                </li>
                <li>
                    <p>Short - if you believe the euro will depreciate against the dollar you can take a short position on the currency pair</p>
                </li>
            </ul>

            <div class="">
                <img class="w-full" src="{{asset('media/-infographics-Guide-to-currency-trading-4_0.png')}}" alt=""> 
            </div>
          

            <h1 class="font-bold text-2xl">What is a forex trading platform?</h1>
            <p>From the top interbank traders to bedroom-based retail investors, all currency trading is performed on some kind of computer platform-based interface.</p>
            <p>All forex trading platforms - including Tradefx’s access to forex CFD trading - provide investors with appropriate tools to enable them to make their investment choices. These may include research tools such as charts, historical data and access to news and analyst reports.</p>
            <p>Retail trading platforms may have a similar look and feel to those used by professional institutional traders, but remember, it’s not institutional money you’re trading with. You will be margin trading, most likely using leverage, so be careful to use the full range of tools these platforms provide, particularly the stops.</p>
            
            <h1 class="font-bold text-2xl">Most popular currency pairs</h1>
            <p>In forex trading, currency pairs are divided into three categories:</p>

            <ul class="list-disc space-y-2 pl-5">
            
                <li>
                    <p>Major currency pairs</p>
                    <p>These are the most actively-traded pairs and offer greater liquidity and lower volatility. There are seven major currency pairs, and all are US dollar crosses - GBP/USD, EUR/USD, USD/JPY, USD/CHF, USD/CAD, NZD/USD and AUD/USD.</p>
                </li>
                <li>
                    <p>Minor currency pairs</p>
                    <p>This is a currency pair that does not include the dollar as one of the crosses. Minor currency pairs are generally less liquid so can see greater price volatility. This means – for the purpose of CFD trading – they can offer greater opportunities for profit and loss. EUR/GBP, EUR/AUD, GBP/JPY, NZD/JPY and GBP/CAD are examples of minor currency pairs.</p>
                </li>
                <li>
                    <p>Exotic currency pairs</p>
                    <p>These usually include a cross from an emerging market country. Low liquidity and high volatility can make for some rapid and unpredictable price swings. Examples include EUR/TRY, USD/HKD, NZD/SGD, GBP/ZAR, NOK/RUB and AUD/MXN.</p>
                </li>
            </ul>

            <div class="">
                <img class="w-full" src="{{asset('media/-infographics-Guide-to-currency-trading-5.png')}}" alt=""> 
            </div>

            <h1 class="font-bold text-2xl">Analysis of the forex market</h1>
            <p>Market analysis can provide important information on positioning when you trade forex – when a currency pair is likely to move in price and in what direction, where to enter a trade and when to exit.</p>
            <p>Three different types of market analysis are employed by traders:</p>

            <h1 class="font-bold text-xl">Fundamental analysis</h1>
            <p>This can help identify opportunities by the analysis of economic, geopolitical and social forces that are likely to influence price action in the forex market. Interest rates have the biggest influence on currency prices – the higher the rate of interest, the greater the yield on assets priced in that currency. </p>
            <p>Therefore, traders are looking for economic data that could support the need for higher interest rates – the most important of these is inflation. Any set of economic data that could have an impact on inflation – for example GDP, employment growth, manufacturing output – has the potential to move currency prices.</p>
            <p>Domestic and global political events such as elections that return pro-business governments and international trade disputes can also have an impact on the forex market.</p>
            
            <div class="">
                <img class="w-full" src="{{asset('media/-infographics-Guide-to-currency-trading-6.png')}}" alt=""> 
            </div>

            <h1 class="font-bold text-xl">Technical analysis</h1>
            <p>Technical analysis techniques help to forecast future price movements based on the analysis of historic price patterns using a range of tools such as moving averages, oscillators and other indicators.</p>
           
            <div class="">
                <img class="w-full" src="{{asset('media/analysis_chart.png')}}" alt=""> 
            </div>

            <h1 class="font-bold text-xl">Sentiment analysis</h1>
            <p>Weekly commitment of traders reports from the Commodities Futures Trading Commission show positioning in forex futures products. This data can be useful in building up a picture of when certain currency pairs are becoming particularly heavily traded by institutional traders and when sentiment begins to change.</p>
        
            <h1 class="font-bold text-2xl">Forex trading strategies</h1>
            <p>Traders employ a wide range of strategies to trade forex markets, many using the technical analysis tools identified above.</p>
            <p>Here’s a few of the most popular:</p>
            <p>Carry trade – primarily used by institutional traders, lower yielding currencies are borrowed to fund the purchase of higher yielding currencies, resulting in positive “carry” once the trade is settled.</p>
            <p>Position trading – this is a long-term strategy focused on fundamental analysis.</p>
            <p>Trend trading – focusing on medium- or long-term price trends, exit and entry points into a trade can be identified using various oscillator tools.</p>
            <p>Price action trading – can be employed over long-, medium- and short-term investment periods and involves the technical analysis of historical price movement to identify future trends</p>
            <p>Swing trading – technical analysis is used to identify likely turning points - tops or bottoms - in the price of a currency pair. Long and short positions can be entered accordingly.</p>
            <p>Scalping - this describes the strategy of taking small profits many times over. Multiple trades are usually entered and exited in a single day. This strategy is now often undertaken by high-frequency traders using computer algorithms that can enter and exit trades within seconds, taking profits from fractional price moves - or pips.</p>

            <div class="">
                <img class="w-full" src="{{asset('media/-infographics-Guide-to-currency-trading-7.png')}}" alt=""> 
            </div>

            <h1 class="font-bold text-2xl">Advantages of trading forex CFDs</h1>
            <ul class="list-disc space-y-2 pl-5">
            
                <li>
                   <p>Leverage. Leverage can make your wins go even further – but can similarly increases losses. You can trade CFDs on margin, meaning you can gain greater exposure for your initial capital. This is done by putting up only a fraction of the value of a trade and essentially borrowing the rest from your broker. This is known as leveraged trading and can amplify your wins as well as your risk and the size of your losses.</p>
                </li>
                <li>
                    <p>Hedging. Hedging is the technique where someone opens a position to offset any potential loss that their current holdings may incur. The forex market is particularly volatile, which is what attracts a lot of traders. However, some may still want to employ hedging techniques to mitigate loss. Traders can take positions in markets that are negatively correlated, such as holding a long position on USD/CAD to hedge against falling oil prices</p>
                 </li>
                 <li>
                    <p>Tax-efficiency. CFDs are exempt from stamp duty and losses can be offset against profits in other holdings that contribute to your capital gains tax liability. This is particularly useful when using CFDs to hedge.</p>
                 </li>
            </ul>
            
            <h1 class="font-bold text-2xl">Forex trading terminology</h1>
            <p>Before you enter into forex trading it's useful to know some of the common lingo used by traders. Here's a simple glossary of some of the terms you'll come across:</p>
            <p>Aussie - slang term for the Australian dollar</p>
            <p>Ask price - the price at which a trader can bu</p>
            <p>Base currency - the first currency shown in a currency pair - in USD/EUR the US dollar is the base currency</p>
            <p>Base rate - the lending rate set by a country's central bank</p>
            <p>Basis point - equal to 1/100th of 1%, or 0.01% - or 0.0001 in the price of a currency pair. Often called a "pip"</p>
            <p>Bear market/bearish - indicating a market or asset price in decline</p>
            <p>Bear - traders who expect prices to fall and may be holding short positions</p>

            <h1 class="font-bold text-xl md:text-2xl">Why use Tradefx’s forex trading platform?</h1>
            <h1 class="font-bold text-xl">Advanced AI technology at its core</h1>
            <p>A Facebook-like news feed provides users with personalised and unique content depending on their preferences. If a trader makes decisions based on biases, the innovative News Feed offers a range of materials to put him back on the right track. The neural network analyses in-app behaviour and recommends videos and articles to help polish your investment strategy.</p>
            <h1 class="font-bold text-xl">Trading on margin</h1>
            <p>Providing CFC trading on margin (up to 30:1 for major currency pairs), Tradefx gives you access to the wide range of popular forex markets without you needing to have a large amount of funds in your account.</p>
            <h1 class="font-bold text-xl">Trading the difference</h1>
            <p>When trading CFDs on currency pairs you don’t buy the underlying base currency itself. You instead speculate on the rise or fall of its value. CFD trading is no different from traditional trading in terms of its associated strategies. When trading CFDs you can go short or long, set stop and limit losses.</p>
            <h1 class="font-bold text-xl">All-round trading analysis</h1>
            <p>The browser-based platform allows traders to shape their own market analysis and forecasts with sleek technical indicators. Tradefx provides live market updates and various chart formats, available on desktop, iOS, and Android. Study live currency pairs within the platform while simultaneously browsing tailored news based on your trading behaviour.</p>
            <h1 class="font-bold text-xl">Focus on safety</h1>
            <p>Captal.com puts a special emphasis on safety. Capital com group is licensed by CySEC, FCA, ASIC, FSA & NBRB, it complies with all regulations and ensures that its clients’ data security comes first.</p>
            <p></p>

        </div>
        <div class="md:w-2/6 pl-5 hidden md:block">
            <div class="border-l-2 mt-2 pl-3 border-orange-300">
                <ul class="space-y-1 mt-3 ">
                    <li><a href="/what-is-a-margin">what is a margin?</a></li>
                    <li><a href="what-is-cfd-trading">CFD trading guide</a></li>
                    
                </ul>
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

@endsection