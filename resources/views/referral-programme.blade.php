@extends('layout.layout')

@section('title', 'Start trading | share your trading experience with your friends')

@section('content')

<div class="md:h-72 text-gray-200 bg-teal-900 p-5">
    <div class="w-11/12 md:h-full mx-auto md:flex gap-5 items-center">
        <div>
            <img class="w-3/5 md:w-4/5 mx-auto" src="{{asset('media/ref-banner.png')}}" alt="">
        </div>
        <div class="text-center md:text-left">
            <h1 class="font-bold text-xl md:text-2xl mb-3">Refer a friend</h1>
            <p class="text-xs md:text-sm">Invite like-minded traders to open a CFD trading
                account with us and earn up to $100.</p>
            <a href="/register" class="w-40 block mx-auto md:mx-0 py-1 text-center mt-3 md:py-2 rounded-lg bg-orange-400 text-white font-semibold">Get started</a>
        </div>
       
    </div>
</div>

<div class="mx-auto w-4/5 md:w-3/5 mx-auto text-center mt-8">
    <h1 class="text-2xl font-bold">How it works</h1>
    <p class="text-sm">Share the best trading experience with your friends and get a cash reward in 3 simple steps</p>
</div>

<div class="mt-12">
    <div class="w-4/5 mx-auto">
        <div class="md:flex items-center">
            <div class="md:w-2/4">
                <img class="w-10/12 md:w-9/12 mx-auto" src="{{asset('media/app.png')}}" alt="">
            </div>
            <div class="md:w-2/4">
                <h1 class="text-xl mb-4"><span class="font-semibold">Invite your friend</span>  to join the most beautiful trading app</h1>
                <p class="text-sm">Refer your friend directly from your Tradefx account in a mobile app or web platform</p>
            </div>
        </div>
        <div class="md:flex items-center mt-12">
            <div class="order-2 md:w-2/4">
                <img class="w-10/12 mx-auto" src="{{asset('media/accounts.png')}}" alt="">
            </div>
            <div class="order-1 mt-4 md:mt-0 md:w-2/4">
                <h1 class="text-xl mb-4">
                    Make sure <span class="font-semibold">they open an account</span> with Tradefx</h1>
                <p class="text-sm">After your friend deposit, they will get a referee bonus:</p>
                <ul class="pl-10 space-y-1 text-sm mt-2">
                    <li>Personal account manager</li>
                    <li>Personal platform walkthrough</li>
                </ul>
            </div>
        </div>
        <div class="md:flex items-center mt-12">
            <div class="md:w-2/4">
                <img class="w-10/12 mx-auto" src="{{asset('media/awards.png')}}" alt="">
            </div>
            <div class="md:w-2/4 mt-4 md:mt-0">
                <h1 class="text-xl font-extrabold mb-4"><span class="font-semibold">Earn your reward </span> once your friend starts trading with us</h1>
                <p class="text-sm">We will credit your account with a cash bonus, when:</p>
                <ul class="pl-10 space-y-1 text-sm mt-2">
                    <li>your friend makes a deposit (at least of 200 USD (EUR/GBP))</li>
                    <li>places three trades</li>
                </ul>
            </div>
        </div>
        <div class="md:flex items-center mt-12">
            <div class="md:w-2/4 order-2">
                <img class="w-10/12 mx-auto" src="{{asset('media/ready-to-start@2x.png')}}" alt="">
            </div>
            <div class="md:w-2/4 mt-4 md:mt-0">
                <h1 class="text-xl font-extrabold mb-4">Your friend gets a $50 bonus</h1>
                <p class="text-sm">The bonus is credited to your friend’s NBRB account when your friend verifies his account, deposits and makes 1 trade (all within 30 days). Bonus can be withdrawn only after traded volume exceeds $500,000.</p>
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