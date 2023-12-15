@extends('layout.layout')

@section('title', 'What is Margin trading and how does it work | Tradefx')

@section('content')
<div>
   <div class="h-72 text-white w-full" style="background-size: cover; background-position: -25rem 0; background-repeat:no-repeat; background-image: url('{{asset('media/margin.jpg')}}')">
        <div class="flex items-center h-full" style="background-color: rgba(0, 0, 0, 0.7)">
            <div class="w-11/12 md:w-4/5 h-3/5 mx-auto flex justify-center items-center">
                <div>
                    <h1 class="font-bold text-xl md:text-2xl mb-3 text-center">The ultimate guide to margin trading</h1>
                    <p class="text-sm text-center font-semibold md:text-sm">What is margin trading? What are the benefits and risks involved? Learn everything you need to know and find out how to trade on margin with Tradefx.</p>
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
                <span class="text-orange-300">what is a margin</span>
              
            </li>
        </ul>
    </div>
</div>

<div>
    <div class="flex px-7 mt-7">
        <div class="md:w-4/6 text-sm space-y-4 ">
            <p>Margin trading is when you pay only a certain percentage, or margin, of your investment cost, while borrowing the rest of the money you need from your broker.</p>
            <p>Margin trading allows you to profit from the price fluctuations of assets that otherwise you wouldn’t be able to afford. Note that trading on margin can improve gains, but increases the risk and size of any potential losses.</p>
            <p>What does trading on margin mean? In this guide we’ll walk you through what trading on margin is, key techniques and principles such as leverage and margin call, as well as benefits and risks associated with margin trading</p>
         
            <h1 class="font-bold text-2xl">What is margin trading? </h1>

            <div class="w-11/12 py-5 px-8 mx-auto bg-orange-100 border-l-2 border-orange-500">
                <p>Margin trading means that you don’t pay the full price of the asset. Instead, you only pay a fraction of the underlying security value and the broker lends the rest of the money you need for the margin trade.</p>
            </div>

            <p>But what is the margin in trading? There are two types of margins traders should be aware of. The money you need to open a position is your required margin. It’s defined by the amount of leverage you are using, which is represented in a leverage ratio. </p>

            <ul class="list-disc space-y-2 pl-5">
                <li>
                   <p>2:1 leverage = 50% margin</p>
                </li>
                <li>
                    <p>5:1 leverage = 20% margin</p>
                 </li>
                 <li>
                    <p>10:1 leverage = 10% margin</p>
                 </li>
                 <li>
                    <p>20:1 leverage = 5% margin</p>
                 </li>
                 <li>
                    <p>30:1 leverage = 3.3333% margin</p>
                 </li>
                 
            </ul>

            <p>There are also limits on how much your broker would allow you to borrow in a margin trade, which are based on the size of your account, or your overall maintenance margin. These are the funds you need to have in your account to cover for the risk of losses. Retail accounts by law have a maximum leverage that varies by asset type, between 30:1 and 2:1.</p>
            <p>Brokers require you to maintain a reasonable overall margin to mitigate risk. If you don’t have enough money to cover potential losses, you may be put on margin call, where brokers would ask you to top up your account or close your loss-making trades. If your trading position continues to worsen you will face a margin closeout.</p>
            
            <h1 class="font-bold text-2xl">Margin trading example</h1>
            <p>Let’s say you have $20 in cash to fund your account and spend it on stock CFD trading. If the leverage you are using is 5:1, you will be able to trade $100 worth of the asset with every dollar of your required margin worth 20% of the total value of your trade. Your broker tops up each $1 to $5 so your $20 becomes $100.</p>
            <p>If you were offered 10:1 leverage, or 10% margin, you would be able to trade $200, because every dollar would represent just 10% of the total trade, amounting to $10 with the leverage. </p>
            <p>If the leverage were 20:1, or 5% margin, you would be able to trade $400 on your $20 investment. Each asset has a different leverage ratio, or margin percentage.</p>

            <div class="">
                <img class="w-full" src="{{asset('media/Margin-trading-example.gif')}}" alt=""> 
            </div>

            <h1 class="font-bold text-xl md:text-2xl">How does margin trading work?</h1>
            <p>Margin traders use leverage, hoping that the profits will be greater than the interest payable on the borrowing. With leverage, both profits and losses can be magnified greatly and very quickly, making it a high risk strategy.</p>
            <p>Let’s say you want to trade Tesla (TSLA) stock, which is currently (31 May) worth $600 a share. To buy 10 shares you would need a deposit of $6,000, which you may not have. In a margin trade with 5:1 leverage you would only need $1,200 as a required margin to open a position, and the rest will be lent by your broker.</p>
            <p>If the stock price moves to $615 you will gain $150. This is 10 shares multiplied by the difference between the new price and the $600 at which you bought the shares. The Tesla stock has moved up just 2.5% but trading on margin has boosted your profit to 12.5%.</p>
            <p>The big ‘but’ is that if the price of Tesla went down by $15 to $585 a share, you would lose $150, which would be 12.5% of your deposit, assuming you haven’t placed a stop-loss order. </p>
            
            <div class="">
                <img class="w-full" src="{{asset('media/Margin trading guide- MCT-5532-EN-5.png')}}" alt=""> 
            </div>

            <p>If you have a number of trades open, or you are trading a highly volatile asset class where large price swings occur quickly, you can suddenly find yourself with several large losses added together.</p>
            <h1 class="font-bold text-xl">Minimum equity requirement</h1>
            <p>The money required to open a trade is interchangeably referred to as margin, initial margin, deposit margin or required margin. At Tradefx, we call it required margin.</p>
            <p>Your required margin depends on which assets you choose to invest in. It’s calculated as a percentage of the asset’s price, which is called the margin ratio. Every instrument has its own required margin. </p>
            <p>In CFD (contract for difference) trading, many forex pairs have a margin requirement of 3.333%. Indices and popular commodities such as gold have a margin requirement of 5%. 
                For riskier assets such as cryptocurrencies, which are not available to UK retail clients, it may be as high as 50%.</p>
            <p>If you have several positions open simultaneously, the combined total of the required margin for each trade is referred to as your used margin. Any money remaining to open new trades is your free margin.</p>
            
            <h1 class="font-bold text-xl">Credit limit or maintenance margin</h1>
            <p>In addition to your required margin you would need to have a sufficient overall margin balance in your account. These are the funds in your account that are not being used to trade. They provide cover for the risk of your trade going against you</p>
            <p>How much money you need in your overall margin account depends on the value of the trades you are making and whether they are currently in a profitable or loss-making position. </p>
            
            <div class="w-11/12 py-5 px-8 mx-auto bg-orange-100 border-l-2 border-orange-500">
                <p>The money you have in your account is your equity, while the money you potentially owe from loss-making positions is your margin. Your overall margin level, usually displayed as a percentage, is your equity divided by margin.
                </p>
            </div>
            
            <p>Therefore the amount that you need as your overall margin is constantly changing as the value of your trades rises and falls. You should always have at least 100% of your potential losses covered by your overall margin. </p>
            <p>Monitor the position of your trades all the time to ensure you have 100% margin covered. Otherwise, you’d be asked to add more funds in a margin call. </p>
            
            <h1 class="font-bold text-xl">Margin calls: How to avoid them?</h1>
            <p>A margin call is a warning that your trade has gone against you and you no longer have enough funds to cover losses. A margin call happens when the amount of equity you hold in your margin account becomes too low to support your borrowing. </p>
            <p>In other words, it means that your broker is about to reach the maximum amount it can lend you, and you must add funds or close positions to stop further losses.</p>
            <p>When you receive a margin call, you should not ignore it and do nothing. This could lead to a margin closeout, where your broker closes your trades and you risk losing everything.</p>
            <p>As of May 2022, Tradefx sends about 38,500 margin call emails to clients every day.</p>
            <p>You could put in safeguards to prevent a margin call from happening, such as using a stop order. It’s always better to prepare for the worst case scenario, because markets are volatile and extremely hard to predict with any degree of accuracy. </p>
            
            <div class="">
                <img class="w-full" src="{{asset('media/Margin-trading-guide--MCT-5532-EN-1-1-.png')}}" alt=""> 
            </div>
            
            <h1 class="font-bold text-xl">Why are stop orders important?</h1>
            <p>A stop order, or a stop loss, is a mechanism that closes an open position when it reaches a certain price that’s been set by you. This means that when a trade goes against you, it can automatically be closed before any losses grow too large and lead to the possibility of a margin call.</p>
            <p>A stop-loss order limits the risk. If you were to buy an asset at $100 a share CFD, a stop-loss order could automatically trigger a sell when the price falls to the limit you set, for example below $95. </p>
            <p>If you are taking a short position, you would set the stop loss order at a higher price, for instance at $105, in case the trade goes against you and the asset price starts to rise.</p>
           
            <div class="">
                <img class="w-full" src="{{asset('media/-CC-Infographic-What-is-a-margin_-1_0.png')}}" alt=""> 
            </div>
            
            <h1 class="font-bold text-xl md:text-2xl">Using margin for different asset classes</h1>
            <p>You can use margin to trade most asset classes such as equities and CFDs.</p>
            
            <h1 class="font-bold text-xl">Stocks and shares</h1>
            <p>If the shares you want to buy are in a big company, the broker could ask for a 50% margin. This means, for example, that you would pay £50,000 and your broker would buy you £100,000 worth of shares.</p>
            <p>A 20% rise in the share price would get you £20,000 in profit, actually, a little less after paying the interest and transaction fees.</p>
            <p>The problem is that if the shares fall 20%, you’ve made a £20,000 loss, plus interest on the £50,000 borrowed and the transaction fees. That’s the danger with margin – you can reap huge rewards but face equally large losses.</p>

            <h1 class="font-bold text-xl">Contracts for difference (CFD)</h1>
            <p>Trading directly in shares on margin is for experienced investors who have been vetted by their broker and have a strong credit history. But the principle of margin trading on derivatives like CFDs also works for retail investors.</p>
            <p>An investor who owns shares might trade CFDs as a hedge against the shares they own falling in price.</p>
            <p>The investor could take a short position using a CFD. Short selling shares means borrowing shares you don’t own and selling them at the current price, leaving you short, in the belief that the price will fall.</p>
            <p>You then buy what you owe once the share price has dropped and return the borrowed shares, keeping the money you’ve made.</p>
            <p>CFDs enable an investor to short cheaply because they do not have to borrow or own the underlying asset.</p>

            <h1 class="font-bold text-xl">How hedging with CFDs works</h1>
            <p>An investor holding 1,000 shares in company ABC, fearing the price is going to fall could make a CFD short trade in the same company.</p>
            <p>If the price falls, the investor would lose money on the shares but recover it on the CFD trade (less any interest on the borrowed money and transaction fees).</p>
            <p>But investors do not just hedge against share price movements. You can use margin to speculate that one currency will do well against another. You can speculate that a market index will rise or fall. You can speculate that the price of a commodity will go up or down.</p>
            <p>Margin is not limited to a single asset class. </p>
            
            <h1 class="font-bold text-xl">Margin trading for retail traders</h1>
            <p>Simplified margin trading, using automated margin trading systems online and on mobile apps, are now available to retail investors, often based on CFDs. </p>
            <p>You might only need a small amount of money to begin trading, usually with trades closing at the end of the trading day. CFDs are considered suitable for short-term investments and day trades, due to overnight fees. </p>
            <p>The systems are carefully regulated, often with a maximum leverage ratio set by regulators</p>
            <p>The best case scenario is when you use margin to benefit from the significant gains margin trading can bring, while avoiding potentially magnified losses.</p>
            <p>You can trade cautiously, using limit orders rather than market orders, or with stop-loss orders in place to curb individual losses. You can monitor your trades and close loss-making orders quickly to avoid a margin call and margin closeout.</p>
            <p>f a market suddenly moves against you while you have a trade open, you could potentially lose everything you have in your margin account and still owe more.</p>
            <p>Even if your broker works hard to close out all your positions, it might not be possible to close them fast enough to stop the losses.</p>
            <p>Some retail trading platforms, like Tradefx, offer guarantees that in the event of the broker’s close out failing to limit losses in your maintenance margin, they will write off any extra debt.</p>
            <p>In that case, you would only lose the money you had deposited with the broker.</p>

            <h1 class="font-bold text-2xl">What is margin closeout?</h1>
            <p>Margin closeout is a safety net to protect you from spiralling losses. Margin closeout happens when your loss-making positions grow to the point where you only have enough maintenance margin to cover 50% of your losses.</p>
            <p>If your broker offers a guarantee to limit your losses to the amount you have deposited, the margin closeout also protects the broker from further losses. If your broker doesn't offer this guarantee, then you will still owe your broker money after closeout.</p>
            <p>Every margin trader has a margin closeout level. Understanding these levels can help to protect you from losses. Look for and monitor margin levels on your trading platform. The closeout level changes as your trades and asset prices fluctuate.</p>
            
            <h1 class="font-bold text-xl">How is margin closeout calculated?</h1>
            <p>The margin closeout level is calculated using the account’s balance and unrealised profit or loss from any open positions, determined using the current midpoint rates. If your trades are in different currencies they are all converted into the currency of the account.</p>
            <p>Your unrealised profit or loss (UPL) is calculated using the formula below.</p>
            
             <div class="">
                <img class="w-full" src="{{asset('media/Margin-trading-guide--MCT-5532-EN-2.png')}}" alt=""> 
            </div>
            <p>Profitable and loss-making positions offset each other. But if the sum of your trades puts you in a loss-making position, that total must be higher than what is covered by the money in your account. In other words, you need at least 100% overall margin.</p>
            <p>You can see your margin percentage in the Tradefx mobile app and on the web trading platform. When you sign up, you should commit to actively monitoring your margin and keeping it above 100%.</p>
            <p>Margin closeout happens when you no longer have sufficient funds deposited to maintain your trading positions. At Tradefx, we close out your positions to protect you from unlimited losses, and to protect ourselves from unlimited liability.</p>
            <h1 class="font-bold text-2xl"></h1>
            
            <h1 class="font-bold text-xl">How to recover from margin closeout</h1>
            <p>A margin closeout is never a pleasant experience. Remember, you are not alone. Among Tradefx trading platform’s clients, half have experienced a margin closeout at some point. </p>
            <p>As of May 2022, every day, Tradefx closes out between 800 and 3,000 clients whose trades have turned against them. This is to ensure client protection.</p>
            <p>If you get a margin closeout, remember that it’s not the end of the world. Look back on your trading history and analyse what you can change to prevent a closeout in the future. </p>
            <p>Maybe you didn’t use sufficient risk management tools, or didn’t have a comprehensive trading strategy, or didn’t stick to the plan due to emotional factors? Learning from mistakes is vital and will help you to recover.</p>
            <p>Monitoring your account and keeping an eye on any open positions is very important. Using an efficient, fast-loading app to track your trades could save you a lot of frustration. When you get a margin call, you must be able to react as fast and decide if you want to add more funds in order to keep your trades open.</p>
            <p>Understanding what a margin closeout is and how it works is the first step to avoiding it. </p>
            
            <h1 class="font-bold text-2xl">Benefits and risks of margin trading</h1>
            <p>Is margin trading a good idea? </p>
            <p>The benefits of trading on margin vs non margin trade is in leveraging your trading power. Your trading capacity is dramatically increased for comparatively little initial cost – magnifying and intensifying performance. </p>
            <p>It goes both ways, margin supercharges both gains and losses. Margin trading gives traders greater exposure to price changes, increasing risk and potential returns. </p>
            <p>By definition, leverage trading means small or modest market movements can result in significant profits and losses. You should keep a close eye on your account at all times. In particularly volatile markets the price can move sharply. </p>
            
            <div class="">
                <img class="w-full" src="{{asset('media/Margin trading guide- MCT-5532-EN-4-1.png')}}" alt=""> 
            </div>
            
        </div>
        <div class="md:w-2/6 pl-5 hidden md:block">
            <div class="border-l-2 mt-2 pl-3 border-orange-300">
                <ul class="space-y-1 mt-3 ">
                    <li><a href="/trade-stocks">Shares trading guide</a></li>
                    <li><a href='/trade-forex'>Forex trading guide</a></li>
                    <li><a href='/trade-crypto'>Cryptocurrency trading guide</a></li>
                    
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