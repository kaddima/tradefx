<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\User;
require __DIR__ . '/../../../Business/mailer.php';
use Business\Mailer;


class EmailVerificationController extends Controller
{
    public function ResendEmail(Request $request){

        $token = $token = rand(100000,999999);;

        $data = $request->all();
    
        if(!($data['email'])){
    
            return json_encode(['success'=>'redirect']);
        }
    
        DB::table('users')
        ->where(['email'=>$data['email']])
        ->update(['activation_code'=>password_hash($token,PASSWORD_DEFAULT)]);
       
        $subject = 'Email Verification';
        $message = <<<EMAIL
        <div>
            <h1 style="text-align: center; font-weight: bold;">Email Verfication Code</h1>
            <p>Please use the six (6) digit code below to verify your email address<br>This step is to ensure that your email address
                    is not used without your consent</p>

            <p style="margin:5px 0;font-size:18px">$token</p>
        </div>
EMAIL;

    
       Mailer::sendMail($data['email'],$message,$subject,true);
    
       return json_encode(['success'=>1,'data'=>$data]);
    }

    public function verifyEmailToken(Request $request){

         //get the email
        $data = $request->all();  

        if (isset($data['email']) && isset($data['token'])){

            $user = User::where('email',$data['email'])->first();

            if ($user && $user['email_verify'] == 0){

                if (password_verify($data['token'],$user->activation_code)){

                    User::where('email',$data['email'])->update(['email_verify'=>1]);

                    auth()->login($user);

                    return redirect()->intended('dashboard');
                }

                return redirect()->intended('/verify-email')->with(['email'=>$data['email'], 
                'token'=>$data['token'],
                'error'=>'Verification code is wrong']);

            }   
        }
        
        return redirect()->intended('/login');
    }
}
