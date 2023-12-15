@extends('layout.layout')

@section('title', 'About | Compliance')

@section('content')
<div>
    <div class="w-4/5 md:w-3/5 mx-auto">
        <div>
            <h1 class="text-xl md:text-2xl font-bold mb-5">Compliance</h1>
            <p>At Tradefx, we ensure we are fully transparent about our business model. We disclose all related information and inform users about charges that apply when trading with our platform.</p>
        </div>

        <div class="mt-5 space-y-4">
            <h1 class="text-xl md:text-2xl font-bold">Leveraged Trading</h1>
            <p>Tradefx trading platform allows users to trade on leveraged funds. This means that you can trade greater amounts than you deposited, i.e. invest on margin.</p>
            <h6 class="mb-5">Example</h6>
            <p>Let’s say you’ve deposited $1,000 on your Tradefx account. The leverage is 30:1. That means you can trade investments valued up to $30,000. The minimum account value you need to maintain in your account at all times (e.g. the margin requirement) is one thirtieth (1/30) or 2% of your investments value.</p>
            <p>Be aware that trading on margin magnifies both potential returns and potential losses. Tradefx provides its users with an effective way to manage risk and avoid a negative account balance.</p>
            <p>Negative Balance Protection</p>
            <p>The size of the potential loss is limited to the funds held by us for and on your behalf, in relation to your trading account.</p>
        </div>

        <div class="mt-5 space-y-4">
            <h1 class="text-xl md:text-2xl font-bold">Spread</h1>
            <p>The spread is the difference between the ask price (on which you buy securities) and the bid price (on which you sell securities) of a particular CFD. When opening and closing a trade, Tradefx users effectively pay a spread equivalent to this difference.</p>
            <h6 class="mb-3">Example</h6>
            <p>Apple CFDs are quoted at $141.50/$141.70, then the spread equals to 20 cents. If this spread remains at 20 cents, when you close your trade you will effectively pay 20 cents for every share traded as a spread.</p>
        </div>

        <div class="mt-5 space-y-4">
            <h1 class="text-xl md:text-2xl font-bold">Overnight Premiums</h1>
            <p>To start trading with Tradefx, users first need to make a deposit. Since Tradefx allows users to trade larger amounts than originally deposited, it means there is a funding fee involved. This funding fee, called ‘the Overnight Premium’, is only charged if a trade is left open overnight.</p>
            <p>This means, if you close your position within the same day, you don’t pay this Premium.</p>
            <p>The Overnight Premium rates are derived based on monthly benchmark interbank rates.</p>
            <p>Overnight Premium figures and cut-off times for charging them can be found in the instruments’ details section.</p>
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