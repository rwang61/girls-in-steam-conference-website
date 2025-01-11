import { PiCalendarDotsFill } from 'react-icons/pi';
import { TiLocation } from 'react-icons/ti';
import { Box, Button } from '@mui/material';
import { FaGear } from 'react-icons/fa6';
import { ImPlus } from 'react-icons/im';
import { MdScience } from 'react-icons/md';
import { PiLineVerticalBold } from 'react-icons/pi';
import { BiSolidRectangle } from 'react-icons/bi';
import { FaMousePointer } from 'react-icons/fa';
import './../styles/Hero.css';
import mascot from '../images/mascot.png';

export default function Hero() {
  return (
    <div id="Hero">
      <div style={{ position: 'relative', width: '80%', height: '50vh', left: '-200px' }}>
        {/* Horizontal Line */}
        <PiLineVerticalBold
          style={{
            position: 'absolute',
            top: '-50px',
            left: '0px',
            fontSize: '60px',
            opacity: 0.5,
            transform: 'rotate(90deg) scaleY(12)' // Rotate 90 degrees and scale horizontally
          }}
        />

        {/* Vertical Lines */}
        <PiLineVerticalBold
          style={{
            position: 'absolute',
            top: '30px',
            left: '10px',
            fontSize: '60px',
            opacity: 0.5,
            transform: 'scaleY(8)'
          }}
        />

        <PiLineVerticalBold
          style={{
            // flask line
            position: 'absolute',
            top: '30px',
            left: '50px',
            fontSize: '60px',
            opacity: 0.5,
            transform: 'scaleY(6)'
          }}
        />

        <PiLineVerticalBold
          style={{
            position: 'absolute',
            top: '-10px',
            left: '100px',
            fontSize: '60px',
            opacity: 0.5,
            transform: 'scaleY(3)'
          }}
        />

        {/* Flask Icon */}
        <MdScience
          style={{
            position: 'absolute',
            top: '200px',
            left: '50px',
            fontSize: '60px',
            color: '#ABA0CE',
            transform: 'rotate(-20deg)',
            filter: 'drop-shadow(0 0 10px white)'
          }}
        />

        {/* Large Gear Icon */}
        <FaGear
          style={{
            position: 'absolute',
            top: '120px',
            left: '180px',
            fontSize: '90px',
            zIndex: 1,
            color: '#ABA0CE',
            filter: 'drop-shadow(0 0 10px white)' // Apply a white glow effect using filter
          }}
        />

        {/* Smaller Gear Icon */}
        <FaGear
          style={{
            position: 'absolute',
            top: '40px',
            left: '100px',
            fontSize: '60px',
            zIndex: 1,
            color: '#ABA0CE',
            filter: 'drop-shadow(0 0 10px white)'
          }}
        />

        {/* Plus Icon */}
        <ImPlus
          style={{
            position: 'absolute',
            left: '200px',
            color: '#9D90C5',
            fontSize: '50px',
            strokeWidth: '1px',
            filter: 'drop-shadow(0 0 20px white)',
            transform: 'rotate(20deg)'
          }}
        />
        <BiSolidRectangle
          style={{
            position: 'absolute',
            top: '335px',
            left: '-20px',
            fontSize: '60px',
            color: '#5A4067',
            transform: 'rotate(90deg) scaleX(4) scaleY(6)',
            filter: 'blur(1px)', // Apply blur effect
            borderRadius: '0', // Ensure no rounded edges
            boxShadow: 'none' // Ensure no shadow or blur effect other than the intentional one
          }}
        />
        <BiSolidRectangle
          style={{
            position: 'absolute',
            top: '363px',
            left: '100px',
            fontSize: '60px',
            color: '#B0A8D8',
            transform: 'rotate(90deg) scaleX(3) scaleY(4)',
            filter: 'blur(1px)', // Apply blur effect
            borderRadius: '0', // Ensure no rounded edges
            boxShadow: 'none' // Ensure no shadow or blur effect other than the intentional one
          }}
        />
        <FaMousePointer
          style={{
            position: 'absolute',
            top: '310px',
            left: '220px',
            fontSize: '80px',
            color: '#6363AB',
            transform: 'rotate(75deg)',
            filter: 'drop-shadow(0 0 20px white)'
          }}
        />
      </div>

      <div className="info-column">
        <h2 className="gisConference">
          GIS Conference 2025 <br />
        </h2>
        <div className="innovate-her-container">
          <h1 className="innovate">Innovate</h1>
          <h1 className="her">HER</h1>
        </div>

        <div className="description-container" style={{ display: 'flex', alignItems: 'center' }}>
          <PiCalendarDotsFill
            style={{ marginRight: '8px', verticalAlign: 'middle', color: '#6363AB' }}
          />
          <h4 className="description">March 29th, 2025</h4>
        </div>

        <div className="description-container" style={{ display: 'flex', alignItems: 'center' }}>
          <TiLocation style={{ marginRight: '8px', verticalAlign: 'middle', color: '#6363AB' }} />
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
              backgroundColor: '#6363AB',
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
            Sponsor GIS
          </Button>
        </Box>
      </div>

      <div className="image-container">
        <img src={mascot} alt="mascot" className="mascot-image" />
        <BiSolidRectangle
          style={{
            position: 'absolute',
            top: '170%',
            right: '70px',
            fontSize: '60px',
            background: 'linear-gradient(to right, rgba(99, 99, 171, 1), rgba(99, 99, 171, 0))', // Linear gradient with opacity
            color: 'transparent', // Make text color transparent so the gradient shows through
            transform: 'rotate(90deg) scaleX(5) scaleY(4)'
          }}
        />
        <PiLineVerticalBold
          style={{
            // flask line
            position: 'absolute',
            top: '-40px',
            right: '-210px',
            fontSize: '60px',
            opacity: 0.5,
            transform: 'scaleY(3) scaleX(2)'
          }}
        />
        <MdScience
          style={{
            position: 'absolute',
            top: '-20px',
            right: '-130px',
            fontSize: '90px',
            color: '#A795D6',
            transform: 'rotate(20deg)',
            filter: 'drop-shadow(0 0 10px white)'
          }}
        />
        {/* Big Gear Icon */}
        <FaGear
          style={{
            position: 'absolute',
            top: '55px',
            right: '-235px',
            fontSize: '110px',
            zIndex: 1,
            color: '#A795D6',
            filter: 'drop-shadow(0 0 10px white)'
          }}
        />

        {/* Plus Icon */}
        <ImPlus
          style={{
            position: 'absolute',
            top: '100px',
            right: '-40px',
            color: '#A795D6',
            fontSize: '30px',
            strokeWidth: '1px',
            filter: 'drop-shadow(0 0 10px white)',
            transform: 'rotate(20deg)'
          }}
        />

        <BiSolidRectangle
          style={{
            position: 'absolute',
            top: '185%',
            right: '-220px',
            fontSize: '60px',
            color: '#5A4067',
            transform: 'rotate(90deg) scaleX(5) scaleY(3)',
            filter: 'blur(1px)', // Apply blur effect
            borderRadius: '0', // Ensure no rounded edges
            boxShadow: 'none' // Ensure no shadow or blur effect other than the intentional one
          }}
        />
      </div>
    </div>
  );
}
