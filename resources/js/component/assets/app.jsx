import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { getAssets } from './store/assetsSlice'

import Trades from "./trades/Trades"

const app = () => {

  const dispatch = useDispatch()

  useEffect(()=>{

    dispatch(getAssets())
  },[])

  return (
    
        <div>
            <Trades/>
        </div>
  )
}

export default app