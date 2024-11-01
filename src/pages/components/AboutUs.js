import { Grid, Typography } from '@mui/material';
import booth from './../images/booth.jpg';
import './../styles/AboutUs.css';
import './../../fonts/JosefinSans-VariableFont_wght.ttf';
import './../../fonts/Rastano.ttf';
// format
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
              Information About Conference Goes Here
            </Typography>
            <Typography
              variant="h6"
              sx={{
                textAlign: 'left',
                color: '#ffffff',
                fontWeight: 'medium',
                marginBottom: '70px'
              }}>
              Information About Conference Goes Here
            </Typography>
          </div>
        </Grid>
        <Grid item sm={12} md={6}>
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
                  marginTop: '15px'
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
