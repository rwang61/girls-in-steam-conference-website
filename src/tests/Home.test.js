import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';

test('renders toolbar logo', () => {
  render(<Home />);
  const logo = screen.getByTestId('App-logo');
  expect(logo).toHaveAttribute('src', 'gis-logo.png');
  expect(logo).toHaveAttribute('aria-label', 'logo');
});
