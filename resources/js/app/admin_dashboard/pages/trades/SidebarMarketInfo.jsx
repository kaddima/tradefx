import React from 'react'


const SidebarMarketInfo = () => {
   
  return (
    <>
    <div className='bg-transparent mt-1'>
        <div className='bg-white dark:bg-secondary-dark-bg'>
            <div className='p-4 dark:text-gray-300'>
                <div className='flex justify-between items-center'>
                    <span className='text-sm font-bold' >Price Range</span>
                    <span className='border rounded-md text-xs p-2 font-bold'>Daily</span>
                </div>
                <div className='h-[2px] bg-slate-600 mt-12'></div>
                <div className='flex justify-between mt-4'>
                    <span className='text-red-700 text-xs font-bold'>Low:12.9876</span>
                    <span className='text-green-700 text-xs font-bold'>Low:12.9876</span>
                </div>
            </div>
        </div>

        <div className='bg-white dark:bg-secondary-dark-bg mt-1'>
            <div className='p-4 dark:text-gray-300'>
                <span className='text-sm font-bold' >Market Sentiment</span>
                <div className='h-[2px] bg-slate-600 mt-6'>
                    <div className="bg-red-700 w-2/5 h-[2px]"></div>
                </div>
                <div className='flex justify-between mt-4'>
                    <span className='text-red-700 text-xs font-bold'>31% Sellers</span>
                    <span className='text-green-700 text-xs font-bold'>69% Buyers</span>
                </div>
            </div>
        </div>

        <div className='bg-white dark:bg-secondary-dark-bg mt-1'>
            <div className='p-4 dark:text-gray-300'>
                <span className='text-sm font-bold' >Trading Info</span>
                
                <div className='flex justify-between mt-4 py-2 border-b-1 dark:border-slate-600'>
                    <span className='text-xs font-bold capitalize'>currency</span>
                    <span className='text-xs font-bold'>USD</span>
                </div>
                <div className='flex justify-between mt-4 py-2 border-b-1 dark:border-slate-600'>
                    <span className='text-xs font-bold capitalize'>Margin</span>
                    <span className='text-xs font-bold'>5.000%</span>
                </div>
                <div className='flex justify-between mt-4 py-2 border-b-1 dark:border-slate-600'>
                    <span className='text-xs font-bold capitalize'>Leverage</span>
                    <span className='text-xs font-bold'>20:1</span>
                </div>
                <div className='flex justify-between mt-4 py-2 border-b-1 dark:border-slate-600'>
                    <span className='text-xs font-bold capitalize'>Dynamic Speed</span>
                    <span className='text-xs font-bold'>5.3</span>
                </div>
                
            </div>
        </div>

        <div className='bg-white dark:bg-secondary-dark-bg mt-1 pb-5'>
            <div className='p-4 dark:text-gray-300'>
                <span className='text-sm font-bold' >Description</span>
                <p className='text-xs my-5'>Tables display information in a way that's easy to scan, so that users can look for patterns and insights. They can be embedded in primary content, such as cards</p>
                <span className='text-sm font-bold' >Recent News</span>
            </div>
        </div>
    </div>
</>
    
  )
}

export default SidebarMarketInfo