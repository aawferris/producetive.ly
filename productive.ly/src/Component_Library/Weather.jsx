import React from 'react'


function Weather(props) {
  return (
    <>
      <div className='weather-display'>
        <p>Weather</p>
        {/* <p>{props.name}</p> */}
        {/* <p>{props.main.temp}</p> */}
      </div>
    </>
  )
}

export default Weather