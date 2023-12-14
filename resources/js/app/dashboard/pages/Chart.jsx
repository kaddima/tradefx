import React,{useState,useEffect} from 'react'
import ApexCharts from 'react-apexcharts'
import {useSelector,useDispatch} from "react-redux"

import _ from 'lodash'
import axios from 'axios'

const alpha =  require('alphavantage')({key:'BZBHOKLS81DJSPX2'})

import {updateCharts} from "../store/chartSlice"

import {AiFillCloseCircle} from "react-icons/ai"
import {MdOutlineAddChart} from "react-icons/md"

const chartOption = {
        chart: {
            type: 'candlestick',
            width: "100%",
            height: "100%",


        },
        responsive: [{
            breakpoint: '650px',
            options: {},
        }],
        title: {
            align: 'left'
        },
        xaxis: {
            type: 'datetime',
            labels: {
                show: true,
                style: {
                    colors: '#777',
                    fontWeight: 800,
                },

            },
        },
        yaxis: {
            forceNiceScale: true,
            tickAmount: 10,
            tooltip: {
            enabled: true,
            },
            labels: {
                show: true,
                align: 'right',
                minWidth: 0,
                maxWidth: 160,
                style: {
                    colors: ['#777'],
                    fontSize: '12px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 800,
                    cssClass: 'apexcharts-yaxis-label',
                },

            },
        },


    }

const Chart = () => {

    const charts = useSelector(state=>state.charts.charts)
	const currentColor = useSelector(state=>state.main.currentColor)
	const dispatch = useDispatch()
	const [activeChartId, setActiveChartId] = useState(0)

    const [chartData, setChart] = useState(
		{
		series:[{
			data:[]
		}]
	})

	let serializeTimeSeriesData = (data,cat='',inter='Daily')=>{

		let Timeohlc = []
		let seriesData = data['Time Series '+ cat + ' ' +'('+inter+')']

		_.each(seriesData, (v,k)=>{

			let arr = []

			_.each(v, (val,key)=>{

				arr.push(val)
			})

			let obj = {x:k,y:arr}
			Timeohlc.push(obj)
		})

		let datas = {
			series:[{
				data:Timeohlc
			}]
		}

		return datas
	}

	const handleChartClick = (e)=>{
		let asset_id = e.currentTarget.dataset.asset_id
		let category =  e.currentTarget.dataset.category
		let symbolExchange =  e.currentTarget.dataset.symbol


		//split symbol
		if(category === 'cryptocurrency'){
			let [symbol,market] = symbolExchange.split('/')

			axios.get('https://www.alphavantage.co/query?function=CRYPTO_INTRADAY&symbol='+symbol
			+'&market='+market+'&interval=60min&apikey=BZBHOKLS81DJSPX2').then(data=>{

				let timeSeries = serializeTimeSeriesData(data.data,'Crypto','60min')

				setActiveChartId(asset_id)
				setChart(timeSeries)
			}).catch(e=>console.log(e))

		}else if(category === 'stocks'){


			alpha.crypto.intra(symbol,market).then(data=>{

				let timeSeries = serializeTimeSeriesData(data)

				setChart(timeSeries)
			})
			.catch(e=>{
				console.log(e)
			})
		}
		else if(category === 'forex'){
			let [fromCurrency, toCurrency] = symbol.split('/')
			alpha.forex.daily(fromCurrency,toCurrency).then(data=>{

				let timeSeries = serializeTimeSeriesData(data, 'FX')

				setChart(timeSeries)
			})
		}
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

				<ApexCharts options={chartOption}
				series={chartData.series} type="candlestick" height={500} className="" />
			</div>)
		}

    </div>

  )
}

export default Chart
