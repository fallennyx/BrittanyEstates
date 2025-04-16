import React from 'react';
import { Box, Typography, Container, Card, CardMedia, CardContent, Button, Divider } from '@mui/material';
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

// Import actual images from assets
import communityImage from '../assets/images/Valerie Pic/CommunityFeatures/Northport village park -.jpg';
import beachImage from '../assets/images/Valerie Pic/CommunityFeatures/crabmeadowbeach.jpg';
import parksImage from '../assets/images/Valerie Pic/CommunityFeatures/Northport Park Playground.jpg';
import harborImage from '../assets/images/Valerie Pic/CommunityFeatures/Nothport Harbor.jpg';
import villageImage from '../assets/images/Valerie Pic/CommunityFeatures/northport_village_sign.webp';
import golfImage from '../assets/images/Valerie Pic/CommunityFeatures/Golf Course.jpg';
import theaterImage from '../assets/images/Valerie Pic/CommunityFeatures/John Engemen theater.jpg';
import restaurantImage from '../assets/images/Valerie Pic/CommunityFeatures/Main Street Cafe- Northport Restaurant.jpg';
import shopsImage from '../assets/images/Valerie Pic/CommunityFeatures/Nothport Village shops.jpg';
import dockImage from '../assets/images/Valerie Pic/CommunityFeatures/Northort Dock.jpeg';
import gazeboImage from '../assets/images/Valerie Pic/CommunityFeatures/Northport village park gazebo.jpg';
import yachtClubImage from '../assets/images/Valerie Pic/CommunityFeatures/Northport-Yacht-Club.jpg';
import hotelImage from '../assets/images/Valerie Pic/CommunityFeatures/Northport Hotel.jpg';

const CommunityPage: React.FC = () => {
  return (
    <Layout>
      <Box
        sx={{
          position: 'relative',
          height: '60vh',
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
                Brittany Estates is located just minutes from beautiful Long Island beaches and the picturesque Northport Harbor. Enjoy swimming, boating, fishing, and stunning sunsets along the shoreline. Crab Meadow Beach is one of the area's most beautiful natural attractions.
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
                Explore numerous parks, preserves, and recreational facilities nearby. From hiking trails to playgrounds and sports fields, the area offers activities for all ages and interests. Northport Park features beautiful playgrounds, walking paths, and waterfront views.
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <Section
          title="Outdoor Activities"
          subtitle="Enjoy the natural beauty of Northport"
        >
          <div className="community-grid-container" style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
            <Box sx={{ width: { xs: '100%', sm: '50%' }, p: 1, boxSizing: 'border-box' }}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  height="300"
                  image={harborImage}
                  alt="Northport Harbor"
                />
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontFamily: '"Playfair Display", serif' }}>
                    Northport Harbor
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    The picturesque Northport Harbor offers spectacular water views, sailing opportunities, and seasonal events. Take leisurely walks along the harbor, watch boats coming in and out, or enjoy seasonal festivals along the waterfront.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            <Box sx={{ width: { xs: '100%', sm: '50%' }, p: 1, boxSizing: 'border-box' }}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  height="300"
                  image={dockImage}
                  alt="Northport Dock"
                />
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontFamily: '"Playfair Display", serif' }}>
                    Northport Dock
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    The Northport Dock is a central hub for maritime activities. It's perfect for fishing, enjoying sunsets, or simply watching the boats. During summer months, you can enjoy concerts and community events at this lively location.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            <Box sx={{ width: { xs: '100%', sm: '50%' }, p: 1, boxSizing: 'border-box' }}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  height="300"
                  image={gazeboImage}
                  alt="Village Park Gazebo"
                />
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontFamily: '"Playfair Display", serif' }}>
                    Northport Village Park
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    The iconic gazebo at Northport Village Park hosts summer concerts and provides a charming spot for relaxation. The park offers beautiful green spaces, perfect for picnics and family gatherings, with stunning views of the harbor.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            <Box sx={{ width: { xs: '100%', sm: '50%' }, p: 1, boxSizing: 'border-box' }}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  height="300"
                  image={golfImage}
                  alt="Golf Course"
                />
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontFamily: '"Playfair Display", serif' }}>
                    Golf Courses
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Northport is home to exceptional golf courses, including the Crab Meadow Golf Course, offering challenging play for golfers of all skill levels with scenic views of the Long Island Sound. The Northport Golf Club provides a welcoming environment for both seasoned players and beginners.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </div>
        </Section>

        <Divider sx={{ my: 6 }} />

        <Section
          title="Shopping & Dining"
          subtitle="Discover Northport's charming retail and culinary experiences"
        >
          <div className="community-grid-container" style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
            <Box sx={{ width: { xs: '100%', sm: '50%' }, p: 1, boxSizing: 'border-box' }}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  height="300"
                  image={shopsImage}
                  alt="Northport Village Shops"
                />
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontFamily: '"Playfair Display", serif' }}>
                    Village Shops
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Northport Village features a variety of boutique shops offering everything from clothing and home décor to specialty foods and gifts. The charming Main Street is perfect for leisurely shopping, with its historic buildings and unique storefronts.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            <Box sx={{ width: { xs: '100%', sm: '50%' }, p: 1, boxSizing: 'border-box' }}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  height="300"
                  image={restaurantImage}
                  alt="Northport Restaurant"
                />
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontFamily: '"Playfair Display", serif' }}>
                    Fine Dining
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Northport is known for its excellent dining scene, with many top-rated restaurants offering everything from casual waterfront dining to upscale cuisine. Local favorites include Robke's, Maroni Cuisine, and Skipper's Pub, serving fresh seafood and other local specialties.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            <Box sx={{ width: { xs: '100%', sm: '50%' }, p: 1, boxSizing: 'border-box' }}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  height="300"
                  image={hotelImage}
                  alt="Northport Hotel"
                />
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontFamily: '"Playfair Display", serif' }}>
                    Northport Hotel
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    The historic Northport Hotel adds charm to the village center and houses dining options for visitors and residents alike. Its location in the heart of town makes it a convenient starting point for exploring Northport's shopping and dining scene.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            <Box sx={{ width: { xs: '100%', sm: '50%' }, p: 1, boxSizing: 'border-box' }}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  height="300"
                  image={theaterImage}
                  alt="John Engeman Theater"
                />
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontFamily: '"Playfair Display", serif' }}>
                    Entertainment
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    The John W. Engeman Theater offers Broadway-quality productions right in the heart of Northport. This historic venue features musicals, plays, and special events throughout the year, making it a cultural centerpiece of the community.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </div>
        </Section>

        <Divider sx={{ my: 6 }} />

        <Section
          title="Nautical Lifestyle"
          subtitle="Embrace the waterfront lifestyle in Northport"
        >
          <div className="community-grid-container" style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
            <Box sx={{ width: { xs: '100%', sm: '50%' }, p: 1, boxSizing: 'border-box' }}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  height="300"
                  image={yachtClubImage}
                  alt="Northport Yacht Club"
                />
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontFamily: '"Playfair Display", serif' }}>
                    Northport Yacht Club
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    The Northport Yacht Club is a premier destination for boating enthusiasts. Established in 1883, this historic club offers sailing programs, races, and social events in a beautiful waterfront setting. Members enjoy exceptional facilities and a vibrant community of fellow boaters.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            <Box sx={{ width: { xs: '100%', sm: '50%' }, p: 1, boxSizing: 'border-box' }}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  height="300"
                  image={villageImage}
                  alt="Northport Village Sign"
                />
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontFamily: '"Playfair Display", serif' }}>
                    Historic Northport
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Incorporated in 1894, Northport Village maintains its historic charm while offering modern amenities. The village's rich maritime history is evident in its architecture and waterfront design, creating a timeless atmosphere that residents and visitors cherish.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </div>
        </Section>

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