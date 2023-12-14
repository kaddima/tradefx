@extends('layout.layout')

@section('title', 'Login')

@section('content')
    <div class="py-5"  style="background-color: rgba(22, 30, 46,1);">
        <div class="w-11/12 md:w-3/6 mx-auto py-10 bg-white rounded-3xl shadow">

            <div class="">
                <div class="w-9/12 mx-auto">
                    <div class="text-center space-y-3">
                        
                        <p class="text-lg">Don't have an account? <a href="/register" class="text-orange-500">Sign up</a></p>
                    </div>


                    <form method="POST" action="/login" class="space-y-6 text-slate-500 text-sm font-semibold">
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
                            @if (session('failed'))
                                <span class="text-xs block mt-2 text-red-500 font-semibold">{{session('failed')}}</span>

                            @endif
                        </div>

                        <div>
                            <a href="forgot-password" class="text-blue-500">forgot password?</a>
                        </div>

                        <div>
                            <button class="w-full text-center rounded-3xl h-12 bg-slate-300 hover:bg-slate-400 text-lg font-bold">Continue</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
        @if(session('message'))
            <div class="fixed left-3 bottom-5 bg-green-800 rounded p-5 text-white" style="width: 200px;min-height: 80px">
                <p>{{session('message')}}</p>
            </div>
        @endif
    </div>
@endsection
