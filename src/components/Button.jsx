import React from 'react'

const Button = ({btnText,onClick}) => {
  return (
    <div className='flex justify-center w-full h-[80px] mt-4   items-center'>
        <button className='w-[170px] h-[50px] font-semibold text-white text-xl rounded shadow-sm btn ' onClick={onClick}>{btnText}</button>
    </div>
    
  )
}

export default Button