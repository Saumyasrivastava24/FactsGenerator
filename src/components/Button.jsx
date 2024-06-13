import React from 'react'

const Button = ({btnText,onClick}) => {
  return (
    <div className='flex justify-center w-full h-[50px] mt-6   items-center' style={{   backdropFilter: 'blur(23px) saturate(200%)',
    WebkitBackdropFilter: 'blur(43px) saturate(200%)', // For Safari compatibility
    backgroundColor: 'rgba(163, 114, 200, 0.269)',
    boxShadow: 'rgb(8, 173, 228) 0px 0px 10px'}}>
        <button className='w-[170px] h-[50px] font-semibold text-white text-xl rounded shadow-sm  '  onClick={onClick}>{btnText}</button>
    </div>
    
  )
}

export default Button