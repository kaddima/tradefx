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
    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis</p>
    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis</p>
    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis</p>
    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis</p>
</div>

<div class="mt-8 space-y-5 w-10/12 mx-auto">
    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis</p>
    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis</p>
    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis</p>
    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis</p>
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
                <p>COO Europe Tradefx</p>
            </div>
        </div>

        <div class="flex flex-col md:flex-row gap-10 mt-5">
            <div class="md:w-2/5">         
                <div class="space-y-5">
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis</p>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis</p>
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
                    <p>CEO Tradefx Australia</p>
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


