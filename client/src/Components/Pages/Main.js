import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import Grid from '@mui/material/Grid';

// const hero = require('./utils/Hero.jpg');
const about = require('./utils/About.jpg');

const Main = () => {
  
  return (
    <Container
      className='main'
      maxWidth="100%"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
        background: 'linear-gradient(to bottom, #485563, #29323c)', // Gradient background
        padding: '0',
      }}
    >
      {/* Hero Section */}
      {/* Hero Section */}
      <div style={{ 
        display: 'flex', 
        width: '100%', 
        height: '600px', // Increase the height to 70%
        justifyContent: 'space-between',
        marginBottom: '40px',
     
      }}>
        <Grid container className='hero3' style={{ width: '50%', height: '100%' , backgroundColor:'#f0f0f0'}}>
          <Grid item xs={12} style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center', 
            padding: '20px',
          }}>
            <Typography color="black" variant="h2" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', fontFamily: 'Georgia, serif', 
          fontWeight: 'bold',  }}>
              Best Quality Vapes & E-juices
            </Typography>
            <Typography color="black" variant="h4" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
              Explore our extensive collection of premium vapes, e-juices, and accessories.
            </Typography>
            <Button 
              style={{ 
                backgroundColor: 'black', 
                color: 'white', 
                marginTop: '20px', 
                fontFamily: 'Arial, sans-serif', 
                transition: 'background-color 0.3s ease', // Smooth transition
                borderRadius: '20px', // Rounded corners
                padding: '10px 20px', // Padding
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Subtle shadow
                cursor: 'pointer', // Hover effect
                '&:hover': { 
                  backgroundColor: 'lightsteelblue', // Background color change on hover
                }
              }}
            >
              Shop With Us
            </Button>
          </Grid>
        </Grid>


        <Grid container className='hero4' style={{ width: '50%', height: '100%' , backgroundImage: `url(${about})`, backgroundSize: 'cover', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
          <Grid item xs={12} style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center', 
            padding: '20px',
          }}>
           
          </Grid>
        </Grid>

      </div>
      {/* About Section */}
      <div style={{ 
        height: '200px',
        width: '90%', 
        backgroundColor: '#212121',
        borderRadius: '10px',
        padding: '40px',
        textAlign: 'center',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        marginTop: '40px', // Increased top margin for spacing
      }}>
        <Typography color="WHITE" variant="h2" style={{ 
          marginBottom: '20px', 
          fontFamily: 'Georgia, serif', 
          fontWeight: 'bold', 
          letterSpacing: '2px',
        }}>
          About Us
        </Typography>
        <Typography color="white" variant="body1" style={{ 
          fontFamily: 'Arial, sans-serif', 
          lineHeight: '1.6',
        }}>
          Welcome to our premier vape store! We pride ourselves on offering a diverse range of high-quality products and delivering exceptional customer service to vape enthusiasts worldwide. With our carefully curated selection, you can explore the latest trends, discover unique flavors, and find the perfect accessories to enhance your vaping experience. Join our community today and embark on a journey of flavor exploration and satisfaction.
        </Typography>
      </div>

      {/* Additional Information Section */}
      <div style={{ 
        display: 'flex',
        alignItems: 'center',
        width: '90%', 
        height: '10%',
        backgroundColor: '#212121',
        borderRadius: '10px',
        padding: '40px',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        marginTop: '40px', // Increased top margin for spacing
      }}>
        <img src={about} alt="Additional Information" style={{ marginRight: '20px', height: '300px', borderRadius: '5px' }} /> {/* Rounded corners */}
        <div>
          <Typography color="WHITE" variant="h2" style={{ 
            marginBottom: '20px', 
            fontFamily: 'Georgia, serif', 
            fontWeight: 'bold', 
            letterSpacing: '2px',
          }}>
            Additional Information
          </Typography>
          <Typography color="white" variant="body1" style={{ 
            fontFamily: 'Arial, sans-serif', 
            lineHeight: '1.6',
          }}>
            Here are some ideas for additional information you can include:
            <ul style={{ listStyleType: 'none', paddingLeft: 0 }}> {/* Custom bullet points */}
              <li>
                <strong>Mission and Values:</strong> Share your company's mission and core values to connect with customers who share similar beliefs.
              </li>
              <li>
                <strong>Special Offers:</strong> Highlight any ongoing promotions, discounts, or special deals to incentivize customers to shop with you.
              </li>
              <li>
                <strong>Customer Testimonials:</strong> Showcase positive reviews or testimonials from satisfied customers to build trust and credibility.
              </li>
              <li>
                <strong>Expert Advice:</strong> Provide tips, guides, or educational content related to vaping to position your store as an authority in the industry.
              </li>
              <li>
                <strong>Community Engagement:</strong> Discuss any community events, sponsorships, or partnerships your store is involved in to show your commitment to the local community.
              </li>
              <li>
                <strong>Contact Information:</strong> Make sure to include contact details such as your store's address, phone number, email, and social media links for customers to reach out to you.
              </li>
            </ul>
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default Main;
