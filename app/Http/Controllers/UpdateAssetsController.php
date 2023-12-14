<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UpdateAssetsController extends Controller
{
    private $apiKey = 'i3Fn2GVxlxB4meCcCIIYmz';

    function CurrentPrices($url){

        $ch = curl_init($url);
        curl_setopt ($ch, CURLOPT_RETURNTRANSFER, 1);
        $content = curl_exec($ch);
        $content = json_decode($content,true);
        curl_close ($ch);

        return $content;
    }

    function updateAssets(){

        $this->UpdateForex();
        $results = $this->updateStocks();
        $this->updateCrypto();

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

        $stocks = DB::table('asset_prices')
            ->where(['category'=>'stocks'])
            ->limit(30)
            ->orderBy('sell','desc')
            ->get();

        return json_encode(['status'=>1,'data'=>[
            'crypto'=>$crypto,
            'forex'=>$forex,
            'stocks'=>$stocks

        ]]);

        return ['data'=>$results];
    }

    function UpdateForex(){

        $url = 'https://fcsapi.com/api-v3/forex/latest?symbol=all_forex&access_key='.$this->apiKey;
        //get all forex
        $forex = DB::table('asset_prices')->where(['category'=>'forex'])->get();
        $updatedAssets = $this->CurrentPrices($url)['response'];
        $columnValue = [];
        foreach ($forex as $fx){

            foreach ($updatedAssets as $asset){

                if (strtoupper($fx->symbol) == strtoupper($asset['s'])){

                    $columnValue = [
                        'sell'=> (floatval($asset['o'])>floatval($asset['c'])) ? floatval($asset['c']) : floatval($asset['o']),
                        'buy'=>(floatval($asset['o'])>floatval($asset['c'])) ? floatval($asset['o']) : floatval($asset['c']),
                        'low'=>floatval($asset['l']),
                        'high'=>floatval($asset['h']),
                        'change_one_day'=>floatval($asset['ch']),
                        'percentage_change'=>$asset['cp']
                    ];

                    //update the assets
                    DB::table('asset_prices')
                        ->where(['id'=>$fx->id])
                        ->update($columnValue);
                    break;
                }
            }
        }

        return $columnValue;
    }

    function updateCrypto(){

        $url = 'https://fcsapi.com/api-v3/crypto/latest?symbol=all_crypto&access_key='.$this->apiKey;
        //get all forex
        $cryptos = DB::table('asset_prices')->where(['category'=>'cryptocurrency'])->get();

        $updatedAssets =  $this->CurrentPrices($url)['response'];

        $columnValue = [];

        foreach ($cryptos as $crypto){

            foreach ($updatedAssets as $asset){

                if (strtoupper($crypto->symbol) === strtoupper($asset['s'])){
                    $columnValue = [
                        'sell'=> (floatval($asset['o'])>floatval($asset['c'])) ? floatval($asset['c']) : floatval($asset['o']),
                        'buy'=>(floatval($asset['o'])>floatval($asset['c'])) ? floatval($asset['o']) : floatval($asset['c']),
                        'low'=>floatval($asset['l']),
                        'high'=>floatval($asset['h']),
                        'change_one_day'=>floatval($asset['ch']),
                        'percentage_change'=>$asset['cp']
                    ];

                   // update the assets
                   DB::table('asset_prices')->where(['id'=>$crypto->id])->update($columnValue);
                   break;
                }
            }
        }

    }

    function updateStocks(){

        $url = 'https://fcsapi.com/api-v3/stock/latest?country=united-states&exchange=NYSE&access_key='.$this->apiKey;
        $updatedAssets = $this->CurrentPrices($url)['response'];

        $stocks = DB::table('asset_prices')->where(['category'=>'stocks'])->get();

        foreach ($stocks as $stock){

            foreach ($updatedAssets as $asset){

                if (strtoupper($stock->symbol) === strtoupper($asset['s'])){

                    $columnValue = [
                        'sell'=> (floatval($asset['h'])>floatval($asset['c'])) ? floatval($asset['c']) : floatval($asset['h']),
                        'buy'=>(floatval($asset['h'])>floatval($asset['c'])) ? floatval($asset['h']) : floatval($asset['c']),
                        'low'=>floatval($asset['l']),
                        'high'=>floatval($asset['h']),
                        'change_one_day'=>floatval($asset['ch']),
                        'percentage_change'=>$asset['cp']
                    ];

                    //update the assets
                    DB::table('asset_prices')->where(['id'=>$stock->id])->update($columnValue);
                    break;
                }
            }
        }

    }
}
