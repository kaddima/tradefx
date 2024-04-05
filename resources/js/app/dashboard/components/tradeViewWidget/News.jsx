import React, { memo, useEffect, useRef } from 'react'

const News = () => {

    const container = useRef();

    useEffect(()=>{
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = `
          {
            "feedMode": "all_symbols",
            "isTransparent": false,
            "displayMode": "regular",
            "width": "100%",
            "height": "100%",
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

export default memo(News)