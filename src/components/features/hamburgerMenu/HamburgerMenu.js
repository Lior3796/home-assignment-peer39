import { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

// @desc HamburgerMenu for mobile devices

export const HamburgerMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div title="hamburgerMenu">
            <Button
                title="menu"
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Menu
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
                <Link to="/home-assignment-peer39/main"><MenuItem onClick={handleClose}>Main</MenuItem></Link>
                <Link to="/home-assignment-peer39/episode/1"> <MenuItem onClick={handleClose}>Episode</MenuItem></Link>
                <Link to="/home-assignment-peer39/character/Walter"> <MenuItem onClick={handleClose}>Character</MenuItem></Link>
            </Menu>
        </div>
    );
}