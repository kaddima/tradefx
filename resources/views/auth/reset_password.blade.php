@extends('layout.layout')

@section('title', 'Sign Up')

@section('content')
    <div class="py-10" style="background-color: rgba(22, 30, 46,1);">
        <div class="w-11/12 md:w-4/6 mx-auto py-10 bg-white rounded-3xl shadow">

            <div class="md:w-5/6 mx-auto px-10">
                <div class="md:w-9/12 mx-auto">
                    <div class="text-center space-y-3">
                        <h1 class="text-slate-500 font-bold text-2xl">Reset Password</h1>

                    </div>
                    @if(session('error'))
                        <div class="text-center mt-5 text-red-700 text-sm font-bold">
                            <p>{{session('error')}}</p>
                        </div>
                    @endif
                    <form method="POST" action="/reset-password" class="space-y-6 text-slate-500 text-sm font-semibold">
                        @csrf
                        <input type="hidden" name="token" value="{{$token}}">
                        <div class="space-y-1">
                            <label for="">New Password</label>
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
                </div>
            </div>
        </div>
    </div>
@endsection
