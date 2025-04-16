import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import HeroSection from '../components/HeroSection';
import Section from '../components/Section';
import Layout from '../components/Layout';
import FeatureCard from '../components/FeatureCard';
import { Link as RouterLink } from 'react-router-dom';

// Import MUI icons for features
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NatureIcon from '@mui/icons-material/Nature';
import PoolIcon from '@mui/icons-material/Pool';

// Placeholder image - in a real project you would use actual images from your assets
const heroImage = 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1673&q=80';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <HeroSection 
        title="Pebble Hill Building Corp presents Brittany Estates"
        subtitle="Uncompromising in Build and Beauty – a bucolic hidden treasure"
        backgroundImage={heroImage}
        ctaText="Explore our available lots, schedule a visit"
        ctaLink="/contact"
      />
      
      <Section
        title="Welcome to Brittany Estates"
        subtitle="Your dream home awaits you in Northport, Long Island"
      >
        <Box sx={{ mb: 4 }}>
          <Typography variant="body1" paragraph>
            Nestled in the scenic landscape of Northport, Brittany Estates offers an exclusive collection of luxury homes designed with uncompromising quality and attention to detail. Each residence stands as a testament to superior craftsmanship, blending traditional elegance with modern comforts.
          </Typography>
          <Typography variant="body1" paragraph>
            Developed by Pebble Hill Building Corp, Brittany Estates represents our commitment to creating exceptional living spaces that harmonize with their natural surroundings. Our homes aren't merely structures; they're sanctuaries designed for families to create lifelong memories.
          </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
          <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 12px)', md: 'calc(25% - 18px)' } }}>
            <FeatureCard 
              title="Luxury Homes" 
              description="Exquisitely designed residences with premium finishes and exceptional attention to detail."
              icon={<HomeWorkIcon />}
            />
          </Box>
          <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 12px)', md: 'calc(25% - 18px)' } }}>
            <FeatureCard 
              title="Prime Location" 
              description="Minutes from beaches, shopping, dining, and the charming village of Northport."
              icon={<LocationOnIcon />}
            />
          </Box>
          <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 12px)', md: 'calc(25% - 18px)' } }}>
            <FeatureCard 
              title="Natural Beauty" 
              description="Surrounded by lush landscapes and nestled in a serene, wooded environment."
              icon={<NatureIcon />}
            />
          </Box>
          <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 12px)', md: 'calc(25% - 18px)' } }}>
            <FeatureCard 
              title="Community Amenities" 
              description="Access to local parks, trails, golf courses, and water activities on the Sound."
              icon={<PoolIcon />}
            />
          </Box>
        </Box>
        
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button 
            component={RouterLink}
            to="/home-designs"
            variant="contained" 
            color="primary" 
            size="large"
            sx={{ mr: 2, mb: { xs: 2, sm: 0 } }}
          >
            View Home Designs
          </Button>
          <Button 
            component={RouterLink}
            to="/community"
            variant="outlined" 
            color="primary" 
            size="large"
          >
            Explore Community
          </Button>
        </Box>
      </Section>
      
      <Box 
        sx={{ 
          bgcolor: 'primary.main', 
          color: 'white', 
          py: 6 
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
            Ready to find your dream home?
          </Typography>
          <Typography 
            variant="subtitle1" 
            align="center" 
            paragraph
            sx={{ mb: 4 }}
          >
            Schedule a visit to Brittany Estates and experience the beauty and quality firsthand.
          </Typography>
          
          <Box sx={{ textAlign: 'center' }}>
            <Button 
              component={RouterLink}
              to="/contact"
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
              Contact Us Today
            </Button>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export default HomePage; 