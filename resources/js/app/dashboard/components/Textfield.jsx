import React from 'react'

const Textfield = (props) => {
    
    const {id,
        className,
        label,
        placeHolder,
        value,
        type, 
        onChange,
        name} = props


  return (
    <div>
        {label && <label htmlFor={id} className="text-xs font-bold">{label}</label>}
        <input type={type} 
        id={id} 
        className={`w-full block mt-2 border-0 outline-none bg-gray-400 dark:bg-slate-700 pl-3 p-2 rounded active:bg-transparent placeholder:text-xs placeholder:text-gray-200 text-sm ${className}`} 
        name={name} 
        value={value}
        placeholder={placeHolder}
        onChange={onChange}/>
    </div>
  )
}

export default Textfield