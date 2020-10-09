import React, {useState} from 'react'
import ToDo from './ToDo'

function Tasks() {
  const [prevTodos, updateTodos] = useState([
    {
      task: 'Make sure this is working',
      done: false
    }
  ])

  const [newTodo, updateNewTodo] = useState('')
  const handleDone = (event, idx) => {
    updateTodos(prevTodos.map((todo, index) => {
      if (index === idx) {
        return (
          {
            ...todo,
            done: !todo.done
          }
        )
      }
      return todo
    }))
  }

  const addTodo = (e) => {
    e.preventDefault()
    updateTodos(prevTodos => {
      return [...prevTodos, {
        task: newTodo,
        done: false
      }]
    })
    updateNewTodo('')
  }

  return (
    <>
      <div className='todo-container'>
        <h5 >My Tasks</h5>
        <div class='task-list'>
          {prevTodos.map((todo, idx) =>
            <ToDo
              task={todo.task}
              todo={todo.done}
              handleDone={e => handleDone(e, idx)}
              key={idx}
            />
          )}
        <form onSubmit={addTodo}>
          <label>
            <input
              type='text'
              placeholder="What's next?"
              value={newTodo}
              onChange={e => updateNewTodo(e.target.value)}
            />
          </label>
        </form>
          </div>
      </div>
    </>
  )
}

export default Tasks 