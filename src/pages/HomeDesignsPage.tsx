import React, {useState} from 'react';
import {Box, Button, Card, CardContent, CardMedia, Container, IconButton, Modal, Typography} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Layout from '../components/Layout';
import Section from '../components/Section';
import {Link as RouterLink} from 'react-router-dom';

// Import preview images for each home design
import arlingtonPreview from '../assets/images/arlingtonPlans/Outside_2021.jpg';

// Home design data
const homeDesigns = [
  {
    id: 'arlington',
    name: 'The Arlington',
    sqFt: '3,800',
    bedrooms: 4,
    bathrooms: 3.5,
    description: 'A luxurious estate home featuring elegant design, premium finishes, and thoughtful spaces for modern living.',
    previewImage: arlingtonPreview,
    path: '/home-designs/arlington'
  },
  {
    id: 'ashley-two',
    name: 'The Ashley II',
    sqFt: '4,000',
    bedrooms: 5,
    bathrooms: 3.5,
    description: 'A sophisticated family home with 2-story entry foyer, gourmet kitchen, and premium features including oak hardwood floors and crown moldings.',
    previewImage: arlingtonPreview, // Placeholder - replace with actual image
    path: '/home-designs/ashley-two'
  },
  {
    id: 'westchester',
    name: 'The Westchester',
    sqFt: '4,100',
    bedrooms: 5,
    bathrooms: 4,
    description: 'An expansive estate home with luxury amenities including a home theater, wine cellar, and outdoor living space.',
    previewImage: arlingtonPreview, // Placeholder - replace with actual image
    path: '/home-designs/westchester'
  },
  {
    id: 'the-country',
    name: 'The Country',
    sqFt: '3,400',
    bedrooms: 5,
    bathrooms: 3,
    description: 'A luxurious estate home with spacious living areas, premium finishes, and a beautifully landscaped property.',
    previewImage: arlingtonPreview, // Placeholder - replace with actual image
    path: '/home-designs/thecountry'
  }
];

const HomeDesignsPage: React.FC = () => {
  // Function to scroll to top before navigation
  const handleViewDetails = () => {
    window.scrollTo(0, 0);
  };

  // State for image modal
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  // Handle opening the modal with the clicked image
  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    setOpenModal(true);
  };

  // Handle closing the modal
  const handleCloseModal = () => {
    setOpenModal(false);
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
            Our Home Designs
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: '800px', mb: 4 }}>
            Discover our collection of thoughtfully designed luxury homes, each offering a perfect blend of elegance and functionality.
          </Typography>
        </Container>
      </Box>

      <Section
        title="Available Home Designs"
        subtitle="Explore our selection of luxury estate homes"
      >
        <Box sx={{ my: 4 }}>
          {homeDesigns.map((design) => (
            <Card 
              key={design.id} 
              sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', md: 'row' },
                mb: 4,
                overflow: 'hidden'
              }}
            >
              <CardMedia
                component="img"
                sx={{ 
                  width: { xs: '100%', md: '40%' },
                  height: { xs: 240, md: 'auto' },
                  objectFit: 'cover',
                  cursor: 'pointer'
                }}
                image={design.previewImage}
                alt={design.name}
                onClick={() => handleImageClick(design.previewImage)}
              />
              <CardContent sx={{ 
                display: 'flex', 
                flexDirection: 'column',
                justifyContent: 'space-between',
                width: { xs: '100%', md: '60%' },
                p: 4
              }}>
                <Box>
                  <Typography 
                    variant="h4" 
                    component="h2" 
                    gutterBottom
                    sx={{ fontFamily: '"Playfair Display", serif' }}
                  >
                    {design.name}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
                    <Typography variant="body1" sx={{ mr: 3 }}>
                      <strong>{design.sqFt}</strong> sq ft
                    </Typography>
                    <Typography variant="body1" sx={{ mr: 3 }}>
                      <strong>{design.bedrooms}</strong> Bedrooms
                    </Typography>
                    <Typography variant="body1">
                      <strong>{design.bathrooms}</strong> Bathrooms
                    </Typography>
                  </Box>
                  
                  <Typography variant="body1" paragraph>
                    {design.description}
                  </Typography>
                </Box>
                
                <Box sx={{ mt: 2 }}>
                  <Button
                    component={RouterLink}
                    to={design.path}
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={handleViewDetails}
                  >
                    View Details
                  </Button>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Section>

      <Section
        title="Custom Home Options"
        subtitle="Work with our team to create your dream home"
      >
        <Box sx={{ 
          p: 4, 
          borderRadius: 2,
          textAlign: 'center',
          bgcolor: 'background.paper',
          maxWidth: 800,
          mx: 'auto',
          mt: 2,
          mb: 6
        }}>
          <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
            Don't see exactly what you're looking for?
          </Typography>
          <Typography variant="body1" paragraph>
            Our design team can work with you to customize any of our home designs or create a completely custom home tailored to your specific needs and preferences.
          </Typography>
          <Button
            component={RouterLink}
            to="/contact"
            variant="contained"
            color="primary"
            size="large"
          >
            Schedule a Consultation
          </Button>
        </Box>
      </Section>

      {/* Image Viewer Modal */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="floor-plan-modal"
        aria-describedby="floor-plan-image-viewer"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2
        }}
      >
        <Box sx={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh', bgcolor: 'background.paper', borderRadius: 2 }}>
          <IconButton
            onClick={handleCloseModal}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: 'white',
              bgcolor: 'rgba(0,0,0,0.4)',
              '&:hover': {
                bgcolor: 'rgba(0,0,0,0.6)',
              },
              zIndex: 1,
            }}
          >
            <CloseIcon />
          </IconButton>

          <Box
            component="img"
            src={selectedImage}
            alt="Floor Plan"
            sx={{
              maxWidth: '100%',
              maxHeight: '90vh',
              objectFit: 'contain',
              display: 'block',
              borderRadius: 2,
            }}
          />
        </Box>
      </Modal>
    </Layout>
  );
};

export default HomeDesignsPage; 