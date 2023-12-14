import React from 'react'
import {MdUpcoming} from "react-icons/md"

const ComingSoon = ({text}) => {
  return (
    <div className='h-full w-full bg-white dark:bg-secondary-dark-bg px-4'>
    <div className='text-gray-800 font-bold dark:text-gray-200 md:w-2/5 text-center absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'>
        <div className='w-20 h-20 rounded-full bg-slate-500 dark:bg-slate-800 flex justify-center items-center text-5xl mx-auto'>
            <MdUpcoming/>
        </div>
        <div className='mt-3 space-y-1'>
            <p >Coming soon</p>
            <p className='text-sm font-semibold'>{text}</p>
        </div>       
    </div>
</div>
  )
}

export default ComingSoon