import React, { useState } from "react";
import "./App.css";
import Input from "./Input/Input";
import List from "./List.jsx";

function App() {
	const [todos, setTodos] = useState([]);
	const addTodo = (todo) => {
		setTodos([todo, ...todos]);
	};

	  function toggleComplete(id) {
			setTodos(
				todos.map((todo) => {
					if (todo.id === id) {
						return {
							...todo,
							completed: !todo.completed,
						};
					}
					return todo;
				})
			);
	  }
	
	  function removeTodo(id) {
			setTodos(todos.filter((todo) => todo.id !== id));
	  }
	
	return (
		<div>
			<h1> Todo List</h1>
			<Input addTodo={addTodo} />
			<List
				todos={todos}
				removeTodo={removeTodo}
				toggleComplete={toggleComplete}
			/>
		</div>
	);
}

export default App;
