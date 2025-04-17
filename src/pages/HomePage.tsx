import React, {useEffect, useState} from 'react';
import {Box, Button, Container, IconButton, Typography} from '@mui/material';
import Section from '../components/Section';
import Layout from '../components/Layout';
import {Link as RouterLink} from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Import images for slideshow
import outside1 from '../assets/images/arlingtonPlans/Outside_2021.jpg';
import outside2 from '../assets/images/arlingtonPlans/Kitchen_2025.jpg';
import outside3 from '../assets/images/arlingtonPlans/outsidepatio_2089.jpg';
import outside4 from '../assets/images/arlingtonPlans/Livingroom_2029.jpg';
import outside5 from '../assets/images/arlingtonPlans/stairs_2047.jpg';


// Import other images
import livingroom from '../assets/images/arlingtonPlans/livingroom_2051.jpg';
import kitchen from '../assets/images/arlingtonPlans/kitchen_2052.jpg';
import bathroom from '../assets/images/arlingtonPlans/bathroom_2055.jpg';

const HomePage: React.FC = () => {
  const slideshowImages = [outside1, outside2, outside3, outside4, outside5,];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate slideshow images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === slideshowImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [slideshowImages.length]);

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? slideshowImages.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === slideshowImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Layout>
      {/* Slideshow */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '50vh', md: '70vh' },
          overflow: 'hidden',
        }}
      >
        {slideshowImages.map((img, index) => (
          <Box
            key={index}
            component="img"
            src={img}
            alt={`Brittany Estates ${index + 1}`}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: index === currentImageIndex ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
            }}
          />
        ))}
        
        {/* Navigation Arrows */}
        <IconButton
          onClick={handlePreviousImage}
          sx={{
            position: 'absolute',
            left: 16,
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
            },
            zIndex: 1,
          }}
          aria-label="Previous image"
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        
        <IconButton
          onClick={handleNextImage}
          sx={{
            position: 'absolute',
            right: 16,
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
            },
            zIndex: 1,
          }}
          aria-label="Next image"
        >
          <ArrowForwardIosIcon />
        </IconButton>
        
        {/* Image Indicators */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 16,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 1,
            zIndex: 1,
          }}
        >
          {slideshowImages.map((_, index) => (
            <Box
              key={index}
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                backgroundColor: index === currentImageIndex ? 'white' : 'rgba(255, 255, 255, 0.5)',
                cursor: 'pointer',
              }}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </Box>
      </Box>
      
      <Section
        title="Welcome to Brittany Estates"
        subtitle="Luxury Living in Northport, Long Island"
        py={4}
      >
        <Typography variant="h4" paragraph align="center" sx={{ mb: 4, maxWidth: '7000px', mx: 'auto' }}>
          Your dream home awaits you in Northport Long Island.   
          
  <br />                           
             Uncompromising in Build and Beauty. A bucolic hidden Treasure.
        </Typography>
        
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3, mb: 4 }}>
          <Box sx={{ flex: 1 }}>
            <Box
              component="img"
              src={livingroom}
              alt="Living Room"
              sx={{
                width: '100%',
                height: 300,
                objectFit: 'cover',
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
            <Typography variant="h6" align="center" sx={{ mt: 2, fontWeight: 'bold' }}>
              LIVING SPACES
            </Typography>
          </Box>
          
          <Box sx={{ flex: 1 }}>
            <Box
              component="img"
              src={kitchen}
              alt="Kitchen"
              sx={{
                width: '100%',
                height: 300,
                objectFit: 'cover',
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
            <Typography variant="h6" align="center" sx={{ mt: 2, fontWeight: 'bold' }}>
              KITCHEN DESIGNS
            </Typography>
          </Box>
          
          <Box sx={{ flex: 1 }}>
            <Box
              component="img"
              src={bathroom}
              alt="Bathroom"
              sx={{
                width: '100%',
                height: 300,
                objectFit: 'cover',
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
            <Typography variant="h6" align="center" sx={{ mt: 2, fontWeight: 'bold' }}>
              ELEGANT BATHROOMS
            </Typography>
          </Box>
        </Box>
        
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button 
            component={RouterLink}
            to="/home-designs"
            variant="contained" 
            color="primary" 
            size="large"
            sx={{ fontWeight: 'bold', px: 4 }}
          >
            View Home Designs
          </Button>
        </Box>
      </Section>
      
      <Box 
        sx={{ 
          bgcolor: 'primary.main', 
          color: 'white', 
          py: 4 
        }}
      >
        <Container maxWidth="md">
          <Typography 
            variant="h4" 
            component="h2" 
            align="center" 
            gutterBottom
            sx={{ fontFamily: '"Playfair Display", serif' }}
          >
            Beautifully Designed & Built
          </Typography>
          
          <Box sx={{ textAlign: 'center' }}>
            <Button 
              component={RouterLink}
              to="/community"
              variant="contained" 
              color="secondary" 
              size="large"
              sx={{ 
                fontWeight: 'bold', 
                color: 'primary.main',
                px: 4,
                py: 1.5,
              }}
            >
              Explore Community
            </Button>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export default HomePage; 