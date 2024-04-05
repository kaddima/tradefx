import React from 'react'
import MobileWatchList from './MobileWatchList'
import MobileAssetTable from './MobileAssetTable'
import MobileTrade from './MobileTrade'
import MobileTradeChart from './MobileTradeChart'

const Layout = ({assets}) => {
  return (
    <div className='w-full h-full relative overflow-scroll'>
  
        <MobileWatchList/>

        <div className='mt-2 bg-white dark:bg-main-dark-bg px-1'>
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