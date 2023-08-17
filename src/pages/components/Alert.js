import './../styles/Alert.css';
import React from 'react';
import { Alert, Collapse } from '@mui/material';

export default function GISAlert() {
    let applicationDate = "April 1st";
    const [open, setOpen] = React.useState(true);

    return (
        <div className='GISAlert'>
            <Collapse in={open}>
                <Alert className='alert' color="giscolor" severity='info' variant='filled' onClose={() => {setOpen(false)}}>Want to join the team? <a href="https://www.google.com" target="_blank" rel="noreferrer">Apply before {applicationDate}!</a></Alert>
            </Collapse>
        </div>
    );
}