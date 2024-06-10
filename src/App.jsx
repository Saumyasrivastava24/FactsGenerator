import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import FactCard from './components/FactCard'
import Button from './components/Button'

const App = () => {
  const [fact, setFact] = useState('')
   const copyToClipboard = () => {
    navigator.clipboard.writeText(fact);

  };
  const shareFact = () => {
    navigator.share({
      title: 'Fact',
      text: fact,
    })
  }
  


  useEffect(() => {
    fetchFact();
  }, [])
  const fetchFact = async () => {
    const response = await fetch(' https://uselessfacts.jsph.pl/api/v2/facts/random ')
    const data = await response.json()

    setFact(data.text)
  }
  const fetchTodayFact = async () => {
    const response = await fetch(' https://uselessfacts.jsph.pl/api/v2/facts/today ')
    const data = await response.json()

    setFact(data.text)
  }


  return (
    <div className='h-screen w-full bg-cover flex flex-col items-center ' style={{ backgroundImage: "url(/bg_img.jpg)" }}>
      <Navbar />
      <FactCard factText={fact} onClick={copyToClipboard,shareFact}/>
      <div className='flex gap-16'>
        <Button onClick={() => fetchFact()} btnText={"Random Fact"} />
        <Button onClick={() => fetchTodayFact()} btnText={"Today's Fact"} />

      </div>
    </div>
  )
}

export default App