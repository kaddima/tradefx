import { createChart, ColorType,CrosshairMode } from 'lightweight-charts';
import React, { useEffect, useMemo, useRef } from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';

const formatPrice = (value)=>{

	let price = String(value)

	
	let dotIndex = price.indexOf('.')

	if(dotIndex <= 2){

	   price =  _.round(+value,6)
		
	}else if(dotIndex == 3){
		price =  _.round(+value,3)
	}
	else{
	   price =  _.round(+value,2)
	}


	return price
}

const ChartView = ({data}) => {
	const selectedAsset = useSelector(state=>state.assets.selectedAsset)
	const activeCategory = useSelector(state=>state.assets.active)
	const assetByCategory = useSelector(state=>state.assets.assets)[activeCategory]


	const chartContainerRef = useRef();

	const firstAsset = useMemo(()=>{

		let data

		if(selectedAsset){

			if((['cryptocurrency','forex','stocks','oil_market','commodity']).includes(activeCategory)){

				data = assetByCategory?.data.find((value)=>{

					return value.id == selectedAsset.id
				})
			}else{

				data = assetByCategory.find((value)=>{

					return value.id == selectedAsset.id})
			}

			return data

		}else{

			if((['cryptocurrency','forex','stocks',
					'oil_market','commodity']).includes(activeCategory)){

				data = assetByCategory?.data[0]
			}else{

				data = assetByCategory[0]

			}

			return data
		}

		
		
	},[activeCategory,assetByCategory,selectedAsset])

	useEffect(()=>{
		var chart = createChart(chartContainerRef.current, {
			autoSize:true,
			grid:{
				horzLines:{color:'rgba(51,65,85,0.1)'},
				vertLines:{color:'rgba(51,65,85,0.1)'}
			},
			layout: {
				background: {color:'#1A1D24',},
				textColor: 'white',
			},
			crosshair: {
				mode: CrosshairMode.Normal
			},

		});

		// new ResizeObserver(entries => {
		// 	if (entries.length === 0 || entries[0].target !== chartContainerRef.current) { return; }
		// 	const newRect = entries[0].contentRect;
		// 	chart.applyOptions({ height: newRect.height, width: newRect.width});
		//   }).observe(chartContainerRef.current);
		
		chart.timeScale().fitContent()

	
		var candleSeries = chart.addCandlestickSeries();
					
		candleSeries.setData(data);

	
		
		var lastClose = data[data.length - 1].close;
		var lastIndex = data.length - 1;
		
		var targetIndex = lastIndex + 105 + Math.round(Math.random() + 30);
		var targetPrice = getRandomPrice();
		
		var currentIndex = lastIndex + 1;
		var currentBusinessDay = { day: 29, month: 5, year: 2019 };
		var ticksInCurrentBar = 0;
		var currentBar = {
			open: null,
			high: null,
			low: null,
			close: null,
			time: currentBusinessDay,
		};
		
		function mergeTickToBar(price) {
			if (currentBar.open === null) {
				currentBar.open = price;
				currentBar.high = price;
				currentBar.low = price;
				currentBar.close = price;
			} else {
				currentBar.close = price;
				currentBar.high = Math.max(currentBar.high, price);
				currentBar.low = Math.min(currentBar.low, price);
			}
			candleSeries.update(currentBar);
		}
		
		function reset() {
			candleSeries.setData(data);
			lastClose = data[data.length - 1].close;
			lastIndex = data.length - 1;
		
			targetIndex = lastIndex + 5 + Math.round(Math.random() + 30);
			targetPrice = getRandomPrice();
		
			currentIndex = lastIndex + 1;
			currentBusinessDay = { day: 29, month: 5, year: 2019 };
			ticksInCurrentBar = 0;
		}
		
		function getRandomPrice() {
			return 10 + Math.round(Math.random() * 10000) / 100;
		}
		
		function nextBusinessDay(time) {
			var d = new Date();
			d.setUTCFullYear(time.year);
			d.setUTCMonth(time.month - 1);
			d.setUTCDate(time.day + 1);
			d.setUTCHours(0, 0, 0, 0);
			return {
				year: d.getUTCFullYear(),
				month: d.getUTCMonth() + 1,
				day: d.getUTCDate(),
			};
		}
		
		// setInterval(function() {
		// 	var deltaY = targetPrice - lastClose;
		// 	var deltaX = targetIndex - lastIndex;
		// 	var angle = deltaY / deltaX;
		// 	var basePrice = lastClose + (currentIndex - lastIndex) * angle;
		// 	var noise = (0.1 - Math.random() * 0.1) + 1.0;
		// 	var noisedPrice = basePrice * noise;
		// 	mergeTickToBar(noisedPrice);
		// 	if (++ticksInCurrentBar === 5) {
		// 		// move to next bar
		// 		currentIndex++;
		// 		currentBusinessDay = nextBusinessDay(currentBusinessDay);
		// 		currentBar = {
		// 			open: null,
		// 			high: null,
		// 			low: null,
		// 			close: null,
		// 			time: currentBusinessDay,
		// 		};
		// 		ticksInCurrentBar = 0;
		// 		if (currentIndex === 5000) {
		// 			reset();
		// 			return;
		// 		}
		// 		if (currentIndex === targetIndex) {
		// 			// change trend
		// 			lastClose = noisedPrice;
		// 			lastIndex = currentIndex;
		// 			targetIndex = lastIndex + 5 + Math.round(Math.random() + 30);
		// 			targetPrice = getRandomPrice();
		// 		}
		// 	}
		// }, 300);

	},[])

	return (
		<div className='h-full w-full absolute inset-0 bg-white dark:bg-secondary-dark-bg overflow-hidden pl-2 py-2 font-semibold' ref={chartContainerRef}>
			<div>
				<div className='text-slate-400'>
					<h1 className='text-xl font-semibold'>{firstAsset?.name ? firstAsset?.name : firstAsset?.symbol} {firstAsset?.category !== 'forex' && '/ USD'}</h1>
				</div>
				<div className='flex items-center space-x-1 text-slate-400 font-semibold text-lg'>
					<div className='flex items-center'>
						<h1>O</h1>
						<span className={` ${firstAsset.highlight && firstAsset.highlight?.sell === 'fall'?'text-red-600' : 'text-green-600'} font-bold`}>{formatPrice(firstAsset.sell)}</span>
					</div>
					<div className='flex items-center'> 
						<h1>H</h1>
						<span className={` ${firstAsset.highlight && firstAsset.highlight?.high === 'fall'?'text-red-600' : 'text-green-600'} font-bold`}>{formatPrice(firstAsset.high)}</span>	
					</div>
					<div className='flex items-center'>
						<h1>L</h1>
						<span className={` ${firstAsset.highlight && firstAsset.highlight?.low === 'fall'?'text-red-600' : 'text-green-600'} font-bold`}>{formatPrice(firstAsset.low)}</span>
					</div>
					<div className='flex items-center'>
						<h1>C</h1>
						<span className={` ${firstAsset.highlight && firstAsset.highlight?.buy === 'fall'?'text-red-600' : 'text-green-600'} font-bold`}>{formatPrice(firstAsset.buy)}</span>
					</div>
					<div>
						<span className={`${firstAsset.highlight && firstAsset.highlight?.percentage_change === 'fall' ?'text-red-600' : 'text-green-600'}`}>
							({firstAsset.highlight && firstAsset.highlight?.percentage_change === 'fall'?'-' : '+'}{_.round(Number(String(firstAsset.percentage_change).replace('%','')),2)}%)
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChartView