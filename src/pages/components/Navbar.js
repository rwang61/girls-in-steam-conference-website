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
  const [activeTab, setActiveTab] = React.useState('Home');
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    window.location.href = `#${tab}`; // Scrolls to the tab's section
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: '#5f4e95',
        marginBottom: '10px',
        width: '100%', // Make sure it spans the full width
        boxSizing: 'border-box' // Prevents overflow due to padding
      }}>
      <Toolbar
        id="toolbar"
        sx={{
          width: '100%',
          margin: 0,
          padding: '0 16px',
          minHeight: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between', // Ensures logo and buttons are spaced apart
          boxSizing: 'border-box' // Prevent overflow from padding
        }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%' // Makes the content use full width
          }}>
          {/* Logo Section */}
          <div
            className="navbar-logo"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: '20px'
            }}>
            <a href="/">
              <img src={logo} aria-label="logo" height="50px" data-testid="App-logo" />
            </a>
          </div>

          {/* Navbar Buttons */}
          <div
            className="navbar-buttons"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              flexGrow: 1,
              overflow: 'hidden', // Prevent overflow
              paddingLeft: '10px' // Padding to the left to avoid sticking content
            }}>
            {['Home', 'About', 'Agenda', 'Sponsors', 'FAQ'].map((tab) => (
              <Button
                key={tab}
                onClick={() => handleTabChange(tab === 'Home' ? 'Hero' : tab)}
                sx={{
                  textTransform: 'none',
                  mx: 2, // Less horizontal margin for better spacing
                  fontSize: '1.2rem',
                  backgroundColor: 'transparent',
                  color: activeTab === tab ? 'white' : 'lightgrey',
                  fontWeight: 700,
                  zIndex: 2,
                  '&:hover': {
                    color: 'white',
                    textDecoration: 'underline'
                  }
                }}>
                {tab}
              </Button>
            ))}
            {/* Notify Me Button */}
            <Button
              onClick={() => {
                console.log('Button clicked');
                window.open('https://linktr.ee/girlsinsteamorg');
              }}
              sx={{
                height: '40px', // Adjusted button height for better alignment
                padding: '0 15px',
                backgroundColor: '#7D5390',
                color: 'white',
                borderRadius: 4,
                fontFamily: 'Josefin Sans',
                fontSize: 14,
                fontWeight: 700,
                boxShadow: '0 0 10px white',
                '&:hover': {
                  boxShadow: '0 0 15px white'
                }
              }}
              variant="contained">
              Notify Me
            </Button>
          </div>

          {/* Menu Icon */}
          <IconButton
            id="menu-button"
            onClick={handleClick}
            size="large"
            color="primary"
            sx={{
              mr: 2,
              display: { xs: 'block', md: 'none' } // Hide the menu icon on larger screens
            }}>
            <MenuIcon color="secondary" />
          </IconButton>

          {/* Mobile Navbar Menu */}
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
