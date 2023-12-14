import React from 'react'
import { useDispatch } from 'react-redux'
import {useNavigate} from "react-router-dom"
import { modalContentDisply } from '../store/mainSlice'

import {MdOutlineClose} from "react-icons/md"

const TradingOptions = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()

  return (
    <div className='w-full bg-gray-200 text-slate-800 dark:text-gray-300 dark:bg-main-dark-bg rounded-xl overflow-hidden'>
        <div className='h-10 flex justify-between items-center pr-3 bg-white dark:bg-secondary-dark-bg'>
            <p className='flex-1 text-center text-sm font-bold'>Trading options</p>
            <span className='text-xl cursor-pointer' onClick={()=>{navigate(-1)}}><MdOutlineClose/></span>
        </div>
        <div className='bg-white dark:bg-secondary-dark-bg mt-1 p-5'>
            <div className='bg-gray-300 dark:bg-slate-800 p-5 text-xs font-semibold rounded-lg'>
				<h1 className='font-bold text-sm mb-2'>Trading mode</h1>
				<p>Choose the best way for you to control new and opened positions.</p>
				<div className='flex flex-col md:flex-row mt-3 gap-2'>
					<div>
						<div className='flex'>
							<input type="radio" className='form-radio border' name='tradeMode' checked id='normal' value="normal"/>
							<label className='pl-2' htmlFor='normal'>Normal mode</label>
						</div>

						<p className='ml-5 mt-2'>New trades will first attempt to close current positions in the opposite direction</p>
					</div>
					<div>
						<div className='flex'>
							<input type="radio" className='form-radio border' name='tradeMode' id='hedge' value="hedge"/>
							<label className='pl-2' htmlFor='hedge'>Hedging mode</label>
						</div>
						<p className='ml-5 mt-2'>Trades in opposite directions on the same market will remain open</p>
					</div>
				</div>
			</div>

			<div className='bg-gray-300 dark:bg-slate-800 p-5 text-xs font-semibold rounded-lg mt-4'>
				<h1 className='font-bold text-sm mb-2'>Trading mode</h1>
				<div className='flex md:flex-row flex-col flex-wrap mt-3'>
					<div className='mr-4 flex-1'>
						<label className='' htmlFor='normal'>Currencies</label>
						<input type="text" name='tradeMode' disabled id='normal' value="30:1" 
						className='block bg-gray-400 text-slate-800 dark:text-gray-400 dark:bg-slate-900 rounded h-5 pl-2 font-bold disabled:dark:opacity-50'
						/>
		
					</div>
					<div className='mr-4 flex-1'>
						<label className='' htmlFor='normal'>Commodities</label>
						<input type="text" name='tradeMode' disabled id='normal' value="20:1" 
						className='block bg-gray-400 text-slate-800 dark:text-gray-400 dark:bg-slate-900 rounded h-5 pl-2 font-bold disabled:dark:opacity-50'
						/>
		
					</div>
					<div className='mr-4 flex-1'>
						<label className='' htmlFor='normal'>Shares</label>
						<input type="text" name='tradeMode' disabled id='normal' value="5:1" 
						className='block bg-gray-400 text-slate-800 dark:text-gray-400 dark:bg-slate-900 rounded h-5 pl-2 font-bold disabled:dark:opacity-50'
						/>
					</div>
					<div className='mt-5'>
						<label className='' htmlFor='normal'>Cryptocurrencies</label>
						<input type="text" name='tradeMode' disabled id='normal' value="2:1" 
						className='block bg-gray-400 text-slate-800 dark:text-gray-400 dark:bg-slate-900 rounded h-5 pl-2 font-bold disabled:dark:opacity-50'
						/>
					</div>
					
				</div>
			</div>
        </div>
    </div>
  )
}

export default TradingOptions