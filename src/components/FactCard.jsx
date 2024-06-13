import React from 'react'

const FactCard = ({factText,onClick}) => {

  const copyToClipboard = () => {
    navigator.clipboard.writeText(factText);
  };
  const shareFact = () => {
    navigator.share({
      title: 'Fact',
      text: factText,
    })
  }
  // const screenShot = () => {
  //   navigator.screenshot.save( )
    
  // }

  return (
    <div className='w-[500px] h-[250px] flex flex-col rounded-md   gap-2 items-center  mt-14' style={{
      backdropFilter: 'blur(23px) saturate(200%)',
      WebkitBackdropFilter: 'blur(43px) saturate(200%)',
      backgroundColor: 'rgba(83, 121, 186, 0.561)'
    }}>
     
      <h1 className='text-3xl font-bold text-white p-4 top-0'>Today's Fact</h1>
      <div className='text-xl pb-6  h-[120px] w-[450px] text-white'>{factText}</div>
      <div className='w-full flex justify-end  gap-1'>
        <button className='h-[30px] w-[30px] justify-center items-center ' onClick={copyToClipboard }>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="icon-md-heavy"><path fill="white" fill-rule="evenodd" d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" clip-rule="evenodd"></path></svg></button>
        {/* <button  className='h-[30px] w-[30px] justify-center items-center ' onClick={screenShot}><svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="white" d="M19 14h-2v3h-3v2h3v3h2v-3h3v-2h-3zM4 19h3v-2H5v-2H3v3a1 1 0 0 0 1 1zM19 4a1 1 0 0 0-1-1h-3v2h2v2h2V4zM5 5h2V3H4a1 1 0 0 0-1 1v3h2V5zM3 9h2v4H3zm14 0h2v3h-2zM9 3h4v2H9zm0 14h3v2H9z "/></svg></button> */}
        <button  className='h-[30px] w-[30px] justify-center items-center ' onClick={shareFact}><svg fill="#000000" width="24px" height="24px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" ><title>share</title><path fill="white" d="M385 464Q357 464 339 445 320 426 320 399 320 390 321 388L171 303Q154 320 129 320 102 320 83 301 64 282 64 255 64 229 83 211 102 192 129 192 154 192 171 209L321 125Q320 122 320 111 320 85 339 67 357 48 384 48 410 48 429 67 447 85 448 111 448 138 429 157 410 176 384 176 361 176 341 159L191 244Q192 246 192 255 192 265 191 268L341 353Q361 336 385 336 415 336 431 355 447 374 447 400 447 426 431 445 415 464 385 464Z" /></svg></button>
        </div>
      </div>
     

    
  )
}

export default FactCard