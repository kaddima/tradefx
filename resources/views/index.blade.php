@extends('layout.layout')

@section('title', 'Start your trading journey')

@section('content')
    <div>
        <div style="background-image: url('{{asset('images/trader-dominance-desktop1.jpg')}}')">
            <div class="w-4/5 mx-auto">
                <div class="md:w-2/5">
                    <div class="space-y-7 py-12">
                        <h1 class="text-4xl md:text-6xl font-extrabold">
                            Trading anywhere else would be settling
                        </h1>
                        <p class="md:text-lg">Stay on top of the market with our innovative technology, extensive product access, personalized education, and award-winning service.</p>

                        <a href="/register" class="block w-2/5 md:w-3/5 py-2 md:py-4 text-slate-100 text-center font-bold rounded-lg bg-orange-500">Get Started</a>
                    </div>
                 </div>
            </div>
        </div>
        <div class="w-4/5 mx-auto flex flex-col md:flex-row justify-between gap-10 py-10">
            <div class="flex gap-2">
                <img src="{{asset('images/crd-low-cost.svg')}}" class="w-16" alt="">
                <div>
                    <h1 class="font-semibold">Lowest Costs</h1>
                    <span class="text-xs">Our transparent, low commissions, starting at $0<sup>2</sup>, and low financing rates minimize costs to maximize returns.</span>
                </div>
            </div>
            <div class="flex gap-2">
                <img src="{{asset('images/crd-global-access.svg')}}" class="w-16" alt="">
                <div>
                    <h1 class="font-semibold">Global Access</h1>
                    <span class="text-xs">Invest globally in stocks, crypto, commodities, currencies, oil markets and funds from a single unified platform.</span>
                </div>
            </div>
            <div class="flex gap-2">
                <img src="{{asset('images/crd-technology.svg')}}" class="w-16" alt="">
                <div>
                    <h1>Premier Technology</h1>
                    <span class="text-xs">hlytop investment's powerful suite of technology helps you optimize your trading speed and efficiency and perform sophisticated portfolio analysis.</span>
                </div>
            </div>
        </div>
        <div class="bg-main-dark-bg text-gray-50 py-10 md:py-20">
            <div class="text-center w-4/5 mx-auto">
                <h1 class="font-extrabold text-3xl md:text-6xl">Chart. Chat. Trade. Repeat</h1>
                <p class="text-xl font-semibold mt-5">Join 30 millions traders and investors making better, brighter decisions in the world markets.</p>

            </div>

            <div class="mt-15 px-5 w-4/5 mx-auto">
                <video class="w-full" autoplay loop muted src="{{asset('media/binray.mp4')}}"></video>
            </div>
        </div>
        <div class="bg-white py-20">
            <div class="w-4/5 mx-auto">
                <div class="flex flex-col md:flex-row gap-5">
                    <div class="md:w-2/4">
                        <img src="{{asset('images/trading-tech.jpeg')}}" alt="">
                    </div>
                    <div class="md:w-2/4 space-y-5">
                        <h1 class="pl-3 text-2xl">Leverage Technology Built to Help You Get Ahead</h1>
                        <div class="flex flex-col md:flex-row flex-wrap text-sm space-y-3 md:space-y-0">
                            <div class="md:w-2/4 space-y-2 px-3">
                                <h1 class="text-xl font-semibold text-orange-400">Trading Platforms</h1>
                                <p>Powerful enough for the professional trader but designed for everyone.</p>
                            </div>
                            <div class="md:w-2/4 space-y-2 px-3">
                                <h1 class="text-xl font-semibold text-orange-400">Order Types and Algos</h1>
                                <p>100+ order types – from limit orders to complex algorithmic trading – help you execute any trading strategy.</p>
                            </div>
                            <div class="md:w-2/4 space-y-2 px-3">
                                <h1 class="text-xl font-semibold text-orange-400">Free Trading Tools</h1>
                                <p>Spot market opportunities, analyze results, manage your account and make better decisions with our free trading tools.</p>
                            </div>
                            <div class="md:w-2/4 space-y-2 px-3">
                                <h1 class="text-xl font-semibold text-orange-400">Comprehensive Reporting</h1>
                                <p>Real-time trade confirmations, margin details, transaction cost analysis, sophisticated portfolio analysis and more.</p>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>

        <div class="w-4/5 m-auto mt-5">
            <h1 class="font-extrabold md:text-6xl leading-none text-center">Real Time updates & news alerts for 2,100+ markets</h1>

            <h1 class="text-3xl font-bold my-5 text-orange-400">Market summary</h1>
            <div id="assets" class=" m-auto mt-10">

            </div>

            <h1 class="text-3xl font-bold my-7 text-orange-400">News Snaps</h1>
            <div class="flex mt-10">
                <iframe scrolling="no" allowtransparency="true" frameborder="0" src="https://s.tradingview.com/embed-widget/timeline/?locale=en#%7B%22colorTheme%22%3A%22light%22%2C%22isTransparent%22%3Afalse%2C%22displayMode%22%3A%22regular%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A600%2C%22utm_source%22%3A%22indicescapitalmarket.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22timeline%22%7D" style="box-sizing: border-box; height: 600px; width: 100%;"></iframe>

            </div>
        </div>

        <div class="bg-white py-20">
            <div class="w-4/5 mx-auto">
                <div class="flex flex-col md:flex-row gap-5 items-center">

                    <div class="md:w-7/12 space-y-5 pr-7">
                        <h1 class="text-2xl">A Broker You Can Trust</h1>

                        <p>When placing your money with a broker, you need to make sure your broker is secure and can endure through good
                            and bad times. Our strong capital position, conservative balance sheet and automated risk controls are designed
                            to protect our clients from large trading losses.</p>
                          <div class="flex flex-col md:flex-row flex-wrap gap-10 spacey-5 md:space-y-0">
                            <div class="mr-2">
                                <h1 class="text-3xl">$448M</h1>
                                <span class="text-xs">Equity capital</span>
                            </div>
                            <div class="mr-2">
                                <h1 class="text-3xl">76.5%</h1>
                                <span class="text-xs">Privately Held*</span>
                            </div>
                            <div class="mr-2">
                                <h1 class="text-3xl">$261M</h1>
                                <span class="text-xs">Excess Regulatory Capital*</span>
                            </div>
                            <div class="mr-2">
                                <h1 class="text-3xl">1.1M</h1>
                                <span class="text-xs">Client Accounts*</span>
                            </div>
                            <div>
                                <h1 class="text-3xl">202K</h1>
                                <span class="text-xs">Daily Avg Revenue Trades*</span>
                            </div>
                          </div>
                    </div>
                    <div class="md:w-5/12">
                        <img src="{{asset('images/home-security.jpg')}}" alt="">
                    </div>
                </div>

            </div>
        </div>

        <div class="bg-white py-20">
            <div class="w-4/5 mx-auto">
                <div class="flex flex-col md:flex-row gap-5">
                    <div class="md:w-2/4">
                        <img src="{{asset('images/home-low-cost.jpg')}}" alt="">
                    </div>
                    <div class="md:w-2/4 space-y-5">
                        <h1 class="pl-3 text-2xl">Experience the Lowest Costs
                            in the Industry</h1>
                        <div class=" text-sm">
                           <ul class=" text-sm space-y-3">
                                <li class="flex gap-2">
                                    <span class='material-icons font-extrabold text-orange-500'>check</span>
                                   <p>Low commissions starting at $0 with no added spreads, ticket charges, platform fees, or account minimums</p>
                                </li>
                                <li class="flex gap-2">
                                    <span class='material-icons font-extrabold text-orange-500'>check</span>
                                   <p>hlytop investment helps support best execution by searching for the best available prices for stocks, options and combinations across exchanges and dark pools.</p>
                                </li>
                                <li class="flex gap-2">
                                    <span class='material-icons font-extrabold text-orange-500'>check</span>
                                   <p>Margin rates up to 75% lower than the industry and earn USD 1.83% on uninvested cash</p>
                                </li>
                                <li class="flex gap-2">
                                    <span class='material-icons font-extrabold text-orange-500'>check</span>
                                   <p>Earn extra income on your lendable shares</p>
                                </li>
                           </ul>

                           <a href="/what-is-cfd-trading" class="p-2 w-32 text-center border block mt-5 border-orange-500 rounded">Learn More</a>
                        </div>

                    </div>
                </div>

            </div>
        </div>

        <div style="background-image: url('{{asset('images/candlestick-bg.jpg')}}')">
            <div class="w-4/5 mx-auto text-slate-200 space-y-10 py-20">
                <div class="flex flex-col md:flex-row justify-between text-center">
                    <div class="">
                        <h3 class="uppercase">
                            step 1
                        </h3>
                        <h1 class="text-xl mt-4">Complete the Application</h2>
                        <p class="text-sm">It only takes a few minutes</p>

                    </div>
                    <div class="">
                        <h3 class="uppercase">
                            step 2
                        </h3>
                        <h1 class="text-xl mt-4">Fund Your Account</h1>
                        <p class="text-sm">We offer Varieties of methods to funds your account</p>

                    </div>
                    <div class="">
                        <h3 class="uppercase">
                            step 3
                        </h3>
                        <h1 class="text-xl mt-4">Get Started Trading</h1>
                        <p class="text-sm">Take your investing to the next level</p>

                    </div>
                </div>
                <a href="/register" class="block w-32 py-2 mx-auto text-slate-100 text-center font-bold rounded-lg bg-orange-500">Get Started</a>

            </div>
        </div>


    </div>
@endsection

