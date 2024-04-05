import React, { useEffect, useRef} from 'react';
import News from '../components/tradeViewWidget/News'
import TickerTapeWidget from '../components/tradeViewWidget/TickerTapeWidget'
import $ from 'jquery'

const AdvanceChart = ()=>{

  const container = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
	  script.id = 'advance-widget'
      script.innerHTML = `
        {
          "autosize": true,
          "symbol": "TSLA",
          "interval": "1",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "enable_publishing": false,
          "withdateranges": true,
          "hide_side_toolbar": false,
          "allow_symbol_change": true,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;
      container.current.appendChild(script);


	  return ()=>{$('iframe#advance-widget').remove()}
    },
    []
  );

  return (
    <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
      <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
    </div>
  );
}


const Discover = () => {
  return (
    <div className='h-full w-full bg-white dark:bg-secondary-dark-bg md:overflow-hidden overflow-scroll pr-1'>
        <div className='flex md:flex-row flex-col w-full md:h-full gap-2'>
            <div className='md:w-2/3 h-[60vh] md:h-auto'>
              <AdvanceChart/>
            </div>
            <div className='md:flex-1 flex-col'>
				<div className='h-20'>
					<TickerTapeWidget />
				</div>
				<div className='flex-1 overflow-scroll h-[60vh] md:h-auto'>
					<News/>
				</div>
              
            </div>
        </div>
    </div>
  )
}

export default Discover