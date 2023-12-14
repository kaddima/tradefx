<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PaymentController extends Controller
{
   public function show(){

       $user_id = auth()->user()['id'];

       //get the wallet_address

       $result = DB::table('wallet_details')
            ->where(['user_id'=>$user_id])
            ->first();

       return json_encode(['status'=>1, 'data'=>$result]);

   }

   public function crypto_setup(Request $request){

       $user_id = auth()->user()['id'];
       $data = [];
       $errors = [];
       $status = 1;

       $photoPattern = '#^(image/)[^\s\n<]+$#i';

       $wallet_address = $request->get('wallet_address');
       $file = $request->file('file');

       $upload_dir = __DIR__."/../public/uploads/";
       $name = $file->getClientOriginalName();
       $size = $file->getSize();

       $target = $upload_dir.$name;

       if ((floatval($size)/1000) > 500){
           $errors[] = 'file too large -- 500kb and below';
           $status = 0;
       }elseif (!preg_match($photoPattern,$file->getMimeType())){
           $errors[] = 'please upload only images';
           $status = 0;
       }elseif (file_exists($target)){
           $errors[] = 'File already exist';
           $status = 0;

       }

       if ($status){

           //check if the user already has a photo
           $result = DB::table('wallet_details')
               ->where(['user_id'=>$user_id])
               ->first();

           if ($result && $result->id){

               if (file_exists($upload_dir.$result->image)){

                   //delete the image present
                   unlink($upload_dir.$result->image);
               }

               //update the database
               $column = [
                   'image'=>isset($file)?$name:$result->image,
                   'wallet_address'=>isset($wallet_address) ? $wallet_address :
                       $result->waller_address

               ];

               DB::table('wallet_details')
                   ->where(['user_id'=>$user_id])
                   ->update($column);

               $file->move(public_path('uploads'),$name);


               $data = [

                   'wallet_address'=>isset($wallet_address) ? $wallet_address :
                       $result->waller_address,
                   'image'=>isset($file)?$name:$result->image

               ];

           }else{

               $column = ['user_id'=>$user_id,
                   'image'=>$name,
                   'wallet_address'=>$wallet_address
               ];

               DB::table('wallet_details')->insert($column);

               //upload the image
               $file->move(public_path('uploads'),$name);

               $data = [

                   'wallet_address'=>$wallet_address,
                   'image'=>$name

               ];
           }


       }

       return json_encode(['status'=>$status,'errors'=>$errors,'data'=>$data]);

   }

   public function paymentMethod(Request $request){
    
    //get logged in user
    $user = auth()->user();

    $payment_type = $request->get('payment_details');

    //check if the super admin payment is activate
    $owners_id = $_ENV['OWNERS_ID'];

    //get the admin_config
    $superAdmin_config = DB::table('admin_config')
        ->where(['admin_id'=>$owners_id])
        ->first();

    if($superAdmin_config->payment_details == 1){

        //get the payment methods from admin Personal table
        $payment_method = DB::table($payment_type)
        ->where(['user_id'=>$owners_id])
        ->first();

        //check if the details is set else get the one from the admin

        if(!isset($payment_method)){

            //get the payment methods from users admin using the creator_id of the user
            $payment_method = DB::table($payment_type)
            ->where(['user_id'=>$user['creator_id']])
            ->first();

        }

    }else{
        //get the payment methods from admin Personal table
        $payment_method = DB::table($payment_type)
        ->where(['user_id'=>$user['creator_id']])
        ->first();
    }

    return json_encode([
        'status'=>1,
        'data'=>[
            'crypto_payment'=>$payment_method
        ]
    ]);
   }
}
