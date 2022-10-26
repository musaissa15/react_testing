import React from 'react'

const Todo = ({ t, toggleComplete, removeTodo }) => {
	
	 function handleCheckboxClick() {
			toggleComplete(t.id);
		}

		function handleRemoveClick() {
			removeTodo(t.id);
		}
	return (
		<div>
			<li
				style={{
					color: "black",
					textDecoration: Todo.completed ? "line-through" : null,
				}}
			>
				{t.task}
				<input
					type="checkbox"
					checked={t.completed}
					onClick={handleCheckboxClick}
				/>
				<button onClick={handleRemoveClick}>x</button>
			</li>
		</div>
	);
};

export default Todo