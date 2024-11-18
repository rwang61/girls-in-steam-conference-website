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
  const [activeTab, setActiveTab] = React.useState('Home'); // Track the active tab
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
        width: '100%',
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: '#5f4e95',
        marginBottom: '10px' // Adds a small gap between navbar and content below
      }}>
      <Toolbar
        id="toolbar"
        sx={{
          width: '100%',
          margin: 0,
          padding: '0 16px', // Add consistent padding
          minHeight: '50px',
          justifyContent: 'space-between',
          display: 'flex',
          alignItems: 'center'
        }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'space-between' // Ensures even spacing of items
          }}>
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
          <div
            className="navbar-buttons"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-evenly', // Evenly spaces the navigation links and the button
              flexGrow: 1 // Makes the navbar buttons take up remaining space
            }}>
            {['Home', 'About', 'Agenda', 'Sponsors', 'FAQ'].map((tab) => (
              <Button
                key={tab}
                onClick={() => handleTabChange(tab === 'Home' ? 'Hero' : tab)} // For Home, navigate to #Hero
                sx={{
                  textTransform: 'none',
                  mx: 2, // Less horizontal margin for better spacing
                  fontSize: '1.2rem',
                  backgroundColor: 'transparent',
                  color: activeTab === tab ? 'white' : 'lightgrey', // Active tab is white
                  fontWeight: 700,
                  zIndex: 2,
                  '&:hover': {
                    color: 'white',
                    textDecoration: 'underline' // Underline on hover
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
                width: 'auto',
                height: '40px', // Adjusted button height for better alignment
                padding: '0 15px', // Added horizontal padding for the button
                backgroundColor: '#7D5390',
                color: 'white',
                borderRadius: 4,
                fontFamily: 'Josefin Sans',
                fontSize: 14, // Slightly reduced font size
                fontWeight: 700,
                '&:hover': {
                  boxShadow: '0 0 15px white'
                }
              }}
              variant="contained">
              Notify Me
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
