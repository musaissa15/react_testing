import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Input from "./Input.jsx";
test('should have a form', () => { second })
test("Should have a task input", () => {
	render(<Input />);
	const inputElement = screen.getByRole('textbox');
	expect(inputElement).toBeInTheDocument();
});
