import React from 'react'

import {AiFillLock} from "react-icons/ai"

import master from  "../../data/cards/master.png" //"../../data/cards/master.png"
import visa from "../../data/cards/visa.png"

const bankCards = () => {
  return (
    <>
         <div className='min-w-[550px]'>
			<form>
				<div className='relative h-60 '>
					<div className='w-[60%]  h-52 absolute left-6 z-[20] rounded-lg p-6 bg-slate-200 dark:bg-slate-800 shadow-lg'>
						<div>
							<label >Card Number</label>
							<input 
							className='w-full bg-slate-400 dark:bg-slate-900 mt-2 rounded placeholder:text-gray-300 placeholder:text-xs pl-3'
							placeholder='**** **** **** ****'/>
						</div>
						<div className='flex mt-3'>
							<input placeholder='MM' 
							className='w-16 bg-slate-400 dark:bg-slate-900 mt-2 rounded placeholder:text-gray-300 placeholder:text-xs pl-3'/>
							<span className='px-3'>/</span>
							<input 
							className='w-16 bg-slate-400 dark:bg-slate-900 mt-2 rounded placeholder:text-gray-300 placeholder:text-xs pl-3'
							placeholder='YY'/>
						</div>
						<div className='mt-3'>
							<input 
							className='w-full bg-slate-400 dark:bg-slate-900 mt-2 rounded placeholder:text-gray-300 placeholder:text-xs pl-3'
							placeholder="Card holder's name"/>
						</div>
						<div className='flex justify-end mt-3'>
							<img src={visa} alt="visa card log" className='w-7 mr-2'/>
							<img src={master} alt="master card log" className='w-7'/>
						</div>
					</div>
					<div className='w-[60%] h-52 absolute top-5  right-10 rounded-lg bg-slate-200 dark:bg-slate-700 shadow'>
						<div className='h-10 mt-7 w-full bg-slate-300 dark:bg-slate-600'>

						</div>
						<div className='absolute w-32 text-gray-600 dark:text-gray-300 bottom-0 right-0 p-4 h-18'>
							<div>
								<label className='text-xs font-semibold'>cvv</label>
								<input placeholder='***' 
								className='w-full bg-slate-400 dark:bg-slate-900 mt-2 rounded placeholder:text-gray-300 placeholder:text-xs pl-3'/>	
							</div>	
							<span className='text-[9px] block mt-2 font-semibold leading-0'>The last 3 digits on the reverse</span>
						</div>
					</div>
				</div>
				
				<div className='mt-5 pl-6'>
					<label className='text-xs font-semibold'>Amount</label>
					<input 
					className='w-[18rem] block bg-slate-300 placeholder:text-gray-600 dark:bg-slate-900 border border-slate-700 mt-2 h-9 rounded placeholder:text-xs pl-3'
					placeholder='$ 1,000'/>
				</div>
				<div className='mt-4 pl-6 flex justify-between'>
					<div className='flex w-48 rounded border-0 bg-slate-600 dark:bg-slate-800 text-gray-300 h-9 border items-center justify-center'>
						<span><AiFillLock/></span>
						<button className='pl-2'>Deposit</button>
					</div>
					
					<div className='flex justify-end items-center md:pr-12'>
						<img src={visa} alt="visa card logo" className='w-8 h-6'/>
						<img src={master} alt="master card logo" className='w-8 h-6 ml-2' />
					</div>
				</div>
			</form>
		</div>
    </>
  )
}

export default bankCards