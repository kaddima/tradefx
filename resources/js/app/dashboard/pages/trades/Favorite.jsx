import React from 'react'

import TableRow from './TableRow'

const favorite = ({data}) => {
  return (
    <div>
        <div className='w-full ml-1 flex-1 relative overflow-auto md:h-full'>
            <table className='w-full table-auto border-collapse dark:text-gray-200 text-gray-700'>
                <thead>
                    <tr>
                        <th className='dark:bg-secondary-dark-bg w-[10%]'>
                            Market
                        </th>
                        <th className='dark:bg-secondary-dark-bg text-center'>
                            Change
                        </th>
                        <th className='dark:bg-secondary-dark-bg text-center w-[15%]'>
                            Sell
                        </th>
                        <th className='pl-12 dark:bg-secondary-dark-bg text-center w-[15%]'>
                            Buy
                        </th>
                        <th className='dark:bg-secondary-dark-bg text-center'>
                            Low
                        </th>
                        <th className='dark:bg-secondary-dark-bg text-center'>
                            High
                        </th>
                        <th className='dark:bg-secondary-dark-bg'> </th>
                    </tr>
                </thead>
                <tbody>
                <div className='mt-[2px]'> </div>

                    {assets.map((data,i)=>{

                        return <TableRow key={i} data={data} currentColor={currentColor}/>

                    })}

                </tbody>
            </table>
</div>
    </div>
  )
}

export default favorite