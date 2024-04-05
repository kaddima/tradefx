import React from 'react'
import TradingViewWidget from '../../../components/tradeViewWidget/TradingViewWidget'
import { useSelector } from 'react-redux'
import { FaArrowLeft } from 'react-icons/fa'
import $ from 'jquery'
import SidebarMarketInfo from '../SidebarMarketInfo'
const MobileTradeChart = () => {
    const selectedAsset = useSelector(state=>state.assets.selectedAsset)

    if(!selectedAsset?.name){
        return null
    }


  return (
    <div className='bg-white dark:bg-main-dark-bg flex flex-col absolute top-0 w-full px-2 dark:text-gray-300 overflow-scroll'>
        <div className=''>
            <div className='flex items-center'>
                <div>
                    <FaArrowLeft onClick={()=>{$('#mobile-trade-chart').hide()}} className='cursor-pointer'/>
                </div>
                <div className='flex-1 text-center'>
                    <p className='text-xs font-bold'>{selectedAsset?.name ? selectedAsset?.name : selectedAsset?.symbol} {selectedAsset?.category == 'cryptocurrency' ? '/ USD' : ''}</p>
                </div>
                
            </div>

            
        </div>

        <div className='h-[18rem] mt-5'>
            <TradingViewWidget/>
        </div>

        <div className='flex items-center text-xs space-x-[2px] font-semibold mt-5'>
            <button className='bg-red-600/20 flex-1 text-left py-2 rounded-tl-md rounded-bl-md pl-2'>
                <div className='space-y-1'>
                    <h1 className='uppercase'>Sell</h1>
                    <p>${selectedAsset?.sell ? (Number(selectedAsset?.sell)).toLocaleString() : 0}</p>
                </div>
            </button>
            <button className='bg-[#03c9d7]/20 flex-1 text-right py-2 rounded-tr-md rounded-br-md pr-2'>
                <div className='space-y-1'>
                    <h1 className='uppercase'>Buy</h1>
                    <p>${selectedAsset?.buy ? (Number(selectedAsset?.buy)).toLocaleString() : 0}</p>
                </div>
            </button>
        </div>

        <SidebarMarketInfo/>     
    </div>
  )
}

export default MobileTradeChart