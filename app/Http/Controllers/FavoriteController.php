<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Favorite;


class FavoriteController extends Controller
{
    public function addFavorite(Request $request){

        $assets_details = [];
        $asset_id = $request->get('id');

        $user_id = auth()->user()['id'];

        // check if this user already has the asset in favorite
        $val = Favorite::where(['asset_id'=>$asset_id,'user_id'=>$user_id])->first();

        // if assets not already present added it
        if (!$val){

            // insert the asset into favorite table using Favorite model
            Favorite::create(['asset_id'=>$asset_id, 'user_id'=>$user_id]);

            //get all the inserted favorite for the user
            $favorite_assets = Favorite::where(['user_id'=>$user_id])->get();

            foreach ($favorite_assets as $asset){

                //get the asset details
                $assets_details[] = DB::table('asset_prices')->where(['id'=>$asset->asset_id])->first();
            }

            $response = ['status'=>1, 'data'=>$assets_details];
        }

        else{

            $data = [];
            $response = ['status'=>0,'data'=>$data];
        }

        return json_encode($response);

    }

    public function removeFavorite(Request $request){

        $assets_details = [];
        $asset_favorite_id = $request->get('id');
        $user_id = auth()->user()['id'];

        if ($user_id){

            //delete the asset from favorite
            DB::table('favorite')
                ->where(['asset_id'=>$asset_favorite_id,'user_id'=>$user_id])->delete();

            // fetch all favorite
            $favorite_assets = DB::table('favorite')
                ->where(['user_id'=>$user_id])
                ->get();

            foreach ($favorite_assets as $asset){

                //get the asset details
                $assets_details[] = DB::table('asset_prices')->where(['id'=>$asset->asset_id])->first();
            }

            $response = ['status'=>1,'data'=>$assets_details];

            return json_encode($response);
        }


    }
}
