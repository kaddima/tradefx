import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from "react-redux"

import _ from 'lodash'
import axios from 'axios'

const alpha =  require('alphavantage')({key:'BZBHOKLS81DJSPX2'})

import {updateCharts} from "../store/chartSlice"

import {AiFillCloseCircle} from "react-icons/ai"
import {MdOutlineAddChart} from "react-icons/md"
import TradingViewWidget from '../components/tradeViewWidget/TradingViewWidget'


const Chart = () => {

    const charts = useSelector(state=>state.charts.charts)
	const currentColor = useSelector(state=>state.main.currentColor)
	const dispatch = useDispatch()
	const [activeChartId, setActiveChartId] = useState(0)

    const [chartData, setChart] = useState(null)


	const handleChartClick = (e)=>{
		let asset_id = e.currentTarget.dataset.asset_id
		let category =  e.currentTarget.dataset.category
		let assetSymbol=  e.currentTarget.dataset.symbol

		let symbol;


		//split symbol
		if(category === 'cryptocurrency'){
			symbol = assetSymbol.toUpperCase()+'USD'

		}else if(category === 'stocks'){
			symbol = assetSymbol
		}
		else if(category === 'forex'){
			symbol = assetSymbol.replace('/','')
		}
		
		setActiveChartId(asset_id)
		setChart(symbol)
	}

	const removeChart = (e)=>{
		e.stopPropagation()
		let newCharts
		let asset_id = e.currentTarget.dataset.asset_id

		newCharts = charts.filter((v,i)=>{

			if(v.asset_id != asset_id){

				return v
			}
		})

		dispatch(updateCharts(newCharts))
	}

  return (
    <div className='h-full space-y-2'>

		<div className='flex flex-wrap gap-3'>
			{charts.map((v,i)=>{

				return (<div key={i} className={`flex hover:bg-slate-400 hover:dark:bg-slate-600 border border-transparent gap-2 p-2 rounded bg-slate-300
				 cursor-pointer dark:bg-slate-800 text-slate-200`}
				 style={v.asset_id == activeChartId ? {borderColor : currentColor} : {}}
				data-symbol={v.symbol} data-category={v.category} data-asset_id={v.asset_id}
				onClick={handleChartClick}>
					<p>{v.symbol}</p>
					<span className='text-2xl hover:text-slate-400' data-asset_id={v.asset_id} onClick={removeChart}><AiFillCloseCircle/></span>
				</div>)
			})}
		</div>

		{(!charts.length) &&  (

			<div className='h-full bg-white dark:bg-secondary-dark-bg px-4'>
					<div className='text-gray-800 font-bold dark:text-gray-200 md:w-2/5 text-center absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'>
                    <div className='w-20 h-20 rounded-full bg-slate-500 dark:bg-slate-800 flex justify-center items-center text-5xl mx-auto'>
                        <MdOutlineAddChart/>
                    </div>
                    <div className='mt-3 space-y-1'>
                        <p >Chart is empty</p>
                        <p className='text-sm font-semibold'>Bring the market into the chart section</p>
                    </div>
                </div>
            </div>)

		}

		{(charts.length > 0 && activeChartId == 0) && (<div className='h-full bg-white dark:bg-secondary-dark-bg px-4'>
					<div className='text-gray-800 font-bold dark:text-gray-200 md:w-2/5 text-center absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'>
                    <div className='w-20 h-20 rounded-full bg-slate-500 dark:bg-slate-800 flex justify-center items-center text-5xl mx-auto'>
                        <MdOutlineAddChart/>
                    </div>
                    <div className='mt-3 space-y-1'>
                        <p >Chart is now available</p>
                        <p className='text-sm font-semibold'>Click on the assets symbol above to view chart</p>
                    </div>
                </div>
            </div>)
		} 
 
		 {(charts.length && activeChartId) && (<div className='bg-white px-3 dark:bg-secondary-dark-bg flex-1 h-full'>

				<TradingViewWidget symbol={chartData}/>
			</div>)
		}

    </div>

  )
}

export default Chart
