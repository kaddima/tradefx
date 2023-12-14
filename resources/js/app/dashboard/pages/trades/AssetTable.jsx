import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import _ from 'lodash';

import {setActiveAsset,addFavorite,removeFavorite,
    setSelectedAsset} from "../../store/assetsSlice"

import { updateCharts } from '../../store/chartSlice';

import {BiBookAdd} from "react-icons/bi"
import {BsCheck2Circle} from "react-icons/bs"
import {TbChartCandle} from "react-icons/tb"

import {toast} from 'react-toastify';
import { Chart } from 'react-chartjs-2';

const TableRow = ({currentColor,data,inFavorite})=> {


    //get assets in a particular catefory
    let specificAsset = useSelector(state=>state.assets.assets[data.category])
    //get userid
    let userConfig = useSelector(state=>state.account.config)

    //get the assets chart
    let charts = useSelector(state=>state.charts.charts)

    const dispatch = useDispatch()

    const notify = (message) => toast(message);

    let handleClick = (e)=>{

        let assetId = e.currentTarget.dataset.id;
        let assetCategory = e.currentTarget.dataset.category;
        let type = e.currentTarget.dataset.type

        let asset = specificAsset.find((value)=>{

            return value.id == assetId
        })

        $('#overlay').show();
        $('#right-sidebar').show()

        let newAsset = {...asset, type}

       dispatch(setSelectedAsset(newAsset))
    }

   return(
       <>
         <tr data-id={data.id} data-category={data.category}
            className='text-xs hover:bg-gray-100 hover:dark:bg-slate-800 bg-white
			font-bold dark:text-gray-100 dark:bg-secondary-dark-bg border-b-1
			border-b-slate-300 dark:border-slate-700'>
            <td>
                <div className='text-slate-600 dark:text-gray-200'>
                    {data.name ? data.name : data.symbol}
                </div>
            </td>
            <td>
                <div className={`text-center ${data.highlight && data.highlight.change_one_day === 'fall'?'text-red-600' : 'text-green-600'} `}>
                    {_.round(data.change_one_day, 2)}
                </div>
            </td>
            <td>
                <div>
                    <div className={`${userConfig.admin_trade == 0 ? 'flex items-center' : 'text-center'} text-slate-600 dark:text-gray-200`}>
                        <span className={` ${data.highlight && data.highlight.sell === 'fall'?'text-red-600' : 'text-green-600'} font-bold w-[4rem]`}>{_.round(data.sell,2).toLocaleString()}</span>
                        {userConfig.admin_trade == 0 && (<button style={{color: currentColor, border: `1px solid ${currentColor}`}}
                                className='w-10 text-xs font-bold capitalize ml-2 border-0 rounded-md'
                                data-type="Sell" data-id={data.id} data-category={data.category}
                                onClick={handleClick}>sell
                        </button>)}
                        
                    </div>
                </div>
            </td>
            <td>
                <div>
                    <div className={`${userConfig.admin_trade == 0 ? 'flex items-center' : 'text-center'} items-center text-slate-600 dark:text-gray-200`}>
                        <span className={`${data.highlight && data.highlight.buy === 'fall'?'text-red-600' : 'text-green-600'} font-bold w-[4rem]`}>{_.round(data.buy,2).toLocaleString()}</span>
                        {userConfig.admin_trade == 0 && (<button style={{color: currentColor, border: `1px solid ${currentColor}`}}
                                className='w-10 text-xs font-bold capitalize ml-2 border-0 rounded-md'
                                data-type="Buy" data-id={data.id} data-category={data.category}
                                onClick={handleClick}>buy
                        </button>)}
                        
                    </div>
                </div>
            </td>
            <td className=''>
                <div className={`text-center ${data.highlight && data.highlight.low === 'fall'?'text-red-600' : 'text-green-600'} `}>
                    {_.round(data.low,2).toLocaleString()}
                </div>
            </td>
            <td className=''>
                <div className={`text-center  ${data.highlight && data.highlight.high === 'fall'?'text-red-600' : 'text-green-600'} `}>{_.round(data.high,2).toLocaleString()}</div>
            </td>
            <td>
                <div className='flex gap-2'>
                    <div className='hover:bg-slate-300 hover:dark:bg-slate-900 p-1 rounded'>
                    {!inFavorite ? (
                        <div className='cursor-pointer' data-id={data.id} data-category={data.category}
                             style={{color: currentColor}}
                             title="Add to favorite"
                             onClick={(e) => {

                                 const id = e.currentTarget.dataset.id
                                 //	const category = e.currentTarget.dataset.category

                                 dispatch(addFavorite({id})).unwrap().then(data => {

                                     if (data.status) {

                                         notify('Asset added to favorite')
                                     } else {
                                         notify('Asset already present')
                                     }
                                 })
                             }}>
                            <span className='text-2xl'><BiBookAdd/></span>
                        </div>
                    ) : (

                        <div title='Remove favorite' data-id={data.id} data-category={data.category}
                        className='text-xl cursor-pointer font-extrabold'
                        style={{color: currentColor}}
                        onClick={(e) => {

                            const id = e.currentTarget.dataset.id

                            //	const category = e.currentTarget.dataset.category

                            dispatch(removeFavorite({id})).unwrap().then(data => {

                                if (data.status) {

                                    notify('Asset removed from favorite')
                                }
                            })
                        }}>
                            <BsCheck2Circle/>
                        </div>
                    )}

                    </div>
                
                    <button title='Add chart' className='hover:bg-slate-300 hover:dark:bg-slate-900 p-1 rounded' 
                    onClick={()=>{
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
                        <TbChartCandle className='text-2xl' style={{color:currentColor}}/>
                    </button> 
                </div>
                       
            </td>
        </tr>
    </>)
}

const AssetTable = ({data}) => {
    const currentColor = useSelector(state=>state.main.currentColor)
       //get all favorite assets
       let favoriteAssets = useSelector(state=>state.assets.assets.favorite)
  return (
        <div className='relative overflow-auto md:h-full'>
            <table className='w-full table-auto border-collapse dark:text-gray-200 text-gray-700'>
                <thead >
                    <tr>
                        <th className='dark:bg-secondary-dark-bg w-[10%]'>
                            Market
                        </th>
                        <th className='dark:bg-secondary-dark-bg text-center'>
                            Change
                        </th>
                        <th className='dark:bg-secondary-dark-bg text-center w-[15%]'>
                            Sell
                        </th>
                        <th className='pl-12 dark:bg-secondary-dark-bg text-center w-[15%]'>
                            Buy
                        </th>
                        <th className='dark:bg-secondary-dark-bg text-center'>
                            Low
                        </th>
                        <th className='dark:bg-secondary-dark-bg text-center '>
                            High
                        </th>
                        <th className='dark:bg-secondary-dark-bg'> </th>
                    </tr>
                </thead>
                <tbody className="overflow-auto">
                    <div className='mt-[2px]'> </div>
                    {data.map((asset,i)=>{

                        let isfavorite = false;

                        {favoriteAssets.find((favorite)=>{

                            if(favorite.id == asset.id){
                                return isfavorite = true
                            }
                        })}

                        return  <TableRow key={i}
                                        inFavorite={isfavorite}
                                        data={asset} currentColor={currentColor}/>

                    })}

                </tbody>
            </table>

        </div>

  )
}

export default AssetTable
