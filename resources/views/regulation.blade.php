@extends('layout.layout')

@section('title', 'About | Regulations')

@section('content')
<div>
    <div class="w-3/5 mx-auto">
        <div class="space-y-4">
            <h1 class="text-xl md:text-2xl font-bold">Regulations</h1>
            <h4 class="text-lg font-bold">Licenses</h4>
            <p>Capital Com Australia Limited is registered in Australia with company registration number ABN 47 625 961 177. Authorised and regulated by the Australian Securities and Investments Commission (ASIC) under Australian Financial Services License number 513810.</p>
            <p>Capital Com (UK) Limited is registered in England and Wales with company registration number 10506220, authorised and regulated by the Financial Conduct Authority (FCA) under register number 018839. Capital Com SV Investments Limited  is a regulated Cyprus Investment Firm, registration number HE 781146, authorised and regulated by the Cyprus Securities and Exchange Commission under the license number 319/17 (both entities referred together as “we”, “Company” or “Tradefx”).</p>
            <p>Based in the European Union, Tradefx complies with the requirements imposed by the Markets in Financial Instruments Directive (MiFID).</p>
        </div>

        <div class="space-y-4 mt-5">
            <h1 class="text-xl md:text-2xl font-bold">Segregated Funds</h1>
            <p>Tradefx keeps its clients’ money in segregated bank accounts in accordance with our regulator’s rules on client money. In other words, your funds are held separately from our funds and are thus not exposed to any unexpected financial difficulties that may arise in the Company. The Company does not claim any entitlement to these funds, as they belong to you.</p>
            <p>Clients funds are spread across a number of prominent banks (Royal Bank of Scotland, Raffeissen, Eurobank, Commonwealth Bank of Australia) that are constantly reviewed to ensure they are in line with the Tradefx guidelines.</p>
            <p>Our clients’ funds, therefore, cannot be affected by sovereign and corporate debts.</p>
            <p>Hedging is achieved through Tradefx money only.</p>
            
        </div>

        <div class="mt-5 space-y-4">
            <h1 class="text-xl md:text-2xl font-bold">Investor Compensation warranties</h1>
             <p>Tradefx segregates all retail client funds from its own money in accordance with relevant regulations. Capital Com (UK) Ltd is a member of the Financial Services Compensation Scheme (the “FSCS”) and Capital Com SV Investments Limited is a member of the Investor Compensation Fund (the “Fund”), which provide compensation for Retail Investors should Tradefx declare default</p>
             <p>*Investor Compensation warranties are not applicable to Australian Resident clients. Alternative compensation arrangements apply. Please refer to Capital Com Australia Limited’s Financial Services Guide.</p>
        </div>

        <div class="mt-5 space-y-4">
            <h1 class="text-xl md:text-2xl font-bold">Fixing the amount of payable compensation </h1>
             <p>The amount of the compensation payable to each client is calculated in accordance with the legal and contractual terms governing our relationship with the client, subject to the set-off rules applied for the calculation of the claims between the client and Tradefx. </p>
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