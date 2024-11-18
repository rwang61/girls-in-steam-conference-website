import { PiCalendarDotsFill } from 'react-icons/pi';
import { TiLocation } from 'react-icons/ti';
import { Box, Button } from '@mui/material';
import { FaGear } from 'react-icons/fa6';
import './../styles/Hero.css';

export default function Hero() {
  return (
    <div id="Hero">
      <FaGear
        style={{
          position: 'absolute',
          top: '20px',
          left: '-110px',
          fontSize: '250px',
          zIndex: 1,
          color: '#A36CBE',
          opacity: 0.2
        }}
      />
      <div className="info-column">
        <h2 className="gisConference">
          GIS Conference 2025 <br />
        </h2>
        <h1 className="blurb">Designing for Sustainable &</h1>
        <h1 className="blurb">Equitable Access</h1>

        <div className="description-container" style={{ display: 'flex', alignItems: 'center' }}>
          <PiCalendarDotsFill style={{ marginRight: '8px', verticalAlign: 'middle' }} />
          <h4 className="description">March 29th, 2025</h4>
        </div>

        <div
          className="description-container"
          style={{ display: 'flex', alignItems: 'flex-start' }}>
          <TiLocation style={{ marginRight: '8px', fontSize: '45px' }} />
          <h4 className="description" style={{ lineHeight: '1.8' }}>
            The University of British Columbia
          </h4>
        </div>

        <Box className="hero-buttons" sx={{ display: 'flex', gap: 2 }}>
          <Button
            onClick={() => {
              console.log('Button clicked');
              window.open('https://linktr.ee/girlsinsteamorg');
            }}
            sx={{
              width: 180,
              height: 50,
              backgroundColor: '#7D5390',
              color: 'white',
              borderRadius: 4,
              fontFamily: 'Josefin Sans',
              fontSize: 18,
              fontWeight: 700,
              marginTop: 2,
              boxShadow: '0 0 10px white',
              zIndex: 2,
              '&:hover': {
                boxShadow: '0 0 15px white'
              }
            }}
            variant="contained">
            Notify Me
          </Button>
          <Button
            onClick={() => {
              window.open('https://linktr.ee/girlsinsteamorg');
            }}
            sx={{
              width: 180,
              height: 50,
              backgroundColor: 'rgb(125, 83, 144, 0.4)',
              color: 'white',
              borderRadius: 4,
              fontFamily: 'Josefin Sans',
              fontSize: 18,
              fontWeight: 700,
              marginTop: 2,
              boxShadow: '0 0 10px white',
              zIndex: 2,
              '&:hover': {
                boxShadow: '0 0 15px white'
              }
            }}
            variant="contained">
            Support GIS
          </Button>
        </Box>
      </div>
    </div>
  );
}
