@extends('layout.layout')

@section('title', 'Stock Trading Guide | How to start trading stocks | hlytopinvestments.com')

@section('content')
<div>
   <div class="h-72 text-white " style="background-size: cover; background-repeat:no-repeat; background-image: url('{{asset('media/shutterstock_564998512_0.jpg')}}')">
        <div class="flex items-center h-full" style="background-color: rgba(0, 0, 0, 0.7)">
            <div class="w-11/12 md:w-4/5 h-3/5 mx-auto flex justify-center items-center">
                <div>
                    <h1 class="font-bold text-xl md:text-2xl mb-3 text-center">Your guide to trading shares</h1>
                    <p class="text-sm text-center font-semibold md:text-sm">Trade shares CFDs, currency pairs, commodities, cryptocurrencies and indices through hlytopinvestments.com’s award-winning platform. 0% commission & tight spreads. Capital com group is licensed by CySEC, FCA, ASIC, FSA & NBRB. Available on web and mobile.</p>
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
                <span class="text-orange-300">shares trading guide</span>
              
            </li>
        </ul>
    </div>
</div>

<div>
    <div class="flex px-7 mt-7">
        <div class="md:w-4/6 text-sm space-y-4 ">
            <h1 class="font-bold text-2xl">
                What is shares trading and why is it important to traders?
            </h1>

            <p>Shares are of one of the most popular financial instruments traded today. When you buy a share in a company, you’re buying ownership within that company. When trading shares, you must consider both the company and broader industry that it’s in.</p>
            <p>As with any equity, quarterly earnings announcements, as well as the financial performance of the sector and wider stock market, are all crucial factors to watch when deciding how shares will perform. When trading shares you have the option to purchase stocks on the stock exchange or trade derivatives of the underlying asset.</p>
            
            <h1 class="font-bold text-2xl">What hours of the day can you trade stocks?</h1>
            <p>Stock markets have set trading hours where you can trade shares. The hours in which you can trade a certain stock depends on what stock exchange the shares are listed on. For instance, if you wanted to trade stocks in Barclays (BARC) on the London Stock Exchange you can do so between 08:15 - 16:30 (GMT) Monday to Friday. The London Stock Exchange does not close for lunch but most Asian stock markets do. Most stock exchanges run on the Monday to Friday schedule, however, Middle Eastern stock exchanges tend to run Sunday through Thursday.</p>
            
            <h1 class="font-bold text-2xl">How to trade shares CFDs</h1>
            <p>When trading shares you have two options. Firstly, you can purchase actual shares in companies on different exchanges where they are listed. For instance, you can purchase Apple shares on the NASDAQ stock exchange, where you own a stake in the company. This is known as a more long-term approach to trading, where the trader is usually expecting the price to rise over a time frame of months to years. Traditional share trading is popular but lacks the liquidity and leverage offered by derivative products. Since the inception of online retail trading, CFDs on shares are becoming more and more popular.</p>
            <p>The alternative to traditional share trading is trading CFDs on shares. You can trade a contract for difference (CFD) on a particular equity, speculating on the price difference of an underlying asset (in this case a share) without having to own it. A CFD is a derivative product where a broker typically agrees to pay an investor the difference in the value of a security between an opening and closing price. Traders can open long positions (speculating that the price will rise) or short positions (speculating that the price will fall). CFD trading tends to be considered a short-term approach to trading, where trades are opened and closed within day to week timeframes, but this does not necessarily mean they have to be short-term. Less commonly, CFDs can be held for months at a time, but this incurs costs such as overnight costs (due to the leverage borrowed).</p>
            <p>One vital difference between taking a long position with a CFD and purchasing a security is the ability to make leveraged trades. CFDs are traded on margin, which means that a trader can open larger positions relative to the amount of initial capital they have.</p>
            
            <div class="">
                   <img class="w-full" src="{{asset('media/CPNINFOGRAPHICS_CRNARTICLES_CRTIMAGE_Infographic_for_article_1_0_0 (1).png')}}" alt=""> 
            </div>

            <h1 class="font-bold text-2xl">Advantages of trading CFDs on shares</h1>
            <p>Trading stock with CFDs comes with several advantages and has more diverse uses.</p>
            
            <ul class="list-disc pl-5 space-y-2">
                <li><p><span class="font-semibold">Leverage</span>. CFDs can be traded on margin. This means a trader only needs to put down a fraction of the value of their trade, and in essence, borrow the remaining capital from their broker. This allows for more accessibility, greater exposure and amplified results.</p></li>
                <li><p><span class="font-semibold">Hedging</span>. CFDs can be used effectively to hedge against existing holdings. For instance, say you hold a portfolio of shares in a particular industry. You are happy with your investment but are expecting a short, yet sharp, dip in this industry. You are worried this may affect the value of your portfolio. Using CFDs you can short-sell your existing shares, hedging against this possibility. If your expectations were wrong you have the added bonus of being able to offset any losses incurred with CFDs against the capital gains charged on the increase of your portfolio.</p></li>
                <li><p><span class="font-semibold">Short-selling</span>. When purchasing stocks themselves, you can only profit when the market is rising. However, with CFDs, you can profit in both a falling and rising markets due to the ability to short-sell CFD products.</p></li>
               
            </ul>

            <h1 class="font-bold text-2xl">Why trade shares CFDs with hlytopinvestments.com?</h1>
            <p>Advanced AI technology at its core: A Facebook-like news feed provides users with personalised and unique content depending on their preferences. If a trader makes decisions based on biases, the innovative News Feed offers a range of materials to put him back on the right track. The neural network analyses in-app behaviour and recommends videos and articles to help polish your investment strategy.</p>
            <p>Trading on margin: Providing trading on margin (5:1 for major shares), hlytopinvestments.com gives you access to the stock market with the help of CFDs.</p>
            <p>Trading the difference: When trading CFDs on shares you don’t buy the underlying asset itself, meaning you are not tied to it. You only speculate on the rise or fall of its share price. CFD trading is no different from traditional trading in terms of its associated strategies. When trading CFDs you can go short or long, set stop and limit losses. So whether your outlook on a particular stock is positive or negative, you can trade this market in either direction.</p>
            <p>Focus on safety: Captal.com puts a special emphasis on safety. Capital com group is licensed by CySEC, FCA, ASIC & NBRB, it complies with all regulations and ensures that its clients’ data security comes first. The company allows to withdraw money 24/7 and keeps traders’ funds across segregated bank accounts.</p>
        </div>
        <div class="md:w-2/6 pl-5 hidden md:block">
            <div class="border-l-2 mt-2 pl-3 border-orange-300">
                <ul class="space-y-1 mt-3">
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