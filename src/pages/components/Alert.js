import './../styles/Alert.css';
import React from 'react';
import { Alert, Collapse, ThemeProvider, createTheme } from '@mui/material';
import josefinSans from './../../fonts/JosefinSans-VariableFont_wght.ttf';

const colorTheme = createTheme({
    palette: {
      giscolor: {
        main: '#6363AB;',
        contrastText: '#ffffff',
      },
    },
    typography: {
        "fontFamily": [josefinSans],
        "fontSize": 16,
    }
});

export default function GISAlert() {
    let applicationDate = "April 1st";
    const [open, setOpen] = React.useState(true);

    return (
        <div className='GISAlert'>
            <Collapse in={open}>
                <ThemeProvider theme={colorTheme}>
                    <Alert className='alert' color="giscolor" severity='info' variant='filled' onClose={() => {setOpen(false)}}>Want to join the team? <a href="https://www.google.com" target="_blank" rel="noreferrer">Apply before {applicationDate}!</a></Alert>
                </ThemeProvider>
            </Collapse>
        </div>
    );
}