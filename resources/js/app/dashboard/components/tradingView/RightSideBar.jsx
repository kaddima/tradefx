import React, { useState } from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { ImCross } from 'react-icons/im'
import { TbArrowsDoubleNeSw} from 'react-icons/tb'
import { useDispatch, useSelector } from 'react-redux'
import SidebarTrades from '../../pages/trades/SidebarTrades'
import SidebarMarketInfo from '../../pages/trades/SidebarMarketInfo'
import {MdInfoOutline} from 'react-icons/md'
import { BsNewspaper } from 'react-icons/bs'
import $ from 'jquery'
import { setActiveTradeSidebar } from '../../store/assetsSlice'
import News from '../tradeViewWidget/News'

const RightSideBar = () => {

    const activeTradeSidebar = useSelector(state=>state.assets.activetradeSidebar)
    const dispatch = useDispatch()

    const marketTrade = 1
    const marketInfo = 2
    const marketnews = 3
    

    // CONDITION TO DISPLAY RIGHT SIDEBR
    const ActiveRightSidebar = (value)=>{

        switch (value) {
            case 1:
                return <SidebarTrades/>

            case 2:
            return	<SidebarMarketInfo/>

            case 3:
            return <News/>    

            default:
                break;
        }
    }

    //click handler (changes views for rightSIdebar---marketinfo or trades)
	const setActiveRightSidebar = (value)=>{
        $('#right-sidebar').show()
		dispatch(setActiveTradeSidebar(value))
	}

  return (

    <div className='flex w-full h-full gap-1'>
        <div id='right-sidebar' className='h-4/5 hidden overflow-auto md:h-full md:w-60 fixed z-[900] md:static w-4/5 shadow-lg 
        top-2/4 -translate-y-2/4 bg-main-dark-bg left-2/4 -translate-x-2/4 md:translate-x-0 md:translate-y-0'>
            <div className='relative flex flex-col h-full dark:text-gray-300 text-center w-full'>
                <div className='bg-white dark:bg-secondary-dark-bg pt-2 '>
                    <div className='mb-10 text-sm font-bold'>
                        <h1 >US TOP 100</h1>
                    </div>
                    <span className='absolute top-3 right-3 cursor-pointer'
                    onClick={()=>{
                        $('#overlay').hide();
                        $('#right-sidebar').hide()
                    }}><ImCross/></span>

                </div>

                {/* PRICE RANGE */}
                <div className='flex-1 mt-1 overflow-auto'>
                    {ActiveRightSidebar(activeTradeSidebar)}
                </div>
            </div>
        </div>
        <div className='h-full bg-white dark:bg-secondary-dark-bg w-8'>
            <div className='px-1 pt-2'>
                <button data-type="info"
                    onClick={()=>{setActiveRightSidebar(marketInfo)}}
                    className="mb-5 text-slate-600 dark:text-gray-300 p-1 hover:bg-slate-100 hover:dark:bg-slate-700 mx-auto block">
                    <MdInfoOutline size={20}/>
                </button>

                <button data-type="news"
                    onClick={()=>{setActiveRightSidebar(marketnews)}}
                    className=" text-slate-600 dark:text-gray-300 p-1 hover:bg-slate-100 hover:dark:bg-slate-700 mx-auto block">
                    <BsNewspaper size={18}/>
                </button>

            </div>
        </div>
    </div>
    
        
    
  )
}

export default RightSideBar