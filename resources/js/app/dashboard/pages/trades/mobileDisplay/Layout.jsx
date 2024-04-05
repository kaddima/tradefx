import React from 'react'
import MobileWatchList from './MobileWatchList'
import MobileAssetTable from './MobileAssetTable'
import MobileTrade from './MobileTrade'
import MobileTradeChart from './MobileTradeChart'

const Layout = ({assets}) => {
  return (
    <div className='w-full h-full relative overflow-hidden'>
  
        <MobileWatchList/>

        <div id='trade-container' className='mt-2 bg-white dark:bg-main-dark-bg px-1 h-[calc(100%-45px)] overflow-scroll'>
          <MobileAssetTable data={assets}/>
        </div>

		{/* Buy/Sell with chart */}
		<div id="mobile-trade-chart" className='hidden'>
			<MobileTradeChart/>
		</div>
		{/* BUY/Sell without chart */}
		<div id="mobile-trade" className='hidden'>
			<MobileTrade/>
		</div>	
    </div>
  )
}

export default Layout