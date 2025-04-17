import React from 'react';
import {Box, Button, Card, CardContent, CardMedia, Container, Divider, Typography} from '@mui/material';
import Layout from '../components/Layout';
import Section from '../components/Section';
import {Link as RouterLink} from 'react-router-dom';

// Import actual images from assets
import beachImage from '../assets/images/CommunityFeatures/crabmeadowbeach.jpg';
import parksImage from '../assets/images/CommunityFeatures/Northport Park Playground.jpg';
import harborImage from '../assets/images/CommunityFeatures/Nothport Harbor.jpg';
import villageImage from '../assets/images/CommunityFeatures/northport_village_sign.webp';
import golfImage from '../assets/images/CommunityFeatures/Golf Course.jpg';
import theaterImage from '../assets/images/CommunityFeatures/John Engemen theater.jpg';
import restaurantImage from '../assets/images/CommunityFeatures/Main Street Cafe- Northport Restaurant.jpg';
import shopsImage from '../assets/images/CommunityFeatures/Nothport Village shops.jpg';
import dockImage from '../assets/images/CommunityFeatures/Northort Dock.jpeg';
import gazeboImage from '../assets/images/CommunityFeatures/Northport village park gazebo.jpg';
import yachtClubImage from '../assets/images/CommunityFeatures/Northport-Yacht-Club.jpg';
import hotelImage from '../assets/images/CommunityFeatures/Northport Hotel.jpg';
import northportpark from '../assets/images/CommunityFeatures/villagepark.jpg';

const CommunityPage: React.FC = () => {
  return (
    <Layout>
      <Box
        sx={{
          position: 'relative',
          height: '60vh',
          backgroundImage: `url(${northportpark})`,
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
              sx={{ fontFamily: '"Playfair Display", serif', fontWeight: 'bold' }}
            >
              Looking to buy a home in Northport, NY?
            </Typography>
            <Typography variant="h6">
              Discover Waterfront Living on Long Island
            </Typography>
          </Box>
        </Container>
      </Box>

      <Box sx={{ mb: 6, mt: 4, px: { xs: 2, sm: 0 } }}>
        <Typography variant="body1" paragraph sx={{ textAlign: 'center', maxWidth: '800px', mx: 'auto', mb: 2, color: 'text.secondary' }}>
          This charming waterfront village on Long Island's North Shore offers the perfect mix of coastal beauty, small-town charm, and modern convenience. Northport is a sought-after location for homebuyers looking for a peaceful lifestyle with easy access to New York City.
        </Typography>
        <Typography variant="h5" paragraph sx={{ fontWeight: 'bold', textAlign: 'center', mt: 4, mb: 4 }}>
          Why Buy a Home in Northport?
        </Typography>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '800px', mx: 'auto', mb: 2 }}>
          <Typography variant="body1" sx={{ textAlign: 'center', fontWeight: 'bold', mb: { xs: 1, sm: 0 } }}>
            Scenic Waterfront Living
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center', color: 'text.secondary' }}>
            Enjoy stunning views of Northport Harbor, access to beaches, marinas, and outdoor activities like boating, kayaking, and hiking.
          </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '800px', mx: 'auto', mb: 2 }}>
          <Typography variant="body1" sx={{ textAlign: 'center', fontWeight: 'bold', mb: { xs: 1, sm: 0 } }}>
            Historic Village Charm
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center', color: 'text.secondary' }}>
            Stroll down Main Street with its boutique shops, cafes, and fine dining options such as Maroni Cuisine and Arlo Kitchen & Bar.
          </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '800px', mx: 'auto', mb: 2 }}>
          <Typography variant="body1" sx={{ textAlign: 'center', fontWeight: 'bold', mb: { xs: 1, sm: 0 } }}>
            Top-Rated Schools
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center', color: 'text.secondary' }}>
            The Northport-East Northport School District is a major draw for families seeking quality education.
          </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '800px', mx: 'auto', mb: 2 }}>
          <Typography variant="body1" sx={{ textAlign: 'center', fontWeight: 'bold', mb: { xs: 1, sm: 0 } }}>
            Commuter-Friendly
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center', color: 'text.secondary' }}>
            Convenient access to the Long Island Rail Road (LIRR) and major highways makes commuting to NYC easy.
          </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '800px', mx: 'auto', mb: 2 }}>
          <Typography variant="body1" sx={{ textAlign: 'center', fontWeight: 'bold', mb: { xs: 1, sm: 0 } }}>
            Strong Community & Events
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center', color: 'text.secondary' }}>
            Farmers markets, outdoor concerts, and seasonal festivals create a vibrant and welcoming atmosphere for residents of all ages.
          </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '800px', mx: 'auto', mb: 2 }}>
          <Typography variant="body1" sx={{ textAlign: 'center', fontWeight: 'bold', mb: { xs: 1, sm: 0 } }}>
            Pet-Friendly & Family-Oriented
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center', color: 'text.secondary' }}>
            With dog-friendly parks and kid-friendly spaces, Northport is ideal for growing families and animal lovers alike.
          </Typography>
        </Box>
        
        <Typography variant="body1" paragraph sx={{ textAlign: 'center', maxWidth: '800px', mx: 'auto', mb: 2, color: 'text.secondary' }}>
          Start your home search in Northport, NY today and discover why so many buyers are choosing this beautiful Long Island village as their forever home.
        </Typography>
      </Box>

      <Section
        title="Location & Amenities"
        subtitle="Discover all that Brittany Estates and the surrounding area has to offer"
      >
       

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, mb: 6 }}>
          <Card sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <CardMedia
              component="div"
              sx={{
                height: "480px",
                width: "100%",
                position: "relative",
                overflow: "hidden"
              }}
            >
              <Box
                component="img"
                src={beachImage}
                alt="Northport Beaches"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center 40%"
                }}
              />
            </CardMedia>
            <CardContent sx={{ flexGrow: 1, pb: 2 }}>
              <Typography variant="h5" component="h3" gutterBottom sx={{ fontFamily: '"Playfair Display", serif', minHeight: '64px', display: 'flex', alignItems: 'center' }}>
                Parks, Recreation & Beaches
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Explore numerous parks, preserves, and recreational facilities nearby. From hiking trails to playgrounds and sports fields, the area offers activities for all ages and interests. Northport Park features beautiful playgrounds, walking paths, and waterfront views.
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                Brittany Estates is located just minutes from beautiful Long Island beaches and the picturesque Northport Harbor. Enjoy swimming, boating, fishing, and stunning sunsets along the shoreline. Crab Meadow Beach is one of the area's most beautiful natural attractions.
              </Typography>
            </CardContent>
          </Card>
          
          <Card sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <CardMedia
              component="div"
              sx={{
                height: "480px",
                width: "100%",
                position: "relative",
                overflow: "hidden"
              }}
            >
              <Box
                component="img"
                src={parksImage}
                alt="Local Parks"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center 40%"
                }}
              />
            </CardMedia>
            <CardContent sx={{ flexGrow: 1, pb: 2 }}>
              <Typography variant="h5" component="h3" gutterBottom sx={{ fontFamily: '"Playfair Display", serif', minHeight: '64px', display: 'flex', alignItems: 'center' }}>
                Community Activities
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Northport offers a vibrant community life with seasonal events, farmers markets, summer concerts, and outdoor activities throughout the year. The village hosts numerous festivals celebrating music, arts, and the area's rich maritime heritage, providing endless opportunities to connect with neighbors and immerse yourself in the local culture.
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <Section
          title="Outdoor Activities"
          subtitle="Enjoy the natural beauty of Northport"
        >
          <div className="community-grid-container" style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
            <Box sx={{ width: { xs: '100%', sm: '50%' }, p: { xs: 1, sm: 2 }, boxSizing: 'border-box' }}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="div"
                  sx={{
                    height: "480px",
                    width: "100%",
                    position: "relative",
                    overflow: "hidden"
                  }}
                >
                  <Box
                    component="img"
                    src={harborImage}
                    alt="Northport Harbor"
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center 40%"
                    }}
                  />
                </CardMedia>
                <CardContent sx={{ flexGrow: 1, pb: 2, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontFamily: '"Playfair Display", serif', height: '64px', display: 'flex', alignItems: 'center' }}>
                    Northport Harbor
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
                    The picturesque Northport Harbor offers spectacular water views, sailing opportunities, and seasonal events. Take leisurely walks along the harbor, watch boats coming in and out, or enjoy seasonal festivals along the waterfront.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            <Box sx={{ width: { xs: '100%', sm: '50%' }, p: { xs: 1, sm: 2 }, boxSizing: 'border-box' }}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="div"
                  sx={{
                    height: "480px",
                    width: "100%",
                    position: "relative",
                    overflow: "hidden"
                  }}
                >
                  <Box
                    component="img"
                    src={dockImage}
                    alt="Northport Dock"
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center 40%"
                    }}
                  />
                </CardMedia>
                <CardContent sx={{ flexGrow: 1, pb: 2, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontFamily: '"Playfair Display", serif', height: '64px', display: 'flex', alignItems: 'center' }}>
                    Northport Dock
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
                    The Northport Dock is a central hub for maritime activities. It's perfect for fishing, enjoying sunsets, or simply watching the boats. During summer months, you can enjoy concerts and community events at this lively location.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            <Box sx={{ width: { xs: '100%', sm: '50%' }, p: { xs: 1, sm: 2 }, boxSizing: 'border-box', mt: { xs: 2, sm: 3 } }}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="div"
                  sx={{
                    height: "480px",
                    width: "100%",
                    position: "relative",
                    overflow: "hidden"
                  }}
                >
                  <Box
                    component="img"
                    src={gazeboImage}
                    alt="Village Park Gazebo"
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center 40%"
                    }}
                  />
                </CardMedia>
                <CardContent sx={{ flexGrow: 1, pb: 2, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontFamily: '"Playfair Display", serif', height: '64px', display: 'flex', alignItems: 'center' }}>
                    Northport Village Park
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
                    The iconic gazebo at Northport Village Park hosts summer concerts and provides a charming spot for relaxation. The park offers beautiful green spaces, perfect for picnics and family gatherings, with stunning views of the harbor.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            <Box sx={{ width: { xs: '100%', sm: '50%' }, p: { xs: 1, sm: 2 }, boxSizing: 'border-box', mt: { xs: 2, sm: 3 } }}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="div"
                  sx={{
                    height: "480px",
                    width: "100%",
                    position: "relative",
                    overflow: "hidden"
                  }}
                >
                  <Box
                    component="img"
                    src={golfImage}
                    alt="Golf Course"
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center 40%"
                    }}
                  />
                </CardMedia>
                <CardContent sx={{ flexGrow: 1, pb: 2, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontFamily: '"Playfair Display", serif', height: '64px', display: 'flex', alignItems: 'center' }}>
                    Golf Courses
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
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
            <Box sx={{ width: { xs: '100%', sm: '50%' }, p: { xs: 1, sm: 2 }, boxSizing: 'border-box' }}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="div"
                  sx={{
                    height: "480px",
                    width: "100%",
                    position: "relative",
                    overflow: "hidden"
                  }}
                >
                  <Box
                    component="img"
                    src={shopsImage}
                    alt="Northport Village Shops"
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center 40%"
                    }}
                  />
                </CardMedia>
                <CardContent sx={{ flexGrow: 1, pb: 2, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontFamily: '"Playfair Display", serif', height: '64px', display: 'flex', alignItems: 'center' }}>
                    Village Shops
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
                    Northport Village features a variety of boutique shops offering everything from clothing and home décor to specialty foods and gifts. The charming Main Street is perfect for leisurely shopping, with its historic buildings and unique storefronts.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            <Box sx={{ width: { xs: '100%', sm: '50%' }, p: { xs: 1, sm: 2 }, boxSizing: 'border-box' }}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="div"
                  sx={{
                    height: "480px",
                    width: "100%",
                    position: "relative",
                    overflow: "hidden"
                  }}
                >
                  <Box
                    component="img"
                    src={restaurantImage}
                    alt="Northport Restaurant"
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center 40%"
                    }}
                  />
                </CardMedia>
                <CardContent sx={{ flexGrow: 1, pb: 2, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontFamily: '"Playfair Display", serif', height: '64px', display: 'flex', alignItems: 'center' }}>
                    Fine Dining
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
                    Northport is known for its excellent dining scene, with many top-rated restaurants offering everything from casual waterfront dining to upscale cuisine. Local favorites include Robke's, Maroni Cuisine, and Skipper's Pub, serving fresh seafood and other local specialties.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            <Box sx={{ width: { xs: '100%', sm: '50%' }, p: { xs: 1, sm: 2 }, boxSizing: 'border-box', mt: { xs: 2, sm: 3 } }}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="div"
                  sx={{
                    height: "480px",
                    width: "100%",
                    position: "relative",
                    overflow: "hidden"
                  }}
                >
                  <Box
                    component="img"
                    src={hotelImage}
                    alt="Northport Hotel"
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center 40%"
                    }}
                  />
                </CardMedia>
                <CardContent sx={{ flexGrow: 1, pb: 2, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontFamily: '"Playfair Display", serif', height: '64px', display: 'flex', alignItems: 'center' }}>
                    Northport Hotel
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
                    The historic Northport Hotel adds charm to the village center and houses dining options for visitors and residents alike. Its location in the heart of town makes it a convenient starting point for exploring Northport's shopping and dining scene.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            <Box sx={{ width: { xs: '100%', sm: '50%' }, p: { xs: 1, sm: 2 }, boxSizing: 'border-box', mt: { xs: 2, sm: 3 } }}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="div"
                  sx={{
                    height: "480px",
                    width: "100%",
                    position: "relative",
                    overflow: "hidden"
                  }}
                >
                  <Box
                    component="img"
                    src={theaterImage}
                    alt="John Engeman Theater"
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center 40%"
                    }}
                  />
                </CardMedia>
                <CardContent sx={{ flexGrow: 1, pb: 2, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontFamily: '"Playfair Display", serif', height: '64px', display: 'flex', alignItems: 'center' }}>
                    Entertainment
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
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
            <Box sx={{ width: { xs: '100%', sm: '50%' }, p: { xs: 1, sm: 2 }, boxSizing: 'border-box' }}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="div"
                  sx={{
                    height: "480px",
                    width: "100%",
                    position: "relative",
                    overflow: "hidden"
                  }}
                >
                  <Box
                    component="img"
                    src={yachtClubImage}
                    alt="Northport Yacht Club"
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center 40%"
                    }}
                  />
                </CardMedia>
                <CardContent sx={{ flexGrow: 1, pb: 2, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontFamily: '"Playfair Display", serif', height: '64px', display: 'flex', alignItems: 'center' }}>
                    Northport Yacht Club
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
                    The Northport Yacht Club is a premier destination for boating enthusiasts. Established in 1883, this historic club offers sailing programs, races, and social events in a beautiful waterfront setting. Members enjoy exceptional facilities and a vibrant community of fellow boaters.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            <Box sx={{ width: { xs: '100%', sm: '50%' }, p: { xs: 1, sm: 2 }, boxSizing: 'border-box' }}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="div"
                  sx={{
                    height: "480px",
                    width: "100%",
                    position: "relative",
                    overflow: "hidden"
                  }}
                >
                  <Box
                    component="img"
                    src={villageImage}
                    alt="Northport Village Sign"
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center 40%"
                    }}
                  />
                </CardMedia>
                <CardContent sx={{ flexGrow: 1, pb: 2, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontFamily: '"Playfair Display", serif', height: '64px', display: 'flex', alignItems: 'center' }}>
                    Historic Northport
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
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