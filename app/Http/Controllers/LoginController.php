<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

// require __DIR__.'/../../../Business/mailer.php';
// use Business\Mailer;


class LoginController extends Controller
{
    //
    public function create(){

        return view('login');
    }

    public function store(Request $request){

        $request->validate([
           'email'=>'required|email',
           'password'=>'required'
        ]);

        $credentials = $request->only('email','password');

        //check if users exists and password is correct
        
        $user = DB::table('users')
        ->where(['email'=>$credentials['email']])
        ->first();

        if($user){
            if(password_verify($credentials['password'], $user->password) && $user->email_verify != 1){

                return redirect()->intended('verify-email')->with('email',$credentials['email']);
            }
        }

        if (Auth::attempt($credentials)){

             
            $ip = $request->getClientIp();
            $details = @json_decode(file_get_contents("http://ip-get-geolocation.com/api/json/$ip"));
            $subject = 'Login Alert';
            $time = date('Y-m-d H:ia');
            
//                 $message = <<<EMAIL
//                        
//                     <p>Dear {$userDetails->f_name} {$userDetails->l_name},</p>
//                     <p>Your Account has been logged into from</p>

//                     <h4 style="padding-top: 3px; font-weight: bold">Details</h4>
                
//                     <div style="width: 90%">
//                         <div style="width: 100%;">
//                             <p style="width: 50%; display: inline-block">Time </p>
//                             <span style="display: inline; width: 50%;">$time</span>
//                         </div>
//                         <div style="width: 100%;">
//                             <p style="width: 50%; display: inline-block">IP</p>
//                             <span style="display: inline; width: 50%;">: {$ip}</span>
//                         </div>
//                         <div style="width: 100%;">
//                             <p style="width: 50%; display: inline-block">City</p>
//                             <span style="display: inline; width: 50%;">: {$details->city}</span>
//                         </div>
//                         <div style="width: 100%;">
//                             <p style="width: 50%; display: inline-block">Country</p>
//                             <span style="display: inline; width: 50%;">: {$details->country}</span>
//                         </div>
                    
//                     </div>
// EMAIL;

           // send the email for login notification
           // Mailer::sendMail($credentials['email'], $message,$subject);


            return redirect()->intended('dashboard')
                ->with('success','Signed in');
        }

        return
            back()->withInput()
            ->with('failed','Wrong username or password');
    }
}
