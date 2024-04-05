import React, {useEffect, useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import _ from "lodash"
import {FaAngleDown} from "react-icons/fa"
import AssetTable from "./AssetTable";
import WatchList from '../../components/tradingView/WatchList'
import RightSideBar from '../../components/tradingView/RightSideBar'
import {updateAsset} from "../../store/assetsSlice";
import TradingViewWidget from '../../components/tradeViewWidget/TradingViewWidget';
import Layout from './mobileDisplay/Layout';

const TradingView = () => {

    const [toggleChart,setToggleCHart] = useState(true)
    const dispatch = useDispatch();

    // selects all assets
    const allAssets = useSelector(state=>state.assets.assets)

    //this gets the assets to display(eg crypto,forex)
    const activeAsset = useSelector(state=>state.assets.active)

    const assets = (['cryptocurrency','forex','stocks',
        'oil_market','commodity']).includes(activeAsset) ? allAssets[activeAsset].data : allAssets[activeAsset];


   const isMobile = window.matchMedia("only screen and (max-width:760px)").matches

    useEffect(()=>{

        let interval;
        let newAssets = []
        let percentCH = 0.005

        if(assets){
            interval = setInterval(()=>{
                
                assets.map((v,k)=>{

                    let per_change = String(v.percentage_change).replace(/%|-/g,'')
                    let ch = Number(per_change) * percentCH
                    let sellPr = Number(v.sell) * percentCH
                    let buyPr = Number(v.buy) * percentCH

                    let changeRandom = _.random(-ch,ch)
                    let sellRandom = _.random(-sellPr,sellPr)
                    let buyRandom = _.random(-buyPr,buyPr)

                    let percentage_change = changeRandom + +per_change
                    let sell = +v.sell + sellRandom
                    let buy = +v.buy + buyRandom

                    let low = sell < v.low ? sell : v.low
                    let high = buy > v.high ? buy : v.high


                    //swap values incase sell grows higher than buy
                    if(sell > buy){

                        let tmp = buy
                        buy = sell
                        sell = tmp

                        low = sell < v.low ? sell : v.low
                        high = buy > v.high ? buy : v.high
                    }


                    let highlight = {percentage_change:changeRandom < 0 ?'fall':'rise',
                                sell:sellRandom < 0 ? 'fall':'rise',
                                buy:buyRandom<0 ?'fall':'rise',
                                high:high != v.high ? 'rise' : 'none',
                                low:low != v.low ? 'fall' : 'none'
                            }

                    newAssets.push({...assets[k],percentage_change,
                        sell,
                        buy,
                        low,
                        high,
                        highlight})

                })

                dispatch(updateAsset({assets:newAssets,name:activeAsset}))
            },2000)
    
        }
        
       return ()=>{

        clearInterval(interval)
    }

    },[assets])

    if(isMobile && assets){

        return <Layout assets={assets}/>
    }

    if(!assets){

		return "Loading"
	}

  return (

    <div className='h-full gap-1 hidden md:flex'>
        <div className='flex-1 h-full bg-transparent flex flex-col'>
        
            <div className="flex-1 gap-1 flex flex-col md:flex-row relative h-[217px]">
                <div className='md:w-52'>
                    <WatchList/>
                </div>

                <div className="flex-1 mt-3 md:mt-0">
                    <AssetTable data={assets}/>
                </div>
            </div>

            <div>
                <button onClick={()=>{setToggleCHart(prev=>!prev)}} className='w-[40px] block mx-auto dark:bg-slate-700 text-center text-slate-400'><FaAngleDown className='mx-auto inline-block ' size={12}/></button>
            </div>

            {toggleChart == true && <div className='flex-1 w-full relative'>
                {/* <ChartView data={candleStickData}/> */}
                <TradingViewWidget/>
            </div>}
            
        </div>
        
        {/* RIGHT SIDEBAR */}
        <div className='min-w-[2rem] overflow-hidden flex-shrink-0'>
            <RightSideBar/> 
        </div>
        
          
               
    </div>

  )
}

export default TradingView
