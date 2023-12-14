import React from 'react'

import _ from 'lodash';

const TableRow = ({data})=> {


   return(
       <>
         <tr data-id={data.id} data-category={data.category}
            className='text-xs hover:bg-gray-100 hover:dark:bg-slate-800 bg-white
			font-bold dark:text-gray-100 dark:bg-secondary-dark-bg border-b-1
			border-b-slate-300 dark:border-slate-700'>
            <td className='py-4'>
                <div className='text-slate-600 dark:text-gray-200'>
                    {data.name ? data.name : data.symbol}
                </div>
            </td>
            <td>
                <div className={`text-center ${data.highlight && data.highlight.change_one_day === 'fall'?'text-red-600' : 'text-green-600'} `}>
                    {_.round(data.change_one_day, 3)}
                </div>
            </td>
            <td>
                <div>
                    <div className='text-center text-slate-600 dark:text-gray-200'>
                        <span className={` ${data.highlight && data.highlight.sell === 'fall'?'text-red-600' : 'text-green-600'} font-bold w-[4rem]`}>{_.round(data.sell,3)}</span>
                    </div>
                </div>
            </td>
            <td>
                <div>
                    <div className='text-center text-slate-600 dark:text-gray-200'>
                        <span className={`${data.highlight && data.highlight.buy === 'fall'?'text-red-600' : 'text-green-600'} font-bold w-[4rem]`}>{_.round(data.buy,3)}</span>
                    </div>
                </div>
            </td>
            <td className=''>
                <div className={`text-center ${data.highlight && data.highlight.low === 'fall'?'text-red-600' : 'text-green-600'} `}>
                    {_.round(data.low,3)}
                </div>
            </td>
            <td className=''>
                <div className={`text-center  ${data.highlight && data.highlight.high === 'fall'?'text-red-600' : 'text-green-600'} `}>{_.round(data.high,3)}</div>
            </td>
        </tr>
    </>)
}

const AssetTable = ({data}) => {

  return (
        <div className='md:ml-1 relative overflow-auto md:h-full'>
            <table className='w-full table-auto border-collapse dark:text-gray-200 text-gray-700'>
                <thead >
                    <tr>
                        <th className='dark:bg-secondary-dark-bg w-[10%]'>
                            <span className='text-xs'>Market</span>
                        </th>
                        <th className='dark:bg-secondary-dark-bg text-center'>
                            <span className='text-xs'>Change</span>
                        </th>
                        <th className='dark:bg-secondary-dark-bg text-center w-[15%]'>
                            <span className='text-xs'>Sell</span>
                        </th>
                        <th className='pl-12 dark:bg-secondary-dark-bg text-center w-[15%]'>
                            <span className='text-xs'>Buy</span>
                        </th>
                        <th className='dark:bg-secondary-dark-bg text-center'>
                            <span className='text-xs'>Low</span>
                        </th>
                        <th className='dark:bg-secondary-dark-bg text-center '>
                            <span className='text-xs'>High</span>
                        </th>
                    </tr>
                </thead>
                <tbody className="overflow-auto">
                    <div className='mt-[2px]'> </div>
                    {data.map((asset,i)=>{

                        return  <TableRow key={i}
                                        data={asset} currentColor='blue'/>

                    })}

                </tbody>
            </table>

        </div>

  )
}

export default AssetTable
