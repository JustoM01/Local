import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
// import MenuIcon from '@mui/icons-material/Menu';

import './utils/Nav.css'






const Nav = () => {



  return (


    <AppBar style={{backgroundColor:'gold', borderRadius:'2%'}} position="static">
    <Toolbar style={{color:'black'}} >
 
          
      <Typography variant="h6">My Website</Typography>
      <Button>Open drawer</Button>
      <Drawer>
     
      </Drawer>
      <Button className='button'>Open drawer</Button>
      <Button className='button' >Open drawer</Button>
      <Button className='button' >Open drawer</Button>
    </Toolbar>
  
  </AppBar>
  )
}

export default Nav