import React from 'react'
import { MoonIcon, SunIcon } from './Icons'

const Navbar = ({setIsDarkMode,isDarkMode}) => {
  return (
    <div className='w-full relative  flex justify-center items-center  ' style={{
      backdropFilter: 'blur(23px) saturate(200%)',
      WebkitBackdropFilter: 'blur(43px) saturate(200%)',
      backgroundColor: 'rgba(83, 121, 186, 0.561)',
      boxShadow: 'rgb(8, 173, 228) 0px 0px 20px'
      // border: '1px solid rgba(209, 213, 219, 0.3)' // Uncomment if needed
    }}>
        <h1 className='text-4xl p-6 font-bold text-white '>Facts Generator</h1>
        {isDarkMode?   <SunIcon onClick={()=>setIsDarkMode(false)} className=' w-8 absolute right-6 ' />
:<MoonIcon onClick={()=>setIsDarkMode(true)} className=' w-8 absolute right-6 ' />}
     
    </div>
  )
}

export default Navbar