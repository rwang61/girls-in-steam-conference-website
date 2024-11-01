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
    <Box color="primary" sx={{ flexGrow: 1 }}>
      <Toolbar
        id="toolbar"
        color="primary"
        sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="navbar-logo" style={{ display: 'flex', alignItems: 'center' }}>
          <a href="/">
            <img
              src={logo}
              aria-label="logo"
              height="30px"
              data-testid="App-logo"
              style={{ marginRight: '8px' }} // Optional: spacing after logo
            />
          </a>
        </div>
        <div className="navbar-buttons" style={{ display: 'flex', alignItems: 'center' }}>
          <Button
            onClick={() => {
              window.location.href = '#About';
            }}
            sx={{ textTransform: 'none', fontWeight: 700 }}
            color="secondary">
            About Us
          </Button>
          <Button
            onClick={() => {
              window.location.href = '#Values';
            }}
            sx={{ textTransform: 'none', fontWeight: 700 }}
            color="secondary">
            Our Values
          </Button>
          <Button
            onClick={() => {
              window.location.href = '#FAQ';
            }}
            sx={{ textTransform: 'none', fontWeight: 700 }}
            color="secondary">
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
      </Toolbar>
    </Box>
  );
}
