import React from 'react'


function Welcome(props) {
  return (
    <>
      <div className='welcome-display'>
        <p>Welcome, {props.name}</p>
      </div>
    </>
  )
}

export default Welcome