import React, { useState } from 'react';
import { Box, Typography, Button, Container, Card, CardContent, CardMedia, Tabs, Tab, Paper, Modal, IconButton } from '@mui/material';
import Layout from '../../components/Layout';
import Section from '../../components/Section';
import BackButton from '../../components/BackButton';
import { Link as RouterLink } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

// Import floor plan images
import floorPlan401 from '../../assets/images/Valerie Pic/FloorPlans/large_401.jpg';
import floorPlan402 from '../../assets/images/Valerie Pic/FloorPlans/large_402.jpg';
import floorPlan403 from '../../assets/images/Valerie Pic/FloorPlans/large_403.jpg';
import floorPlan404 from '../../assets/images/Valerie Pic/FloorPlans/large_404.jpg';

// Import home images with descriptive names
// Exterior
import outsideImage2021 from '../../assets/images/Valerie Pic/FloorPlans/Outside_2021.jpg';
import outsideImage2022 from '../../assets/images/Valerie Pic/FloorPlans/Outside_2022.jpg';
import outsideImage2098 from '../../assets/images/Valerie Pic/FloorPlans/outside_2098.jpg';
import sideOutsideImage2091 from '../../assets/images/Valerie Pic/FloorPlans/sideoutside_2091.jpg';
import outsidePatioImage2090 from '../../assets/images/Valerie Pic/FloorPlans/outsidepatio_2090.jpg';
import outsidePatioImage2089 from '../../assets/images/Valerie Pic/FloorPlans/outsidepatio_2089.jpg';
import outsidePatioImage2086 from '../../assets/images/Valerie Pic/FloorPlans/outsidepatio_2086.jpg';

// Kitchen
import frontImage2024 from '../../assets/images/Valerie Pic/FloorPlans/Front_2024.jpg';
import kitchenImage2025 from '../../assets/images/Valerie Pic/FloorPlans/Kitchen_2025.jpg';
import kitchenImage2026 from '../../assets/images/Valerie Pic/FloorPlans/Kitchen_2026.jpg';
import kitchenImage2028 from '../../assets/images/Valerie Pic/FloorPlans/Kitchen_2028.jpg';
import kitchenImage2031 from '../../assets/images/Valerie Pic/FloorPlans/kitchen_2031.jpg';
import kitchenImage2035 from '../../assets/images/Valerie Pic/FloorPlans/kitchen_2035.jpg';
import kitchenImage2052 from '../../assets/images/Valerie Pic/FloorPlans/kitchen_2052.jpg';

// Living Areas
import livingRoomImage2029 from '../../assets/images/Valerie Pic/FloorPlans/Livingroom_2029.jpg';
import livingRoomImage2030 from '../../assets/images/Valerie Pic/FloorPlans/livingroom_2030.jpg';
import livingRoomImage2051 from '../../assets/images/Valerie Pic/FloorPlans/livingroom_2051.jpg';
import livingImage2033 from '../../assets/images/Valerie Pic/FloorPlans/living_2033.jpg';

// Hallways and Stairs
import hallwayImage2027 from '../../assets/images/Valerie Pic/FloorPlans/Hallway_2027.jpg';
import hallwayImage2041 from '../../assets/images/Valerie Pic/FloorPlans/hallway_2041.jpg';
import hallwayImage2043 from '../../assets/images/Valerie Pic/FloorPlans/hallway_2043.jpg';
import stairsImage2047 from '../../assets/images/Valerie Pic/FloorPlans/stairs_2047.jpg';

// Bathrooms
import bathroomImage2040 from '../../assets/images/Valerie Pic/FloorPlans/bathroom_2040.jpg';
import bathroomImage2055 from '../../assets/images/Valerie Pic/FloorPlans/bathroom_2055.jpg';

// Utility Rooms
import laundryImage2053 from '../../assets/images/Valerie Pic/FloorPlans/laundry_2053.jpg';
import windowImage2054 from '../../assets/images/Valerie Pic/FloorPlans/window_2054.jpg';

// Other images without descriptive prefixes
import homeImage2060 from '../../assets/images/Valerie Pic/FloorPlans/large_2060.jpg';
import homeImage2061 from '../../assets/images/Valerie Pic/FloorPlans/large_2061.jpg';
import homeImage2064 from '../../assets/images/Valerie Pic/FloorPlans/large_2064.jpg';
import homeImage2065 from '../../assets/images/Valerie Pic/FloorPlans/large_2065.jpg';
import homeImage2066 from '../../assets/images/Valerie Pic/FloorPlans/large_2066.jpg';
import homeImage2069 from '../../assets/images/Valerie Pic/FloorPlans/large_2069.jpg';
import homeImage2070 from '../../assets/images/Valerie Pic/FloorPlans/large_2070.jpg';
import homeImage2072 from '../../assets/images/Valerie Pic/FloorPlans/large_2072.jpg';
import homeImage2075 from '../../assets/images/Valerie Pic/FloorPlans/large_2075.jpg';
import homeImage2076 from '../../assets/images/Valerie Pic/FloorPlans/large_2076.jpg';
import homeImage2077 from '../../assets/images/Valerie Pic/FloorPlans/large_2077.jpg';
import homeImage2078 from '../../assets/images/Valerie Pic/FloorPlans/large_2078.jpg';
import homeImage2085 from '../../assets/images/Valerie Pic/FloorPlans/large_2085.jpg';
import homeImage2087 from '../../assets/images/Valerie Pic/FloorPlans/large_2087.jpg';
import homeImage2096 from '../../assets/images/Valerie Pic/FloorPlans/large_2096.jpg';
import homeImage2097 from '../../assets/images/Valerie Pic/FloorPlans/large_2097.jpg';

// Floor plan data with descriptions
const floorPlans = [
  {
    image: floorPlan401,
    title: "Site Plan",
    description: "Property layout showing the home's position on the lot, landscaping, and outdoor living spaces."
  },
  {
    image: floorPlan402,
    title: "Second Floor Layout",
    description: "Second floor with four generously sized bedrooms including a luxurious primary suite with walk-in closets and spa-like bathroom."
  },
  {
    image: floorPlan403,
    title: "Basement Layout",
    description: "Versatile basement space with options for recreation room, home theater, gym, and additional storage."
  },
  {
    image: floorPlan404,
    title: "Site Plan",
    description: "Property layout showing the home's position on the lot, landscaping, and outdoor living spaces."
  }
];

// Home image categories based on descriptive filenames
const homeImageCategories = [
  {
    id: "exterior",
    label: "Exterior & Patio",
    images: [
      { src: outsideImage2021 },
      { src: outsideImage2022 },
      { src: outsideImage2098 },
      { src: sideOutsideImage2091 },
      { src: outsidePatioImage2090 },
      { src: outsidePatioImage2089 },
      { src: outsidePatioImage2086 }
    ]
  },
  {
    id: "kitchen",
    label: "Kitchen",
    images: [
      { src: frontImage2024 },
      { src: kitchenImage2025 },
      { src: kitchenImage2026 },
      { src: kitchenImage2028 },
      { src: kitchenImage2031 },
      { src: kitchenImage2035 },
      { src: kitchenImage2052 },
      { src: homeImage2066 },
      { src: homeImage2077 }
    ]
  },
  {
    id: "livingAreas",
    label: "Living Areas",
    images: [
      { src: livingRoomImage2029 },
      { src: livingRoomImage2030 },
      { src: livingRoomImage2051 },
      { src: livingImage2033 },
      { src: homeImage2064 },
      { src: homeImage2070 }
    ]
  },
  {
    id: "hallsAndStairs",
    label: "Hallways & Stairs",
    images: [
      { src: hallwayImage2027 },
      { src: hallwayImage2041 },
      { src: hallwayImage2043 },
      { src: stairsImage2047 }
    ]
  },
  {
    id: "bathrooms",
    label: "Bathrooms",
    images: [
      { src: bathroomImage2040 },
      { src: bathroomImage2055 },
      { src: homeImage2060 }
    ]
  },
  {
    id: "utility",
    label: "Utility & Special Rooms",
    images: [
      { src: laundryImage2053 },
      { src: windowImage2054 },
      { src: homeImage2061 }
    ]
  },
  {
    id: "other",
    label: "Other Spaces",
    images: [
      { src: homeImage2065 },
      { src: homeImage2069 },
      { src: homeImage2072 },
      { src: homeImage2075 },
      { src: homeImage2076 },
      { src: homeImage2078 },
      { src: homeImage2085 },
      { src: homeImage2087 },
      { src: homeImage2096 },
      { src: homeImage2097 }
    ]
  }
];

const ArlingtonHomePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("exterior");
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
              The Arlington Estate Home
            </Typography>
            <Typography variant="h6" sx={{ maxWidth: '800px', mb: 4 }}>
              A luxurious 4-bedroom, 3.5-bathroom estate home featuring elegant design, premium finishes, and thoughtful spaces for modern living.
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
            The Arlington is our signature estate home, offering 3,800 square feet of meticulously designed living space. This elegant home features an open-concept layout with soaring ceilings, abundant natural light, and premium finishes throughout.
          </Typography>
          
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 4 }}>
            <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 8px)', md: 'calc(25% - 12px)' } }}>
              <Paper elevation={2} sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h6" gutterBottom align="center">4 Bedrooms</Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                  Including a luxurious primary suite with sitting area and spa-like bathroom
                </Typography>
              </Paper>
            </Box>
            <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 8px)', md: 'calc(25% - 12px)' } }}>
              <Paper elevation={2} sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h6" gutterBottom align="center">3.5 Bathrooms</Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                  Premium fixtures, custom tile work, and designer finishes
                </Typography>
              </Paper>
            </Box>
            <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 8px)', md: 'calc(25% - 12px)' } }}>
              <Paper elevation={2} sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h6" gutterBottom align="center">3,800 Sq Ft</Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                  Thoughtfully designed living space with room for entertaining and relaxation
                </Typography>
              </Paper>
            </Box>
            <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 8px)', md: 'calc(25% - 12px)' } }}>
              <Paper elevation={2} sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h6" gutterBottom align="center">Premium Features</Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                  Custom millwork, gourmet kitchen, smart home technology
                </Typography>
              </Paper>
            </Box>
          </Box>
          
          <Typography variant="body1" paragraph>
            The Arlington combines traditional elegance with modern amenities, creating a timeless home that will be enjoyed for generations. Every detail has been carefully considered, from the premium hardwood floors to the custom cabinetry and designer lighting.
          </Typography>
        </Box>

        <Section
          title="Floor Plans"
          subtitle="Explore the thoughtful layout of The Arlington"
        >
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
            {floorPlans.map((plan) => (
              <Box key={plan.image} sx={{ width: { xs: '100%', md: 'calc(50% - 12px)' } }}>
                <Card sx={{ height: '100%' }}>
                  <CardMedia
                    component="img"
                    height="400"
                    image={plan.image}
                    alt={plan.title}
                    sx={{ 
                      objectFit: 'contain', 
                      bgcolor: '#f5f5f5', 
                      p: 2,
                      cursor: 'pointer'
                    }}
                    onClick={() => handleImageClick(plan.image)}
                  />
                  <CardContent>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {plan.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {plan.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Section>

        <Section
          title="Photo Gallery"
          subtitle="Experience the beauty of The Arlington"
        >
          <Box sx={{ width: '100%', mb: 4 }}>
            <Tabs
              value={selectedCategory}
              onChange={handleCategoryChange}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              sx={{ mb: 3 }}
            >
              {homeImageCategories.map((category) => (
                <Tab 
                  key={category.id} 
                  value={category.id} 
                  label={category.label} 
                />
              ))}
            </Tabs>
            
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }, gap: 2 }}>
              {homeImageCategories
                .find(category => category.id === selectedCategory)
                ?.images.map((image, index) => (
                  <Box 
                    key={index} 
                    sx={{ 
                      height: 240, 
                      borderRadius: 2, 
                      overflow: 'hidden',
                      boxShadow: 1,
                      cursor: 'pointer'
                    }}
                    onClick={() => handleImageClick(image.src)}
                  >
                    <Box
                      component="img"
                      src={image.src}
                      alt={`${selectedCategory} image ${index + 1}`}
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
                ))
              }
            </Box>
          </Box>
        </Section>

        <Box sx={{ textAlign: 'center', mt: 8, p: 4, bgcolor: 'background.paper', borderRadius: 2 }}>
          <Typography variant="h5" component="h3" gutterBottom sx={{ fontFamily: '"Playfair Display", serif' }}>
            Ready to Make The Arlington Your Home?
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

export default ArlingtonHomePage; 