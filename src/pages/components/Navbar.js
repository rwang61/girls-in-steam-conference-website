import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../images/gis-logo.png';

export default function ButtonAppBar() {
    return (
        <Box color="primary" sx={{ flexGrow: 1, paddingLeft: "60px", paddingRight: "60px" }}>
            <Toolbar color="primary" sx={{ display: "flex", justifyContent: "space-between" }}>
                <img src={logo} aria-label="logo" height="50px" data-testid="App-logo" />
                {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button> */}
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