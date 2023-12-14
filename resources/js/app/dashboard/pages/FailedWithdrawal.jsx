import React from 'react'
import {useNavigate} from "react-router-dom"

import {MdOutlineClose} from "react-icons/md"

import WithdrawalImg from "../data/locked-withdrawal.png"

const FailedWithdrawal = () => {
    const navigate = useNavigate()
  return (
    <div className='bg-white dark:bg-secondary-dark-bg text-gray-800 p-3 dark:text-gray-200'>
         <div className='h-10 flex justify-between items-center pr-3 bg-gray-50 dark:bg-secondary-dark-bg'>
            <p className='flex-1 text-center text-sm font-bold'>Withdrawal</p>
            <span className='text-xl cursor-pointer' onClick={()=>{navigate(-1)}}><MdOutlineClose/></span>
        </div>
        <div className='text-center space-y-10 mt-10'>
            <div className='w-28 mx-auto'>
                <img src={WithdrawalImg} className="w-full" alt="withdrawal icon" />
            </div>
            <div className='space-y-1'>
                <h1 className='font-bold'>Withdrawals are locked</h1>
                <p className='text-sm'>Please check your email for more details</p>
            </div>
        </div>
    </div>
  )
}

export default FailedWithdrawal