import React from 'react'


function Welcome(props) {
  return (
    <>
      <div className='welcome-display'>
        <p id="welcome-header">Welcome, {props.name}</p>
      </div>
    </>
  )
}

export default Welcome