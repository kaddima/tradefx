@extends('layout.layout')

@section('title', 'Markets | CFD Trading')

@section('content')

<div class="h-96 overflow-hidden">
    <div class="mx-auto w-11/12 md:4/5 xl:w-3/5 relative h-full flex items-center">
        <div class="absolute w-full z-20 md:w-4/5">
            <h1 class="text-xl md:text-4xl font-extrabold">CFD Trading on over 3,100 markets</h1>
            <p class="mt-3">CFD Trading with Tradefx gives you access to over 6,100 markets including stocks, equities, indices and Forex. Enjoy low-spreads and fast execution on an intuitive CFD trading platform. Tailored for traders that want to take advantage of potential opportunities in global markets.</p>
        </div>
        <div class="absolute h-full z-10 md:right-0 -mt-16">
            <img class="h-full" src="{{asset('media/cfd-page-banner.png')}}">
        </div>
    </div>
</div>

<div class="-mt-8">
    <iframe scrolling="no" allowtransparency="true" frameborder="0" 
    src="https://s.tradingview.com/embed-widget/ticker-tape/?locale=en#%7B%22symbols%22%3A%5B%7B%22proName%22%3A%22FOREXCOM%3ASPXUSD%22%2C%22title%22%3A%22S%26P%20500%22%7D%2C%7B%22proName%22%3A%22FOREXCOM%3ANSXUSD%22%2C%22title%22%3A%22Nasdaq%20100%22%7D%2C%7B%22proName%22%3A%22FX_IDC%3AEURUSD%22%2C%22title%22%3A%22EUR%2FUSD%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3ABTCUSD%22%2C%22title%22%3A%22BTC%2FUSD%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3AETHUSD%22%2C%22title%22%3A%22ETH%2FUSD%22%7D%5D%2C%22showSymbolLogo%22%3Atrue%2C%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Afalse%2C%22displayMode%22%3A%22adaptive%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A46%2C%22utm_source%22%3A%22indicescapitalmarket.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22ticker-tape%22%7D" 
    style="box-sizing: border-box; height: 46px; width: 100%;"></iframe>
</div>

<div class="w-4/5 mx-auto mt-10 gap-2">
    <h1 class="text-xl md:text-2xl w-full font-extrabold text-center">Benefits of trading CFDs with Tradefx</h1>
    <div class="flex  md:flex-row flex-col-reverse mt-5">
        <div class="md:w-2/5"> 
            <ul class="space-y-5 font-semibold">
                <li>
                    <span class="material-icons mr-7 text-xs inline-flex items-center justify-center text-orange-400 
                    border border-orange-400 h-5 w-5 rounded-full">done_all</span>
                    <span>3,100+ Markets</span>
                </li>
                <li>
                    <span class="material-icons mr-7 text-xs inline-flex items-center justify-center text-orange-400 
                    border border-orange-400 h-5 w-5 rounded-full">done_all</span>
                    <span>0 Commission</span>
                </li>
                <li>
                    <span class="material-icons mr-7 text-xs inline-flex items-center justify-center text-orange-400 
                    border border-orange-400 h-5 w-5 rounded-full">done_all</span>
                    <span>Tight spreads</span>
                </li>
                <li>
                    <span class="material-icons mr-7 text-xs inline-flex items-center justify-center text-orange-400 
                    border border-orange-400 h-5 w-5 rounded-full">done_all</span>
                    <span>Low overnight fees</span>
                </li>
                <li>
                    <span class="material-icons mr-7 text-xs inline-flex items-center justify-center text-orange-400 
                    border border-orange-400 h-5 w-5 rounded-full">done_all</span>
                    <span>Instant price alerts</span>
                </li>
                <li>
                    <span class="material-icons mr-7 text-xs inline-flex items-center justify-center text-orange-400 
                    border border-orange-400 h-5 w-5 rounded-full">done_all</span>
                    <span>Advanced charts</span>
                </li>
                <li>
                    <span class="material-icons mr-7 text-xs inline-flex items-center justify-center text-orange-400 
                    border border-orange-400 h-5 w-5 rounded-full">done_all</span>
                    <span>MT4 supported</span>
                </li>
                <li>
                    <span class="material-icons mr-7 text-xs inline-flex items-center justify-center text-orange-400 
                    border border-orange-400 h-5 w-5 rounded-full">done_all</span>
                    <span>All major markets</span>
                </li>
                <li>
                    <span class="material-icons mr-7 text-xs inline-flex items-center justify-center text-orange-400 
                    border border-orange-400 h-5 w-5 rounded-full">done_all</span>
                    <span>Go short or long</span>
                </li>
            </ul>
        </div>
        <div class="md:w-3/5 ">
            <iframe scrolling="no" allowtransparency="true" frameborder="0" src="https://s.tradingview.com/embed-widget/forex-cross-rates/?locale=en#%7B%22width%22%3A%22100%25%22%2C%22height%22%3A400%2C%22currencies%22%3A%5B%22EUR%22%2C%22USD%22%2C%22JPY%22%2C%22GBP%22%2C%22CHF%22%2C%22AUD%22%2C%22CAD%22%2C%22NZD%22%2C%22CNY%22%5D%2C%22isTransparent%22%3Afalse%2C%22colorTheme%22%3A%22light%22%2C%22utm_source%22%3A%22indicescapitalmarket.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22forex-cross-rates%22%7D" style="box-sizing: border-box; width: 100%; height:100%;" class="max-h-full"></iframe>
                
        </div>
    </div>
</div>

<div class="bg-gray-900 text-white font-bold mt-8">
    <div class="w-10/12 md:w-4/5 mx-auto text-xs text-center py-10">
        <h1 class="text-2xl">Apply for a CFD trading account in minutes</h1>
        <p class="text-xs font-semibold"></p>
        
        <div class="mt-6 flex flex-col md:flex-row gap-3 justify-between ">
            <div class="md:flex-1">
                <div class="w-12 h-12 mb-4 flex justify-center items-center border rounded-full"><span class="material-icons">person_add</span></div>
                <h1 class="text-left text-xl">1. Sign up with Tradefx</h1>
                <p class="text-sm font-bold mt-3 text-left">It is simple to apply for a CFD trading account with Tradefx. You will need then to complete verification, which may require you to provide proof of identity and proof of address documents.</p>
            </div>
            <div class=" md:flex-1">
                <div class="w-12 h-12 mb-4 flex justify-center items-center border rounded-full"><span class="material-icons">credit_card</span></div>
                <h1 class="text-left text-xl">2. Deposit funds</h1>
                <p class="text-sm font-bold mt-3 text-left">Once your account is verified, you can deposit funds into your account using bank transfer, credit/debit card and other payment methods which you can find on our website.</p>
            </div>
            <div class="md:flex-1">
                <div class="w-12 h-12 mb-4 flex justify-center items-center border rounded-full"><span class="material-icons">stacked_line_chart</span></div>
                <h1 class="text-left text-xl">3. Spot a potential trading opportunity</h1>
                <p class="text-sm font-bold mt-3 text-left">You can trade on a variety of assets on our advanced platform and use our excellent charting tools to spot your entry</p>
            </div>
            <div class="md:flex-1">
                <div class="w-12 h-12 mb-4 flex justify-center items-center border rounded-full"><span class="material-icons">done_all</span></div>
                <h1 class="text-left text-xl">3. Place your order</h1>
                <p class="text-sm font-bold mt-3 text-left">Decide whether you want to opt for a buy or sell order and then open your position.</p>
            </div>
        </div>
    </div>
</div>

<div class="w-4/5 mx-auto mt-10">
    <h1 class="text-xl md:text-2xl w-full font-extrabold text-center">Benefits of trading CFDs with Tradefx</h1>
    <div class="flex flex-col md:flex-row mt-5 gap-3">
        <div class="md:w-3/6"> 
            <ul class="space-y-5 font-semibold">
                <li>
                   <div class="flex items-center mb-3">
                        <span class="material-icons">percent</span>
                        <span class="inline-block ml-3">0 Commission</span>
                    </div> 
                    <p class="text-xs">0 commission means exactly that. You can trade CFDs online without worrying about hidden fees. You only pay for the spread which is easily viewable and competitive. There are also no fees for withdrawals or deposits. You can start with as little as £20 ($20 USD €20 $20 AUD) by card.</p>
                </li>
                <li>
                
                    <div class="flex items-center mb-3">
                         <span class="material-icons">shield</span>
                         <span class="inline-block ml-3">Secure broker</span>
                     </div> 
                     <p class="text-xs">You can trade with a CFD provider that is secure, regulated and reliable. Your funds remain protected and the platform utilises the latest encryption technologies.</p>
                </li>
                <li>
                
                    <div class="flex items-center mb-3">
                         <span class="material-icons">favorite</span>
                         <span class="inline-block ml-3">Fantastic customer support</span>
                     </div> 
                     <p class="text-xs">With Tradefx help is always at hand. We offer 24/7 customer support in 12+ languages.</p>
                </li>
                
            </ul>
        </div>
        <div class="md:w-3/6">
            <ul class="space-y-5 font-semibold">
                <li>
                
                   <div class="flex items-center mb-3">
                        <span class="material-icons">pie_chart</span>
                        <span class="inline-block ml-3">Robust Risk Management</span>
                    </div> 
                    <p class="text-xs">Manage your risk with stop loss, guaranteed stops and take profit orders. Take advantage of advanced charting tools and trade on a platform that offers post trade analysis to help clients understand their trading behavior.</p>    
                </li>
                <li>
                
                   <div class="flex items-center mb-3">
                        <span class="material-icons">bar_chart</span>
                        <span class="inline-block ml-3">Advanced charts</span>
                    </div>
                    <p class="text-xs">Tradefx offers an exceptional online CFD trading experience with over 75 technical indicators available alongside instant price alerts. You can track movements on assets with ease and make your move with the help of advanced tools.</p> 
                </li>
                <li>
                
                   <div class="flex items-center mb-3">
                        <span class="material-icons">lightbulb</span>
                        <span class="inline-block ml-3">Top educational materials</span>
                    </div> 
                    <p class="text-xs">Learn more about trading with in-depth guides, webinars, videos and so much more. With Tradefx, you can access interactive resources that can help you make more informed trading decisions.</p>
                </li>
                
            </ul>
        </div>
    </div>
</div>

<div class="bg-gray-900 text-white font-bold mt-8">
    <div class="flex flex-col md:flex-row gap-4 w-4/5 mx-auto py-10">
        <div class="md:w-2/5 text-black">
            <div class="p-3 bg-gray-400 w-4/5 rounded-tl-xl rounded-tr-xl rounded-br-xl">
                <span>Hello, can I trade without using leverage?</span>
            </div>
            <div class="p-3 bg-orange-400 mt-4 w-4/5 float-right rounded-tl-xl rounded-tr-xl rounded-bl-xl">
                <span>Sure, you can view and change your current leverage in your app settings (Account > My accounts > Trading options). In case you wish to use your own funds only you should set the leverage 1:1</span>
            </div>
            <div class="clearfix"></div>
            <div class="p-3 bg-gray-400 mt-4 w-4/5 rounded-tl-xl rounded-tr-xl rounded-br-xl">
                <span>Great thanks!</span>
            </div>
        </div>
        <div class="mt-8 md:w-3/5 md:pl-5">
            <h1 class="text-2xl md:text-4xl">With Tradefx help is always at hand.</h1>
            <p class="text-sm md:mt-8 md:text-lg">We offer 24/7 customer support</p>
            <a href="/register" class="w-40 block mt-8 py-4 text-center border rounded-3xl bg-gray-700 text-white font-semibold">Got a questions</a>
            
        </div>
    </div>
</div>

<div class="md:w-4/5 mx-auto rounded-3xl text-gray-200 mt-8 bg-main-dark-bg py-5 px-10">
    <div class="md:flex justify-between py-3 border-b-2 border-gray-100">
        <span>Still looking for a broker you can trust?</span>
        <span class="text-xs hidden md:block">Tradefx Group</span>
    </div>

    <div class="flex flex-col md:flex-row gap-3 font-semibold">
        <div class="flex-1 md:space-y-2">
            <h1 class="text-2xl font-extrabold text-orange-400">90,000+</h1>
            <p>Traders</p>
        </div>
        <div class="flex-1 space-y-1 md:space-y-2">
            <h1 class="text-2xl font-extrabold text-orange-400">15,000+</h1>
            <p>Active clients monthly</p>
        </div>
        <div class="flex-1 md:space-y-2">
            <h1 class="text-2xl font-extrabold text-orange-400">18,000,000+</h1>
            <p>Monthly investing volume</p>
        </div>
        <div class="flex-1 md:space-y-2">
            <h1 class="text-2xl font-extrabold text-orange-400">3,000,000+</h1>
            <p>Withdrawn each month</p>
        </div>
    </div>
</div>

@endsection




