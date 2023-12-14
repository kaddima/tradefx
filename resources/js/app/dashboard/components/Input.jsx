import React,{useState} from 'react'


const Input = ({value, onChange,className}) => {
    const [input, setInput] = useState(value)

    const handleChange = (e)=>{
      
        onChange(e)
    }

    return (
        <div className='relative'>
            <input className={className} value={input} onChange={handleChange}/>
        </div>
    )
}

export default Input