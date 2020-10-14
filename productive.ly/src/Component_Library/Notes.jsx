import React from 'react'


function Notes(props) {
  return (
    <>
      <div className='notes-display'>
        <p>{props.subject}</p>
        <p>{props.note}</p>
      </div>
    </>
  )
}

export default Notes