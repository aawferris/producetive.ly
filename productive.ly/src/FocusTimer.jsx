import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

// I learned about timer function from : https://yizhiyue.me/2019/12/08/how-to-create-a-simple-react-countdown-timer

function FocusTimer() {
  const [counter, setCounter] = useState(60) // so if I pass user input here, it can count down from that

  useEffect(() => {
    const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000)
    return () => clearInterval(timer)
  }, [counter])


  // add a conditional here that flashes when timer ends - - maybe also does a pop up
  // HOW TO set up a user input that becomes the countdown value?

  return (
    <div className='timer-container'>
      <p>This is a Focus Timer</p>
      <div>{counter}</div>
      <form>
        <label htmlFor='user-time'>Time</label>
        <input
          name="user-time"
          type="time" // build something to handle time formatting (if user-time > 50 ? {render time in hours, minutes, seconds} : {render time in seconds})
          value={counter}
          onChange={(event) => setCounter(event.target.value)}
        />
      </form>
    </div>
  )
}

export default FocusTimer

// look into SVGCircle for a clean count down visual