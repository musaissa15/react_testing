import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import Input from "./Input";

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

describe("Label", () => {
	test("should have a Label", () => {
		render(<Input />);
		const labelElement = screen.getByLabelText("Task:");
		expect(labelElement).toBeInTheDocument();
	});

	test("Label should be visible", () => {
		render(<Input />);
		const labelElement = screen.getByLabelText("Task:");
		expect(labelElement).toBeVisible();
	});
	test("Should have a task input", () => {
		render(<Input name="Task" />);
		const inputElement = screen.getByRole("textbox", { name: /task/i });
		expect(inputElement).toBeInTheDocument();
	});
});

test('should have a submit button', () => {
	render(<Input />)
	const buttonElement = screen.getByRole('button')
	expect(buttonElement).toBeInTheDocument()
})
