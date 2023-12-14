import React from 'react'

import "./radio.css"

const RadioInput = ({name,onClick,value,label, ClassName}) => {
  return (
    <div className='flex items-center space-x-1'>
        <input type="radio" name={name} 
        id={`radio-${label}`}
        value={value}
        onClick={onClick}
        className={`border-1 dark:border-gray-500 cursor-pointer ${ClassName}`}/>
        <label htmlFor={`radio-${label}`} className="cursor-pointer text-xs">{label}</label>
    </div>
  )
}

export default RadioInput