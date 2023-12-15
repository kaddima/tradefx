@extends('layout.layout')

@section('title', 'Secure trading of the world\'s most popular trading platform')

@section('content')

<div class="h-72 text-gray-200" style="background-image: url('{{asset('media/safe-backg.jpg')}}')">
    <div class="w-11/12 md:w-3/5 h-3/5 mx-auto flex justify-center items-center">
        <div>
            <h1 class="font-bold text-xl md:text-2xl mb-3 text-center">Is Tradefx safe?</h1>
            <p class="text-xs md:text-sm">You’ve worked hard for your money. Invest with an award-winning platform.</p>
            <a href="/register" class="w-40 block py-1 text-center mt-3 md:py-2 rounded-lg mx-auto bg-orange-400 text-white font-semibold">Get started</a>
    
        </div>
       
    </div>
    <div class="h-2/5 flex p-5 items-center" style="background-color: rgba(0, 0, 0, 0.6)">
        <p class="md:w-3/5 text-center text-sm mx-auto">Join ,<span class="text-orange-300">500,000+</span> people, just like yourself, who’ve chosen to register with Tradefx group for our promise to keep your funds safe.</p>
    </div>
</div>

<div class="mt-12">
    <div class="w-4/5 mx-auto">
        <div class="md:flex items-center">
            <div class="md:w-2/4">
                <img class="w-6/12 md:w-9/12 mx-auto" src="{{asset('media/safe.svg')}}" alt="">
            </div>
            <div class="md:w-2/4">
                <h1 class="text-xl font-extrabold mb-4">Regulated</h1>
                <p class="text-sm">Tradefx has group entities authorised and regulated locally by the Financial Conduct Authority ("FCA"), the Australian Securities and Investments Commission ("ASIC"), the Cyprus Securities and Exchange Commission ("CySEC"), the NBRB and the Financial Services Authority of Seychelles (FSA).</p>
            </div>
        </div>
        <div class="md:flex items-center mt-12">
            <div class="order-2 md:w-2/4">
                <img class="w-6/12 mx-auto" src="{{asset('media/bank.png')}}" alt="">
            </div>
            <div class="order-1 mt-4 md:mt-0 md:w-2/4">
                <h1 class="text-xl font-extrabold mb-4">We trust only the best to handle your money.</h1>
                <p class="text-sm">We’ve partnered with some of the biggest money managers in Europe to handle, protect and store your funds in segregated bank accounts entirely separate from our operations accounts.</p>
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