import { getByTestId, render, screen } from '@testing-library/react';
import OurValues from '../pages/components/OurValues';

// add tests that check background images
test('renders Our Values section', () => {
  render(<OurValues />);

  const ourValuesHeading = screen.getByText('OUR VALUES');
  expect(ourValuesHeading).toBeInTheDocument();

  const communityTitle = screen.getByText('COMMUNITY');
  expect(communityTitle).toBeInTheDocument();

  const communityInfo = screen.getByText(
    'Building vertical network & horizontal community amongst our program attendees.'
  );
  expect(communityInfo).toBeInTheDocument();

  const communityIcon = screen.getByAltText('community-icon');
  expect(communityIcon).toBeInTheDocument();

  const educationTitle = screen.getByText('EDUCATION');
  expect(educationTitle).toBeInTheDocument();

  const educationInfo = screen.getByText(
    'Connecting our program attendees with role models and exposing them to new knowledge.'
  );
  expect(educationInfo).toBeInTheDocument();

  const educationIcon = screen.getByAltText('education-icon');
  expect(educationIcon).toBeInTheDocument();

  const accessTitle = screen.getByText('ACCESS');
  expect(accessTitle).toBeInTheDocument();

  const accessInfo = screen.getByText(
    'Providing support, resources & educational programming through inclusive design spaces.'
  );
  expect(accessInfo).toBeInTheDocument();

  const accessIcon = screen.getByAltText('access-icon');
  expect(accessIcon).toBeInTheDocument();
});
