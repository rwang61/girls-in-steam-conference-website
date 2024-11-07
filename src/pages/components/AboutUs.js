import { Grid, Typography } from '@mui/material';
import booth from './../images/booth.jpg';
import './../styles/AboutUs.css';
import './../../fonts/JosefinSans-VariableFont_wght.ttf';
import './../../fonts/Rastano.ttf';

export default function AboutUs() {
  return (
    <div id="About">
      <Grid container spacing={2} className="AboutUsContainer">
        <Grid item id="AboutUsDesc" sm={12} md={6}>
          <div>
            <Typography
              variant="h4"
              className="shadow-text"
              sx={{
                textAlign: 'left',
                color: '#fffff',
                fontFamily: 'Josefin Sans',
                fontWeight: 'bold'
              }}>
              ABOUT THE CONFERENCE
            </Typography>
            <Typography
              variant="h6"
              sx={{
                textAlign: 'left',
                color: '#ffffff',
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
                color: '#ffffff',
                fontWeight: 'medium',
                marginBottom: '70px'
              }}>
              Join us as we embark on a journey of discovery, creativity, and empowerment, paving
              the way for a more diverse and inclusive landscape in STEAM. Together, we can break
              barriers, shatter stereotypes, and forge new pathways toward a brighter, more
              sustainable, and more equitable future for all.
            </Typography>
          </div>
        </Grid>
        <Grid item sm={14} md={6} style={{ marginTop: '50px' }}>
          <div
            className="shadow-rectangle"
            style={{
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
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
        </Grid>
      </Grid>
    </div>
  );
}
