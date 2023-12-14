<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AccountController extends Controller
{
    public function getUserAccount(Request $request){

        //id to use when logged in from user's dashord
        $user_id = auth()->user()->id;
    
        //if accessed from admin page...specific user data
        $id = @$request->get('user_id');

        // $userDetails = DB::table('users')
        //     ->join('accounts','user.id','=','accounts.user_id')
        //     ->join('user_config','accounts.user_id', '=','user_config.user_id')
        //     ->where(['users.id'=>])
        //     ->first();
        $accountBalance = DB::table('accounts')
            ->where(['user_id'=>isset($id)?$id:$user_id])
            ->first();

        $user = DB::table('users')
            ->where(['id'=>isset($id)?$id:$user_id])
            ->first();

        $config = DB::table('user_config')
            ->where(['user_id'=>isset($id)?$id:$user_id])
            ->first();

        return json_encode(['data'=>
            [
                'account'=>$accountBalance,
                'user'=>$user,
                'config'=>$config,
            ]
        ]);
    }

    /**
     * This gets all users under the admin logged in
     * and in some cases can get users under any admin request by 
     * the super admin
     * 
     * this gets the details of the logged in admin or super admin
     * 
     * this also returns the admin cconfig and features the super admin 
     * is eligible for
     * 
     */
    public function admin_data(Request $request){

        //requested admin users using any admin id
        $id = @$request->get('admin_id') ? $request->get('admin_id') : null;

        if($id !== null){

            $users = DB::table('users')
            ->where(['creator_id'=>$id])
            ->get();

            return json_encode(['data'=>[
                'users'=>$users,
            ]]);
        }

        //this is reached if the admin isnt super admin
        //gets the users for the logged in admin
        $admin_id = auth()->user()['id'];
        $adminDetails = '';

        // gets all the users if the admin is super
        if(auth()->user()['super_admin'] == 1){
            $users = DB::table('users')
            ->where('creator_id', $admin_id)
            ->get();
            
        }else{

            //gets only users with creator id of the logged in admin
             $users = DB::table('users')
            ->where('creator_id',$admin_id)
            ->orWhere('id',$admin_id)
            ->get();
        }

       
        foreach ($users as $user){

            //get only the details of the admin

            if ($user->id == $admin_id){
                $adminDetails = $user;
                break;
            }
        }

        //get the features available
        $features = DB::table('features')
            ->where(['admin_id'=>$_ENV['OWNERS_ID']])
            ->first();

        //get the admin config
        $admin_config = DB::table('admin_config')
        ->where(['admin_id'=>$_ENV['OWNERS_ID']])
        ->first();

        return json_encode(['data'=>[
            'users'=>$users,
            'admin'=>$adminDetails,
            'features'=>$features,
            'admin_config'=>$admin_config
        ]]);

    }

    /**
     * This gets the admins for super admins
     */

     public function allAdmin(){
        $user = auth()->user();
        $result = [];

        //check if user is super admin
        if($user->super_admin == 1){

            $admins = DB::table('users')
                ->where(['is_admin'=>1])
                ->get();

            foreach($admins as $admin){
                if($admin->id == $user->id){
                    continue;
                }else{
                    $result[] = $admin;
                }
            }
        }

        return json_encode(['data'=>$result]);
     }

     public function creditTransactions(Request $request){

        $admin_id = $request->get('admin_id');

        //get all credit transaction belonging to the admin
        $results = DB::table('credit')
            ->where(['admin_id'=>$admin_id])
            ->get();

        return json_encode(['data'=>$results ? $results : []]);
     }


}
