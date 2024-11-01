import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import './../styles/Footer.css';
import whiteLogo from './../images/white-gis-logo.png';

import './../../fonts/JosefinSans-VariableFont_wght.ttf';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) => theme.palette.primary.dark,
        p: 6
      }}>
      <Container maxWidth="lg">
        <Grid container spacing={1} textAlign="left">
          <Grid item xs={12} sm={2} textAlign="right" style={{ paddingRight: '10px' }}>
            <img
              src={whiteLogo}
              alt="White Girls in STEAM logo"
              style={{ width: '80%', maxWidth: '100px', height: 'auto' }}
            />
          </Grid>
          <Grid item xs={12} sm={6} style={{ paddingRight: '50px' }}>
            <Typography variant="h6" fontWeight={700}>
              girls in STEAM
            </Typography>
            <Typography variant="body2" style={{ maxWidth: '400px' }}>
              Supporting access to STEAM education for girls, gender-diverse students, and the
              LGBTQ+ community.
            </Typography>
            <Typography variant="body2" style={{ marginTop: '30px' }}>
              {'© '}
              {new Date().getFullYear()}
              {' by Girls in STEAM'}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography variant="h6" fontWeight={700} fontSize="1rem">
              QUICK LINKS
            </Typography>
            <Link href="#App" variant="subtitle1">
              Home
            </Link>
            <br />
            <Link href="#About" variant="subtitle1">
              About Us
            </Link>
            <br />
            <Link href="#Values" variant="subtitle1">
              Our Values
            </Link>
            <br />
            {/* <Link href="/" variant="subtitle1">Events</Link><br /> */}
            {/* <Link href="/" variant="subtitle1">Resources</Link><br /> */}
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography variant="h6" fontWeight={700} fontSize="1rem">
              SUPPORT
            </Typography>
            <Link href="#FAQ" variant="subtitle1">
              FAQ
            </Link>
            <br />
            <Link href="mailto:info@girlsinsteam.org" variant="subtitle1">
              Email Us
            </Link>
            <br />
            {/* <Link href="/" variant="subtitle1">Donate</Link><br /> */}
            {/* <Link href="/" variant="subtitle1">Become a Sponsor</Link><br /> */}
            {/* <Link href="/" variant="subtitle1">FAQ</Link><br /> */}
            {/* <Link href="/" variant="subtitle1">Join GIS</Link><br /> */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
