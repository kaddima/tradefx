import React from 'react'

const BalanceSheet = ({title, amount,extraClass}) =>(

    <div className={`p-2 mr-3 sm:block dark:text-gray-100 ${extraClass}`}>
        <p className='text-[10px] font-extrabold uppercase text-slate-600 dark:text-slate-300 '>{title}</p>
        <span className='font-bold'>$</span><span className='text-xs font-bold '>{parseFloat(amount).toLocaleString()}</span>
    </div>
)

export default BalanceSheet