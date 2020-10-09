import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

// I learned about timer function from : https://yizhiyue.me/2019/12/08/how-to-create-a-simple-react-countdown-timer
// I followed the code from: https://upmostly.com/tutorials/build-a-react-timer-component-using-hooks

function FocusTimer() {

  const [seconds, setSeconds] = useState()
  const [isActive, setIsActive] = useState(false)

  function toggle() {
    setIsActive(!isActive)
  }

  function reset() {
    setSeconds(0)
    setIsActive(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    let interval = null
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1)
      }, 1000)
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [isActive, seconds])


  // FIRST CODE FUNCTION
  // const [counter, setCounter] = useState(60) // so if I pass user input here, it can count down from that

  // useEffect(() => {
  //   const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000)
  //   return () => clearInterval(timer)
  // }, [counter])


  // add a conditional here that flashes when timer ends - - maybe also does a pop up
  // HOW TO set up a user input that becomes the countdown value?

  return (
    <div className='timer-container'>
      <div className='user-input-container'>
        <form onClick={handleSubmit}>
          <label htmlFor='user-time'>Time</label>
          <input
            name="user-time"
            type="range" min='0' max='120' step='any' value="120" // build something to handle time formatting (if user-time > 59 ? {render time in hours, minutes, seconds} : {render time in seconds})
            value='user-input'
            onChange={(event) => setSeconds(event.target.value)}
          />
        </form> 
      </div>
      <div className='time'>
        {seconds}s
      </div>
      <div className='row'>
        <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle} >
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button className='button' onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default FocusTimer

// look into SVGCircle for a clean count down visual




// FIRST CODE IN RETURN
{/* <p>This is a Focus Timer</p>
      <div>{counter}</div>
      <form>
        <label htmlFor='user-time'>Time</label>
        <input
          name="user-time"
          type="time" // build something to handle time formatting (if user-time > 50 ? {render time in hours, minutes, seconds} : {render time in seconds})
          value={counter}
          onChange={(event) => setCounter(event.target.value)}
        />
      </form> */}