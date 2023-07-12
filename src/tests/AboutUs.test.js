import { render, screen } from '@testing-library/react';
import AboutUs from '../pages/components/AboutUs';

test('renders About Us section', () => {
  render(<AboutUs />);

  const aboutUsHeading = screen.getByText('ABOUT US');
  expect(aboutUsHeading).toBeInTheDocument();

  const teamPhoto = screen.getByAltText('Girls in STEAM Exec team');
  expect(teamPhoto).toBeInTheDocument();

  const helloHeading = screen.getByText('Hello from the team ;)');
  expect(helloHeading).toBeInTheDocument();

  const mapImage = screen.getByAltText('Map');
  expect(mapImage).toBeInTheDocument();
});
