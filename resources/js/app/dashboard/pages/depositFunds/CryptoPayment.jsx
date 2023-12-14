import React, {useEffect, useState} from 'react'
import _ from 'lodash'
import axios from 'axios'
import {BsCurrencyBitcoin,BsCurrencyDollar,BsArrowRightCircle} from "react-icons/bs"

const CryptoPayment = () => {

	const [btcValue,setBtcValue] = useState(0)
	const [input, setInput] = useState(0)
	const [cryptoData,setCryptoData] =useState({})
	const btcDollars = 16873.72

	const handleChange = (e)=>{
		
		setInput(e.target.value)
		var dollarBTC = e.target.value/btcDollars
		setBtcValue(dollarBTC)
		
	}

	useEffect(()=>{

		axios.get('/dashboard/payment_methods',{params:{payment_details:'wallet_details'}}).then(data=>{

			setCryptoData(data.data.data.crypto_payment)
		}).catch(e=>{
			console.log('an error occurred')
		})

	},[])

  return (
    <div className='md:min-w-[550px] space-y-4'>
		<div>
			<span className='text-sm font-bold'>Deposit with bitcoin</span>
		</div>

		<div className='md:w-[80%] p-3 bg-slate-700 rounded'>
			<ul className='list-disc text-xs space-y-2 text-slate-300 font-semibold ml-3'>
				<li className=''>0% commission</li>
				<li>Lesser transfer charges</li>
				<li>Your account will be funded in dollars equivalent to the amount of bitcoin deposited.</li>
				<li>Obtain wallet address by scanning the QRcode on your phone or by copying the wallet address</li>
				<li>Proceed with deposit by clicking on the "Deposit" button </li>
			</ul>		
		</div>
		<div className='flex flex-wrap gap-2 flex-col md:flex-row md:w-4/5'>
			<div className='md:w-[300px] p-2 bg-slate-200 dark:bg-slate-700 rounded-lg'>
				<div>
					<span className='block text-xs font-extrabold'>BTC/USD exchange calculator</span>
					<div className='flex items-center mt-2'>
						<span className=' text-xl'><BsCurrencyBitcoin/></span>
						<span>{_.round(btcValue,8)}</span>
					</div>	 
				</div>
				
				<div className='mt-1 relative space-y-4'>
					<div>
						<label className='text-xs font-semibold'>Amount</label>
						<input
						type="number" 
						value={input}
						className='w-full mt-1 rounded h-10 text-gray-300 text-lg form-input bg-slate-800 pl-8 pr-4'
						onChange={handleChange}/>
						<span className='absolute left-3 top-8 text-gray-400'><BsCurrencyDollar/></span>
					</div>

					<span className='text-xs block font-semibold dark:text-slate-400'>Enter an amount in the form above for automtic BTC/USD conversion</span>
				</div>
			</div>
			<div className='flex-1 py-3'>
				<div className='space-y-3'>
					<img src={`/uploads/${cryptoData.image}`} 
						className="w-4/5"
						alt="bitcoin address qrcode" />				
					<div className='m2-3 space-y-3'>
						<h1 className='text-xs font-bold dark:text-slate-500'>Wallet address</h1>
						<span className='text-xs dark:text-slate-400'>{cryptoData?.wallet_address}</span>
					</div>			
				</div>
			</div>
		</div>
		<div className=''>
			<a href="https://moonpay.com" rel='noreferrer' target="_blank"
			className='text-center p-2 inline-block text-sm font-semibold capitalize bg-orange-400 rounded'>Make payment <span className='inline-block'><BsArrowRightCircle/></span></a>
		</div>
    </div>
  )
}

export default CryptoPayment