import React, { useState } from "react";
import  {v4 as uuidv4} from "uuid";
const Input = ({addTodo}) => {
    const [todo, setTodo] = useState({
        id: '',
        task: '',
        completed: false
  })

    const handleChange = (event) => {
setTodo({ ...todo, task: event.target.value});
    }

    const handleSubmit = (event) => { 
        event.preventDefault()
        if (todo.task.trim()) {
            addTodo({...todo, id: 'uuid.v4(80-=90=-089989'});
            // reset form
            setTodo({...todo, task: ''})
        }
    }
    return (
			<div>
				Input
				<form onSubmit={handleSubmit}>
					<label>
						Task:
						<input
							type="text"
							placeholder="Please Enter your Task"
                        onChange={handleChange}
                        value={todo.task}
						/>
					</label>
					<button type="submit"> Add </button>
				</form>
			</div>
		);
}

export default Input