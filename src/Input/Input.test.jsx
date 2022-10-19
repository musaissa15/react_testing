import {render, screen} from "@testing-library/react";
import Input from "./Input.jsx";

test('should have a submit button', () => {
	render(<Input/>)
	const labelElement = screen.getByLabelText('Task:')
	expect(labelElement).toBeInTheDocument();
});
test("Should have a task input", () => {
	render(<Input name='Task'/>);
	const inputElement = screen.getByRole("textbox", { name: /task/i });
	expect(inputElement).toBeInTheDocument();
});


test('should have a placeholder', () => {
	render(<Input />)
	const placeholder = screen.getByPlaceholderText('Please Enter your Task')
	expect(placeholder).toBeInTheDocument()
});

test('should have a submit button', () => {
	render(<Input />)
	const buttonElement = screen.getByRole('button')
	expect(buttonElement).toBeInTheDocument()
})