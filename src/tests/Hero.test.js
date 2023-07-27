import { render, screen } from '@testing-library/react';
import Hero from '../pages/components/Hero';

test('renders Hero section', () => {
    render(<Hero/>);

    const girlsInHeading = screen.getByText('girls in');
    expect(girlsInHeading).toBeInTheDocument();

    // edit test to be more flexible (accepts spanning styles)
    const steamHeading = screen.getByText('STEAM');
    expect(steamHeading).toBeInTheDocument();

    const info = screen.getByText('Supporting access to STEAM education for girls, gender-diverse people, and the LGBTQ+ community.');
    expect(info).toBeInTheDocument();

    const getInvolvedButton = screen.getByRole('button', {name: 'get-involved'});
    expect(getInvolvedButton).toBeInTheDocument();

    // Change these tests later when placeholder images are replaced
    const whiteImage = screen.getAllByAltText('White');
    expect(whiteImage).toBeInTheDocument();

    const pinkImage = screen.getAllByAltText('pink');
    expect(pinkImage).toBeInTheDocument();

    const lightPurpleImage = screen.getAllByAltText('light-purple');
    expect(lightPurpleImage).toBeInTheDocument();

    const darkPurpleImage = screen.getAllByAltText('dark-purple');
    expect(darkPurpleImage).toBeInTheDocument();
});