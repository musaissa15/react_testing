import React from 'react'

const Input = () => {
  return (
		<div>
			Input
			<form>
				<label>
					Task:
					<input type="text" placeholder="Please Enter your Task" />
        </label>
        <button type="submit"> Add </button>
			</form>
		</div>
	);
}

export default Input