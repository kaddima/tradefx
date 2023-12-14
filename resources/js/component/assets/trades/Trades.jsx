import { current } from '@reduxjs/toolkit'
import React, {useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'

//DEPENDENCY
import _ from "lodash"

//ICONS
import {RiBitCoinLine,RiStockFill} from "react-icons/ri"
import {AiOutlineDollarCircle} from "react-icons/ai"

//DATA
import { watchLists,} from '../data/data'

//COMPONENTS
import AssetTable from "./AssetTable";

//REDUCERS
import {setActiveAsset,setCategoryAssets, updateAsset} from "../store/assetsSlice";

//INDOC COMPONENTS
const WatchListItems = ({title, icon})=>(

    <div className='flex justify-start py-2 text-gray-600 dark:text-gray-300'>
        <span className='text-sm md:text-xl mr-1 md:mr-4  font-bold'>{icon}</span>
        <div className='text-xs md:text-sm font-bold capitalize'>{title}</div>
    </div>
)


const Trades = () => {
    const dispatch = useDispatch();

    // selects all assets
    const allAssets = useSelector(state=>state.assets.assets)

    //select all back up assets
    const backupAssets = useSelector(state=>state.assets.backupAssets)
    //this gets the assets to display(eg:bitcoin crypto)
    const activeAsset = useSelector(state=>state.assets.active)

    const assets = allAssets[activeAsset];

    const handleWatchListClick = (list)=>{
        if(list.name == 'oil market' || list.name == 'commodity'){
                                
            let name = list.name.replace(' ', '_')

            dispatch(setActiveAsset(name))
           
        }

        else if(list.name.toLowerCase() === "most traded" ||list.name.toLowerCase() === "top fallers" 
        || list.name.toLowerCase() === "most volatile" || list.name.toLowerCase() === "top riser"){

            let name = list.name.toLowerCase().replace(' ','_')
            //if there are assets present in most traded just fetch them
            
            if(allAssets[name].length > 0){
                dispatch(setActiveAsset(name))
            }else{
                //else added the items and fetch them
            let assets = []

            // loop through all assets
            let assetsKeys =  Object.keys(allAssets)

            for(let i=0; i < assetsKeys.length; i++){

                if(assetsKeys[i] == 'forex' || assetsKeys[i] =='stocks' || 
                    assetsKeys[i] =='oil_market'|| assetsKeys[i] == 'cryptocurrency' 
                     || assetsKeys[i] == "commodity"){

                    //console.log(assetsKeys[i])
                    //console.log(allAssets[assetsKeys[i]].slice(0,10)) 
                    if(name == 'top_fallers' || name == 'most_volatile'){
                        //make a copy of allAssets and and reverse it
                        let newArr = [...allAssets[assetsKeys[i]]]
                
                        assets = assets.concat(newArr.reverse().slice(0,12))
                    }else{
                    assets = assets.concat(allAssets[assetsKeys[i]].slice(0,7))
                    }
                    
                }
                continue
                
            }
            
            assets = _.shuffle(assets)
            //dispatch the data to the store
            dispatch(setCategoryAssets({name,data:assets}))
            }            
        }
    }

    useEffect(()=>{

        let assets = backupAssets[activeAsset]
        let newAssets = []
        let percentCH = 0.005
        
        let interval = setInterval(()=>{
            
            assets.map((v,k)=>{

                let ch = Number(v.change_one_day)
                let sellPr = Number(v.sell) * percentCH
                let buyPr = Number(v.buy) * percentCH
                let lowPr = Number(v.low) * percentCH
                let highPr = Number(v.sell) * percentCH

            
                let changeRandom = _.random(-ch,ch)
                let sellRandom = _.random(-sellPr,sellPr)
                let buyRandom = _.random(-buyPr,buyPr)
                let lowRandom = _.random(-lowPr,lowPr)
                let highRandom = _.random(-highPr,highPr)

                let change_one_day = changeRandom
                let sell = +v.sell + sellRandom
                let buy = +v.buy + buyRandom
                let low = +v.low + lowRandom
                let high = +v.high + highRandom

                let highlight = {change_one_day:changeRandom < 0 ?'fall':'rise',
                            sell:sellRandom <0 ?'fall':'rise',
                            buy:buyRandom<0 ?'fall':'rise',
                            high:highRandom<0 ?'fall':'rise',
                            low:lowRandom < 0 ? 'fall':'rise'
                        }

                newAssets.push({...assets[k],change_one_day,sell,buy,low,high,highlight})

            })

             dispatch(updateAsset({assets:newAssets,name:activeAsset}))
        },2000)
 

       return ()=>{

        clearInterval(interval)
    }

    },[assets])

   if(!assets){

        return "loading..."
    }

  return (

    <div className='flex flex-col h-4/5 bg-transparent overflow-auto'>	
        <div className="flex-1 flex flex-col md:flex-row gap-5 h-full relative">
            <div className='md:w-40 bg-orange-50'>
                <div className='px-2 md:h-full overflow-auto'>
            
                    <div className='flex flex-wrap gap-3 md:flex-col'>

                        {watchLists.map((list, i)=>(
                        <div key={i} className={`cursor-pointer ${list.name.toLowerCase().replace(' ','_') == activeAsset ? 'border border-orange-600 rounded' : ''} hover:bg-gray-100 hover:dark:bg-slate-800`} onClick={()=>{handleWatchListClick(list)}}>
                            <WatchListItems icon={list.icon} title={list.name}/>
                        </div>
                         ))}

                        <div
                        className={`md:mt-2 md:border-t-1 ${'cryptocurrency' == activeAsset ? 'border border-orange-600 rounded' : ''} hover:bg-gray-100 hover:dark:bg-slate-800 dark:border-slate-700 cursor-pointer
                        flex justify-start items-center text-slate-600 dark:text-gray-300`}
                        onClick={()=>{dispatch(setActiveAsset('cryptocurrency'))}}>
                            <span className='text-sm md:text-xl mr-1 md:mr-4'><RiBitCoinLine/></span>
                            <div className='text-xs md:text-sm font-bold text-gray-600 dark:text-gray-300 py-2'>Cryptos</div>
                        </div>

                        <div
                        className={`md:mt-4 md:border-t-1 hover:bg-gray-100 hover:dark:bg-slate-800 dark:border-slate-700 cursor-pointer
                        flex justify-start items-center ${'forex' == activeAsset ? 'border border-orange-600 rounded' : ''} text-slate-600 dark:text-gray-300`}
                        onClick={()=>{dispatch(setActiveAsset('forex'))}}>
                            <span className='text-sm md:text-xl mr-1 md:mr-4'><AiOutlineDollarCircle/></span>
                            <div className='text-xs md:text-sm font-bold text-gray-600 dark:text-gray-300 py-2 '>Forex</div>
                        </div>

                        <div
                        className={`md:mt-4 md:border-t-1 ${'stocks' == activeAsset ? 'border border-orange-600 rounded' : ''} hover:bg-gray-100 hover:dark:bg-slate-800 dark:border-slate-700 cursor-pointer
                        flex justify-start items-center text-slate-600 dark:text-gray-300`}
                        onClick={()=>{dispatch(setActiveAsset('stocks'))}}>
                            <span className='text-sm md:text-xl mr-1 md:mr-4'><RiStockFill/></span>
                            <div className='text-xs md:text-sm font-bold text-gray-600 dark:text-gray-300 py-2'>Stocks</div>
                        </div>

                    </div>

                </div>
            </div>

            <div className="w-full flex-1">
                <AssetTable data={assets}/>
            </div>
        </div>
    </div>
  )
}

export default Trades
