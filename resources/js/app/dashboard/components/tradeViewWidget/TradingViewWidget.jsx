// TradingViewWidget.jsx
import React, { useEffect, useRef, memo, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import $ from 'jquery'

function TradingViewWidget({symbol=false}) {

	const selectedAsset = useSelector(state=>state.assets.selectedAsset)
    const activeCategory = useSelector(state=>state.assets.active)
    const assetByCategory = useSelector(state=>state.assets.assets)[activeCategory]

    
	const chosenAsset = useMemo(()=>{

		let data

		if(selectedAsset){

			if((['cryptocurrency','forex','stocks','oil_market','commodity']).includes(activeCategory)){

				data = assetByCategory?.data.find((value)=>{

					return value.id == selectedAsset.id
				})
			}else{

				data = assetByCategory.find((value)=>{

					return value.id == selectedAsset.id})
			}

			return data

		}else{

			if((['cryptocurrency','forex','stocks',
					'oil_market','commodity']).includes(activeCategory)){

				data = assetByCategory?.data[0]
			}else{

				data = assetByCategory[0]

			}

			return data
		}

		
		
	},[activeCategory,selectedAsset])

    const setChatAsset = useCallback(()=>{

        let symbol

        if(chosenAsset.category == 'forex'){
            symbol = chosenAsset.symbol.replace('/','')
        }else if(chosenAsset.category == 'cryptocurrency'){
            symbol = chosenAsset.symbol.toUpperCase()+'USD'
        }else{
            symbol = chosenAsset.symbol
        }

        return symbol
    },[chosenAsset])


  const container = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
	  script.id = 'widget'
      script.innerHTML = `
        {
          "autosize": true,
          "symbol": "${symbol !== false ? symbol : setChatAsset()}",
          "interval": "1",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "enable_publishing": false,
          "withdateranges": false,
          "allow_symbol_change": false,
          "hide_volume":true,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;
      container.current.appendChild(script);


	  return ()=>{$('iframe#widget').remove()}
    },
    [chosenAsset,symbol]
  );

  return (
    <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
      <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
    </div>
  );
}

export default memo(TradingViewWidget);
