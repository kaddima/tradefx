import React from 'react'

const ConfirmModal = ({text,onClickYes,onClickNo}) => {
  return (
    <div id='confirm-modal' className='w-32 md:w-56 text-gray-800 dark:text-slate-100 bg-gray-50 dark:bg-slate-900 flex flex-col px-3 py-2 space-y-6 rounded-lg shadow-lg'>
        <p className='text-center text-sm'>{text}</p>
        <div className='flex justify-between items-center'>
            <button onClick={onClickYes} className='bg-green-500 w-12 text-xs font-bold p-2 
            text-gray-200 rounded-lg '>Yes</button>
            <button onClick={onClickNo} className='bg-red-500 w-12 text-xs p-2 
            text-gray-200 rounded-lg font-bold'>No</button>
        </div>
    </div>
  )
}

export default ConfirmModal