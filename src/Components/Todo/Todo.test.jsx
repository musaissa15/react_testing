import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Todo from "./Todo";

test("should Display todo task", () => {
	render(<Todo />);
	const todoElement = screen.getByRole("li");
	expect(todoElement).toBeInTheDocument();
});
