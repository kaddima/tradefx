import React from 'react'
import {Outlet} from "react-router-dom"


const ModalContent = () => {

  return (
      <div>
            <div className='w-screen h-screen left-0 top-0 fixed z-[888] bg-slate-800 opacity-70'>
            </div>  
            <div className='w-11/12 h-4/5 absolute z-[999] md:w-9/12 md:h-[500px] top-15 left-2/4 -translate-x-2/4 
                   mx-auto dark:bg-secondary-dark-bg opacity-100 rounded-xl shadow-lg pb-5 md:pb-0 overflow-auto'>
               <Outlet/>
            </div> 
      </div>
    )
}

export default ModalContent