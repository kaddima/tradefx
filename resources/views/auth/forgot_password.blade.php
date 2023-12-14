@extends('layout.layout')

@section('title', 'Forgot Password')

@section('content')
    <div class="py-10" style="background-color: rgba(22, 30, 46,1);">
        <div class="w-11/12 md:w-3/6 mx-auto py-10 bg-white rounded-3xl shadow">
            <div >
                <div class="w-9/12 mx-auto">
                    <div class="text-center space-y-3">
                        <h1 class="text-slate-500 font-bold text-2xl">Reset Password</h1>
                    </div>
                    @if(session('message'))
                        <div class="text-center mt-5 text-green-600 font-bold">
                            <p>{{session('message')}}</p>
                        </div>
                    @endif

                    <form method="POST" action="/forgot-password" class="space-y-6 text-slate-500 text-sm font-semibold">
                        @csrf
                        <div class="space-y-1">
                            <label for="">Email</label>
                            <input type="email" name="email" value="{{old('email')}}" placeholder="Enter email address"
                                   class="h-12 block border w-full pl-4 rounded-xl  outline-none focus:border-slate-600"/>
                            @if ($errors->has('email'))
                                <span class="text-xs block mt-2 text-red-500 font-semibold">{{$errors->first('email')}}</span>
                            @endif
                        </div>

                        <div>
                            <button class="w-full text-center rounded-3xl h-12 bg-slate-300 hover:bg-slate-400 text-lg font-bold">Continue</button>
                        </div>
                    </form>
                </div>
            </div>


        </div>
    </div>

@endsection
