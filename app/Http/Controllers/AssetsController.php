<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AssetsController extends Controller
{
    public function initialAssets(Request $req){

        
        if($req->has('category')){

            $asset = DB::table('asset_prices')
            ->where(['category'=>$req->get('category')])
            ->paginate(12);

            return json_encode(['data'=>$asset]);
        }

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
            ->paginate(20);

        $forex = DB::table('asset_prices')
            ->where(['category'=>'forex'])
            ->paginate(20);

        $stocks = DB::table('asset_prices')
            ->where(['category'=>'stocks'])
            ->paginate(20);

        return json_encode(['data'=>[
            'crypto'=>$crypto,
            'forex'=>$forex,
            'stocks'=>$stocks,
            'favorite'=>$favorite]
        ]);
    }


    public function forexByCurrency(Request $req){

        /**Executes when searching for an assets */

        if($req->has('currency')){

            $currency = strtoupper($req->get('currency'));

            $result = DB::table('asset_prices')
                ->where('category','forex')
                ->where('symbol', 'LIKE', "%$currency%")
                ->paginate(20);
    
            return json_encode(['data'=>$result]);

        }

    }

}
