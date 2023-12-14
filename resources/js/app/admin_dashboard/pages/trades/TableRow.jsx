import React from 'react'

const TableRow = ({currentColor,data}) => {

  return (
    <>
		<tr className='text-xs hover:bg-gray-100 hover:dark:bg-slate-800 bg-white
		text-slate-600 font-bold dark:text-gray-100 dark:bg-secondary-dark-bg border-b-1
		border-b-slate-300 dark:border-slate-700' onClick={()=>{}}>
			<td>
				<div>
					{data.symbol}
				</div>
			</td>
			<td >
				<div className='text-center'>
					{round(data.change_one_day,6)}
				</div>
			</td>
			<td>
				<div>
					<div className='flex items-center'>
						<span className=' dark:text-gray-100 font-bold w-[5rem]'>{data.sell}</span>
						<button style={{color:currentColor, border:`1px solid ${currentColor}`}}
						className='w-10 text-xs font-bold capitalize ml-2 border-0 rounded-md'>sell</button>
					</div>
				</div>
			</td>
			<td >
				<div>
					<div className='flex items-center'>
						<span className=' dark:text-gray-100 font-bold w-[5rem]'>{data.close}</span>
						<button style={{color:currentColor, border:`1px solid ${currentColor}`}}
						className='w-10 text-xs font-bold capitalize ml-2 border-0 rounded-md'>buy</button>
					</div>
				</div>
			</td>
			<td>
				<div className='text-center'>
					{data.low}
				</div>
			</td>
			<td>
				<div className='text-center'>{data.high}</div>
			</td>
			<td>
				<div>
					<div title="add to favorite">
						<div className='cursor-pointer' data-id={data.id} data-category={data.category} style={{color:currentColor}}
						onClick={(e)=>{

							const id = e.currentTarget.dataset.id
						//	const category = e.currentTarget.dataset.category

							dispatch(addFavorite({id})).unwrap().then(data =>{

								if(data.status){

									notify('Asset added to favorite')
								}
								else{
									notify('Asset already present')
								}
							})
						}}>
							<span className='text-2xl'><BiBookAdd/></span>
						</div>
					</div>
				</div>
			</td>
		</tr>

	</>
  )
}

export default TableRow
