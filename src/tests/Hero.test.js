import { render, screen } from '@testing-library/react';
import Hero from '../pages/components/Hero';

test('renders Hero section', () => {
  render(<Hero />);

  const girlsInHeading = document.getElementsByClassName('girls-in')[0];
  expect(girlsInHeading).toBeInTheDocument();

  // edit test to be more flexible (accepts spanning styles)
  const steamHeading = document.getElementsByClassName('STEAM')[0];
  expect(steamHeading).toBeInTheDocument();

  const info = screen.getByText(
    'Supporting access to STEAM education for girls, gender-diverse people, and the LGBTQ+ community.'
  );
  expect(info).toBeInTheDocument();

  const getInvolvedButton = screen.getByRole('button', { name: 'GET INVOLVED' });
  expect(getInvolvedButton).toBeInTheDocument();

  // Change these tests later when placeholder images are replaced
  const whiteImage = screen.getAllByAltText('white');
  expect(whiteImage.length).toEqual(2);

  const pinkImage = screen.getByAltText('pink');
  expect(pinkImage).toBeInTheDocument();

  const lightPurpleImage = screen.getAllByAltText('light-purple');
  expect(lightPurpleImage.length).toEqual(2);

  const darkPurpleImage = screen.getByAltText('dark-purple');
  expect(darkPurpleImage).toBeInTheDocument();
});
