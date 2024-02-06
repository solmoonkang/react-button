import { render, screen } from '@testing-library/react';
import App from './App';

test('the counter starts at 0', () => {
  render(<App />);
  const counteElement = screen.getByTestId("counter");
  expect(counteElement).toHaveTextContent(0);
});
