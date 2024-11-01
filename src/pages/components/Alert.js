import './../styles/Alert.css';
import React from 'react';
import { Alert, Collapse } from '@mui/material';

export default function GISAlert({ rounded, children }) {
  const [open, setOpen] = React.useState(true);

  return (
    <div className="GISAlert">
      <Collapse in={open}>
        <Alert
          className="Alert"
          color="giscolor"
          severity="info"
          variant="filled"
          square={!rounded}
          onClose={() => {
            setOpen(false);
          }}>
          {children}
        </Alert>
      </Collapse>
    </div>
  );
}
