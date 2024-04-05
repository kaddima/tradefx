import React, { useMemo } from 'react'
import TradingViewWidget from '../../../components/tradeViewWidget/TradingViewWidget'
import { useDispatch, useSelector } from 'react-redux'
import { FaArrowLeft } from 'react-icons/fa'
import $ from 'jquery'
import SidebarMarketInfo from '../SidebarMarketInfo'
import { updateSelectedAsset } from '../../../store/assetsSlice'


const MobileTradeChart = () => {
    const dispatch = useDispatch();
    const selectedAsset = useSelector(state=>state.assets.selectedAsset)
    const assets = useSelector(state=>state.assets.assets)

    const assetPrice = useMemo(()=>{

        let categoryAsset = assets[selectedAsset?.category]

        let liveChanges = categoryAsset?.data.find((v,i)=>{

            return v.id == selectedAsset?.id
        })

        return liveChanges
    },[assets[selectedAsset?.category]])


    if(!selectedAsset?.name){
        return null
    }


  return (
    <div className='bg-white dark:bg-main-dark-bg flex flex-col absolute top-0 w-full px-2 dark:text-gray-300 overflow-scroll'>
        <div className=''>
            <div className='flex items-center'>
                <div>
                    <FaArrowLeft onClick={()=>{$('#mobile-trade-chart').hide();dispatch(updateSelectedAsset())}} className='cursor-pointer'/>
                </div>
                <div className='flex-1 text-center'>
                    <p className='text-xs font-bold'>{selectedAsset?.name ? selectedAsset?.name : selectedAsset?.symbol} {selectedAsset?.category == 'cryptocurrency' ? '/ USD' : ''}</p>
                </div>
                
            </div>

            
        </div>

        <div className='h-[18rem] mt-5'>
            <TradingViewWidget/>
        </div>

        <div className='flex items-center text-xs space-x-[2px] mt-5 font-semibold'>
            <button className={`bg-red-600  flex-1 text-left py-2 rounded-tl-md rounded-bl-md pl-2`}>
                <div className='space-y-1'>
                    <h1 className={`uppercase`}>Sell</h1>
                    <p>{assetPrice?.sell ? (Number(assetPrice?.sell)).toLocaleString() : 0}</p>
                </div>
            </button>
            <button className={`bg-[#349fa7] flex-1 text-right py-2 rounded-tr-md rounded-br-md pr-2`}>
                <div className='space-y-1'>
                    <h1 className={`uppercase`}>Buy</h1>
                    <p>{assetPrice?.buy ? (Number(assetPrice?.buy)).toLocaleString() : 0}</p>
                </div>
            </button>
        </div>

        <SidebarMarketInfo/>     
    </div>
  )
}

export default MobileTradeChart