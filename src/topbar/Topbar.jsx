import * as React from 'react';
import "./topbar.css";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

export default function Topbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="top">
        <div>
            <img
            className="logo"
            src="https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/fd/fd/de/fdfdde74-c393-d6ea-bbf4-9d5b52673f34/AppIcon-1x_U007emarketing-0-6-0-85-220.png/230x0w.webp" alt="" />
        </div>
        <div> 
            <text className="name"> Medifinder</text>
            <hr
        style={{
          background: 'lime',
          color: 'lime',
          borderColor: 'lime',
          height: '3px',
          width: '1410px'
        }}
      />
        </div>
        
        <div className="topIcon">
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <text className="acc">Account</text>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link className="link" to="/CusLogin">Customer</Link>
          </MenuItem>
        <MenuItem onClick={handleClose}>
        <Link className="link" to="/PharmLogin">Pharmacy</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
      </div>
      
  );
};
