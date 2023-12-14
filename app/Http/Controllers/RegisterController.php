<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\DB;

require __DIR__ . '/../../../Business/mailer.php';
use Business\Mailer;


class RegisterController extends Controller
{
    //
    public function create(){

        return view('signup');

    }

    public function store(Request $request){

        $token = rand(100000,999999);

        $request->validate( [
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6',
            'verify'=>'required|same:password'
        ]);

        $data = $request->all();


        $user = User::create([
           'email'=>strtolower($data['email']),
           'password'=>$data['password'],
           'activation_code'=>password_hash($token,PASSWORD_DEFAULT),
            'creator_id'=>$_ENV['OWNERS_ID']

        ]);
        //create account
        DB::table('accounts')->insert(['user_id'=>$user->id]);
        //create default config
        DB::table('user_config')->insert(['user_id'=>$user->id]);

        $subject = 'Email Verification';
        $message = <<<EMAIL
        <div>
            <h1 style="text-align: center; font-weight: bold;">Email Verfication Code</h1>
            <p>Please use the six (6) digit code below to verify your email address<br>This step is to ensure that your email address
                    is not used without your consent</p>

            <p style="margin:5px 0; font-size:18px">$token</p>
       </div>
EMAIL;

      // Mailer::sendMail($data['email'],$message,$subject,true);

       return redirect()->intended('/verify-email')->with(['email'=>$data['email'],'token'=>$token]);

    }
}
