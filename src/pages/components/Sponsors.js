import './../styles/SupportUs.css';
import { Grid } from '@mui/material';
import SponsorLogoPlaceHolder from '../images/SponsorLogoPlaceHolder.png';

export default function Sponsors() {
  return (
    <div id="Support">
      <Grid container spacing={2} className="SupportUsContainer">
        <Grid item sm={12} md={10} className="CenteredGridItem">
          <div className="SupportSectionContainer">
            <h1 className="blurb">THANK YOU SO MUCH TO OUR SPONSORS</h1>
            <div className="BoxContainer">
              {/* Replace placeholder logos with actual sponsor logos */}
              <img src={SponsorLogoPlaceHolder} alt="Sponsor Logo" className="SponsorLogo" />
              <img src={SponsorLogoPlaceHolder} alt="Sponsor Logo" className="SponsorLogo" />
              <img src={SponsorLogoPlaceHolder} alt="Sponsor Logo" className="SponsorLogo" />
              <img src={SponsorLogoPlaceHolder} alt="Sponsor Logo" className="SponsorLogo" />
              <img src={SponsorLogoPlaceHolder} alt="Sponsor Logo" className="SponsorLogo" />
              <img src={SponsorLogoPlaceHolder} alt="Sponsor Logo" className="SponsorLogo" />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
