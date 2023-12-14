@extends('layout.layout')

@section('title', 'Verify your email address')

@section('content')
<div class="py-10">
    <div class="md:px-10">
        <div class="flex items-center mb-5">
            <span class="material-icons">
                arrow_back
            </span>
            <a href="/signin" class="text-lg font-semibold">Back</a>
        </div>

        <div class="w-5/6 md:w-3/5 mx-auto">
            <div class="max-w-[400px]">
                <div id="sent-success" class="bg-green-600 rounded p-4 hidden">
                    <h1 class="text-green-200">Email sent successfully</h1>
                </div>
                <h1 class="text-xl md:text-3xl font-bold mb-4 text-gray-500">Email Verification</h1>
                <p class="text-sm mb-5">Please provide the verification code sent to your email address. If you have not received the code after several attempts, please try the following:</p>

                <div class="pl-3">
                    <ul class="list-disc text-[13px] list-outside ml-5">
                        <li>Check if it is in your junk/spam mail.</li>
                        <li>Make sure your email address is <span id="email" class="text-orange-600">{{session('email')}}</span></li>
                        <li>The message may be delayed for a few minutes. Try again after few minutes.</li>
                    </ul>
                </div>

                <div class="mt-5">
                    <form action="/verify-email-token" method="POST">
                        @csrf
                        <div class="max-w-[100px]">
                            <label for="" class="font-semibold">Code {{session('token')}}</label>
                            <input type="email" name="email" class="hidden" value="{{trim(session('email')) }}">
                            <input type="text" name="token" class="form-input block border" placeholder="Enter code">
                            @if (session('error'))
                            <span class="text-xs block mt-2 text-red-500 font-semibold">{{session('error')}}</span>

                        @endif
                        </div>

                        <button type="submit" class="text-blue-600 font-bold mt-3 hover:text-red-300">
                            Verify
                        </button>

                    </form>
                </div>
                <div class="flex items-center justify-between mt-4">

                    <p class="text-xs" id="resend-msg"></p>

                    <button id="resend-email-btn" class="text-orange-600 font-semibold rounded border-1 transition px-3 py-1 hover:border-orange-900">
                        Resend Code
                    </button>
                </div>

            </div>
        </div>
    </div>


</div>
@endsection
