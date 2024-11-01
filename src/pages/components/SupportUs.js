/* eslint-disable react/no-unescaped-entities */
import './../styles/SupportUs.css';
import { Grid, Typography } from '@mui/material';
// import notion from "./../images/logo-notion.png";

export default function SupportUs() {
  return (
    <div id="Support">
      <Grid container spacing={2} className="SupportUsContainer">
        <Grid item sm={12} md={6}>
          <div>
            <div className="SupportSectionContainer">
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 'bold'
                }}>
                THANK YOU SO MUCH TO OUR SPONSORS!
              </Typography>
            </div>
            <div className="SponsorLogos">
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 'bold'
                }}>
                LOGS HERE
              </Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
