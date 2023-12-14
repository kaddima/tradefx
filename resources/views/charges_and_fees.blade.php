@extends('layout.layout')

@section('title', 'Why pay more')

@section('content')

<div class="bg-blue-50 text-center px-5 py-6">
    <div class="lg:w-3/5 mx-auto">
        <h1 class="font-bold text-xl mb-5">Charges and fees</h1>
        <p>hlytopinvestments.com provides most of its brokerage services for free. We keep our fee policy transparent. That means if we need to charge you, we will make sure these fees are clear in the beginning. Our fees are mainly based on spread charges, which are competitive across the market.</p>
        <a href="/register" class="w-40 block mt-5 py-4 rounded-lg mx-auto bg-orange-400 text-white font-semibold">Get started</a>
    
    </div> 
</div>

<div class="w-11/12 lg:w-3/5 mx-auto mt-5 md:mt-10">
    <div class="">
        <h1 class="font-bold text-lg">Why pay more?</h1>
        <p class="text-sm">At hlytopinvestments.com, we think you’d be hard pushed to find a more competitive service elsewhere. That’s why we’re committed to offering almost all of our services free of charge – so that you can be sure there will never be any hidden charges. We are compensated for our services through Buy/Sell spreads, which we know to be the best in the industry</p>
    </div>
    <div class="">
        <h1 class="font-bold text-lg">No commission</h1>
        <p class="text-sm">Unlike our competitors, you can be sure that trading with hlytopinvestments.com will incur no fees for</p>
        <div class="flex items-center">
            <div class="md:w-2/5 py-6">
                <div class="flex font-extrabold text-orange-400 mx-auto justify-center border-2 w-44 h-44 rounded-full border-orange-400  items-center">
                    <span class="md:text-4xl">0</span>
                    <span class="material-icons md:text-4xl">percent</span>
                </div>
            </div>
            <div class="w-3/5">
                <ul class="space-y-3">
                    <li class="flex items-center gap-3">
                        <span class="material-icons text-orange-400">trending_flat</span>
                        <span>Deposit</span>
                    </li>
                    <li class="flex items-center gap-3">
                        <span class="material-icons text-orange-400">trending_flat</span>
                        <span>Withdrawal</span>
                    </li>
                    <li class="flex items-center gap-3">
                        <span class="material-icons text-orange-400">trending_flat</span>
                        <span>Real-time Quotes</span>
                    </li>
                    <li class="flex items-center gap-3">
                        <span class="material-icons text-orange-400">trending_flat</span>
                        <span>Educational material</span>
                    </li>
                    <li class="flex items-center gap-3">
                        <span class="material-icons text-orange-400">trending_flat</span>
                        <span>Dynamic charts and indicators</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div class="mt-8 space-y-3">
        <h1 class="font-bold text-lg">Where we make our money</h1>
        <p class="text-sm">In exchange for offering you the best trading experience, hlytopinvestments.com is compensated for its services through the Buy/Sell spread. It’s simple: when you open a new position, you ‘pay’ the spread – the difference between the Buy and Sell prices.</p>
        <p>The spread is always incorporated into our quoted rated and is never an additional charge payable by you.</p>
        <p>The price of the spread varies across instruments, so the best way to check the spread for your chosen instrument is to check the live spread information available for each financial instrument on the website as well as on the mobile and web platform.

            Our spreads may increase and decrease depending on market conditions. However, we try to provide our customers with competitive spreads. </p>
    </div>
    <div class="mt-5 space-y-3">
        <h1 class="font-bold text-lg">We cover all deposit and withdrawal costs</h1>
        <p class="text-sm">We’ve been voted the Best Trading Platform and Most Innovative Broker for a reason: we cover all fees associated with deposits and withdrawals. Any fees you do incur when transferring money to and from your hlytopinvestments.com account are levied by your bank or payment issuer.</p>
        <p>Oh, and did we mention? We convert all foreign currencies not supported by the selected payment method so you don’t have to.</p>
    </div>
    <div class="mt-5 space-y-3">
        <h1 class="font-bold text-lg">Additional fees</h1>
        <p class="text-sm">Depending on your trading habits, we might also charge the following fees (don’t worry, we’re still cheaper!):</p>
    </div>

    <div class="mt-5 space-y-3">
        <h1 class="font-bold text-lg"></h1>
        <p class="text-sm">Unlike our competitors, hlytopinvestments.com charges an overnight fee that is based only on the leverage provided rather than the entire value of your position for Cryptocurrencies, Shares and Thematic Investments.</p>
        <p>The overnight fee charge on Indices, Commodities and FX is based on the entire value of your position.</p>
        <p>As the overnight fee varies across instruments, you can find the specific overnight fee for your chosen instruments in the market information panel in the hlytopinvestments.com platform.</p>
    </div>

</div>

<div class="bg-gray-900 text-white font-bold mt-8">
    <div class="w-10/12 md:w-4/5 mx-auto text-xs text-center py-10">
        <h1 class="text-lg">Still looking for a broker you can trust?</h1>
        <p class="text-xs font-semibold">Join the 50.000+ investors  that chose to trade with hlytopinvestments.com</p>
        
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