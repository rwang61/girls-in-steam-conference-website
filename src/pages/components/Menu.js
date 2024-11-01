import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function NavbarMenu({ isOpen, handleClose, anchorEl }) {
  return (
    <div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'menu-button'
        }}>
        <MenuItem>
          <Button
            onClick={() => {
              window.location.href = '#About';
              handleClose();
            }}
            color="secondary"
            sx={{ textTransform: 'none', fontWeight: 700 }}>
            About Us
          </Button>
        </MenuItem>
        <MenuItem>
          <Button
            onClick={() => {
              window.location.href = '#Values';
              handleClose();
            }}
            color="secondary"
            sx={{ textTransform: 'none', fontWeight: 700 }}>
            Our Values
          </Button>
        </MenuItem>
      </Menu>
    </div>
  );
}
