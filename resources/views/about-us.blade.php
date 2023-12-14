@extends('layout.layout')

@section('title', 'About us')

@section('content')

<div class="h-52" style="background-image: url('{{asset('media/banner-about.webp')}}')">
    <div class="m-auto h-full flex justify-center items-center">
        <p class="w-11/12 md:w-9/12 text-2xl font-bold md:text-4xl text-center text-gray-100 md:font-extrabold">Our mission is to make the world of finance more
            accessible, engaging and useful</p>
    </div>
</div>

<div class="mt-8 space-y-5 w-10/12 mx-auto">
    <p>hlytopinvestments.com is an FCA, CySEC, ASIC, FSA and NBRB - licensed company committed to building the world’s best trading experience. It’s that simple. The AI-enabled technology that powers our platform isn’t just unique – it’s award-winning:</p>
    <p>hlytopinvestments.com, voted ‘Most Innovative Tech 2021’ by TradingView is a multi-award winning global investment trading platform authorised and regulated by the UK’s Financial Conduct Authority, the Cyprus Securities and Exchange Commission, and  the Australian Securities and Investments Commission. Recognised for its quality 24/7 customer support, seamless trading experience and competitive fees, hlytopinvestments.com is a fast-emerging  leader in the European leveraged trading industry.</p>
    <p>Priding itself as a transparent and fair broker, hlytopinvestments.com is a 0% commission platform that offers low overnight fees and tight spreads. With access to over  6,100 markets,  our clients  can invest directly in global stocks and ETFs or trade CFDs with leverage across the world’s most popular indices, commodities, shares and currency pairs.  In markets where it is permissible, we also offer clients access to popular cryptocurrencies. From Apple and Facebook to the FTSE 100 and EUR/USD and many more, you can trade on both the web and your smartphone with a simple and intuitive platform tailored to help you trade smarter.</p>
    <p>In the first quarter of 2022 alone, hlytopinvestments.com reported a 27% growth in new clients. It also reported a global pick-up in trading activity, with total client trading volumes across all markets growing by more than 36% percent compared to the previous quarter. These results reflect the group’s growing reputation as a platform of choice among retail traders globally. With more than five million people who have set up a user account with us, hlytopinvestments.com is one of the fastest growing investment trading platforms.</p>
</div>

<div class="mt-8 space-y-5 w-10/12 mx-auto">
    <p>Capital Com (UK) Limited is registered in United States with company registration number 10500630. <span class="text-orange-300"> Authorised and regulated by the Financial Conduct Authority (FCA)</span>, under register number 7912914.</p>
    <p>Capital Com SV Investments Limited is a Cyprus Registered Company with Company Registration Number HE 442188.<span class="text-orange-300"> Authorised and regulated by the Cyprus Securities and Exchange Commission (CySEC)</span>, under license number 319/17.</p>
    <p>Capital Com Australia Limited (ABN 06 001 292 119) is a company<span class="text-orange-300"> registered in Australia and regulated by the Australian Securities and Investments Commission (ASIC)</span> under AFSL 513393.</p>
    <p>Capital Com Stock and CFD Investing Ltd is a Company registered in the Republic of Seychelles with Company number 8193293-1 and authorized by the Financial<span class="text-orange-300"> Services Authority (FSA)</span> with license number (SD101).</p>
</div>

<div class="bg-blue-50 mx-auto py-10">
    <div class="w-11/12 mx-auto">
        <h1 class="text-3xl font-bold text-center mb-10">Our leadership team</h1>
        <div class="flex flex-wrap gap-10">
            <div class="w-40">
                <div>
                    <img class="w-full rounded-xl" src="{{asset('media/team/peter-hetherington.webp')}}" alt="">
                </div>
                <h1 class="font-bold mb-3">Segev Hetherington</h1>
                <p>Group Chief Executive Officer</p>
            </div>
            <div class="w-40">
                <div>
                    <img class="w-full rounded-xl" src="{{asset('media/team/pavel_krasilevich.webp')}}" alt="">
                </div>
                <h1 class="font-bold mb-3">Christoforos Peter</h1>
                <p>Chief Risk Officer</p>
            </div>
            <div class="w-40">
                <div>
                    <img class="w-full rounded-xl" src="{{asset('media/team/tarik_chebib.webp')}}" alt="">
                </div>
                <h1 class="font-bold mb-3">Ogievich Tarso </h1>
                <p>COO Europe hlytopinvestments.com</p>
            </div>
        </div>

        <div class="flex flex-col md:flex-row gap-10 mt-5">
            <div class="md:w-2/5">         
                <div class="space-y-5">
                    <p>Those who trade with us can rely on the expertise of a large and experienced team of more than 800 staff spread across offices in London, Limassol, Gibraltar. Our leadership team has significant experience in the online trading space with a deep understanding of the legislative and regulatory environment.</p>
                    <p>They have a highly impressive record in creating the technology that underpins financial systems. Other team members include acclaimed content specialists, leading data scientists and experts in the psychological implications of financial dealing. The people we employ believe in fintech, digital democracy, and the positive effects new technologies can have on the world.</p>
                </div>               
            </div>

            <div class="md:w-3/5 flex gap-10 flex-wrap">
                <div class="w-40">
                    <div>
                        <img class="w-full rounded-xl" src="{{asset('media/team/christoforos_soutzis.webp')}}" alt="">
                    </div>
                    <h1 class="font-bold mb-3">David Krasilevich</h1>
                    <p>Chief Revenue Officer and CEO of Dubai office</p>
                </div>
                <div class="w-40">
                    <div>
                        <img class="w-full rounded-xl" src="{{asset('media/team/laura_lin.webp')}}" alt="">
                    </div>
                    <h1 class="font-bold mb-3">Laura Chebib</h1>
                    <p>CEO hlytopinvestments.com Australia</p>
                </div>
                <div class="w-40">
                    <div>
                        <img class="w-full rounded-xl" src="{{asset('media/team/valentina_rzheutskaya.webp')}}" alt="">
                    </div>
                    <h1 class="font-bold mb-3">Valentina Cesani</h1>
                    <p>Head of Security</p>
                </div>
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


