import React,{useState} from 'react'
import {AiOutlinePlus, AiOutlineMinus} from "react-icons/ai"

function round(num, decimalPlaces = 0) {
    if (num < 0)
        return -round(-num, decimalPlaces);
    var p = Math.pow(10, decimalPlaces);
    var n = (num * p).toPrecision(15);
    return Math.round(n) / p;
}


const Input = ({value,label,type, onChange,className,placeholder}) => {

    return (
        <div className='relative'>
            <label className='text-xs'>{label}</label>
            <input
            type={type ? type : 'text'} 
            className={`dark:bg-slate-700 dark:placeholder:text-slate-600 rounded mt-1 pl-2 block ${className}`} 
            value={value} 
            onChange={(e)=>{onChange(e)}}
            placeholder={placeholder}/>
        </div>
    )
}

export default Input