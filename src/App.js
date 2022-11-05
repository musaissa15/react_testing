import React, { useState } from "react";
import "./App.css";
import "./Components/List/List.css"
import Input from "./Components/Input/Input.jsx";
import List from "./Components/List/List.jsx";


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
		<div className="app-container">
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
