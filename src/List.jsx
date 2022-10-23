import React from "react";
import Todo from "./Input/Todo";
const List = ({ todos }) => {
	return (
		<div>
			List
			<ul>
				{todos.map((t) => {
					return (
						<li>
							<Todo key={t.id} t={t} />
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default List;
