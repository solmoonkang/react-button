import { render, screen } from '@testing-library/react';
import App from './App';

test("the counter starts at 0", () => {
  render(<App />);
  const counteElement = screen.getByTestId("counter");
  expect(counteElement).toHaveTextContent(0);
});

test("minus button has correct text", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("minus-button");
  expect(buttonElement).toHaveTextContent("-");
});
