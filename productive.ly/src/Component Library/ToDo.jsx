import React from 'react'

function ToDo(props) {
  return (
    <p
      checked={props.todo}
      className='todo'
      onClick={props.handleDone}
      style={{ textDecoration: props.todo ? "line-through" : "none" }}>{props.task}</p>
  )
}

export default ToDo