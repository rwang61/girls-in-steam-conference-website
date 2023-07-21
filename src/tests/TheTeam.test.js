import { render, screen } from '@testing-library/react';
import TheTeam from '../pages/components/TheTeam';

test('renders The Team section', () => {
    render(<TheTeam />);

    const theTeamBehindGISHeading = screen.getByText('THE TEAM BEHIND GIS');
    expect(theTeamBehindGISHeading).toBeInTheDocument();

    const allisonImage = screen.getByAltText('Allison');
    expect(allisonImage).toBeInTheDocument();

    const arielImage = screen.getByAltText('Ariel');
    expect(arielImage).toBeInTheDocument();

    const britneyImage = screen.getByAltText('Britney');
    expect(britneyImage).toBeInTheDocument();

    const claireImage = screen.getByAltText('Claire');
    expect(claireImage).toBeInTheDocument();

    const cocoImage = screen.getByAltText('Coco');
    expect(cocoImage).toBeInTheDocument();

    const crystalImage = screen.getByAltText('Crystal');
    expect(crystalImage).toBeInTheDocument();

    const donnaImage = screen.getByAltText('Donna');
    expect(donnaImage).toBeInTheDocument();

    const doreenImage = screen.getByAltText('Doreen');
    expect(doreenImage).toBeInTheDocument();

    const haleyImage = screen.getByAltText('Haley');
    expect(haleyImage).toBeInTheDocument();

    const harukaImage = screen.getByAltText('Haruka');
    expect(harukaImage).toBeInTheDocument();

    const jackieImage = screen.getByAltText('Jackie');
    expect(jackieImage).toBeInTheDocument();

    const juliaImage = screen.getByAltText('Julia');
    expect(juliaImage).toBeInTheDocument();

    const kristyImage = screen.getByAltText('Kristy');
    expect(kristyImage).toBeInTheDocument();

    const marinaImage = screen.getByAltText('Marina');
    expect(marinaImage).toBeInTheDocument();

    const melanieImage = screen.getByAltText('Melanie');
    expect(melanieImage).toBeInTheDocument();

    const nikaImage = screen.getByAltText('Nika');
    expect(nikaImage).toBeInTheDocument();

    const rachelImage = screen.getByAltText('Rachel');
    expect(rachelImage).toBeInTheDocument();
});