import React from 'react';
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImage from '../assets/images/banner.png'


const HeroBanner = () => {
  return (
    <Box className="banner_box" sx={{ 
      mt: { lg: '212px', xs: '70px'},
      ml: { sm: '50px'}
    }} position="relative" p="20px">
      <div className='banner_left_innerdiv'>
      <Typography color="#FF2625" fontWeight="600" fontSize="35px">
        Fitness Club
      </Typography>
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px'}}} mb="23px" mt="30px">
        Sweat, Smile  and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
       Check out the most effective exercises
      </Typography>
      <Button variant="contained" color="error" href="#exercises" sx={{ backgroundColor: '#ff2625', padding: '10px'}}> Explore Exercises</Button>
      </div>
      <div className='banner_right_innerdiv'>
      <Typography fontWeight={600} color="#ff2625" sx={{ opacity: 0.1, display: {lg: 'block', xs: 'none'}}} fontSize="50px">
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-image"></img>
      </div>
    </Box>
  )
}

export default HeroBanner