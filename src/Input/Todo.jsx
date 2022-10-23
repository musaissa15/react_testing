import React from 'react'

const Todo = ({t}) => {
  return (
		<div>
			<li>
				{t.task} <input type="checkbox" />
				<button>x</button>
			</li>
		</div>
	);
}

export default Todo