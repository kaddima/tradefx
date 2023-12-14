import React, {useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { updatePortfolio,addPortfolio } from '../../store/portfolioSlice'
import { updateAccount } from '../../store/accountSlice'
import _ from 'lodash'

import {ToastContainer, toast} from "react-toastify"

//Chart.register(ArcElement)

const SidebarTrades = ({asset}) => {

	const dispatch = useDispatch();

	const currentColor = useSelector(state=>state.main.currentColor)
	const selectedAsset = useSelector(state=>state.assets.selectedAsset)
	const assetLeverage = useSelector(state=>state.assets.leverage[selectedAsset['category']])


	const [size,setSize] = useState(0)
	const [value,setValue] = useState(0)
    const [marginAmount,setMarginAmount] = useState()
	const [fullPrice,setFullPrice] = useState(0)

	const handleInput = (e)=>{

        let value = e.target.value;

        if(value < 0){
            return
        }
        
		let arrLeverage = assetLeverage.split(':')

		let margin = arrLeverage[0] / arrLeverage[1]


		//calculate the margin...1:prices of asset
		let fullPrice = value*margin

        let assetPerDollar = 1/parseFloat(selectedAsset['buy'])

        let assetSize = assetPerDollar * value * margin

		setSize(assetSize)
		setValue(value)
		setFullPrice(fullPrice)
        setMarginAmount(value)

	}


	const handleInvest = (e)=>{
        
    let data = {
                asset_name:selectedAsset.name ? selectedAsset.name : selectedAsset.symbol,
                id:selectedAsset.id,
                entry:selectedAsset?.type == 'buy' ? selectedAsset.buy :selectedAsset.sell,
                last_price:selectedAsset.selectedAsset?.type == 'buy' ? selectedAsset.buy :selectedAsset.sell,
                size,
                type:selectedAsset?.type,      
                leverage:assetLeverage,
                profit_loss:0,
                margin:_.round(marginAmount,2)
            }

		if (data.size > 0){
            dispatch(addPortfolio(data)).unwrap().then(data=>{
                if (data.status){

                    // calculate total margin and profit_loss
                    let margin = 0, profit_loss = 0
                    let portfolios = data.data
        
                    data.data.portfolios.map((portfolio,key)=>{
                        margin += Number(portfolio.margin);
                        profit_loss += Number(portfolio.profit_loss)
                    })

                    //update the uncompleted balance from server to include both margin and profit_loss
                    let balance = {...data.data.balance, margin,profit_loss}

                    dispatch(updatePortfolio(data.data))
                    dispatch(updateAccount(balance))

                    toast('Asset added to portfolio')
                }else{
                    toast('Insufficient balance')
                }
            }).catch(e=>{

                console.log(e)
            })

        }

	}

  return (
    <>
        <div className='bg-transparent flex flex-col h-full'>
            <div className='bg-white dark:bg-secondary-dark-bg'>
                <div className='p-4 dark:text-gray-300'>
                    <div className='text-center'>
                        <p className='text-xs font-bold'>{selectedAsset.name ? selectedAsset.name : selectedAsset.symbol}</p>
                        <span className='text-sm font-bold' >${selectedAsset.sell ? (Number(selectedAsset.sell)).toLocaleString() : 0}</span>

                    </div>
                    <div className='h-[2px] bg-slate-600 mt-12'> </div>

                    <div className='mt-4'>
                        <p className='block mb-2 text-sm font-bold text-left'>Amount (Margin)</p>
                        <input type="number" value={value}
                        className="w-full py-1 rounded-sm dark:bg-main-dark-bg bg-main-bg
                          dark:text-gray-300 pl-4"
                        onChange={handleInput}
                        />
                    </div>
                    <div className='mt-4 flex justify-between text-xs font-bold'>
                        <div>Size</div>
                        <span>{size ? _.round(size,6).toLocaleString() : 0}</span>
                    </div>
					<div className='mt-4 flex justify-between text-xs font-bold'>
                        <div>Leverage</div>
                        <span>{assetLeverage ? assetLeverage : '1:1'}</span>
                    </div>
                </div>
            </div>

            <div className='bg-white dark:bg-secondary-dark-bg mt-1'>
                <div className='font-bold text-xs dark:text-gray-300 p-3'>
                   <div className='flex justify-between mt-3 items-center border-b-1 pb-2 dark:border-b-slate-600'>
                        <span className='block'><span className='w-2 h-2 mr-1 inline-block bg-blue-500 rounded'> </span>Trade Size</span>
                        <span>${fullPrice ? _.round(fullPrice,3	).toLocaleString() : 0}</span>
                   </div>

                </div>
            </div>
            {selectedAsset.type && (<div className='bg-white flex-1 dark:bg-secondary-dark-bg mt-3 px-2 py-3'>
                 <button className='p-3 text-sm text-center text-slate-900 font-bold rounded-sm w-full'
                    style={{backgroundColor: currentColor}}
                    data-type={selectedAsset.type}
					onClick={handleInvest}>{selectedAsset.type}</button>
            </div>)}
            
            {/* <ToastContainer/> */}
        </div>
    </>
  )
}

export default SidebarTrades


