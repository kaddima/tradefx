import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Outlet, NavLink,useNavigate} from "react-router-dom"
// ICONS
import {MdOutlineClose} from "react-icons/md"
import {BsShieldLock,BsBank2,BsCurrencyBitcoin} from "react-icons/bs"

// BANK CARD IMAGES
import master from  "../../data/cards/master.png" 
import visa from "../../data/cards/visa.png" 


const DepositFunds = () => {

    const currentColor = useSelector(state=>state.main.currentColor)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userConfig = useSelector(state=>state.account.config)

  return (
    <div className='bg-gray-50 text-slate-800 dark:text-gray-300 dark:bg-secondary-dark-bg w-full rounded-xl overflow-hidden'>
        <div className='flex items-center justify-center text-xs font-bold bg-green-600'>
			<span className='text-sm'><BsShieldLock/></span>
			<span className='pl-1 text-gray-300'>The connection is secure</span>
		</div>
        <div className='h-10 flex justify-between items-center pr-3 bg-gray-50 dark:bg-secondary-dark-bg'>
            <p></p>
            <span className='text-xl cursor-pointer' onClick={()=>{navigate('/dashboard')}}><MdOutlineClose/></span>
        </div>
        <div className='flex flex-col md:flex-row gap-5 md:gap-1 px-4'>
            <div className=' md:flex-shrink-0 md:w-[160px] pt-2 md:h-[400px]'>
                
                <div className='flex flex-row flex-wrap gap-3 md:flex-col md:h-full overflow-auto'>
                    {userConfig.card_payment == 1 && (  <NavLink to='card'
                        style={({isActive})=>(isActive ? {borderColor:currentColor, borderWidth:"2px"}:{})}
                        className='flex p-2 text-xs cursor-pointer font-semibold items-center border dark:border-slate-800 rounded'>
						<div className='w-6 h-6 dark:bg-white overflow-hidden rounded-full flex  
                        flex-col justify-center cursor-pointer items-center'>
							<img src={visa} alt="visa card logo" className='w-5'/>
							<img src={master} alt="master card logo" className='w-5' />
						</div>
						<span className='pl-1'>Bank Cards</span>
                    </NavLink>)}

                    {userConfig.transfer_payment == 1 && (<NavLink to='transfer' 
                    style={({isActive})=>(isActive ? {borderColor:currentColor, borderWidth:"2px"}:{})}
                    className='flex p-2 mt-2 text-xs font-semibold cursor-pointer items-center border dark:border-slate-800 rounded'>
						<span className='flex items-center justify-center h-5 w-5 border text-sm dark:text-gray-700 rounded-full dark:bg-white'><BsBank2/></span>
						<span className='pl-1'>Bank transfer</span>
                    </NavLink>) }
                  
					{userConfig.crypto_payment == 1 && (	<NavLink to='crypto'
                     
                    style={({isActive})=>(isActive ?{borderColor:currentColor, borderWidth:"2px"}:{})}
                    className='flex mt-2 p-2 text-xs font-semibold cursor-pointer items-center border dark:border-slate-800 rounded'>
						<span className='flex items-center justify-center h-5 w-5 border text-xl dark:text-gray-700 rounded-full dark:bg-white'><BsCurrencyBitcoin/></span>
						<span className='pl-1'>Cryptocurrency</span>
                    </NavLink> )}
				
					<span className='mt-5 text-[9px] font-semibold hidden md:block'>Your funds are stored securely and are protected by our investor compensation fund policy</span>
                </div>	
            </div>

            <div className='flex-grow pt-2 pb-12 px-5 relative text-slate bg-gray-50 dark:bg-secondary-dark-bg'>
               <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default DepositFunds