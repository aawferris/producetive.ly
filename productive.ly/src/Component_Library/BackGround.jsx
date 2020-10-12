import React from 'react'


function BackGround(props) {
  let backgroundStyle = {
    background: `url(${props.image})`,
    backgroundSize: "cover",
  }

  return (
    <>
      <div className='background-image'>
        <img
          src={props.image}
          alt='random nature background prom pixelbay.com'
          style={{ backgroundStyle }}
        />
      </div>
    </>
  )
}

export default BackGround