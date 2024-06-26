import React, { useEffect, useMemo } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import _ from 'lodash';
import $ from 'jquery'
import {setCategoryAssets} from "../../store/assetsSlice"

import axios from 'axios';
import TableRow from '../../components/tradingView/TableRow';

const AssetTable = ({data}) => {
    const dispatch = useDispatch()
    const currentColor = useSelector(state=>state.main.currentColor)
    //get all favorite assets
    let favoriteAssets = useSelector(state=>state.assets.assets.favorite)

    /**Get the current active asset category we are scroll ie, cryptocurrency,forex stocks etc */

    let activeCategory = useSelector(state=>state.assets.active)
    let assetByCategory = useSelector(state=>state.assets.assets)[activeCategory]

    function debounce(func, timeout = 300){
        let timer;
        return (...args) => {
          clearTimeout(timer);
          timer = setTimeout(() => { func.apply(this, args); }, timeout);
        };
    }

    function scrollTrigger() {
        const a = document.querySelector('#trade-container') ;
    
        // use greater than or equal to be sure.
        if (Math.ceil(a.scrollTop) + a.clientHeight >= a.scrollHeight) {

            let next_page_url = assetByCategory?.next_page_url

            if(next_page_url){
                //parse the url
                let link  = new URL(next_page_url)
                let pathname = link.pathname
                let pageNo = link.searchParams.get('page')

                axios.get(pathname,{params:{page:pageNo,category:activeCategory}}).then(result=>{
                    let data = result.data.data

                    let appendedData = [...assetByCategory.data,...data.data]

                    data = {...data,data:appendedData}

                   dispatch(setCategoryAssets({data,name:activeCategory}))
                    
                }).catch(e=>{
                    console.log(e.response)
                })
                
            }
       
        }        
        
    }

    useEffect(()=>{
        
        const tradeContainer = document.querySelector('#trade-container')  
        
        let processEndOfScroll = debounce(scrollTrigger)

        tradeContainer.addEventListener('scroll',processEndOfScroll);
      
        // /**Remove the event listener so the compenent dont send double request */
        return ()=>{ tradeContainer.removeEventListener('scroll',processEndOfScroll)}

    },[activeCategory,assetByCategory.current_page])

  return (
        <div  className='w-full relative md:h-full bg-white dark:bg-secondary-dark-bg dark:text-gray-200 text-gray-700'>
            <div id='scroll-overlay' className='fixed inset-0 border hidden'></div>
            <div className='flex items-center w-full text-xs mb-[2px] py-2 bg-white dark:bg-secondary-dark-bg'>
                <div className='flex-grow-[1.7] w-full'>
                    Market
                </div>
                <div className='flex-grow-[1.1] w-full'>
                    Change
                </div>
                <div className='flex-grow-[1.8] w-full'>
                    Sell
                </div>
                <div className='flex-grow-[1.8] w-full'>
                    Buy
                </div>
                <div className='flex-grow-[1.5] w-full hidden md:block'>
                    <div className='flex items-center flex-grow-[1.5] w-full justify-between'>
                        <div className=''>
                            Low
                        </div>
                        <div className=''>
                            High
                        </div>
                    </div>
                    
                </div>
               
                <div className='min-w-[60px] md:block hidden'></div>
            </div>

            <div id='trade-container' className='h-[calc(100%-30px)] overflow-y-auto overflow-x-hidden'>
 
                {data.map((asset,i)=>{

                    let isfavorite = false;

                    {favoriteAssets.find((favorite)=>{

                        if(favorite.id == asset.id){
                            return isfavorite = true
                        }
                    })}

                    return  <TableRow key={i}
                                    inFavorite={isfavorite}
                                    favoriteAssets={favoriteAssets}
                                    data={asset} currentColor={currentColor}/>

                })}
                
            </div>

        </div>

  )
}

export default AssetTable
