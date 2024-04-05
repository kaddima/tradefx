import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import $ from 'jquery'
import { updateCharts } from '../../store/chartSlice';

import {toast} from 'react-toastify';
import {BiBookAdd} from "react-icons/bi"
import {BsCheck2Circle} from "react-icons/bs"
import {TbChartCandle} from "react-icons/tb"
import {MdArrowDropDown} from 'react-icons/md'
	
import {addFavorite,removeFavorite,
    setCategoryAssets,
    setSelectedAsset} from "../../store/assetsSlice"
	
import AssetImages from './AssetImages';


const TableRow = ({currentColor,data,inFavorite,favoriteAssets})=> {

    //get assets in a particular catefory
    let specificAsset = useSelector(state=>state.assets.assets[data.category])
    //get userid
    let userConfig = useSelector(state=>state.account.config)

    let selectedAsset = useSelector(state=>state.assets.selectedAsset)

    //get the assets chart
    let charts = useSelector(state=>state.charts.charts)

    const dispatch = useDispatch()

    const chooseAsset = (e)=>{
        
        let assetId =  $(e.target).parents('.asset-row').attr('data-id') || $(e.target).attr('data-id')

        let asset = specificAsset.data.find((value)=>{

            return value.id == assetId
        })
       
        dispatch(setSelectedAsset(asset))

    }

    let handleClick = (e)=>{
        e.stopPropagation()

        let assetId = e.currentTarget.dataset.id;
        let type = e.currentTarget.dataset.type

        let asset = specificAsset.data.find((value)=>{

            return value.id == assetId
        })

        $('#overlay').show();
        $('#right-sidebar').show()
    
        let newAsset = {...asset, type}

       dispatch(setSelectedAsset(newAsset))
    }

    const lineScale = useMemo(()=>{

        let lowPrice = +data.low
        let sellPrice = +data.sell
        let highPrice = +data.high

        let percentChange = ((sellPrice - lowPrice)/(highPrice - lowPrice))*100

        return percentChange

    },[data])


    const deleteFavorite = (id)=>{

		let filteredAssets = favoriteAssets.filter((v,k)=>{
			return v.id !== data.id
		})

		if(favoriteAssets.length == 1){
			dispatch(removeFavorite({id:id,data:filteredAssets,changeSelectedAsset:true}))
			return
		}

		dispatch(removeFavorite({id:id,data:filteredAssets,changeSelectedAsset:null}))
    }


    const formatPrice = (value)=>{

        let price = String(value)

        
        let dotIndex = price.indexOf('.')

        if(dotIndex <= 2){

           price =  _.round(+value,6)
            
        }else if(dotIndex == 3){
            price =  _.round(+value,3)
        }
        else{
           price =  _.round(+value,2).toLocaleString()
        }


        return price
    }

   return(
       
         <div data-id={data.id} data-category={data.category} onClick={chooseAsset}
            className={`asset-row flex items-center text-xs hover:bg-gray-100 hover:dark:bg-slate-800 bg-white
			font-bold dark:text-gray-100 dark:bg-secondary-dark-bg border-b-1 px-1
			border-b-slate-300 dark:border-slate-800 cursor-pointer ${selectedAsset && selectedAsset.id == data.id && 'bg-gray-100 dark:bg-slate-800'}`}>

            <div className='flex-grow-[1.7] w-full py-2'>
                <div className='text-slate-600 dark:text-gray-200 flex items-center space-x-1'>
                    <AssetImages data={data}/>
                    <div className='ml-1'>
                        {data.name ? data.name : data.symbol}
                    </div>
                    
                </div>
            </div>

            <div className='flex-grow-[1.1] w-full py-2'>
                <div className={`${data.highlight && data.highlight.percentage_change === 'fall'?'text-red-600' : 'text-green-600'} `}>
                {data.highlight && data.highlight.percentage_change === 'fall'?'-' : '+'}{_.round(Number(String(data.percentage_change).replace('%','')),2)}%
                </div>
            </div>

            <div className='flex-grow-[1.8] w-full py-2'>
                <div>
                    <div className={`${userConfig.admin_trade == 0 ? 'flex items-center' : ''} text-slate-600 dark:text-gray-200`}>
                        <span className={` ${data.highlight && data.highlight.sell === 'fall'?'text-red-600' : 'text-green-600'} font-bold w-[4rem]`}>{formatPrice(data.sell)}</span>
                        {userConfig.admin_trade == 0 && (<button style={{color: currentColor, border: `1px solid ${currentColor}`}}
                                className='w-10 text-xs font-bold capitalize ml-2 border-0 rounded-md'
                                data-type="Sell" data-id={data.id} data-category={data.category}
                                onClick={handleClick}>sell
                        </button>)}
                        
                    </div>
                </div>
            </div>

            <div className='flex-grow-[1.8] w-full py-2'>
                <div>
                    <div className={`${userConfig.admin_trade == 0 ? 'flex items-center' : ''} items-center text-slate-600 dark:text-gray-200`}>
                        <span className={`${data.highlight && data.highlight.buy === 'fall'?'text-red-600' : 'text-green-600'} font-bold w-[4rem]`}>{formatPrice(data.buy)}</span>
                        {userConfig.admin_trade == 0 && (<button style={{color: currentColor, border: `1px solid ${currentColor}`}}
                                className='w-10 text-xs font-bold capitalize ml-2 border-0 rounded-md'
                                data-type="Buy" data-id={data.id} data-category={data.category}
                                onClick={handleClick}>buy
                        </button>)}
                        
                    </div>
                </div>
            </div>

            <div className='md:block hidden flex-grow-[1.5] w-full relative h-full py-2'>
                <div className='inline-block w-full mb-1 relative'>
                    <div className='inline-block transition-all -top-3 absolute' style={{left:lineScale+'%',transform:`translateX(-${lineScale}%)`}}>
                        <MdArrowDropDown size={16} className={lineScale < 50 ? `text-red-600`:`text-green-600`}/>
                    </div>
                    <div className='h-[2px] w-full bg-slate-700'></div>
                </div>
                <div className='flex items-center justify-between w-full '>
                    <div className={`${data.highlight && data.highlight.low === 'fall'?'text-red-600' : 'text-slate-100'} `}>
                        {formatPrice(data.low)}
                    </div>
                    <div className={`${data.highlight && data.highlight.high === 'none'?'text-slate-200' : 'text-green-600'} `}>
                        {formatPrice(data.high)}
                    </div>
                </div>
                
                
            
            </div>

            <div className='min-w-[60px] md:block hidden py-2'>
                <div className='flex gap-1'>
                    <div className='hover:bg-slate-300 hover:dark:bg-slate-900 p-[2px] rounded'>
                    {!inFavorite ? (
                        <div className='cursor-pointer' data-id={data.id} data-category={data.category}
                             style={{color: currentColor}}
                             title="Add to favorite"
                             onClick={(e) => {
								e.stopPropagation()
                                 const id = e.currentTarget.dataset.id
                                 //	const category = e.currentTarget.dataset.category

                                 dispatch(addFavorite({id}))
                             }}>
                            <span className='text-xl'><BiBookAdd/></span>
                        </div>
                    ) : (

                        <div title='Remove favorite' data-id={data.id} data-category={data.category}
                        className='text-xl cursor-pointer font-extrabold'
                        style={{color: currentColor}}
                        onClick={(e) => {
							e.stopPropagation()
                            const id = e.currentTarget.dataset.id
							deleteFavorite(id)
                            
                        }}>
                            <BsCheck2Circle/>
                        </div>
                    )}

                    </div>
                
                    <button title='Add chart' className='hover:bg-slate-300 hover:dark:bg-slate-900 p-[2px] rounded' 
                    onClick={(e)=>{
						e.stopPropagation()
                        let asset_id = data.id
                        let symbol = data.symbol
                        let category = data.category

                        let copiedChart = [...charts]
                        
                        //check if the asset is already present in the chart
                        let isPresent = false

                        copiedChart.find((v,k)=>{
                            if (v.asset_id == asset_id){
                                isPresent = true

                            }
                       })
                        
                        if(isPresent){
                            toast('Time series already exists for this assets')
                            
                            return
                        }

                        if(category === 'cryptocurrency' || category === 'forex' || category === 'stocks'){

                        
                            copiedChart.push({asset_id,symbol,category})
                            toast('Time series added to chart')
                            dispatch(updateCharts(copiedChart))
                        }else{

                            toast('Time series unavailable for this asset')
                            return
                        }
                        
                        
                    }}>
                        <TbChartCandle className='text-xl' style={{color:currentColor}}/>
                    </button> 
                </div>
                       
            </div>
        </div>
    )
}


export default TableRow
