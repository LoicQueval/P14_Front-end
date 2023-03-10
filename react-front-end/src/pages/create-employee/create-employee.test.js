import { render, screen } from '@testing-library/react';
import CreateEmployee from './create-employee';

test('renders learn react link', () => {
  render(<CreateEmployee />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
