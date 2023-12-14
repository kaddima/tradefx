import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useParams,Link} from "react-router-dom"
import {format,parseISO} from "date-fns"
import _ from "lodash"
import axios from "axios"

import { closeAssetPosition,updatePortfolio,updateTasks } from '../store/portfolioSlice'
import { updateAccountBalance } from '../store/accountSlice'
import { updateActivities } from '../store/activitySlice'

import {TbArrowsDiagonalMinimize2} from "react-icons/tb"
import {MdDelete} from "react-icons/md"

import { ConfirmModal } from '../components'

import {toast} from "react-toastify"
import { id } from 'date-fns/locale'

const PortfolioRow = ({data})=>{

	const user_id = useParams().id

	const dispatch = useDispatch()
    const currentColor = useSelector(state=>state.main.currentColor)

	const handlePortfolioClose = (e)=>{
		const portfolio_id = e.currentTarget.dataset.id
		const name = e.currentTarget.dataset.name
		// data to pass on to server
		const data = {user_id,portfolio_id}
		dispatch(closeAssetPosition(data)).unwrap().then(data=>{
			if(data.status == 1){

				toast(`${name} open position was closed`)
				 // calculate total margin and profit_loss
				 let margin = 0 
				 let profit_loss = 0
				
	 
				 if(data.data.portfolios.length > 0){

					data.data.portfolios.map((portfolio,key)=>{
					 margin += Number(portfolio.margin);
					 profit_loss += Number(portfolio.profit_loss)
					 })
				 }
				 
	
				// console.log(margin)
				 //update the uncompleted balance from server to include both margin and profit_loss
				 let balance = {...data.data.balance,margin,profit_loss}
				
				dispatch(updateAccountBalance(balance))
				dispatch(updateActivities(data.data.activities))
			}else{

				toast(`${name} can't close. Associated with ongoing task`)
			}
          
		})

	}

	const handleYes = (datas)=>{

		axios.post('/admin/portfolio/delete',datas).then(data=>{

			$('.confirm-modal-container').hide();

			let portfolios = data.data.data.portfolios
			let profit_loss = 0
			let margin = 0

			if(data.data.status == 1){

				if(portfolios.length > 0){

					portfolios.map((portfolio,key)=>{

						profit_loss = Number(profit_loss) + Number(portfolio.profit_loss)
						margin += Number(portfolio.margin)
					})

				}
				//update the portfolio
				dispatch(updatePortfolio(data.data.data))

				//update accounts
				let balance = data.data.data.balance
				dispatch(updateAccountBalance({available:balance.available,margin,profit_loss}))

				//update tasks if available
				dispatch(updateTasks(data.data.data))
			}
			
		}).catch(e=>{
			console.log(e)
		})
		
	}

	const handleNo = ()=>{$('.confirm-modal-container').hide();}

	const handleDelete = (e)=>{
		// hide any container visible before the next btn is clicked
		$('.confirm-modal-container').hide()

		$(e.currentTarget).next('div').show();
	}

	return(
		<>
			<tr className='text-xs font-bold border'>
                <td className='border-b-1 border-b-gray-300 dark:border-b-slate-700'>
                    <div className='flex justify-between items-center py-3 text-slate-600 dark:text-gray-200'>
                        <span>{data.asset_name ? data.asset_name : data.symbol}</span>
                        <span className='inline-block ml-2 p-1 text-xs font-extrabold text-white rounded' style={{background:(data.type.toLowerCase() === 'buy') ? "rgba(10,170,253,0.4)" : "rgba(224,36,36,0.9)"}}>{(data.type.toLowerCase() === 'buy') ? "+" : "-"}{_.round(data.size,2)}</span>
                    </div>
                </td>
                <td className='text-center border-b-1 border-b-gray-300 dark:border-b-slate-700 text-slate-600 dark:text-gray-200'>
                    <span>{data.created_at && format(parseISO(data.created_at), 'dd MMM Y')}</span>
                </td>
                <td className='text-center border-b-1 border-b-gray-300 dark:border-b-slate-700 text-slate-600 dark:text-gray-200'>
                    <span>{data.leverage}</span>
                </td>
                <td className='text-center border-b-1 border-b-gray-300 dark:border-b-slate-700 text-slate-600 dark:text-gray-200'>
                    <span>{_.round(data.entry,2).toLocaleString()}</span>
                </td>
                <td className='text-center border-b-1 border-b-gray-300 dark:border-b-slate-700 text-slate-600 dark:text-gray-200'>
                    <span>{_.round(data.last_price,2).toLocaleString()}</span>
                </td>
                <td className='text-center border-b-1 border-b-gray-300 dark:border-b-slate-700 text-slate-600 dark:text-gray-200'>
                    <span>${_.round(data.margin,2).toLocaleString()}</span>
                </td>
                <td className='border-b-1 border-b-gray-300 dark:border-b-slate-700 text-slate-600 dark:text-gray-200'>
                    <span>${_.round(data.profit_loss,2).toLocaleString()}</span>
                </td>
                <td className='border-b-1 border-b-gray-300 dark:border-b-slate-700'>
					<div className='flex gap-1'>
						 <button type='button' className='px-1 py-1 text-slate-900 font-bold bg-sky-500 rounded inline-block text-center
							cursor-pointer' style={{backgroundColor:currentColor}} data-id={data.id} data-name={data.asset_name ? data.asset_name : data.symbol}
							onClick={handlePortfolioClose}>close</button>
							<Link to={`/admin/user/${user_id}/generate-profit-loss?portfolio-id=${data.id}`}>
								<span className='px-1 py-1 bg-sky-500 rounded inline-block 
								text-center cursor-pointer text-xs' style={{color:currentColor}}>P&L</span>
							</Link>
						<div>
							<button type='button' 
							onClick={handleDelete}
							className='p-1 text-white bg-sky-800 rounded inline-block text-center
							cursor-pointer hover:bg-slate-300 hover:dark:bg-slate-800'>
							<MdDelete className='text-xl text-red-600'/>
							</button>
							<div className='confirm-modal-container fixed z-[900] left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 hidden'>
								<ConfirmModal text={`Delete this portfolio`}
								onClickYes={()=>{handleYes({portfolio_id:data.id,user_id,entry:data.entry})}} onClickNo={handleNo}/>
							</div>
						</div>
					
					</div>
                   
                </td>
            </tr>
		</>
	)
}

const Portfolio = () => {

	const currentColor = useSelector(state=>state.main.currentColor)
	const portfolios = useSelector(state=>state.portfolio.portfolios)

	if(!portfolios.length){

		return (
            <div className='h-full w-full bg-white dark:bg-secondary-dark-bg px-4 borde border-red-700'>
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
						<tr className='uppercase dark:text-slate-200 text-[10px]'>
							<th className='text-[10px] dark:bg-secondary-dark-bg w-[10%] pl-4 text-center'>
								size
							</th>
							<th className='text-[10px] dark:bg-secondary-dark-bg text-center'>
								opened
							</th>
							<th className='text-[10px] dark:bg-secondary-dark-bg text-center'>
								leverage
							</th>

							<th className='text-[10px] dark:bg-secondary-dark-bg text-center'>
								entry
							</th>
							<th className='text-[10px] dark:bg-secondary-dark-bg text-center'>
								last price
							</th>
							<th className='text-[10px] dark:bg-secondary-dark-bg text-center'>
								margin
							</th>
							<th className='text-[10px] dark:bg-secondary-dark-bg'>
								p&l
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
