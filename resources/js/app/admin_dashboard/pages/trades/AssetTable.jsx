import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {useParams} from "react-router-dom"
import _ from 'lodash';

import {setActiveAsset,addFavorite,removeFavorite,
    setSelectedAsset} from "../../store/assetsSlice"

import {BiBookAdd} from "react-icons/bi"
import {BsCheck2Circle} from "react-icons/bs"

import {toast} from 'react-toastify';

const TableRow = ({currentColor,data,inFavorite})=> {

    //get assets in a particular catefory
    let specificAsset = useSelector(state=>state.assets.assets[data.category])

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
                    <div className='flex justify-center items-center text-slate-600 dark:text-gray-200'>
                        <span className={` ${data.highlight && data.highlight.sell === 'fall'?'text-red-600' : 'text-green-600'} font-bold w-[4rem]`}>{_.round(data.sell,2).toLocaleString()}</span>
                        <button style={{color: currentColor, border: `1px solid ${currentColor}`}}
                                className='w-10 text-xs font-bold capitalize ml-2 border-0 rounded-md'
                                data-type="Sell" data-id={data.id} data-category={data.category}
                                onClick={handleClick}>sell
                        </button>
                    </div>
                </div>
            </td>
            <td>
                <div>
                    <div className='flex justify-center items-center text-slate-600 dark:text-gray-200'>
                        <span className={`${data.highlight && data.highlight.buy === 'fall'?'text-red-600' : 'text-green-600'} font-bold w-[4rem]`}>{_.round(data.buy,2).toLocaleString()}</span>
                        <button style={{color: currentColor, border: `1px solid ${currentColor}`}}
                                className='w-10 text-xs font-bold capitalize ml-2 border-0 rounded-md'
                                data-type="Buy" data-id={data.id} data-category={data.category}
                                onClick={handleClick}>buy
                        </button>
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
                <div>
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
            </td>
        </tr>
    </>)
}

const AssetTable = ({data}) => {
    const currentColor = useSelector(state=>state.main.currentColor)
       //get all favorite assets
       let favoriteAssets = useSelector(state=>state.assets.assets.favorite)
  return (
        <div className='md:ml-1 relative overflow-auto md:h-full'>
            <table className='w-full table-auto border-collapse dark:text-gray-200 text-gray-700'>
                <thead >
                    <tr>
                        <th className='dark:bg-secondary-dark-bg w-[15%]'>
                            Market
                        </th>
                        <th className='dark:bg-secondary-dark-bg text-center w-[10%]'>
                            Change
                        </th>
                        <th className='dark:bg-secondary-dark-bg text-center w-[18%]'>
                            Sell
                        </th>
                        <th className='dark:bg-secondary-dark-bg text-center w-[18%]'>
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
