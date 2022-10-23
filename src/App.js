import React,{useState} from "react";
import "./App.css";
import Input from "./Components/Input/Input";
import List from './List.jsx'

function App() {
	const [todos, setTodos] = useState([])
	const addTodo = (todo) => {
 setTodos([todo, ...todos])
	}
	return (
		<div>
			<h1> Todo List</h1>
			<Input/>		
			<List addTodo={addTodo} />
			</div>
	)
}

export default App;
