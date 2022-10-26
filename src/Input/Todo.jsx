import React from 'react'

const Todo = ({t}) => {
  return (
		<div>
		  <li style={{
			  color: 'black', textDecoration: Todo.completed ? 'line-through' 
			: null }}>
				{t.task} <input type="checkbox" />
				<button>x</button>
			</li>
		</div>
	);
}

export default Todo