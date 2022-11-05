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
			<ul>
			<li
				style={{
					color: "black",
					textDecoration: t.completed ? "line-through" : null,
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
			</ul>
		</div>
	);
};

export default Todo