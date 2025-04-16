import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import Layout from '../components/Layout';
import Section from '../components/Section';
import HomeModelCard from '../components/HomeModelCard';
import { Link as RouterLink } from 'react-router-dom';

// Sample floor plan data
const homeModels = [
  {
    id: 1,
    name: 'The Arlington',
    description: 'A spacious colonial with elegant finishes and a flowing floor plan perfect for entertaining. Features a first-floor primary suite and expansive kitchen opening to a great room.',
    imageUrl: 'https://images.unsplash.com/photo-1602941525421-8f8b81d3edbb?ixlib=rb-4.0.3',
    bedrooms: 4,
    bathrooms: 3.5,
    squareFeet: 3200,
    features: ['Walk-out basement', 'Covered patio', 'Three-car garage', 'Home office'],
    price: 'Starting at $1.2M',
  },
  {
    id: 2,
    name: 'The Belmont',
    description: 'A stately modern farmhouse design with luxury appointments throughout. Featuring high ceilings, an open concept layout, and designer kitchen with premium appliances.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3',
    bedrooms: 5,
    bathrooms: 4.5,
    squareFeet: 3800,
    features: ['Guest suite', 'Media room', 'Custom millwork', 'Butler\'s pantry'],
    price: 'Starting at $1.4M',
  },
  {
    id: 3,
    name: 'The Cambridge',
    description: 'A sophisticated transitional design with traditional elements and modern amenities. This model features a dramatic two-story foyer and open living spaces.',
    imageUrl: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3',
    bedrooms: 4,
    bathrooms: 3.5,
    squareFeet: 3400,
    features: ['First-floor office', 'Mudroom', 'Gourmet kitchen', 'Smart home technology'],
    price: 'Starting at $1.3M',
  },
  {
    id: 4,
    name: 'The Dartmouth',
    description: 'Our largest model offering expansive living areas and luxury features. Perfect for families desiring space and privacy, with versatile bonus rooms and entertainment areas.',
    imageUrl: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3',
    bedrooms: 5,
    bathrooms: 5.5,
    squareFeet: 4500,
    features: ['Wine cellar', 'Home gym', 'Theater room', 'Multi-generational suite'],
    price: 'Starting at $1.7M',
  },
  {
    id: 5,
    name: 'The Essex',
    description: 'A stunning ranch design with luxury in every detail. All main living areas on one level with an emphasis on indoor/outdoor living and entertaining spaces.',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3',
    bedrooms: 3,
    bathrooms: 2.5,
    squareFeet: 2800,
    features: ['Open concept', 'Vaulted ceilings', 'Covered lanai', 'Chef\'s kitchen'],
    price: 'Starting at $1.1M',
  },
];

const HomeDesignsPage: React.FC = () => {
  const handleModelClick = (id: number) => {
    console.log(`Model ${id} clicked`);
    // In a real app, this would navigate to a detailed view of the home model
  };

  return (
    <Layout>
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ fontFamily: '"Playfair Display", serif' }}
          >
            Home Designs & Floor Plans
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: '800px', mb: 4 }}>
            Discover our collection of thoughtfully designed luxury homes, each crafted with exceptional attention to detail and premium finishes.
          </Typography>
        </Container>
      </Box>

      <Section
        title="Available Models"
        subtitle="Explore our selection of elegant home designs available at Brittany Estates"
      >
        <Box sx={{ mb: 6 }}>
          <Typography variant="body1" paragraph>
            Each Brittany Estates home is designed with an emphasis on quality craftsmanship, elegant aesthetics, and practical functionality. Our models can be customized to suit your specific needs and preferences, with various options for finishes, layouts, and premium features.
          </Typography>
          <Typography variant="body1" paragraph>
            Work with our design team to create the perfect living space for your lifestyle. From traditional to contemporary, our flexible designs can be tailored to reflect your personal style while maintaining the distinctive character of Brittany Estates.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {homeModels.map((model) => (
            <HomeModelCard
              key={model.id}
              name={model.name}
              description={model.description}
              imageUrl={model.imageUrl}
              bedrooms={model.bedrooms}
              bathrooms={model.bathrooms}
              squareFeet={model.squareFeet}
              features={model.features}
              price={model.price}
              onClick={() => handleModelClick(model.id)}
            />
          ))}
        </Box>

        <Box sx={{ textAlign: 'center', mt: 8, p: 4, bgcolor: 'background.paper', borderRadius: 2 }}>
          <Typography variant="h5" component="h3" gutterBottom sx={{ fontFamily: '"Playfair Display", serif' }}>
            Interested in Custom Options?
          </Typography>
          <Typography variant="body1" paragraph>
            Our team can work with you to create a fully customized home design tailored to your specific needs and preferences.
          </Typography>
          <Button
            component={RouterLink}
            to="/contact"
            variant="contained"
            color="primary"
            size="large"
          >
            Contact Our Design Team
          </Button>
        </Box>
      </Section>
    </Layout>
  );
};

export default HomeDesignsPage; 