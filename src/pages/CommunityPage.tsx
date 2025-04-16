import React from 'react';
import { Box, Typography, Container, Card, CardMedia, CardContent, Button } from '@mui/material';
import Layout from '../components/Layout';
import Section from '../components/Section';
import FeatureCard from '../components/FeatureCard';
import { Link as RouterLink } from 'react-router-dom';

// Import icons for features
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SchoolIcon from '@mui/icons-material/School';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import GolfCourseIcon from '@mui/icons-material/GolfCourse';

// Placeholder images - in a real project, you would use actual images from your assets
const communityImage = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3';
const mapImage = 'https://images.unsplash.com/photo-1569336415962-a4bd9f69c07b?ixlib=rb-4.0.3';
const beachImage = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3';
const parksImage = 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?ixlib=rb-4.0.3';

const CommunityPage: React.FC = () => {
  return (
    <Layout>
      <Box
        sx={{
          position: 'relative',
          height: '50vh',
          backgroundImage: `url(${communityImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
          },
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ position: 'relative', color: 'white', textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{ fontFamily: '"Playfair Display", serif' }}
            >
              Our Community
            </Typography>
            <Typography variant="h6">
              Experience the perfect balance of tranquility and convenience in the heart of Northport, Long Island
            </Typography>
          </Box>
        </Container>
      </Box>

      <Section
        title="Location & Amenities"
        subtitle="Discover all that Brittany Estates and the surrounding area has to offer"
      >
        <Box sx={{ mb: 6 }}>
          <Typography variant="body1" paragraph>
            Brittany Estates is nestled in the picturesque town of Northport, Long Island, offering residents an idyllic setting that combines natural beauty with convenient access to modern amenities. Our community is situated just minutes from stunning beaches, charming villages, excellent schools, and a wealth of recreational opportunities.
          </Typography>
          <Typography variant="body1" paragraph>
            The unique location provides the perfect balance of privacy and accessibility, creating an exceptional living environment for families, professionals, and retirees alike. Enjoy the serene atmosphere of your luxury home while being connected to all that Long Island has to offer.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mb: 8 }}>
          <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 12px)', md: 'calc(25% - 18px)' } }}>
            <FeatureCard
              title="Beautiful Beaches"
              description="Enjoy proximity to Long Island's finest beaches, just minutes from your doorstep."
              icon={<BeachAccessIcon />}
            />
          </Box>
          <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 12px)', md: 'calc(25% - 18px)' } }}>
            <FeatureCard
              title="Waterfront Activities"
              description="Experience boating, fishing, and water sports in Northport Harbor and the Long Island Sound."
              icon={<DirectionsBoatIcon />}
            />
          </Box>
          <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 12px)', md: 'calc(25% - 18px)' } }}>
            <FeatureCard
              title="Shopping & Dining"
              description="Explore charming boutiques, gourmet markets, and exceptional restaurants nearby."
              icon={<LocalMallIcon />}
            />
          </Box>
          <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 12px)', md: 'calc(25% - 18px)' } }}>
            <FeatureCard
              title="Fine Dining"
              description="Savor culinary delights at Northport's renowned restaurants and cafes."
              icon={<RestaurantIcon />}
            />
          </Box>
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mb: 8 }}>
          <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 12px)', md: 'calc(25% - 18px)' } }}>
            <FeatureCard
              title="Top Schools"
              description="Access to highly-rated Northport-East Northport School District."
              icon={<SchoolIcon />}
            />
          </Box>
          <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 12px)', md: 'calc(25% - 18px)' } }}>
            <FeatureCard
              title="Walking Trails"
              description="Enjoy scenic walking and biking paths throughout the community and nearby parks."
              icon={<DirectionsRunIcon />}
            />
          </Box>
          <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 12px)', md: 'calc(25% - 18px)' } }}>
            <FeatureCard
              title="Medical Facilities"
              description="Premier healthcare facilities nearby, including Huntington Hospital."
              icon={<LocalHospitalIcon />}
            />
          </Box>
          <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 12px)', md: 'calc(25% - 18px)' } }}>
            <FeatureCard
              title="Golf Courses"
              description="Multiple prestigious golf courses within a short drive."
              icon={<GolfCourseIcon />}
            />
          </Box>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, mb: 6 }}>
          <Card sx={{ flex: 1 }}>
            <CardMedia
              component="img"
              height="240"
              image={beachImage}
              alt="Northport Beaches"
            />
            <CardContent>
              <Typography variant="h5" component="h3" gutterBottom sx={{ fontFamily: '"Playfair Display", serif' }}>
                Beaches & Waterfront
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Brittany Estates is located just minutes from beautiful Long Island beaches and the picturesque Northport Harbor. Enjoy swimming, boating, fishing, and stunning sunsets along the shoreline.
              </Typography>
            </CardContent>
          </Card>
          
          <Card sx={{ flex: 1 }}>
            <CardMedia
              component="img"
              height="240"
              image={parksImage}
              alt="Local Parks"
            />
            <CardContent>
              <Typography variant="h5" component="h3" gutterBottom sx={{ fontFamily: '"Playfair Display", serif' }}>
                Parks & Recreation
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Explore numerous parks, preserves, and recreational facilities nearby. From hiking trails to playgrounds and sports fields, the area offers activities for all ages and interests.
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Typography variant="h5" component="h3" gutterBottom sx={{ fontFamily: '"Playfair Display", serif' }}>
            Experience Brittany Estates
          </Typography>
          <Typography variant="body1" paragraph>
            Ready to explore all that our community has to offer? Schedule a visit today to see why Brittany Estates is the perfect place to call home.
          </Typography>
          <Button
            component={RouterLink}
            to="/contact"
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 2 }}
          >
            Schedule a Visit
          </Button>
        </Box>
      </Section>
    </Layout>
  );
};

export default CommunityPage; 