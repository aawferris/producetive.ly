import React, {useState} from 'react'
import ToDo from './ToDo'

// sets task default state to uncrossed out and empty string
function Tasks() {
  const [prevTodos, updateTodos] = useState([
    {
      task: '',
      done: false
    }
  ])

  // this handles the cross out when done
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

  // this handles adding new tasks
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
        <h4 >My Tasks</h4>
        <div className='task-list'>
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