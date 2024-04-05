<?php




// execute code catching potential exception
try {

    $pdo = new PDO('mysql:host=localhost;dbname=binary','root');

    $pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
}
catch (PDOException $e){

    $error = 'Connection Failed! '.$e->getMessage() .' FILE: '.
        $e->getFile().' on LINE: '.$e->getLine();
    trigger_error($error, E_USER_ERROR);
}

$apiKey = 'CG-zKpf6mwWLDoCP47WGHqd7834';

$capitalapi_key = "AMhKIkfgCQXeS3OZ";
$capitalapi_pass = "C@pital123";

$ping = 'https://api.coingecko.com/api/v3/ping?x_cg_pro_api_key=CG-zKpf6mwWLDoCP47WGHqd7834';


/**
 * {
  "bitcoin": {
    "usd": 51486,
    "usd_market_cap": 1011459645461.5442,
    "usd_24h_vol": 13401807998.03292,
    "usd_24h_change": -0.38199215552799576
  }
}
 */
$simpleUrl = 'https://api.coingecko.com/api/v3/
simple/price?ids=bitcoin&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&x_cg_api_key=CG-zKpf6mwWLDoCP47WGHqd7834';


/**
 * List all support coins https://static.capital.com/instrument-icons/instrument-logos/abnb.svg
 * {
    "id": "bitcoin",
    "symbol": "btc",
    "name": "Bitcoin",
    "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
    "current_price": 51517,
    "market_cap": 1011054834388,
    "market_cap_rank": 1,
    "fully_diluted_valuation": 1081179300032,
    "total_volume": 15267305211,
    "high_24h": 51918,
    "low_24h": 51308,
    "price_change_24h": -306.19166144028713,
    "price_change_percentage_24h": -0.59084,
    "market_cap_change_24h": -7285501680.004761,
    "market_cap_change_percentage_24h": -0.71543,
    "circulating_supply": 19637956,
    "total_supply": 21000000,
    "max_supply": 21000000,
    "ath": 69045,
    "ath_change_percentage": -25.4701,
    "ath_date": "2021-11-10T14:24:11.849Z",
    "atl": 67.81,
    "atl_change_percentage": 75788.1554,
    "atl_date": "2013-07-06T00:00:00.000Z",
    "roi": null,
    "last_updated": "2024-02-26T02:14:51.682Z",
    "price_change_percentage_24h_in_currency": -0.5908416212163526
  },
 */
$marketUrl = 'https://api.coingecko.com/api/v3/
coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h&locale=en&x_cg_demo_api_key=CG-zKpf6mwWLDoCP47WGHqd7834';

/**
 * {
  "prices": [
    [
      1701216000000,
      37802.23604377473
    ],
    [
      1701302400000,
      37810.34641654128
    ],
    [
      1701388800000,
      37711.81837585267
    ],
    [
      1701475200000,
      38688.25874179069
    ],
    [
      1701561600000,
      39481.666416062864
    ],
 */
$marketChart = "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1&interval=daily";

/**
 * [
  [
    1708830000000,
    51728,
    51730,
    51545,
    51545
  ],
  [
    1708831800000,
    51560,
    51560,
    51487,
    51503
  ],
  [
    1708833600000,
    51557,
    51601,
    51557,
    51592
  ],
  [
 */
$ohcl = 'https://api.coingecko.com/api/v3/coins/bitcoin/ohlc?vs_currency=usd&days=1';

/**
 * {
  "coins": [
    {
      "item": {
        "id": "pixels",
        "coin_id": 35100,
        "name": "Pixels",
        "symbol": "PIXEL",
        "market_cap_rank": 151,
        "thumb": "https://assets.coingecko.com/coins/images/35100/thumb/pixel-icon.png?1708339519",
        "small": "https://assets.coingecko.com/coins/images/35100/small/pixel-icon.png?1708339519",
        "large": "https://assets.coingecko.com/coins/images/35100/large/pixel-icon.png?1708339519",
        "slug": "pixels",
        "price_btc": 0.000011971215137307747,
        "score": 0,
        "data": {
          "price": "$0.6157",
          "price_btc": "0.0000119712151373077",
          "price_change_percentage_24h": {
            "usd": 20.46066795648891,
          },
          "market_cap": "$475,381,851",
          "market_cap_btc": "9234.53024780514",
          "total_volume": "$181,444,017",
          "total_volume_btc": "3527.64979946878",
          "sparkline": "https://www.coingecko.com/coins/35100/sparkline.svg",
          "content": null
        }
      }
    },
 */

$trending = 'https://api.coingecko.com/api/v3/search/trending';

function CurrentPrices($url){

    $ch = curl_init($url);
    curl_setopt ($ch, CURLOPT_RETURNTRANSFER, 1);
    $content = curl_exec($ch);
    $content = json_decode($content,true);
    curl_close ($ch);

    return $content;
}


$url = 'https://fcsapi.com/api-v3/forex/latest?symbol=all_forex&access_key='.$this->apiKey;
//get all forex
//$forex = DB::table('asset_prices')->where(['category'=>'forex'])->get();
$updatedAssets = CurrentPrices($url)['response'];