<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

require __DIR__ . '/../../../Business/mailer.php';
use Business\Mailer;

class UserActionController extends Controller
{
    public function store(Request $request){

        $data = $request->all();

        $user = DB::table('users')
            ->where(['id'=>$data['user_id']])
            ->first(['id','active','block','is_admin']);

        switch ($data['type']){

            case 'update':
                return $this->updateUser($data);
                break;
            case 'verify':
               return  $this->VerifyUser($data['user_id']);
                break;

            case 'block':
               return  $this->blockUser($user);
                break;

            case 'delete':
               return $this->deleteUser($data['user_id']);
                break;

            case 'admin_privilege':
                return $this->adminPrivilege($user);
                    break;

            case 'assign_user':
                return $this->assignUser($data['user_id'], $data['admin_id']);
                    break;

            default:
                break;
        }
    }

    public function verifyUser($user_id){

        //admin id
        $id = auth()->user()['id'];

        DB::table('users')
            ->where(['id'=>$user_id])
            ->update(['active'=>1]);

        $users = DB::table('users')
            ->get();

        return json_encode(['status'=>1, 'data'=>$users]);
    }

    public function updateUser($user){

        $user_id = $user['user_id'];

        $column = ['first_name'=>$user['first_name'],
            'middle_name'=>$user['middle_name'],
            'last_name'=>$user['last_name'],
            'email'=>$user['email'],
            'phone'=>$user['phone'],
            'dob'=>$user['dob'],
            'country'=>$user['country'],
            'state'=>$user['state'],
            'address'=>$user['address'],
            ];

        DB::table('users')->where(['id'=>$user_id])
        ->update($column);

        return json_encode(['status'=>1, 'data'=>$column]);
    }


    public function blockUser($user){

        //admin id
        $id = auth()->user()['id'];

        $user_id = $user->id;

        if ($user->block == 0){
            DB::table('users')
                ->where(['id'=>$user_id])
                ->update(['block'=>1]);
        }else{

            DB::table('users')
                ->where(['id'=>$user_id])
                ->update(['block'=>0]);
        }


        $users = DB::table('users')
        ->where('creator_id',$id)
            ->get();

        return json_encode(['status'=>1, 'data'=>$users]);

    }

    //toggle turning a regular user to admin if not 
    //and not admin if already is
    public function adminPrivilege($user){

        //admin id
        $id = auth()->user()['id'];

        $user_id = $user->id;

        if ($user->is_admin != 1){
            DB::table('users')
                ->where(['id'=>$user_id])
                ->update(['is_admin'=>1]);
        }else{

            DB::table('users')
                ->where(['id'=>$user_id])
                ->update(['is_admin'=>0]);
        }

        $users = DB::table('users')
            ->where('creator_id',$admin_id)
            ->get();

        return json_encode(['status'=>1, 'data'=>$users]);

    }

    public function assignUser($user_id,$admin_id){

        DB::table('users')
            ->where(['id'=>$user_id])
            ->update(['creator_id'=>$admin_id]);
       
        $users = DB::table('users')
            ->get();

        return json_encode(['status'=>1, 'data'=>$users]);

    }

    public function deleteUser($user_id){
        //admin id
        $id = auth()->user()['id'];

        //delete users portfolio
        DB::table('portfolio')
            ->where(['user_id'=>$user_id])
            ->delete();

        // delete users accounts
        DB::table('accounts')
            ->where(['user_id'=>$user_id])
            ->delete();

        //delete users transaction history
        DB::table('activities')
            ->where(['user_id'=>$user_id])
            ->delete();

        // delete users favorite
        DB::table('favorite')
            ->where(['user_id'=>$user_id])
            ->delete();

        //delete user tasks
        DB::table('tasks')
            ->where(['user_id'=>$user_id])
            ->delete();

        // delete user config
        DB::table('user_config')
            ->where(['user_id'=>$user_id])
            ->delete();

        //delete from users
        DB::table('users')
            ->where(['id'=>$user_id])
            ->delete();

        // get all users belonging to the admin
        $users = DB::table('users')
            ->where('creator_id', $id)
            ->get();

        return json_encode(['status'=>1, 'data'=>$users]);
    }



    //ADMIN CONGIG
    public function adminConfig(Request $request){
        
        $admin_id = $request->get('admin_id');
        $action = $request->get('action');

        $adminConfig = (array) (DB::table('admin_config')
                ->where(['admin_id'=>$admin_id])
                ->first($action));

            //$adminConfig =  $adminConfig;
        
        DB::table('admin_config')
         ->where(['admin_id'=>$admin_id])
        ->update([$action => $adminConfig[$action] == 1 ? 0 : 1]);
    
        $adminConfig = DB::table('admin_config')
        ->where(['admin_id'=>$admin_id])
        ->first();

        //return the update admin config
        return json_encode(['data'=>$adminConfig]); 
    

    }

    public function credit_user(Request $request){
        //gets OWNERS_ID
        $owners_ID = $_ENV['OWNERS_ID'];

        //get the admin id
        $admin = auth()->user();
        
        $user_id = $request->get('user_id');
        $amount = $request->get('amount');
    
        //get the users account
        $account = DB::table('users')
            ->join('accounts','users.id','=','accounts.user_id')
            ->where(['users.id'=>$user_id])
            ->first();
    
        //save the credit transaction
        DB::table('credit')
        ->insert([
            'admin_id'=>$admin->id, 
            'user_id'=>$user_id,
            'username'=>$account->first_name.' '.$account->last_name,
            'amount'=>$amount
        ]);
    
        //sum of the amount to the account balance
        $available = $account->available + $amount;
        $funds = $account->funds + $amount;
    
        DB::table('accounts')
            ->where(['user_id'=>$user_id])
            ->update(['funds'=>$funds,'available'=>$available]);
    
        //modify the account object
        $account->available = $available;
        $account->funds = $funds;

        //get the super admin config
        $admin_config = DB::table('admin_config')
            ->join('users','admin_config.admin_id','=','users.id')
            ->where(['admin_id'=>$owners_ID])
            ->first();

        if($admin_config->credit_alert == 1){

            //dont email the admin if the admin logged in is the super admin
            if($owners_ID != $admin->id){

                $subject = 'Admin Credit Transaction';

                $message = '<div style="font-size: 14px;">
                    <div>
                        <p>A credit transaction has occured from one of your administrators.<br>
                        details of the transaction are shown below </p>
                    </div>
                    <div style="margin-left:10px">
                        <h1 style="text-transform: uppercase; font-size:14px; opacity:0.7; margin-left:-10px">Transaction Details</h1>
                        <div style="display: flex; margin-top:-10px">
                            <p style="margin-right: 10px; font-weight:bold; font-style:italic">Administrator</p>
                            <p>'.(($admin->first_name && $admin->last_name ) ?  ($admin->first_name.' '.$admin->last_name) : ($admin->email)).'</p>
                        </div>
                
                        <div style="display: flex; margin-top:-10px">
                            <p style="margin-right: 10px; font-weight:bold;font-style:italic">Beneficiary</p>
                            <p>'.$account->first_name.' '.$account->last_name.'</p>
                        </div>
                
                        <div style="display: flex; margin-top:-10px">
                            <p style="margin-right: 10px; font-weight:bold;font-style:italic">Amount</p>
                            <p>$'.$amount.'</p>
                        </div>
                
                        <div style="display: flex; margin-top:-10px">
                            <p style="margin-right: 10px; font-weight:bold;font-style:italic">Date</p>
                            <p>'.date('F j, Y  H:i a').'</p>
                        </div>
                    </div>   
                </div>';

                //email the super admin
               // Mailer::sendMail($admin_config->email,$message,$subject);
            }
        }

        return json_encode(['status'=>1, 'data'=>$account]);
    }
}
