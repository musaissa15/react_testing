import React from 'react'

const Todo = ({t}) => {
  return (
      <div>Todo
          <input type="checkbox" />
          <li>{t.task}</li> 
          <button>x</button>
    </div>
  )
}

export default Todo