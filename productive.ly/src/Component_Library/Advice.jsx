import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Advice() {
  const [advice, setAdvice] = useState('')

  useEffect(() => {
    async function apiCall() {
      const url = 'https://api.adviceslip.com/advice'
      const response = await axios.get(url)
      const advice = response.data.slip.advice
      setAdvice(advice)
      console.log(response.data.slip.advice);
    }
    apiCall()
  })

  return (
    <div className='advice'>
      <p>And now for your daily Zen: "{advice}"</p>
    </div>
  )
}
export default Advice