import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { FiStar } from 'react-icons/fi'
import { RiBitCoinLine, RiBriefcase5Line, RiStockFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

import { setActiveAsset, setCategoryAssets } from '../../store/assetsSlice'

//watchlists 
import { FlagsCurrency, watchLists } from '../../data/data'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

const WatchListItems = ({title, icon})=>(

    <div className='flex justify-start text-gray-600 dark:text-gray-300'>
        <span className='text-sm md:text-xl mr-1 md:mr-4  font-bold'>{icon}</span>
        <div className='text-xs md:text-sm font-bold capitalize'>{title}</div>
    </div>
)


const WatchList = () => {

    // gets the ecurrent color
    const currentColor = useSelector(state=>state.main.currentColor)
    //get number of users favorite
    const favoriteCount = useSelector(state=>state.assets.assets.favorite.length)
     // selects all assets
     const allAssets = useSelector(state=>state.assets.assets)

    const dispatch = useDispatch()

    const handleWatchListClick = (list)=>{
       if(list.name.toLowerCase() === "most traded" ||list.name.toLowerCase() === "top fallers" 
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
                        let newArr = [...allAssets[assetsKeys[i]].data]
                
                        assets = assets.concat(newArr.reverse().slice(0,12))
                    }else{
                        assets = assets.concat(allAssets[assetsKeys[i]].data.slice(0,7))
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

    const forexFlagClick = (e)=>{

        let currency = e.currentTarget.dataset.currency
        let category = 'forex'

        axios.get('/assets/forex/currency',{params:{currency}}).then(result=>{
            let data = result.data.data
            dispatch(setCategoryAssets({data,name:category}))
            
        }).catch(e=>{
            console.log(e.response)
        })
        

    }

  return (

        <div className='w-full px-2 md:h-full bg-white dark:bg-secondary-dark-bg overflow-auto'>
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

                    <div  className='flex justify-start text-gray-600 dark:text-gray-300'
                        onClick={()=>{
                            if(favoriteCount < 1){
                                 /**This changes the active category to cryptocurrency so the 
                                  * favorite category is not activated since its empty
                                 */
                                dispatch(setActiveAsset('cryptocurrency'))
                            }else{
                                dispatch(setActiveAsset('favorite'))
                            }
                        }}>
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
                className='md:mt-3 hover:bg-gray-100 hover:dark:bg-slate-800 dark:border-slate-700 cursor-pointer
                flex justify-start items-center text-slate-600 dark:text-gray-300 dark:bg-slate-700 md:dark:bg-transparent p-2'
                onClick={()=>{dispatch(setActiveAsset('cryptocurrency'))}}>
                    <span className='text-sm md:text-xl mr-1 md:mr-4'><RiBitCoinLine/></span>
                    <div className='text-xs md:text-sm font-bold text-gray-600 dark:text-gray-300 '>Cryptos</div>
                </div>

                <div className='md:mt-3'>
                    <h1 className='text-slate-600 text-sm font-semibold pl-2'>Forex</h1>
                    <div className='md:mt-2 hover:bg-gray-100 hover:dark:bg-slate-800 cursor-pointer
                    text-slate-600 dark:text-gray-300 dark:bg-slate-700 md:dark:bg-transparent pl-2'
                    onClick={()=>{dispatch(setActiveAsset('forex'))}}>
                        <div className='text-xs md:text-sm font-bold text-gray-600 dark:text-gray-300 '>Most Traded</div>
                    </div>
                    <div className='space-y-1 mt-2'>
                        {FlagsCurrency.map((v,k)=>{

                            return <div key={k} onClick={forexFlagClick} title={v.fullname} data-currency={v.name.toLowerCase()} className='flex items-center md:space-x-2 pl-2 cursor-pointer hover:bg-gray-100 hover:dark:bg-slate-800 text-gray-600
                             dark:text-gray-300 text-[13px] font-semibold py-1'>
                                <div className='w-4 h-4 rounded-full overflow-hidden'>
                                    <img src={`/images/flags/${v.name.toLowerCase()}.png`} alt="" className='w-full object-cover' />
                                </div>
                                <p>{v.name}</p>
                            </div>
                        })}
                    </div>
                </div>
               

                <div
                className='md:mt-4 hover:bg-gray-100 hover:dark:bg-slate-800 dark:border-slate-700 cursor-pointer
                flex justify-start items-center text-slate-600 dark:text-gray-300 dark:bg-slate-700 md:dark:bg-transparent p-2'
                onClick={()=>{dispatch(setActiveAsset('stocks'))}}>
                    <span className='text-sm md:text-xl mr-1 md:mr-4'><RiStockFill/></span>
                    <div className='text-xs md:text-sm font-bold text-gray-600 dark:text-gray-300'>Stocks</div>
                </div>

            </div>
        
        </div>
  )
}

export default WatchList