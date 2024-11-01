import { render, screen } from '@testing-library/react';
import Alert from '../pages/components/Alert';

test('renders Alert component', () => {
  render(<Alert />);

  const joinTeam = screen.getByText('Want to join the team?');
  expect(joinTeam).toBeInTheDocument();

  // Change to expected destination later
  expect(document.querySelector('a').getAttribute('href')).toEqual('https://www.google.com');
});
