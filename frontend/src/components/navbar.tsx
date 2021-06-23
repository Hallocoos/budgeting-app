import React from 'react';
import { Button, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from 'react-router-dom';

interface NavbarProps {
  title: string;
}

function Navbar(props: NavbarProps) {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null); //shouln't be doing this
  const history = useHistory();
  // const toLogin = () => history.push('/login');
  // const toRegister = () => history.push('/register');
  const menuItems = [
    {
      title: 'About',
      goToRoute: () => history.push('/about')
    },
    {
      title: 'My Profile',
      goToRoute: () => history.push('/profile')
    }
  ];


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
        {menuItems.map(item => (
          <MenuItem onClick={()=>{handleClose();item.goToRoute();}} key={item.title}>
            {item.title}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default Navbar;