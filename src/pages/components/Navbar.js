import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../images/gis-logo.png';
import './../styles/Navbar.css';
import NavbarMenu from './Menu';

export default function ButtonAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box 
      sx={{
        position: 'fixed', 
        top: 0,
        width: '100%',
        left: 0, // Add this to ensure it starts from the left edge
        right: 0, // Add this to ensure it extends to the right edge
        zIndex: 1000, 
        backgroundColor: '#5A4067'// color for the navbar
      }}
    >

      <Toolbar
        id="toolbar"
        sx={{ 
          width: '100%',
          margin: 0,
          padding: '0 16px', // Add consistent padding
          minHeight: '64px',
          justifyContent: 'space-between', // Ensures the logo and buttons are spread across the width
          display: 'flex'          
        }}
      >
        {/*margin left basically adds padding btwn buttons */}
        <div style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center' }}>
          <div className="navbar-logo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',marginLeft: '20px'}}>
            <a href="/">
              <img src={logo} aria-label="logo" height="50px" data-testid="App-logo" />
            </a>
          </div>
          <div className="navbar-buttons" style={{ display: 'flex', alignItems: 'center', flexGrow: 1,justifyContent: 'center' }}>

            <Button
              onClick={() => {
                window.location.href = '#Hero';
              }}
              sx={{
                textTransform: 'none',
                mx: 4,
                fontSize: '1.2rem',
                backgroundColor: 'transparent',
                color: 'lightgrey',
                fontWeight: 700,
                zIndex: 2,
                '&:hover': {
                  color: 'white'
                }
              }}>
              Home
            </Button>
            <Button
              onClick={() => {
                window.location.href = '#About';
              }}
              sx={{
                textTransform: 'none',
                mx: 4,
                fontSize: '1.2rem',
                backgroundColor: 'transparent',
                color: 'lightgrey',
                fontWeight: 700,
                zIndex: 2,
                '&:hover': {
                  color: 'white'
                }
              }}>
              About
            </Button>
            <Button
              onClick={() => {
                window.location.href = '#Agenda';
              }}
              sx={{
                textTransform: 'none',
                mx: 4,
                fontSize: '1.2rem',
                backgroundColor: 'transparent',
                color: 'lightgrey',
                fontWeight: 700,
                zIndex: 2,
                '&:hover': {
                  color: 'white'
                }
              }}>
              Agenda
            </Button>
            <Button
              onClick={() => {
                window.location.href = '#Sponsors';
              }}
              sx={{
                textTransform: 'none',
                mx: 4,
                fontSize: '1.2rem',
                backgroundColor: 'transparent',
                color: 'lightgrey',
                fontWeight: 700,
                zIndex: 2,
                '&:hover': {
                  color: 'white'
                }
              }}>
              Sponsors
            </Button>
            <Button
              onClick={() => {
                window.location.href = '#FAQ';
              }}
              sx={{
                textTransform: 'none',
                mx: 4,
                fontSize: '1.2rem',
                backgroundColor: 'transparent',
                color: 'lightgrey',
                fontWeight: 700,
                zIndex: 2,
                '&:hover': {
                  color: 'white'
                }
              }}>
              FAQ
            </Button>
          </div>
          <IconButton
            id="menu-button"
            onClick={handleClick}
            size="large"
            color="primary"
            sx={{ mr: 2 }}>
            <MenuIcon color="secondary" />
          </IconButton>
          <NavbarMenu
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            isOpen={open}
            handleClose={handleClose}
            anchorEl={anchorEl}
            aria-label="menu"
          />
        </div>
      </Toolbar>
    </Box>
  );
}
