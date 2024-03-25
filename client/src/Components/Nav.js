import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import  Typography  from '@mui/material/Typography';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import logo from './utils/Logo.png'; 
import './utils/Nav.css'; 
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Nav = () => {
  return (
    <AppBar position="static" style={{borderRadius:'2%', marginBottom: '20px',  backgroundColor: '#212121'}} >
      <Toolbar style={{  borderRadius: '2%' }}>
        <Grid container justifyContent="space-between" alignItems="center">
          {/* Left section containing logo and website title */}
          <Grid item>
            <Grid container alignItems="center" spacing={2}>
              <Grid item>
                <img src={logo} alt="Logo" className="logo" />
              </Grid>
              <Grid item>
              <Button variant="contained" style={{  color: 'white', marginLeft: '10px' ,  marginBottom:'6px', backgroundColor:'black' }}>Home</Button>
                <Button variant="contained" style={{   color: 'white', marginLeft: '10px',  marginBottom:'6px',  backgroundColor:'black'  }}>Menu</Button>
                <Button variant="contained" style={{ color: 'white', marginLeft: '10px', marginBottom:'6px',  backgroundColor:'black' }}>Contact</Button>
              </Grid>
            </Grid>
          </Grid>
      
        </Grid>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          style={{ padding: 0 }} // Removes default padding
        >
          <Typography>
          <MenuIcon style={{ fontSize: 40 }} />
          </Typography>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
