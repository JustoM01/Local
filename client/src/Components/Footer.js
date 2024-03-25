import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from './utils/Logo.png';
import { Button } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <AppBar position="static" style={{ top: 'auto', bottom: 0, marginTop: '20px' , backgroundColor: '#212121' }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Left section containing the logo */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img style={{ height: '300px' }} src={logo} alt="Logo" className="logo" />
          <div style={{ marginLeft: '20px' }}>
            <Typography variant="body2" style={{ fontWeight: 'bold' , fontSize:'30px'}}>CONTACT US</Typography>
            <Typography variant="body2" style={{ fontWeight: 'bold' , fontSize:'20px'}} >EMAIL: info@aqueousvapor.com</Typography>
            <Typography variant="body2" style={{ fontWeight: 'bold' , fontSize:'20px'}} >Follow Us On Facebook</Typography>
            <Button style={{color:'black',  backgroundColor: 'white', marginTop:'7px'}} >Contact Us</Button>
          </div>
        
          <div style={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
          <Typography style={{ fontWeight: 'bold', fontSize: '30px', marginLeft:'30px' }}>Socials</Typography>
          <FacebookIcon style={{ fontSize: 60, marginLeft:'10px' }} />
          <InstagramIcon style={{ fontSize: 60, marginLeft:'10px' }} />
          <LinkedInIcon style={{ fontSize: 60, marginLeft:'10px'}} />
          <TwitterIcon style={{ fontSize: 60, marginLeft:'10px'}}  ></TwitterIcon>
        </div>


        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
          <Typography style={{ fontWeight: 'bold', fontSize: '30px', marginLeft:'90px' }}>Quick Links</Typography>
          <p style={{marginLeft:'15px', fontSize:'15px'}} >About</p>
          <p style={{marginLeft:'15px', fontSize:'15px'}} >Contact Us</p>
          <p style={{marginLeft:'15px', fontSize:'15px'}} >Menu</p>
          <p style={{marginLeft:'15px', fontSize:'15px'}} >Locations</p>
      
        
        </div>

        </div>
        <Typography style={{ position: 'absolute', bottom: '10px', marginLeft:'40%' }}>&copy; 2024 Your Website. All rights reserved.</Typography>
       
       
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
