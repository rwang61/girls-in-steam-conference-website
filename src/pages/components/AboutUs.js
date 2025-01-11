import { Grid, Typography } from '@mui/material';
import booth from './../images/booth.jpg';
import './../styles/AboutUs.css';
import './../../fonts/JosefinSans-VariableFont_wght.ttf';
import './../../fonts/Rastano.ttf';
import { FaGear } from 'react-icons/fa6';
import robotMascot from '../images/robot-mascot.png';

export default function AboutUs() {
  return (
    <div id="About">
      {/* Grid Layout */}
      <Grid container spacing={2} className="AboutUsContainer">
        {/* Left Section (Text) */}
        <Grid item id="AboutUsDesc" sm={12} md={6} sx={{ position: 'relative' }}>
          {/* Gear Icon inside the left text section */}
          <FaGear
            style={{
              position: 'absolute',
              top: '-5%',
              left: '-20%',
              fontSize: '190px',
              zIndex: 2,
              color: '#ABA0CE', // Use your desired color
              opacity: 0.3,
              transform: 'rotate(20deg)'
            }}
          />

          <Typography
            variant="h4"
            sx={{
              textAlign: 'left',
              color: '#5A4067',
              fontFamily: 'Josefin Sans',
              fontWeight: 'bold'
            }}>
            ABOUT THE CONFERENCE
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: 'left',
              color: '#6363AB',
              fontFamily: 'Josefin Sans',
              fontWeight: 'normal',
              marginBottom: '20px'
            }}>
            At the Girls in STEAM Conference, our mission is to cultivate a dynamic space for high
            school and college students in the Greater Vancouver Area to explore and engage with
            Science, Technology, Engineering, Arts, and Maths (STEAM) alongside principles of
            Accessibility. Our full-day event is dedicated to bridging the gender gap in STEM
            industries by providing immersive workshops, insightful panels, and interactive
            experiences that embrace all dimensions of STEAM, including Art and Accessibility.
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: 'left',
              color: '#6363AB',
              fontWeight: 'medium',
              marginBottom: '70px'
            }}>
            Join us as we embark on a journey of discovery, creativity, and empowerment, paving the
            way for a more diverse and inclusive landscape in STEAM. Together, we can break
            barriers, shatter stereotypes, and forge new pathways toward a brighter, more
            sustainable, and more equitable future for all.
          </Typography>
        </Grid>

        {/* Right Section (Image) */}
        <Grid item sm={12} md={6} style={{ marginTop: '50px', position: 'relative' }}>
          {/* Booth Image */}
          <div className="shadow-rectangle" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            <div className="photo-wrapper">
              <img src={booth} alt="Girls in STEAM Exec team" className="photo" />
              <Typography
                variant="h4"
                sx={{
                  fontFamily: 'Rastano',
                  color: 'black',
                  marginTop: '5px'
                }}>
                Hello from the team ;
              </Typography>
            </div>
          </div>

          {/* Robot Mascot Image placed beside and near bottom with tilt */}
          <img
            src={robotMascot}
            alt="robotMascot"
            className="robotMascot-image"
            style={{
              position: 'absolute',
              bottom: '30px', // Adjust this to place it near the bottom
              right: '-150px', // Adjust this to move it beside the photo
              transform: 'rotate(25deg)', // Tilt the robot image
              maxWidth: '250px', // Limit width
              objectFit: 'cover', // Maintain aspect ratio
              borderRadius: '8px'
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
