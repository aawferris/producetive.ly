import React, { useState } from 'react'


function Weather(props) {
  const [zip, setZip] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <>
      <div className='weather-display'>
        <p>Weather</p>
        {/* <p>{props.name}</p> */}
        {/* <p>{props.main.temp}</p> */}
      </div>
      <form>
        <label htmlFor=''>Zip Code: </label>
      </form>
    </>
  )
}

export default Weather


