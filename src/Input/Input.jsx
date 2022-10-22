import React, { useState } from "react";
// import { useState } from 'react'
const Input = () => {
    const [task, setTask] = useState('');
    const [list, setlist] = useState([])
    const handleChange = (e) => {
        setTask(e.target.value);
        console.log(e.target.value);
    };
    
    const addTask = () => {
        console.log(task)
    }

    return (
        <div>
            <input
                type='text'
                placeholder='Please Enter your Task'
                onChange={(e) => {
                    handleChange(e)
                }}
            />
            <button type="submit"
            onClick={addTask}
            > Add </button>
    </div>
  )
}

export default Input