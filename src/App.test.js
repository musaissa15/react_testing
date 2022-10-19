import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const todoHeading = screen.getByRole('heading')
  expect(todoHeading).toBeInTheDocument();
});
