import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {format,parseISO,isFuture,differenceInSeconds} from "date-fns"
import _ from "lodash"

import { closeAssetPosition,updatePortfolio } from '../store/portfolioSlice'
import { updateAccount } from '../store/accountSlice'

import {TbArrowsDiagonalMinimize2} from "react-icons/tb"

import {toast} from "react-toastify"
import { useEffect } from 'react'

const PortfolioRow = ({data})=>{

	const dispatch = useDispatch()
    const currentColor = useSelector(state=>state.main.currentColor)
	const userId = useSelector(state=>state.account?.user?.id)

	const handlePortfolioClose = (e)=>{
		const portfolio_id = e.currentTarget.dataset.id
		const name = e.currentTarget.dataset.name
		dispatch(closeAssetPosition(portfolio_id)).unwrap().then(data=>{
			if(data.status == 1){
				 // calculate total margin and profit_loss
				 let margin = 0 
				 let profit_loss = 0

				 let portfolios = data.data
	 
				 if(data.data.portfolios.length > 0){

					data.data.portfolios.map((portfolio,key)=>{
					 margin += Number(portfolio.margin);
					 profit_loss += Number(portfolio.profit_loss)
					 })
				 }
			
				// console.log(margin)
				 //update the uncompleted balance from server to include both margin and profit_loss
				 let balance = {...data.data.balance, margin,profit_loss}
				toast(`${name} open position is closed`)
				dispatch(updateAccount(balance))
			}
          
		})

	}

	return(
		<>
			<tr className='text-xs font-bold border'>
                <td className='border-b-1 border-b-gray-300 dark:border-b-slate-700'>
                    <div className='flex justify-between items-center py-3 text-slate-600 dark:text-gray-200'>
                        <span>{data.asset_name ? data.asset_name : data.symbol}</span>
                        <span className='inline-block ml-2 p-1 text-xs font-extrabold text-slate-600 dark:text-white rounded ' style={{background:(data.type.toLowerCase() === 'buy') ? "rgba(10,170,253,0.4)" : "rgba(224,36,36,0.9)"}}>{(data.type.toLowerCase() === 'buy') ? "+" : "-"}{_.round(data.size,2)}</span>
                    </div>
                </td>
                <td className='text-center border-b-1 border-b-gray-300 dark:border-b-slate-700 text-slate-600 dark:text-gray-200'>
                    <span>{data.created_at && format(parseISO(data.created_at), 'dd MMM Y')}</span>
                </td>
                <td className='text-center border-b-1 border-b-gray-300 dark:border-b-slate-700 text-slate-600 dark:text-gray-200 '>
                    <span>{data.leverage}</span>
                </td>
                <td className='text-center border-b-1 border-b-gray-300 dark:border-b-slate-700 text-slate-600 dark:text-gray-200 '>
                    <span>{parseFloat(data.entry).toLocaleString()}</span>
                </td>
                <td className={`${data.highlight && data.highlight.last_price === 'fall'?'text-red-600' : 'text-green-600'} text-center border-b-1 border-b-gray-300 dark:border-b-slate-700  `}>
                    <span>{parseFloat(data.last_price).toLocaleString()}</span>
                </td>
                <td className={`${data.highlight && data.highlight.margin === 'fall'?'text-red-600' : 'text-green-600'} text-center border-b-1 border-b-gray-300 dark:border-b-slate-700  `}>
                    <span>${_.round(data.margin,2).toLocaleString()}</span>
                </td>
                <td className={`${data.highlight && data.highlight.profit_loss === 'fall'?'text-red-600' : 'text-green-600'} border-b-1 border-b-gray-300 dark:border-b-slate-700 text-center`}>
                    <span>${_.round(data.profit_loss,2).toLocaleString()}</span>
                </td>
                <td className='border-b-1 border-b-gray-300 dark:border-b-slate-700'>
					{(userId == data.created_by) && ( <button type='button' className='px-1 py-1 text-slate-900 font-bold bg-sky-500 rounded inline-block text-center
                     cursor-pointer' style={{backgroundColor:currentColor}} data-id={data.id} data-name={data.asset_name ? data.asset_name : data.symbol}
					 onClick={handlePortfolioClose}>close</button>)}
                   
                </td>
            </tr>
		</>
	)
}

const Portfolio = () => {

	const currentColor = useSelector(state=>state.main.currentColor)
	const portfolios = useSelector(state=>state.portfolio.portfolios)
	const tasks = useSelector(state=>state.portfolio.tasks)
	const backupPortfolio = useSelector(state=>state.portfolio.backupPortfolio)

	const dispatch = useDispatch()

	useEffect(()=>{

		let newPortfolio = []
		let percentCH = 0.05

		let Timeout =  setTimeout(() => {
			backupPortfolio.map((portfolio,key)=>{

			let profit_loss = parseFloat(portfolio.profit_loss) 

			let percentageMargin = parseFloat(portfolio.margin) * percentCH
			let percentageLastPrice = parseFloat(portfolio.last_price) * percentCH
			
			if(tasks.length){
				tasks.find((task,key)=>{

					if(portfolio.id == task.portfolio_id){

						let end_at = parseISO(task.end_at);
						let started_at = parseISO(task.started_at)
						let amount = parseFloat(task.amount)

						if(isFuture(end_at)){

							let now = Date.now()

							// get the distance between the start and end time to calculate amounts generated per second
							let distance = differenceInSeconds(end_at,started_at)

							// time passed since start date in seconds
							let timePassed = differenceInSeconds(now,started_at)

							let amountPerSecond = amount/distance

							// the current amount per elasped time make sure to added to portfolios profit loss
							profit_loss = (Number(amountPerSecond) * +timePassed) + profit_loss

							return

						}		
					}
				
				})
			}
		
			let percentageProfit_loss = profit_loss * percentCH
			/**
			 * the random method should generate negative to positive value...
			 * in a case where the min number is a negative vaalue use that...but if its a positive value turn it to negative
			 * 
			 * in a case where the max number is negative value turn it to positive anad if its positive use it
			 */
			let randProfitloss = _.random((percentageProfit_loss < 0 ? percentageProfit_loss : -percentageProfit_loss),
			(percentageProfit_loss < 0 ? -percentageProfit_loss : percentageProfit_loss))

			let randMargin = _.random(-percentageMargin,percentageMargin)
			let randLastprice = _.random(-percentageLastPrice,percentageLastPrice)


			let margin = parseFloat(portfolio.margin) + randMargin;
			let last_price = parseFloat(portfolio.last_price) + randLastprice
			//sum the total profit_loss wit the ransomprofitLoss
			profit_loss = parseFloat(profit_loss) + randProfitloss

			let highlight = {margin:randMargin < 0 ?'fall':'rise',
							last_price:randLastprice <0 ?'fall':'rise',
							profit_loss:randProfitloss<0 ?'fall':'rise',
							
						}

			newPortfolio.push({...portfolio, margin,last_price,profit_loss,highlight})
			
		})

		dispatch(updatePortfolio({portfolios:newPortfolio}))
		}, 5000);

		return ()=>{

			clearTimeout(Timeout)
		}
		
	},[portfolios])

	if(!portfolios.length){

		return (
            <div className='h-full w-full bg-white dark:bg-secondary-dark-bg px-4'>
                <div className='text-gray-800 font-bold dark:text-gray-200 md:w-2/5 text-center absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'>
                    <div className='w-20 h-20 rounded-full bg-slate-500 dark:bg-slate-800 flex justify-center items-center text-5xl mx-auto'>
                        <TbArrowsDiagonalMinimize2/>
                    </div>
                    <div className='mt-3 space-y-1'>
                        <p >No Position Opened</p>
                        <p className='text-sm font-semibold'>Please start trading to see securities in your portfolio</p>
					</div>       
                </div>
            </div>
        )
	}
  return (
	<div className='h-full'>
		<div className='bg-white dark:bg-secondary-dark-bg h-full px-4 flex flex-col'>
			<div className='pt-2 pl-2 dark:text-white'>
				<span className='inline-block text-sm pt-2 border-b-1' style={{borderBottomColor:currentColor}}>Trades</span>
			</div>

			<div className='dark:text-white mt-2 font-bold overflow-auto flex-1' style={{heigt:"cal(100% - 30px)"}}>
				<table className='w-full table-auto border-separate' style={{borderSpacing:"0 0px"}}>
					<thead>
						<tr className='capitalize dark:text-slate-200'>
							<th className='dark:bg-secondary-dark-bg w-[10%] pl-4 text-center text-xs'>
								size
							</th>
							<th className='dark:bg-secondary-dark-bg text-center'>
								opened
							</th>
							<th className='dark:bg-secondary-dark-bg text-center'>
								leverage
							</th>

							<th className='dark:bg-secondary-dark-bg text-center'>
								entry
							</th>
							<th className='dark:bg-secondary-dark-bg text-center'>
								last price
							</th>
							<th className='dark:bg-secondary-dark-bg text-center'>
								margin
							</th>
							<th className='dark:bg-secondary-dark-bg text-center'>
								Profit&Loss
							</th>
							<th className='dark:bg-secondary-dark-bg'>
							</th>
						</tr>
					</thead>
					<tbody>
						{portfolios.map((portfolio,i)=>(
							<PortfolioRow key={i} data={portfolio}/>
						))}

					</tbody>
				</table>
			</div>

			
		</div>
	</div>

  )
}

export default Portfolio
