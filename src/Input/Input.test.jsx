import { render, screen } from "@testing-library/react";
import Input from './Input.jsx'

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

describe("Name of the group", () => {
	test("should have a placeholder", () => {
		render(<Input />);
		const placeholder = screen.getByPlaceholderText("Please Enter your Task");
		expect(placeholder).toBeInTheDocument();
	});

	test("placeholder should be visible", () => {
		render(<Input />);
		const placeholder = screen.getByPlaceholderText("Please Enter your Task");
		expect(placeholder).toBeVisible();
	});
});

describe("Name of the group", () => {
	test("should have a submit button", () => {
		render(<Input />);
		const buttonElement = screen.getByRole("button");
		expect(buttonElement).toBeInTheDocument();
		expect(buttonElement).toBeVisible();
	});

	test("should have a submit button", () => {
		render(<Input />);
		const buttonElement = screen.getByRole("button");
		expect(buttonElement).toBeVisible();
	});
});
