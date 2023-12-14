<?php

//$arr = [['name'=>'kadima']];
//
//$str = '/portfolio/add?id=1&asset_name=bitcoin&
//entry=200&last_price=200&size=12
//&type=buy&leverage=2:1&margin=123&profit_loss=23';
//
//foreach ($arr as $key=>$value){
//
//    if ($value['name'] == 'kadima'){
//
//        unset($arr[$key]);
//        break;
//    }
//}

$url = 'https://fcsapi.com/api-v3/forex/latest?symbol=all_forex&access_key=i3Fn2GVxlxB4meCcCIIYmz';


// ////
// $ch = curl_init($url);
// curl_setopt ($ch, CURLOPT_RETURNTRANSFER, 1);
// $content = curl_exec($ch);
// $content = json_decode($content,true);

// curl_close ($ch);


echo password_hash('123456',PASSWORD_DEFAULT);