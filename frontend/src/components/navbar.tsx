import React from 'react';
import { Button, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

function Navbar(props: any) {
  // TODO: props: pass menuItems based on logged in status of user
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <div>
      {props.title}
      <Button aria-controls="nav-menu" aria-haspopup="true" onClick={handleOpen}>
        <MenuIcon />
      </Button>
      <Menu
        id="nav-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>About</MenuItem>
      </Menu>
    </div>
  );
}

export default Navbar;