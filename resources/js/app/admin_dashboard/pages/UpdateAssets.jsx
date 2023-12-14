import React,{useEffect,useState} from 'react'
import axios from 'axios'
import _ from 'lodash'
import {toast} from "react-toastify"

const TableRow = ({data})=> {
   return(
       <>
        <tr data-id={data.id} data-category={data.category}
            className='text-xs hover:bg-gray-100 hover:dark:bg-slate-800 bg-white
			font-bold dark:text-gray-100 dark:bg-secondary-dark-bg border-b-1
			border-b-slate-300 dark:border-slate-700'>
            <td>
                <div className='text-slate-600 dark:text-gray-200'>
                    {data.name ? data.name : data.symbol}
                </div>
            </td>
            <td>
                <div className={`text-center`}>
                    {_.round(data.change_one_day)}
                </div>
            </td>
            <td>
                <div>
                    <div className='flex justify-center items-center text-slate-600 dark:text-gray-200'>
                        <span>{_.round(data.sell).toLocaleString()}</span>
                       
                    </div>
                </div>
            </td>
            <td>
                <div>
                    <div className='flex justify-center items-center text-slate-600 dark:text-gray-200'>
                        <span className={`font-bold w-[4rem]`}>{_.round(data.buy).toLocaleString()}</span>
                    </div>
                </div>
            </td>
            <td className=''>
                <div className={`text-center`}>
                    {_.round(data.low,2).toLocaleString()}
                </div>
            </td>
            <td className=''>
                <div className={`text-center`}>{_.round(data.high).toLocaleString()}</div>
            </td>
        </tr>
    </>)
}

const UpdateAssets = () => {

    const [assets,setAssets] = useState([])

    const handleUpdate = (e)=>{

        $('#spinner').fadeIn()
        axios.post('/admin/update-assets').then(data=>{

            $('#spinner').fadeOut()

            var datas = data.data.data

            var concatData = [].concat(datas.forex,datas.crypto,datas.stocks)
            var shuffledData = _.shuffle(concatData).slice(0,7)

            setAssets(shuffledData)

            toast('Assets prices updated', {type:'success'})
            
        }).catch(e=>{
            //console.log(e.response)
            $('#spinner').fadeOut()
        })

    }

    useEffect(()=>{

        if(!assets.length){

            axios.get('/assets/home').then((data)=>{
                var datas = data.data.data

                var concatData = [].concat(datas.forex,datas.crypto,datas.stocks)
                var shuffledData = _.shuffle(concatData).slice(0,7)

                setAssets(shuffledData)
                // console.log(shuffledData)
            }).catch(e=>{

                console.log(e)
            })
        }
    },[])

  return (
    <div className='h-full w-full bg-white dark:bg-secondary-dark-bg pt-5 px-4 overflow-scroll'>
        <h1 className='text-center text-2xl font-bold'>Update Assets</h1>
        <ul className='list-disc list-inside bg-slate-800 text-sm space-y-4 p-5 rounded mt-5'>
            <li>Sample reviews of the current prices of your assets</li>
            <li>This process may take a long time to complete, only click on the "update" button when you have time to spare</li>
            <li>Once update is completed, stocks,forex and bitcoin shall be update to its current price in real time</li>
        </ul>
        <table className='w-full table-auto border-collapse dark:text-gray-200 text-gray-700 mt-5'>
            <thead >
                <tr>
                    <th className='dark:bg-secondary-dark-bg w-[15%]'>
                        Market
                    </th>
                    <th className='dark:bg-secondary-dark-bg text-center w-[10%]'>
                        Change
                    </th>
                    <th className='dark:bg-secondary-dark-bg text-center w-[18%]'>
                        Sell
                    </th>
                    <th className='dark:bg-secondary-dark-bg text-center w-[18%]'>
                        Buy
                    </th>
                    <th className='dark:bg-secondary-dark-bg text-center'>
                        Low
                    </th>
                    <th className='dark:bg-secondary-dark-bg text-center '>
                        High
                    </th>
                </tr>
            </thead>
            <tbody className="overflow-auto">
                <div className='mt-[2px]'> </div>
                {assets.map((asset,i)=>{

                    return  <TableRow key={i}
                                    data={asset}/>

                })}

            </tbody>
        </table>
        <button className='rounded-xl w-48 block mx-auto py-2 hover:bg-slate-700 bg-gray-800 mt-4'
            onClick={handleUpdate}>
            Update Assets
        </button>
    </div>
  )
}

export default UpdateAssets