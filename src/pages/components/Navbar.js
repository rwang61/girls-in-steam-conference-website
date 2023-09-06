import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../images/gis-logo.png';
import "./../styles/Navbar.css";

export default function ButtonAppBar() {
    return (
        <Box color="primary" sx={{ flexGrow: 1, paddingLeft: "60px", paddingRight: "60px" }}>
            <Toolbar color="primary" sx={{ display: "flex", justifyContent: "space-between" }}>
                <div className='navbar-logo' style={{ flexGrow: 1, display: "flex" }} >
                    <img src={logo} aria-label="logo" height="50px" data-testid="App-logo" style={{ justifyContent: "left" }} />
                </div>
                <div className='navbar-buttons'>
                    <Button color="secondary" sx={{ textTransform: "none", fontWeight: 700 }}>About Us</Button>
                    <Button color="secondary" sx={{ textTransform: "none", fontWeight: 700 }}>Our Values</Button>
                    {/* <Button color="secondary" sx={{ textTransform: "none", fontWeight: 700 }}>Events</Button> */}
                    {/* <Button color="secondary" sx={{ textTransform: "none", fontWeight: 700 }}>Get Involved</Button> */}
                    {/* <Button color="secondary" sx={{ textTransform: "none", fontWeight: 700 }}>Support Us</Button> */}
                    {/* <Button color="secondary" sx={{ textTransform: "none", fontWeight: 700 }}>FAQ</Button> */}
                </div>
                <IconButton
                    size="large"
                    color="primary"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon color="primary" />
                </IconButton>
            </Toolbar>
        </Box >
    );
}