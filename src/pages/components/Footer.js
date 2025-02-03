import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import './../styles/Footer.css';
import whiteLogo from './../images/white-gis-logo.png';
import instagramIcon from './../images/instagram-icon.svg';
import facebookIcon from './../images/facebook-icon.svg';
import youtubeIcon from './../images/youtube-icon.svg';
import linkedinIcon from './../images/linkedin-icon.svg';
import './../../fonts/JosefinSans-VariableFont_wght.ttf';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#5A4067', // Updated background color
        p: 6 // padding (p) is shorthand for padding in all directions
      }}>
      <Container maxWidth="lg">
        <Grid container spacing={3} textAlign="left" style={{ marginBottom: '30px' }}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" fontWeight={700}>
              Contact Us
            </Typography>
            <Typography variant="body2" style={{ maxWidth: '400px', color: 'white' }}>
              💌 Email us at&nbsp;
              <Link
                href="mailto:ubc.conference@girlsinsteam.org"
                style={{ color: 'white' }} // Ensures the email link is white
              >
                ubc.conference@girlsinsteam.org
              </Link>
              &nbsp;if you have any questions
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} style={{ textAlign: 'right' }}>
            <Typography variant="h6" fontWeight={700}>
              SEE WHAT WE&apos;RE UP TO!
            </Typography>
            <Grid container spacing={2} justifyContent="flex-end">
              <Grid item>
                <Link href="https://www.instagram.com" target="_blank">
                  <img
                    src={instagramIcon}
                    alt="Instagram"
                    style={{ width: '40px', height: '40px' }}
                  />
                </Link>
              </Grid>
              <Grid item>
                <Link href="https://www.facebook.com" target="_blank">
                  <img
                    src={facebookIcon}
                    alt="Facebook"
                    style={{ width: '40px', height: '40px' }}
                  />
                </Link>
              </Grid>
              <Grid item>
                <Link href="https://www.youtube.com" target="_blank">
                  <img src={youtubeIcon} alt="YouTube" style={{ width: '40px', height: '40px' }} />
                </Link>
              </Grid>
              <Grid item>
                <Link href="https://www.linkedin.com" target="_blank">
                  <img
                    src={linkedinIcon}
                    alt="LinkedIn"
                    style={{ width: '40px', height: '40px' }}
                  />
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg">
        <Grid container spacing={1} textAlign="left">
          <Grid item xs={12} sm={2} textAlign="justified" style={{ paddingRight: '10px' }}>
            <img
              src={whiteLogo}
              alt="White Girls in STEAM logo"
              style={{ width: '80%', maxWidth: '100px', height: 'auto' }}
            />
          </Grid>
          <Grid item xs={12} sm={6} textAlign="left" style={{ paddingRight: '50px' }}>
            <Typography variant="h4" fontWeight={700} style={{ color: 'white' }}>
              girls in STEAM
            </Typography>
            <Typography variant="body2" style={{ maxWidth: '400px', color: 'white' }}>
              Supporting access to STEAM education for girls, gender-diverse students, and the
              LGBTQ+ community.
            </Typography>
            <Typography variant="body2" style={{ marginTop: '30px', color: 'white' }}>
              {'© '}
              {new Date().getFullYear()}
              {' by Girls in STEAM'}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography variant="h6" fontWeight={700} fontSize="1rem" style={{ color: 'white' }}>
              QUICK LINKS
            </Typography>
            <Link
              href="#App"
              variant="subtitle1"
              style={{ color: 'white', textDecoration: 'none' }}>
              Home
            </Link>
            <br />
            <Link
              href="#About"
              variant="subtitle1"
              style={{ color: 'white', textDecoration: 'none' }}>
              About Us
            </Link>
            <br />
            <Link
              href="#Values"
              variant="subtitle1"
              style={{ color: 'white', textDecoration: 'none' }}>
              Our Values
            </Link>
            <br />
            <Link href="/" variant="subtitle1" style={{ color: 'white', textDecoration: 'none' }}>
              Events
            </Link>
            <br />
            <Link href="/" variant="subtitle1" style={{ color: 'white', textDecoration: 'none' }}>
              Resources
            </Link>
            <br />
            <Link href="/" variant="subtitle1" style={{ color: 'white', textDecoration: 'none' }}>
              Newsletter
            </Link>
            <br />
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography variant="h6" fontWeight={700} fontSize="1rem" style={{ color: 'white' }}>
              SUPPORT
            </Typography>
            <Link
              href="#FAQ"
              variant="subtitle1"
              style={{ color: 'white', textDecoration: 'none' }}>
              Donate
            </Link>
            <br />
            <Link href="/" variant="subtitle1" style={{ color: 'white', textDecoration: 'none' }}>
              Become a Sponsor
            </Link>
            <br />
            <Link href="/" variant="subtitle1" style={{ color: 'white', textDecoration: 'none' }}>
              FAQ
            </Link>
            <br />
            <Link href="/" variant="subtitle1" style={{ color: 'white', textDecoration: 'none' }}>
              Join GIS
            </Link>
            <br />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
