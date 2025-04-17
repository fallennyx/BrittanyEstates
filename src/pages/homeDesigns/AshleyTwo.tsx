import React, {useState} from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Container,
    IconButton,
    Modal,
    Paper,
    Typography
} from '@mui/material';
import Layout from '../../components/Layout';
import Section from '../../components/Section';
import BackButton from '../../components/BackButton';
import {Link as RouterLink} from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

// Placeholder images
import placeholderImage from '../../assets/images/arlingtonPlans/Front_2024.jpg';

const AshleyTwoPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("interior");
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleCategoryChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedCategory(newValue);
  };
  
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
          position: 'relative'
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ position: 'relative' }}>
            <BackButton 
              sx={{ 
                position: 'absolute', 
                top: '-20px', 
                left: '-12px'
              }}
            />
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{ fontFamily: '"Playfair Display", serif', pt: 2 }}
            >
              The Ashley Two
            </Typography>
            <Typography variant="h6" sx={{ maxWidth: '800px', mb: 4 }}>
              5 Bedrooms, 3.5 Bathrooms, 1 Acre Property, 4,000 Sq Ft
            </Typography>
          </Box>
        </Container>
      </Box>

      <Section
        title="Home Highlights"
        subtitle="Discover the perfect blend of luxury and functionality"
      >
        <Box sx={{ mb: 6 }}>
          <Typography variant="body1" paragraph>
            The Ashley II is a luxurious estate home offering 4,000 square feet of meticulously designed living space. This elegant home features an open-concept layout with premium finishes throughout.
          </Typography>
          
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 4 }}>
            <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 8px)', md: 'calc(25% - 12px)' } }}>
              <Paper elevation={2} sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h6" gutterBottom align="center">5 Bedrooms</Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                  Including a master suite with full bath and oversized rooms
                </Typography>
              </Paper>
            </Box>
            <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 8px)', md: 'calc(25% - 12px)' } }}>
              <Paper elevation={2} sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h6" gutterBottom align="center">3.5 Bathrooms</Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                  Featuring premium fixtures and radiant heat
                </Typography>
              </Paper>
            </Box>
            <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 8px)', md: 'calc(25% - 12px)' } }}>
              <Paper elevation={2} sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h6" gutterBottom align="center">4,000 Sq Ft</Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                  Spacious living areas with 4" oak hardwood floors and 7" crown moldings
                </Typography>
              </Paper>
            </Box>
            <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 8px)', md: 'calc(25% - 12px)' } }}>
              <Paper elevation={2} sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h6" gutterBottom align="center">Premium Features</Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                  Central VAC, Andersen Windows, and high-end appliances
                </Typography>
              </Paper>
            </Box>
          </Box>
          
          <Typography variant="body1" paragraph>
            The Ashley II combines traditional elegance with modern amenities, creating a timeless home that will be enjoyed for generations. Every detail has been carefully considered, from the premium hardwood floors to the custom cabinetry and designer lighting.
          </Typography>
        </Box>

        <Section
          title="Interior Features"
          subtitle="Explore the thoughtful layout of The Ashley II"
        >
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
            <Box sx={{ width: { xs: '100%', md: 'calc(50% - 12px)' } }}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  height="400"
                  image={placeholderImage}
                  alt="Interior Features"
                  sx={{ 
                    objectFit: 'contain', 
                    bgcolor: '#f5f5f5', 
                    p: 2,
                    cursor: 'pointer'
                  }}
                  onClick={() => handleImageClick(placeholderImage)}
                />
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom>
                    Interior Features
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    5 Bedrooms, 3.5 Bathrooms, 2-Story Entry Foyer, Formal Living Room, Formal Dining Room, Family Room, Bedroom/Office With Full Bath, 2 Walk-In Closets, Gourmet Eat-In Kitchen, High-End Appliances, Gas Cooking, Master Suite With Full Bath, First Floor Laundry With OSE, Full Basement, Central Air Conditioning, Central VAC, 4" Oak Hardwood Floors, 7" Crown Moldings, Andersen Windows, Oil Heat, Radiant Heat, Post Modern Style, New Construction Home
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Section>

        <Section
          title="Exterior Features"
          subtitle="Experience the beauty of The Ashley II"
        >
          <Box sx={{ width: '100%', mb: 4 }}>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }, gap: 2 }}>
              <Box 
                sx={{ 
                  height: 240, 
                  borderRadius: 2, 
                  overflow: 'hidden',
                  boxShadow: 1,
                  cursor: 'pointer'
                }}
                onClick={() => handleImageClick(placeholderImage)}
              >
                <Box
                  component="img"
                  src={placeholderImage}
                  alt="Exterior Features"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)'
                    }
                  }}
                />
              </Box>
            </Box>
          </Box>
          <Box sx={{ width: { xs: '100%', md: 'calc(50% - 12px)' } }}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom>
                  Exterior Features
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  1 Acre Property, Beautiful Landscaping, 2 Car Attached Garage, Private Driveway, Hardplank & Stone Siding, Established Neighborhood, Cul De Sac Location/No Thru Traffic
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Section>

        <Box sx={{ textAlign: 'center', mt: 8, p: 4, bgcolor: 'background.paper', borderRadius: 2 }}>
          <Typography variant="h5" component="h3" gutterBottom sx={{ fontFamily: '"Playfair Display", serif' }}>
            Ready to Make The Ashley II Your Home?
          </Typography>
          <Typography variant="body1" paragraph>
            Schedule a consultation with our team to discuss customization options and pricing for this luxury estate home.
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

export default AshleyTwoPage; 