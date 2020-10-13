import React from 'react'


function BackGround(props) {
  let backgroundStyle = {
    background: `url(${props.image})`,
  }

  return (
    <>
      <div className='background-image' style={backgroundStyle}></div>
    </>
  )
}

export default BackGround