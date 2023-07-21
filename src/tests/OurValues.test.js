import { render, screen } from '@testing-library/react';
import OurValues from '../pages/components/OurValues';

// Make relevant changes to tests as images are swapped out (later)
test('renders Our Values section', () => {
    render(<OurValues />);

    const ourValuesHeading = screen.getByText('OUR VALUES');
    expect(ourValuesHeading).toBeInTheDocument();

    const communityImage = screen.getByAltText('Community');
    expect(communityImage).toBeInTheDocument();

    const educationImage = screen.getByAltText('Education');
    expect(educationImage).toBeInTheDocument();

    const accessImage = screen.getByAltText('Access');
    expect(accessImage).toBeInTheDocument();
});