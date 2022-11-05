import React from "react";
import Todo from "../Todo/Todo.jsx";
const List = ({ todos, removeTodo, toggleComplete }) => {
	return (
		<div>
			List
			<ul>
				{todos.map((t) => {
					return (
						<li>
							<Todo
								key={t.id}
								t={t}
								removeTodo={removeTodo}
								toggleComplete={toggleComplete}
							/>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default List;
