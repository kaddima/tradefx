<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{csrf_token()}}"/>
    <title>@yield('title')</title>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons&a"
      rel="stylesheet">
      <link rel="icon" href="{{asset('images/logo/favicon.png')}}">
    	<!-- Open graph -->
	<meta property="og:type" content="website">
	<meta property="og:title" content="hlytop investments">
	<meta property="og:description" content="hlytop investment is built with powerful suite of technology that helps you optimize your trading speed and efficiency and perform sophisticated portfolio analysis.">
	<meta property="og:url" content="/">
	<meta property="og:image" content="{{asset('images/logo/logo.png')}}}">
    <link rel="stylesheet" href="{{asset('css/app.css?v.1.1.0')}}">
    <link rel="stylesheet" href="{{asset('css/main.css')}}">
</head>

<body>

    <div>
        <div id="jaas-container"></div>

        <div class=" h-[5rem] fixed z-[500] w-screen top-0 bg-white">
            <div class="flex justify-between items-center w-4/5 mx-auto h-full text-sm font-semibold">
                <div class="menu-button cursor-pointer flex items-center">
                    <span class="material-icons">menu</span>
                    <p>Menu</p>
                </div>
                <div class="font-extrabold text-3xl">
                    <a href="/">
                        <div class="w-32 md:w-40 h-[4.5rem]">
                            <img src="{{asset('images/logo/logo.png')}}" class="w-full h-full" alt="">
                        </div>
                    </a>
                </div>

                <div class="hidden md:block">
                    <ul class="flex space-x-5">
                        <li>
                            <a href="/signin" class="border-1 text-center w-16 inline-block border-black p-2 rounded-xl ">login</a>
                        </li>
                        <li>
                            <a href="/register" class="bg-orange-400 text-center w-16 inline-block text-gray-100 p-2 rounded-xl">sign up</a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>

        <!--DO NOT DELETE THIS ELEMENT BELOW REACTS TARGETS IT FOR NAV DISPLAY --->
        <div id="nav" class="fixed z-[1000] top-20 hidden bg-white shadow pb-5"></div>

        <div class="mt-[5rem]">
            @yield('content')
        </div>

        {{-- <div class="mt-8 w-11/12 mx-auto rounded-3xl h-16 bg-blue-100"></div> --}}

        <div class="border p-5 text-sm">
            <div class='p-5 mb-4'>
                <p class='text-center text-xs font-semibold'>Also you can contact us: <a href='mailto:support@hlytopinvestments.com' class='pl-4'>support@hlytopinvestments.com</a></p>
            </div>
            <div class="text-xs w-4/5 mx-auto">
                <div class="flex flex-col md:flex-row md: justify-between">
                    <div>
                        <h1  class='text-sm font-extrabold mb-3 py-2 bg-gray-50 md:p-0 md:bg-transparent'>Markets</h1>
                        <ul class='space-y-2'>
                            <li>
                                <a href="/world-indices">Indices</a>
                            </li>
                            <li>
                                <a href="/forex">Forex</a>
                            </li>

                            <li>
                                <a href="/cryptocurrencies">Cryptocurrencies</a>
                            </li>
                            <li>
                                <a href="/shares">Shares</a>
                            </li>
                        </ul>
                    </div>

                    <div class="mt-4 md:mt-0">
                        <h1 class='text-sm font-extrabold mb-3 py-2 bg-gray-50 md:p-0 md:bg-transparent'>Products</h1>
                        <div class=''>
                            <div>
                                <ul class='space-y-2'>
                                    <li class='text-sm font-bold'>
                                        products
                                    </li>
                                    <div class="pl-3 space-y-2">
                                        <li>
                                             <a href="/cfd-trading">CFD trading</a>
                                         </li>
                                        <li>
                                            <a href='/charges-and-fees'>Charges and fees</a>
                                        </li>
                                    </div>

                                </ul>
                            </div>

                        </div>
                    </div>

                    {{-- <div class="mt-4 md:mt-0">
                        <h1  class='text-sm font-extrabold mb-3 py-2 bg-gray-50 md:p-0 md:bg-transparent'>News and Analysis</h1>
                        <div class=''>
                            <div>
                                <ul class='space-y-2'>
                                    <li class='text-sm font-bold'>News</li>
                                    <div class="pl-3 space-y-2">
                                        <li><a>Analysis</a></li>
                                        <li><a>Insights</a></li>
                                        <li><a>Explainers</a></li>
                                        <li><a></a></li>
                                    </div>

                                </ul>
                            </div>
                            <div>
                                <ul class='space-y-2'>
                                    <li class='text-sm font-bold'>Market updates</li>
                                    <div class="space-y-2 pl-3">
                                        <li>Webinars</li>
                                    <li>Economic Calender</li>
                                    </div>

                                </ul>
                            </div>
                        </div>
                    </div> --}}

                    <div class="mt-4 md:mt-0">
                        <h1  class='text-sm font-extrabold mb-3 py-2 bg-gray-50 md:p-0 md:bg-transparent'>Learn to trade</h1>
                        <div class=''>
                            <div class='mb-5'>
                                <ul class='space-y-2'>
                                    <li class='text-sm font-bold'>Popular markets guides</li>
                                    <div class="space-y-2 pl-3">
                                        <li><a href="/trade-stocks">Shares trading guide</a></li>
                                        <li><a href='/world-indices'>indices trading guide</a></li>
                                        <li><a href='/trade-forex'>Forex trading guide</a></li>
                                        <li><a href='/trade-crypto'>Cryptocurrency trading guide</a></li>
                                    </div>

                                </ul>
                            </div>
                            <div>
                                <ul class='space-y-4'>
                                    <li class='text-sm font-bold'>Trading guides</li>
                                    <div class="space-y-3 pl-3">
                                        <li><a href="/margin-trading">what is a margin?</a></li>
                                        <li><a href="what-is-cfd-trading">CFD trading guide</a></li>

                                    </div>

                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="mt-4 md:mt-0">
                        <h1  class='text-sm font-extrabold mb-3 py-2 bg-gray-50 md:p-0 md:bg-transparent'>About</h1>
                        <div class=''>
                            <div>
                                <ul class='space-y-2'>
                                    <li class='text-sm font-bold'>About</li>
                                    <div class="space-y-2 pl-3">
                                        <li className='text-sm font-bold'><a href="/about-us">About us</a></li>
                                        <li><a href="/regulations">Regulations</a></li>
                                        <li><a href="/is-hlytop-safe">is hlytopinvestments.com safe?</a></li>
                                        <li><a href="/compliance">Compliance</a></li>
                                    </div>

                                </ul>
                            </div>
                            <div class="mt-3">
                                <ul class='space-y-2'>
                                    <li class='text-sm font-bold'>Partner with us</li>
                                    <div class="space-y-2 pl-3">
                                        <li><a href="/referral-programme">Referral programme</a></li>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="bg-main-dark-bg text-white rounded md:rounded-2xl space-y-2 md:space-y-4 p-3 md:p-9 mt-5" >
                        <p>Risk warning: transactions with non-deliverable over-the-counter instruments are a risky activity and can bring not only profit but also losses. The size of the potential loss is limited to the funds held by us for and on your behalf, in relation to your trading account. Past profits do not guarantee future profits. Use the training services of our company to understand the risks before you start operations.</p>
                        <p>Closed joint-stock company “hlytop Investments” is regulated by NBRB, registered 19.03.2018 with company registration number 193222154. Certificate of inclusion in the register of forex companies No. 16 dated 16.04.2018. </p>
                    </div>
                    <div class="mt-5">
                        <div class="flex space-x-2 items-center">
                            <h1 class="text-lg text-slate-400 font-bold">In Partnership with </h1>
                            <div class="w-14 rounded-md overflow-hidden">
                                <img src="{{asset('images/unnamed (1).png')}}" alt="" class="w-full">
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <script src="{{ asset('js/manifest.js') }}"></script>
    <script src="{{ asset('js/vendor.js') }}"></script>
    <script src="{{asset('js/jquery-3.6.0.js')}}"></script>
    <script src="{{ asset('js/app.js?v.1.1.0') }}"></script>

    <script src="{{ asset('js/main.js?v1') }}"></script>


</body>
</html>
