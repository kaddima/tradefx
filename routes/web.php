<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\CompleteRegistration;
use App\Http\Controllers\PasswordResetController;
use App\Http\Controllers\FavoriteController;
use App\Http\Controllers\AccountController;
use App\Http\Controllers\PortfolioController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\UserActionController;
use App\Http\Controllers\ConfigController;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\UpdateAssetsController;
use App\Http\Controllers\EmailVerificationController;

use Illuminate\Session;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::view('/', 'index');
Route::view('/test','test');

Route::view('/world-indices', 'world-indices');
Route::view('/forex', 'forex');
Route::view('/cryptocurrencies', 'cryptocurrencies');
Route::view('/shares', 'shares');

Route::view('/cfd-trading', 'cfdtrading');
Route::view('/charges-and-fees', 'charges_and_fees');

Route::view('/about-us', 'about-us');
Route::view('/is-tradefx-safe', 'is-tradefx-safe');
Route::view('/compliance', 'compliance');
Route::view('/regulations', 'regulation');
Route::view('/referral-programme', 'referral-programme');

Route::view('/trade-stocks', 'trade-stocks');
Route::view('/trade-forex','trade-forex');
Route::view('/trade-crypto', 'trade-crypto');
Route::view('/what-is-cfd-trading', 'cfd-trading');
Route::view('/margin-trading', 'what-is-margin');
Route::view('/terms-of-use','terms-of-use');

Route::get('/forgot-password',[PasswordResetController::class, 'showforgetpasswordform']);
Route::post('/forgot-password',[PasswordResetController::class, 'submitforgetpasswordform']);
Route::get('/reset-password/{token}',[PasswordResetController::class,'showResetPasswordForm'])->name('resetpassword.get');
Route::post('/reset-password',[PasswordResetController::class,'submitResetPasswordForm']);
Route::post('/change-password', function (){

    $user_id = auth()->user()['id'];
    $data = request()->all();
    $error = [];
    $status = 1;

    if (empty($data['old_password']) || empty($data['new_password'])
        || empty($data['confirm_password'])){
        $status = 0;
        $error[] = 'All passwords must be filled';
    }

    if (strlen($data['new_password']) < 6 ){
        $status = 0;
        $error[] = 'Minimum pasasword length is six';
    }
    if ($data['new_password'] !== $data['confirm_password']){
        $status = 0;
        $error[] = 'Password do not match';
    }

    if (!Hash::check($data['old_password'],auth()->user()['password'])){
        $status = 0;
        $error[] = 'Old password is wrong';
    }

    if ($status){

        DB::table('users')
            ->where(['id'=>$user_id])
            ->update(['password'=>Hash::make($data['new_password'])]);

        return json_encode(['status'=>1]);
    }else{

        return json_encode(['status'=>0, 'error'=>$error]);
    }



});

Route::get('/register', [RegisterController::Class, 'create']);
Route::post('/signup', [RegisterController::Class, 'store']);

Route::view('/verify-email', 'verify-email');

Route::post('/resend-verification-email', [EmailVerificationController::class, 'ResendEmail']);
Route::post('/verify-email-token', [EmailVerificationController::class, 'verifyEmailToken']);

Route::get('/signin', [LoginController::Class, 'create'])->name('login');
Route::post('/login', [LoginController::Class, 'store']);

Route::get('/complete-registration', [CompleteRegistration::Class, 'show'])->middleware('auth');
Route::post('/complete-registration', [CompleteRegistration::Class, 'store'])->middleware('auth');

Route::get('/verify_email', function (){

    //get the email
    $email = request()->get('email');
    $token = request()->get('token');

    if ($email){

        $user = User::where('email',$email)->first();

        if ($user){

            if ($user['active'] == 1){

                return redirect()->intended('signin');
            }

            if (password_verify($token,$user->activation_code)){

                User::where('email',$email)->update(['email_verify'=>1]);

                auth()->login($user);

                return redirect()->intended('dashboard');
            }

            return redirect()->intended('register');

        }

        return redirect()->intended('register');
    }

});

Route::get('/dashboard/payment_methods',[PaymentController::class,'paymentMethod'])->middleware('auth');

//return account details for specifc user
Route::get('/user-account', [AccountController::class, 'getUserAccount'])->middleware('auth');
Route::post('/admin/all-admin',[AccountController::class,'allAdmin']);
Route::get('/admin/admin-users',[AccountController::class,'admin_data']);
Route::post('/admin/all-admin/users',[AccountController::class,'admin_data']);
Route::post('/admin/admin-config',[UserActionController::class,'adminConfig']);
Route::post('/admin/all-admin/credit-transactions', [AccountController::class,'creditTransactions']);
Route::post('/admin/all-admin/investment-history',[AccountController::class,'investmentHistory']);
Route::get('/portfolio/fetch',[PortfolioController::class,'show'])->middleware('auth');
Route::post('/portfolio/add',[PortfolioController::class,'createPortfolio']);
Route::post('/portfolio/close',[PortfolioController::class,'closePortfolio']);
Route::post('/admin/portfolio/delete',[PortfolioController::class,'deletePortfolio']);
Route::post('/admin/portfolio/generate-profit-loss',[PortfolioController::class,'generateProfitLoss']);
Route::post('/admin/portfolio/task/close',[PortfolioController::class,'closeTask']);
Route::get('/admin/portfolio/fetch-tasks',[PortfolioController::class,'getTasks']);
Route::post('/favorite/add', [FavoriteController::class, 'addFavorite']);
Route::post('/favorite/remove', [FavoriteController::class, 'removeFavorite']);
Route::get('/admin/crypto-setup',[PaymentController::class,'show']);
Route::post('/admin/crypto-setup',[PaymentController::class,'crypto_setup']);
Route::post('/admin/user-action',[UserActionController::class,'store']);
Route::post('/admin/credit-user',[UserActionController::class,'credit_user']);
Route::get('/assets/home', function (){

    $crypto = DB::table('asset_prices')
        ->where(['category'=>'cryptocurrency'])
        ->orderBy('sell','desc')
        ->limit(30)
        ->get();

    $forex = DB::table('asset_prices')
        ->where(['category'=>'forex'])
        ->orderBy('sell','desc')
        ->limit(30)
        ->get();

    $oilMarket = DB::table('asset_prices')
        ->where(['category'=>'oil_market'])
        ->limit(30)
        ->orderBy('sell','desc')
        ->get();

    $commodities = DB::table('asset_prices')
        ->where(['category'=>'commodity'])
        ->limit(30)
        ->orderBy('sell','desc')
        ->get();

    $stocks = DB::table('asset_prices')
        ->where(['category'=>'stocks'])
        ->limit(30)
        ->orderBy('sell','desc')
        ->get();

    return json_encode(['data'=>[
        'crypto'=>$crypto,
        'forex'=>$forex,
        'stocks'=>$stocks,
        'oilMarket'=>$oilMarket,
        'commodities'=>$commodities,
    ]
    ]);

});
Route::post('/admin/update-assets',[UpdateAssetsController::class, 'updateAssets']);

Route::get('/assets', function (){

    //logged in user
    $user = auth()->user()['id'];
    $id = @request()->get('user_id');
    $favorite = [];

    $favorite_lists = DB::table('favorite')->where(['user_id'=>$user])->get();
    if (!empty($favorite_lists)){
        foreach ($favorite_lists as $list){

            $favorite[] = DB::table('asset_prices')->where(['id'=>$list->asset_id])->first();
        }
    }


    $crypto = DB::table('asset_prices')
        ->where(['category'=>'cryptocurrency'])
        ->orderBy('sell','desc')
        ->get();

    $forex = DB::table('asset_prices')
        ->where(['category'=>'forex'])
        ->orderBy('sell','desc')
        ->limit(100)
        ->get();

    $oilMarket = DB::table('asset_prices')
        ->where(['category'=>'oil_market'])
        ->orderBy('sell','desc')
        ->get();

    $commodities = DB::table('asset_prices')
        ->where(['category'=>'commodity'])
        ->orderBy('sell','desc')
        ->get();

    $stocks = DB::table('asset_prices')
        ->where(['category'=>'stocks'])
        ->orderBy('sell','desc')
        ->get();

    return json_encode(['data'=>[
        'crypto'=>$crypto,
        'forex'=>$forex,
        'stocks'=>$stocks,
        'oilMarket'=>$oilMarket,
        'commodities'=>$commodities,
        'favorite'=>$favorite]
    ]);
})->middleware('auth');

//Route::get('/admin/user-config',[ConfigController::class,'show']);
Route::post('/admin/user-config',[ConfigController::class,'store']);
Route::get('/fetch-activities', function (){
    $user_id = auth()->user()->id;
    $id = @request()->get('user_id');
    $transaction = DB::table('activities')
        ->where(['user_id'=>isset($id)?$id:$user_id])
        ->orderBy('created_at','desc')
        ->limit(50)
        ->get();

    return json_encode(['data'=>$transaction]);
})->middleware('auth');

Route::get('/dashboard/{path?}', function(){

    if (auth()->check() && auth()->user()['is_admin']){

        return redirect()->intended('/admin/dashboard');

    }elseif (auth()->check()){
        return view('app.dashboard');
    }
    else{
        return redirect('signin')->with('failed','access denied');
    }

})->where('path','.*');

Route::get('/admin/{path?}', function(){

    if (auth()->user()['is_admin'] == 1){

        return view('app.admin_dashboard');
    }

    return redirect()->intended('/signin');

})->where('path', '.*')->middleware('auth');

Route::get('logout', function (){
    auth()->logout();

    return redirect('signin');
});

Route::fallback(function(){

    return redirect('/');
});


Route::get('/clear-cache', function(){

    \Illuminate\Support\Facades\Artisan::call('cache:clear');
    \Illuminate\Support\Facades\Artisan::call('route:clear');
    
    return 'clear';
    
});
