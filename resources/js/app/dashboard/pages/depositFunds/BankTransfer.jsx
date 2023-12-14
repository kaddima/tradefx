import React, {useEffect, useState} from 'react'
import axios from 'axios'


const bankTransfer = () => {

	useEffect(()=>{

		axios.get('/dashboard/payment_methods',{params:{payment_details:'wallet_details'}}).then(data=>{

			setCryptoData(data.data.data.crypto_payment)
		}).catch(e=>{
			console.log('an error occurred')
		})

	},[])

  return (
    <div className='md:min-w-[550px]'>
		<div>
			<span className='text-sm font-bold'>Make a deposit</span>
		</div>

		<div className='md:w-[80%] mt-3 p-5 bg-slate-300 dark:bg-slate-700 rounded'>
			<ul className='list-disc text-xs space-y-2 text-gray-700 dark:text-slate-300 font-semibold ml-3'>
				<li className=''>0% commission</li>
				<li>Takes up to 5 business days</li>
				<li>Accepted only from your bank account</li>
				<li>Due to regulatory reasons we may be unable tp accept deposits from you</li>
			</ul>		
		</div>
		<div className='mt-2 text-xs border-b-1 border-slate-300 dark:border-slate-700 pb-1'>
			<span className='uppercase dark:text-slate-500 font-bold'>bank name</span>
			<p>the bank name</p>
		</div>
		<div className='mt-1 border-b-1 text-xs border-slate-300 dark:border-slate-700 pb-1'>
			<span className='uppercase dark:text-slate-500 font-bold'>swift code</span>
			<p >RJCBBY2X</p>
		</div>
		<div className='mt-1 border-b-1 text-xs border-slate-300 dark:border-slate-700 pb-1'>
			<span className='uppercase dark:text-slate-500 font-bold'>iban</span>
			<p>BY20......</p>
		</div>
		<div className='mt-1 border-b-1 text-xs border-slate-300 dark:border-slate-700 pb-1'>
			<span className='uppercase dark:text-slate-500 font-bold'>Beneficiary</span>
			<p>Name of account holder</p>
		</div>
		<div className='mt-1 border-b-1 text-xs border-slate-300 dark:border-slate-700 pb-1'>
			<span className='uppercase dark:text-slate-500 font-bold'>payment reference</span>
			<p >23324561/89031286469047</p>
			<span className='text-[10px] text-orange-500 font-semibold'>include this reference</span>
		</div>
    </div>
  )
}

export default bankTransfer