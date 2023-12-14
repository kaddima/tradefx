@extends('layout.layout')

@section('title', 'Complete registration')

@section('content')
    <div class="py-10" style="background-color: rgba(22, 30, 46,1);">
        <div class="md:w-5/6 mx-auto py-10 bg-white rounded-3xl shadow">
            <div class="">
                <div class="md:w-5/6 mx-auto">
                    @if(session('success'))
                        <div class="md:w-11/12 md:h-3/5 mx-auto text-center flex flex-col justify-center">
                            <div >
                                <div class="w-20 h-20 rounded-full bg-slate-100 mx-auto flex items-center justify-center">
                                    <span class="material-icons text-5xl text-green-600">task_alt</span>
                                </div>
                                <p class="text-2xl font-bold">Registration completed</p>
                                <p>Your account would be verified shortly</p>
                                <a href="/dashboard">proceed to <span class="text-orange-400">Dashboard</span></a>
                            </div>
                         </div>

                    @else
                        <div class="md:w-11/12 mx-auto">
                            <div class="text-center space-y-3">
                                <h1 class="text-slate-500 font-bold text-2xl">Complete Registration</h1>
                                <p class="text-sm">This process verifies your trading account</p>
                            </div>

                            <form action="/complete-registration" method="POST" class="space-y-6 text-slate-500 text-xs md:text-sm font-semibold" enctype="multipart/form-data">
                                @csrf
                                <div class="flex flex-col md:flex-row mx-2 justify-between gap-5">
                                    <div class="flex-1 space-y-2">
                                        <div class="flex items-center gap-2">
                                            <div class="space-y-1 flex-1">
                                                <label for="">First name</label>
                                                <input type="text" name="firstname" value="{{old('firstname')}}" placeholder="Enter first name"
                                                       class="block border w-full pl-4 rounded-xl form-input"/>
                                                @if ($errors->has('firstname'))
                                                    <span class="text-xs block mt-2 text-red-500 font-semibold">{{$errors->first('firstname')}}</span>
                                                @endif
                                            </div>
                                            <div class="space-y-1 flex-1">
                                                <label for="">Middle name (Optional)</label>
                                                <input type="text" name="middlename" value="{{old('middlename')}}" placeholder="Enter middle name"
                                                       class="block border w-full pl-4 rounded-xl form-input"/>
                                                @if ($errors->has('middlename'))
                                                    <span class="text-xs block mt-2 text-red-500 font-semibold">{{$errors->first('middlename')}}</span>
                                                @endif
                                            </div>

                                        </div>
                                        <div class="space-y-1">
                                            <label for="">Last name</label>
                                            <input type="text" name="lastname" value="{{old('lastname')}}" placeholder="Enter last name"
                                                   class="block border w-full pl-4 rounded-xl form-input"/>
                                            @if ($errors->has('lastname'))
                                                <span class="text-xs block mt-2 text-red-500 font-semibold">{{$errors->first('lastname')}}</span>
                                            @endif
                                        </div>
                                        <div class="flex gap-4 items-center">
                                            <div class="space-y-1">
                                                <p>Gender</p>
                                                <div class="flex flex-col md:flex-row gap-3">
                                                    <div class="flex gap-2 items-center">
                                                        <input type="radio" name="gender" value="male" id="male"
                                                               class="block border form-radio w-5 h-5" {{old('gender') == 'male' ? 'checked':''}}/>
                                                        <label for="male" class="cursor-pointer">Male</label>
                                                    </div>
                                                    <div class="flex items-center">
                                                        <input type="radio" name="gender" value="female" id="female"
                                                               class="block border form-radio w-5 h-5" {{old('gender') == 'female' ? 'checked':''}}/>
                                                        <label for="female" class="cursor-pointer">Female</label>
                                                    </div>
                                                </div>
                                                @if ($errors->has('gender'))
                                                    <span class="text-xs block mt-2 text-red-500 font-semibold">{{$errors->first('gender')}}</span>
                                                @endif
                                            </div>
                                            <div class="space-y-1 flex-1">
                                                <label for="">Date of birth</label>
                                                <input type="date" name="dob" value="{{old('dob')}}" 
                                                       class="block border w-full pl-4 rounded-xl form-input"/>
                                                @if ($errors->has('dob'))
                                                    <span class="text-xs block mt-2 text-red-500 font-semibold">{{$errors->first('dob')}}</span>
                                                @endif
                                            </div>

                                        </div>

                                    </div>

                                    <div class="flex-1 space-y-2">
                                        <div class="flex gap-2">
                                            <div class="space-y-1 flex-1">
                                                <label for="country">Nationality</label>
                                                <select type="" name="nationality" id="country" class="block border form-select w-full pl-4 rounded-xl form-input">
                                                    <option value="">Select nationality</option>
                                                    @foreach($countries as $country)
                                                        <option value="{{strtolower($country)}}">{{ucfirst($country)}}</option>
                                                    @endforeach
                                                </select>
                                                @if ($errors->has('nationality'))
                                                    <span class="text-xs block mt-2 text-red-500 font-semibold">{{$errors->first('nationality')}}</span>
                                                @endif
                                            </div>
                                            <div class="space-y-1 flex-1">
                                                <label for="">City</label>
                                                <input type="text" name="city" value="{{old('city')}}" placeholder="city"
                                                       class="block border w-full pl-4 rounded-xl form-input"/>
                                                @if ($errors->has('city'))
                                                    <span class="text-xs block mt-2 text-red-500 font-semibold">{{$errors->first('city')}}</span>
                                                @endif
                                            </div>
                                        </div>

                                        <div class="space-y-1">
                                            <label for="">Phone</label>
                                            <input type="tel" name="phone" value="{{old('phone')}}" placeholder="Enter phone"
                                                   class="block border w-full pl-4 rounded-xl form-input"/>
                                            @if ($errors->has('phone'))
                                                <span class="text-xs block mt-2 text-red-500 font-semibold">{{$errors->first('phone')}}</span>
                                            @endif
                                        </div>
                                        <div class="space-y-1">
                                            <label for="">Address</label>
                                            <input type="text" name="address" value="{{old('address')}}" placeholder="Enter your address"
                                                   class="block border w-full pl-4 rounded-xl form-input"/>
                                            @if ($errors->has('address'))
                                                <span class="text-xs block mt-2 text-red-500 font-semibold">{{$errors->first('address')}}</span>
                                            @endif
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="flex flex-col md:flex-row">
                                    <div class="flex-1 md:pr-10 mb-5 md:mb-0">
                                        <div class="space-y-3">
                                            <h1 class="font-bold text-sm">Identity document</h1>
                                            <p>Provide your identity document (Passport, Driver's license, ID card, Residence permit) for visual scanning. Ensure that it is not expired or physically damaged.</p>
                                        </div>
                                    </div>
                                    <div class="space-y-1 flex-1">
                                        <label for="">Identity ID</label>
                                        <input type="file" name="photoId" value="{{old('photoId')}}" 
                                                class="block border w-full rounded-xl form-input"/>
                                        @if ($errors->has('photoId'))
                                            <span class="text-xs block mt-2 text-red-500 font-semibold">{{$errors->first('photoId')}}</span>
                                        @endif
                                    </div>
                                </div>
                                <div>
                                    <button class="w-full text-center rounded-3xl h-12 bg-slate-200 hover:bg-slate-300 text-lg font-bold">Continue</button>
                                </div>
                            </form>

                        </div>
                    @endif

                </div>
            </div>

        </div>
    </div>
@endsection
