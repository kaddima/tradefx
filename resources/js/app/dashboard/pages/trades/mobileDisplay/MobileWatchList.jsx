import React from 'react'
import { setActiveAsset, setCategoryAssets } from '../../../store/assetsSlice'

//watchlists 
import { FlagsCurrency, watchLists } from '../../../data/data'
import {useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { BsSearch } from 'react-icons/bs'


const MobileWatchList = () => {

    // gets the ecurrent color
    const currentColor = useSelector(state=>state.main.currentColor)
    //get number of users favorite
    const favoriteCount = useSelector(state=>state.assets.assets.favorite.length)
     // selects all assets
     const allAssets = useSelector(state=>state.assets.assets)
     const activeCategory = useSelector(state=>state.assets.active)

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

        <div className='w-full bg-white dark:bg-secondary-dark-bg flex'>
            {/* <div className='w-6 border'>
                <BsSearch className='text-slate-300'/>
            </div> */}
            <div id='mobile-watchlist'  className='flex-1 flex gap-5 overflow-x-scroll text-slate-600 dark:text-gray-300 items-center px-2 py-[9px]'>
                <div className={`${activeCategory == 'favorite' ? 'border-b border-b-[#03c9d7]' : ''} cursor-pointer relative`}>

                    <div  className='flex justify-start '
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
                        <div className='text-xs md:text-sm font-bold capitalize'>Favorite</div>

                        {(favoriteCount > 0) && (<div 
                        style={{color:currentColor}}
                        className='absolute -top-1 right-0  bg-slate-600 w-3 h-3
                        rounded-full flex justify-center items-center'>
                            <span className='text-extrabold text-[10px]'>{favoriteCount}</span>
                        </div>)}
                        
                    </div>

                </div>

                {watchLists.map((list, i)=>(
                <div key={i} className={`${activeCategory == list.name.replace(' ','_').toLowerCase() ? 'border-b border-b-[#03c9d7]' :''} cursor-pointer whitespace-nowrap text-xs capitalize font-semibold`} onClick={()=>{handleWatchListClick(list)}}>
                    <p>{list.name}</p>
                </div>
                ))}

                <button
                className={activeCategory == 'cryptocurrency' ? 'border-b border-b-[#03c9d7]' : ''}
                onClick={()=>{dispatch(setActiveAsset('cryptocurrency'))}}>
                    <span className='text-xs text-gray-600 dark:text-gray-300 font-semibold'>Crypto</span>
                </button>

                <button
                className={activeCategory == 'forex' ? 'border-b border-b-[#03c9d7]' : ''}
                onClick={()=>{dispatch(setActiveAsset('forex'))}}>
                    <span className='text-xs text-gray-600 dark:text-gray-300 font-semibold'>Forex</span>
                </button>

                <button
                className={activeCategory == 'stocks' ? 'border-b border-b-[#03c9d7]' : ''}
                onClick={()=>{dispatch(setActiveAsset('stocks'))}}>
                    <span className='text-xs text-gray-600 dark:text-gray-300 font-semibold'>Stocks</span>
                </button>

            </div>
        
        </div>
  )
}

export default MobileWatchList