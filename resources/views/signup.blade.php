@extends('layout.layout')

@section('title', 'Sign Up')

@section('content')
    <div class="py-10" style="background-color: rgba(22, 30, 46,1);">
        <div class="w-11/12 md:w-4/6 mx-auto py-10 bg-white rounded-3xl shadow">
            <div class="flex">
                <div class="w-2/6 hidden md:block pl-10">
                    <div class="bg-slate-200 rounded-xl h-full pt-6">
                        <div class="px-5 space-y-5">
                            <a href="/" class="block">
                                <div class="w-32 mx-auto text-2xl font-extrabold">
                                    Tradefx
                                </div>
                            </a>
                            <ul class="space-y-10 text-slate-800 font-bold">
                                <Li>
                                    <div class="flex gap-2">
                                        <span class="material-icons text-orange-600">task_alt</span>
                                        <p>Study trends with powerful charts.</p>
                                    </div>
                                </Li>
                                <Li>
                                    <div class="flex gap-2">
                                        <span class="material-icons text-orange-600">task_alt</span>
                                        <p>One app. 3,100+ markets.</p>
                                    </div>
                                </Li>
                                <Li>
                                    <div class="flex gap-2">
                                        <span class="material-icons text-orange-600">task_alt</span>
                                        <p>Regulated by FCA, ASIC, CySEC, NBRB and FSA.</p>
                                    </div>
                                </Li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="md:w-4/6 mx-auto">
                    <div class="md:w-9/12 mx-auto">
                        <div class="text-center space-y-3">
                            <h1 class="text-slate-500 font-bold text-2xl">Sign Up</h1>
                            <p class="text-lg">Already have an account? <a href="/signin" class="text-orange-500">Login</a></p>
                        </div>


                        <form  method="POST" action="/signup" class="space-y-6 text-slate-500 text-sm font-semibold">
                            @csrf

                            <div class="space-y-1">
                                <label for="">Email</label>
                                <input type="email" name="email" value="{{old('email')}}" placeholder="Enter email address"
                                class="h-12 block border w-full pl-4 rounded-xl  outline-none focus:border-slate-600"/>
                                @if ($errors->has('email'))
                                    <span class="text-xs block mt-2 text-red-500 font-semibold">{{$errors->first('email')}}</span>

                                @endif
                            </div>
                            <div class="space-y-1">
                                <label for="">Password</label>
                                <input type="password" name="password" value="" placeholder="password"
                                class="block border h-12 w-full pl-4 rounded-xl  outline-none focus:border-slate-600"/>
                                @if ($errors->has('password'))
                                    <span class="text-xs block mt-2 text-red-500 font-semibold">{{$errors->first('password')}}</span>

                                @endif
                            </div>
                            <div class="space-y-1">
                                <label for="">Verify Password</label>
                                <input type="password" name="verify" value="" placeholder="verify password"
                                class="block border h-12 w-full pl-4 rounded-xl outline-none focus:border-slate-600"/>
                                @if ($errors->has('verify'))
                                    <span class="text-xs block mt-2 text-red-500 font-semibold">{{$errors->first('verify')}}</span>

                                @endif
                            </div>

                            <div>
                                <button class="w-full text-center rounded-3xl h-12 bg-slate-200 hover:bg-slate-300 text-lg font-bold">Continue</button>
                            </div>
                        </form>
                        <p class="text-sm">By creating an account, I accept <a href="/Privacy Policy" class="text-orange-500 hover:underline">Terms of use</a></p>
                    </div>
                </div>
            </div>

        </div>
        @if (session('success'))
            <div>
                <div class="w-screen h-screen fixed z-10 top-0 left-0 bg-slate-900 opacity-80">

                </div>

                <div class="w-11/12 h-3/5 md:w-2/5 md:h-3/5 flex flex-col justify-center bg-white rounded-3xl absolute z-20 top-2/4
                    left-2/4 -translate-x-2/4 -translate-y-2/4 p-5">
                    <div class="w-full md:w-3/5 mx-auto text-center space-y-4">
                        <span class="material-icons text-6xl text-green-600">task_alt</span>
                        <h1 class="text-xl md:text-3xl font-bold">Registration Successful</h1>
                        <p class="text-sm font-semibold">Please verify your email by clicking on the link sent to your email address </p>
                    </div>
                </div>
            </div>
        @endif

    </div>
@endsection
