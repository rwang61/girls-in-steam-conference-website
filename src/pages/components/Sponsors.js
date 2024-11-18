import './../styles/SupportUs.css';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import SponsorLogoPlaceHolder from '../images/SponsorLogoPlaceHolder.png';

export default function Sponsors() {
  return (
    <div id="Support">
      <Grid container spacing={2} className="SupportUsContainer">
        <Grid item sm={10} md={35} className="CenteredGridItem">
          <div className="SupportSectionContainer">
            <h1 className="blurb">THANK YOU SO MUCH TO OUR SPONSORS</h1>
            <Box
              sx={{
                width: 800, // Adjusted for a better size
                height: 400, // Adjusted for a better size
                borderRadius: 2,
                marginTop: 5,
                bgcolor: '#D9D9D9',
                boxShadow: '0 0 15px 5px rgba(255,255,255, 0.6)',
                position: 'relative' // Position relative to contain the image
              }}>
              <img
                src={SponsorLogoPlaceHolder}
                alt="Sponsor Logo"
                style={{
                  position: 'absolute', // Position the image absolutely
                  top: '40%', // Center vertically
                  left: '70%', // Center horizontally
                  transform: 'translate(-50%, -50%)', // Offset to truly center
                  maxWidth: '30%', // Ensure the image scales well
                  maxHeight: '80%' // Ensure the image stays within bounds
                }}
              />

              <img
                src={SponsorLogoPlaceHolder}
                alt="Sponsor Logo"
                style={{
                  position: 'absolute', // Position the image absolutely
                  top: '70%', // Center vertically
                  left: '80%', // Center horizontally
                  transform: 'translate(-50%, -50%)', // Offset to truly center
                  maxWidth: '40%', // Ensure the image scales well
                  maxHeight: '80%' // Ensure the image stays within bounds
                }}
              />

              <img
                src={SponsorLogoPlaceHolder}
                alt="Sponsor Logo"
                style={{
                  position: 'absolute', // Position the image absolutely
                  top: '10px', // Distance from the top of the Box
                  left: '80px', // Distance from the left of the Box
                  maxWidth: '50%', // Adjust size as needed
                  maxHeight: '80%' // Adjust size as needed
                }}
              />
              <img
                src={SponsorLogoPlaceHolder}
                alt="Sponsor Logo"
                style={{
                  position: 'absolute', // Position the image absolutely
                  bottom: '60px', // Distance from the top of the Box
                  left: '200px', // Distance from the left of the Box
                  maxWidth: '30%', // Adjust size as needed
                  maxHeight: '80%' // Adjust size as needed
                }}
              />
            </Box>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
