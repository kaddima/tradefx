import React from 'react'

const AssetImages = ({data})=>{

    if(data.category === 'cryptocurrency'){

       return <div className='w-6 h-6 rounded-full overflow-hidden bg-white'>
           <img src={data.image} alt="" className='w-full object-cover'/>
       </div>
    }else if(data.category === 'forex'){

       let a = '';

       let symbols = data.symbol.toLowerCase().split('/')

       return <div className='relative'>
           
           <div className='w-5 h-5 rounded-full overflow-hidden'>
               <img src={`/images/flags/${symbols[0]}.png`} alt="" className='w-full object-cover' />
           </div>
           <div className='w-3 h-3 rounded-full overflow-hidden absolute bottom-0 right-[-2px]'>
               <img src={`/images/flags/${symbols[1]}.png`} alt=""  className='w-full object-cover'/>
           </div>

           
       </div>
    }

}

export default AssetImages