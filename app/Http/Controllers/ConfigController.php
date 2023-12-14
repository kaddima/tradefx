<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ConfigController extends Controller
{
    public function show(Request $request){

        $user_id = $request->get('user_id');

        $user_config = DB::table('user_config')
            ->where(['user_id'=>$user_id])
            ->first();

        return json_encode(['status'=>1, 'data'=>$user_config]);
    }
    public function store(Request $request){

        $data = $request->all();

        $user_config = DB::table('user_config')
            ->where(['user_id'=>$data['user_id']])
            ->first();

        //convert stdClass to arraay
        $user_config = (array) $user_config;

        $config_type = $data['config_type'];

        $updateType = $this->configAction($user_config,$config_type);

        $user_config[$config_type] = $updateType;

        return json_encode(['status'=>1,'data'=>$user_config]);
    }

    public function configAction($userConfig, $config_type){

        //1 holds enabled 0 disabled
        $updateType = 1;

        if ($userConfig[$config_type] == 1){

            DB::table('user_config')
                ->where(['user_id'=>$userConfig['user_id']])
                ->update([$config_type=>0]);

            $updateType = 0;
        }else{

            DB::table('user_config')
                ->where(['user_id'=>$userConfig['user_id']])
                ->update([$config_type=>1]);

            $updateType = 1;
        }

        return $updateType;

    }
}
