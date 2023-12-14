import { current } from '@reduxjs/toolkit'
import React, {useEffect, useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

//DEPENDENCY
import _ from "lodash"

//ICONS
import {RiBitCoinLine,RiBriefcase5Line,RiStockFill} from "react-icons/ri"
import {FaSearch} from "react-icons/fa"
import {AiOutlineInfoCircle} from "react-icons/ai"
import {TbArrowsDoubleNeSw,TbArrowsDiagonalMinimize2} from "react-icons/tb"
import {ImCross} from "react-icons/im"
import {FiStar} from "react-icons/fi"
import {AiOutlineDollarCircle} from "react-icons/ai"

//DATA
import { watchLists, FlagsCurrency } from '../../data/data'

//COMPONENTS

import TableRow from './TableRow'
import SidebarTrades from './SidebarTrades'
import SidebarMarketInfo from './SidebarMarketInfo'
import AssetTable from "./AssetTable";

//REDUCERS
import {setActiveAsset,setCategoryAssets, updateAsset} from "../../store/assetsSlice";

//INDOC COMPONENTS
const WatchListItems = ({title, icon})=>(

    <div className='flex justify-start text-gray-600 dark:text-gray-300'>
        <span className='text-sm md:text-xl mr-1 md:mr-4  font-bold'>{icon}</span>
        <div className='text-xs md:text-sm font-bold capitalize'>{title}</div>
    </div>
)

const CurrencyLists = ({name,fullname,image})=>(

    <div title={fullname} className='flex justify-start items-center py-2 text-gray-600 dark:text-gray-300'>
        <img src={image} alt={fullname} className="h-6 w-6 mr-2"/>
        <div className='text-sm font-bold capitalize'>{name}</div>
    </div>
   
)

	// CONDITION TO DISPLAY RIGHT SIDEBR
	const ActiveRightSidebar = (value)=>{

		switch (value) {
			case 1:
				return <SidebarTrades/>

			case 2:
			return	<SidebarMarketInfo/>

			default:
				break;
		}
	}


const Trades = () => {

	const [sidebarView,setSidebarView] = useState(1)
    const dispatch = useDispatch();

    // gets the ecurrent color
    const currentColor = useSelector(state=>state.main.currentColor)
    // selects all assets
    const allAssets = useSelector(state=>state.assets.assets)
    //select all back up assets
    const backupAssets = useSelector(state=>state.assets.backupAssets)
    //this gets the assets to display(eg:bitcoin crypto)
    const activeAsset = useSelector(state=>state.assets.active)

    const assets = allAssets[activeAsset];

    //get number of users favorite
    const favoriteCount = useSelector(state=>state.assets.assets.favorite.length)

    //click handler (changes views for rightSIdebar---marketinfo or trades)
	const setActiveRightSidebar = (value)=>{
		setSidebarView(value)
	}

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
                //loop through the values and sort it
                // console.log(allAssets[assetsKeys[i]])
                // 
                
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

		return "Loading"
	}

  return (

    <div className='flex flex-col h-full  bg-transparent'>
	
        <div className="flex-1 gap-1 flex flex-col md:flex-row h-full relative">
            <div className='md:w-52'>
                <div className='px-2 md:h-full bg-white dark:bg-secondary-dark-bg overflow-auto'>
                    <div className='bg-white dark:bg-secondary-dark-bg relative px-2 py-2 rounded-tl-sm rounded-bl-sm'>
                        <input type="text" className=' bg-transparent border  rounded-sm pl-8  w-full h-6 font-bold
				            dark:text-slate-300 text-14' style={{borderColor : currentColor}}/>
                        <FaSearch className='dark:text-slate-300 absolute top-4 text-14 left-5 font-extrabold'/>
                    </div>

                    <div className='flex flex-wrap gap-3 md:block'>
                        <div className="cursor-pointer hover:bg-gray-100 hover:dark:bg-slate-800 dark:bg-slate-700 md:dark:bg-transparent rounded-lg p-2">
                            <Link to={'/dashboard/portfolio'}>
                                <div className='flex justify-start text-gray-600 dark:text-gray-300'>
                                    <span className='text-sm md:text-xl mr-1 md:mr-4 font-bold'><RiBriefcase5Line/></span>
                                    <div className='text-xs md:text-sm font-bold capitalize'>Portfolio</div>
                                </div>
                            </Link>
                        </div>
                        <div className="cursor-pointer hover:bg-gray-100 hover:dark:bg-slate-800 dark:bg-slate-700 md:dark:bg-transparent rounded-lg p-2 relative">

                            <div className='flex justify-start text-gray-600 dark:text-gray-300'
                                 onClick={()=>{dispatch(setActiveAsset('favorite'))}}>
                                <span className='text-sm md:text-xl mr-1 md:mr-4 font-bold'><FiStar/></span>
                                <div className='text-xs md:text-sm font-bold capitalize'>Favorite</div>

                                {(favoriteCount > 0) && (<div 
                                style={{color:currentColor}}
                                className='absolute top-0 -right-2 md:right-[87px]  bg-slate-600 w-4 h-4
                                rounded-full flex justify-center items-center'>
                                    <span className='text-extrabold text-xs'>{favoriteCount}</span>
                                </div>)}
                                
                            </div>

                        </div>

                        {watchLists.map((list, i)=>(
                        <div key={i} className="cursor-pointer hover:bg-gray-100 hover:dark:bg-slate-800 dark:bg-slate-700 md:dark:bg-transparent rounded-lg p-2" onClick={()=>{handleWatchListClick(list)}}>
                            <WatchListItems icon={list.icon} title={list.name}/>
                        </div>
                         ))}

                        <div
                        className='md:mt-4 md:border-t-1 hover:bg-gray-100 hover:dark:bg-slate-800 dark:border-slate-700 cursor-pointer
                        flex justify-start items-center text-slate-600 dark:text-gray-300 dark:bg-slate-700 md:dark:bg-transparent rounded-lg p-2'
                        onClick={()=>{dispatch(setActiveAsset('cryptocurrency'))}}>
                            <span className='text-sm md:text-xl mr-1 md:mr-4'><RiBitCoinLine/></span>
                            <div className='text-xs md:text-sm font-bold text-gray-600 dark:text-gray-300 '>Cryptos</div>
                        </div>

                        <div
                        className='md:mt-4 md:border-t-1 hover:bg-gray-100 hover:dark:bg-slate-800 dark:border-slate-700 cursor-pointer
                        flex justify-start items-center text-slate-600 dark:text-gray-300 dark:bg-slate-700 md:dark:bg-transparent rounded-lg p-2'
                        onClick={()=>{dispatch(setActiveAsset('forex'))}}>
                            <span className='text-sm md:text-xl mr-1 md:mr-4'><AiOutlineDollarCircle/></span>
                            <div className='text-xs md:text-sm font-bold text-gray-600 dark:text-gray-300 '>Forex</div>
                        </div>

                        <div
                        className='md:mt-4 md:border-t-1 hover:bg-gray-100 hover:dark:bg-slate-800 dark:border-slate-700 cursor-pointer
                        flex justify-start items-center text-slate-600 dark:text-gray-300 dark:bg-slate-700 md:dark:bg-transparent rounded-lg p-2'
                        onClick={()=>{dispatch(setActiveAsset('stocks'))}}>
                            <span className='text-sm md:text-xl mr-1 md:mr-4'><RiStockFill/></span>
                            <div className='text-xs md:text-sm font-bold text-gray-600 dark:text-gray-300'>Stocks</div>
                        </div>

                    </div>

                    
                    {/* <div className='mt-3'>
                        <span className='font-bold text-sm text-slate-400'>Forex</span>
                        <div
                        className='text-sm font-bold text-gray-600 dark:text-gray-300 py-2'
                        onClick={()=>{dispatch(setActiveAsset('forex'))}}>Most Traded</div>
                        {/*  {FlagsCurrency.map((item, i)=>(

                            <div key={i} className="cursor-pointer hover:bg-gray-100 hover:dark:bg-slate-800">
                                <CurrencyLists name={item.name}
                                               fullname={item.fullname}
                                               image={item.image}/>
                            </div>
                        ))} *}
                    </div> */}

                </div>
            </div>

            <div className="w-full flex-1 mt-3 md:mt-0 bg-white dark:bg-secondary-dark-bg">
               { !assets.length ? ( <div className='h-full w-full bg-white dark:bg-secondary-dark-bg px-4 borde border-red-700'>
                <div className='text-gray-800 font-bold dark:text-gray-200 md:w-2/5 text-center absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'>
                    <div className='w-20 h-20 rounded-full bg-slate-500 dark:bg-slate-800 flex justify-center items-center text-5xl mx-auto'>
                        <TbArrowsDiagonalMinimize2/>
                    </div>
                    <div className='mt-3 space-y-1'>
                        <p >No favorite Assets</p>
                        <p className='text-sm font-semibold'>Add to your favorite to see them here</p>
                    </div>       
                </div>
            </div>) : <AssetTable data={assets}/> } 
            </div>
            {/* <div className='w-screen h-screen md:w-0 md:h-0 left-0 top-0 fixed z-[888] hidden bg-slate-800 opacity-70 md:hidden' id='overlay'>
            </div> */}
            {/* RIGHT SIDEBAR */}
            <div id='right-sidebar' className='h-4/5 overflow-auto md:h-full md:w-60 fixed z-[900] md:static w-4/5 shadow-lg 
            top-2/4 -translate-y-2/4 bg-main-dark-bg left-2/4 -translate-x-2/4 md:translate-x-0 md:translate-y-0 hidden md:block'>
                <div className='relative flex flex-col h-full dark:text-gray-300 text-center'>
                    <div className='bg-white dark:bg-secondary-dark-bg pt-2 '>
                        <div className='mb-10 text-sm font-bold'>
                            <h1 >US TOP 100</h1>
                        </div>
                        <span className='absolute block top-3 right-3 cursor-pointer md:hidden'
                        onClick={()=>{
                            $('#overlay').hide();
                            $('#right-sidebar').hide()
                        }}><ImCross/></span>

                        <div className='flex w-full px-4 pb-1 justify-between md:justify-around text-xs font-extrabold mx-auto lg:w-3/4'>
                            <div
                                onClick={()=>{setActiveRightSidebar(1)}}

                                className={`flex flex-col p-2 items-center cursor-pointer border-b-2 dark:bottom-b-1
							border-transparent rounded-sm`}
                                style={{borderBottomColor:(sidebarView === 1) ? currentColor : ''}}>
                                <span className='text-xl'><TbArrowsDoubleNeSw/></span>
                                <h1 className='mt-2'>Trade</h1>
                            </div>
                            <div
                                onClick={()=>{setActiveRightSidebar(2)}}
                                className='flex border-b-2 dark:border-b-1 border-transparent
							flex-col p-2 items-center cursor-pointer rounded-sm'
                                style={{borderBottomColor:(sidebarView === 2) ? currentColor : ''}}>
                                <span className='text-xl'><AiOutlineInfoCircle/></span>
                                <h1 className='mt-2'>Market Info</h1>
                            </div>

                        </div>
                    </div>

                    {/* PRICE RANGE */}
                    <div className='flex-1 mt-1 overflow-auto'>
                        {ActiveRightSidebar(sidebarView)}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Trades
