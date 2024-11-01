import { render, screen } from '@testing-library/react';
import TheTeam from '../pages/components/TheTeam';

test('renders The Team section', () => {
  render(<TheTeam />);

  const theTeamBehindGISHeading = screen.getByText('THE TEAM BEHIND GIS');
  expect(theTeamBehindGISHeading).toBeInTheDocument();

  const image = screen.getAllByAltText('Allison');
  expect(image.length).toEqual(2);

  const allisonImage = screen.getAllByAltText('Allison');
  expect(allisonImage.length).toEqual(2);

  const arielImage = screen.getAllByAltText('Ariel');
  expect(arielImage.length).toEqual(2);

  const britneyImage = screen.getAllByAltText('Britney');
  expect(britneyImage.length).toEqual(2);

  const claireImage = screen.getAllByAltText('Claire');
  expect(claireImage.length).toEqual(2);

  const cocoImage = screen.getAllByAltText('Coco');
  expect(cocoImage.length).toEqual(2);

  const crystalImage = screen.getAllByAltText('Crystal');
  expect(crystalImage.length).toEqual(2);

  const donnaImage = screen.getAllByAltText('Donna');
  expect(donnaImage.length).toEqual(2);

  const doreenImage = screen.getAllByAltText('Doreen');
  expect(doreenImage.length).toEqual(2);

  const haleyImage = screen.getAllByAltText('Haley');
  expect(haleyImage.length).toEqual(2);

  const harukaImage = screen.getAllByAltText('Haruka');
  expect(harukaImage.length).toEqual(2);

  const jackieImage = screen.getAllByAltText('Jackie');
  expect(jackieImage.length).toEqual(2);

  const juliaImage = screen.getAllByAltText('Julia');
  expect(juliaImage.length).toEqual(2);

  const kristyImage = screen.getAllByAltText('Kristy');
  expect(kristyImage.length).toEqual(2);

  const marinaImage = screen.getAllByAltText('Marina');
  expect(marinaImage.length).toEqual(2);

  const melanieImage = screen.getAllByAltText('Melanie');
  expect(melanieImage.length).toEqual(2);

  const nikaImage = screen.getAllByAltText('Nika');
  expect(nikaImage.length).toEqual(2);

  const rachelImage = screen.getAllByAltText('Rachel');
  expect(rachelImage.length).toEqual(2);
});
