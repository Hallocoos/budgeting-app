import React from 'react';
import { Menu, MenuItem, Toolbar, AppBar, IconButton, Typography } from '@material-ui/core';
import AccountCircle  from '@material-ui/icons/AccountCircle';
import { useHistory } from 'react-router-dom';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

interface NavbarProps {
  title: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1
    },
  }),
);

function Navbar(props: NavbarProps) {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null); //shouln't be doing this
  const history = useHistory();
  // const toLogin = () => history.push('/login');
  // const toRegister = () => history.push('/register');
  const menuItems = [
    {
      title: 'About',
      goToRoute: () => history.push('/about'),
      display: true
    },
    {
      title: 'My Profile',
      goToRoute: () => history.push('/profile'),
      // display: props.token
    },
    {
      title: 'Log out',
      goToRoute: () => history.push('/logout'),
      display: true
    }
  ];

  const classes = useStyles();

  const handleOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="primary">
        <Toolbar variant="dense">
          <Typography variant="h6" className={classes.title}>{props.title}</Typography>
          <div>
            <IconButton edge="end" aria-controls="nav-menu" aria-haspopup="true" onClick={handleOpen}>
              <AccountCircle />
            </IconButton>
          </div>
          <Menu
            id="nav-menu"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {menuItems.map(item => (
              <MenuItem onClick={()=>{handleClose();item.goToRoute();}} key={item.title}>
                {item.title}
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;