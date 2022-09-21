import * as React from 'react';
import "./pharmHome.css";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

export default function PharmHome() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

    return (
      <div className="pharmHome">
           <div>
           <text className="title">Top 10 Selling Products</text>
           </div>

    <div className="dashboard"> 
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
         <text className="dName">Options</text>
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
        <Link className="link" to="/AddMedicine">Add Medicines</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <Link className="link" to="/MedList">View Medicine List</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <Link className="link" to="/PharmHome">Top 10 Selling Products</Link>
        </MenuItem>
      </Menu>
    </div>
      </div>
    );
  };

  

