import React, { memo, useEffect, useRef } from 'react'

const TickerTapeWidget = () => {
    const container = useRef();

    useEffect(()=>{
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = `
          {
  
            "symbols": [
                {
                "proName": "FOREXCOM:SPXUSD",
                "title": "S&P 500 Index"
                },
                {
                "proName": "FOREXCOM:NSXUSD",
                "title": "US 100 Cash CFD"
                },
                {
                "proName": "FX_IDC:EURUSD",
                "title": "EUR to USD"
                },
                {
                "proName": "BITSTAMP:BTCUSD",
                "title": "Bitcoin"
                },
                {
                "proName": "BITSTAMP:ETHUSD",
                "title": "Ethereum"
                },
                {
                "description": "Tesla",
                "proName": "NASDAQ:TSLA"
                },
                {
                "description": "Nvidia ",
                "proName": "NASDAQ:NVDA"
                },
                {
                "description": "BTC/USDT",
                "proName": "BINANCE:BTCUSDT"
                },
                {
                "description": "USD dollar Nigeria Naira",
                "proName": "FX_IDC:USDNGN"
                },
                {
                "description": "Amazon.com",
                "proName": "NASDAQ:AMZN"
                }
            ],
            "showSymbolLogo": true,
            "isTransparent": false,
            "displayMode": "adaptive",
            "colorTheme": "dark",
            "locale": "en"
}`;
        container.current.appendChild(script);
    },[])

  return (
   
<div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
  <div className="tradingview-widget-container__widget"></div>

</div>

  )
}

export default memo(TickerTapeWidget)