import React, { useState } from 'react';
import { Box, Container, Typography, Tabs, Tab } from '@mui/material';
import Layout from '../components/Layout';
import Section from '../components/Section';
import ImageGallery, { GalleryImage } from '../components/ImageGallery';

// Sample gallery data - in a real project, you'd import actual images
const exteriorImages: GalleryImage[] = [
  { img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6', title: 'Exterior View 1' },
  { img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750', title: 'Exterior View 2' },
  { img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9', title: 'Exterior View 3' },
  { img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c', title: 'Exterior View 4' },
  { img: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6', title: 'Exterior View 5' },
];

const interiorImages: GalleryImage[] = [
  { img: 'https://images.unsplash.com/photo-1600210492493-0946911123ea', title: 'Interior View 1' },
  { img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c', title: 'Interior View 2' },
  { img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3', title: 'Interior View 3' },
  { img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d', title: 'Interior View 4' },
  { img: 'https://images.unsplash.com/photo-1616137422495-2b0d4d2005a3', title: 'Interior View 5' },
];

const aerialImages: GalleryImage[] = [
  { img: 'https://images.unsplash.com/photo-1625602812206-5ec545ca1231', title: 'Aerial View 1' },
  { img: 'https://images.unsplash.com/photo-1548502499-ef49e8cf98d4', title: 'Aerial View 2' },
  { img: 'https://images.unsplash.com/photo-1622480916113-9000ac49b79d', title: 'Aerial View 3' },
  { img: 'https://images.unsplash.com/photo-1599676691470-9c333dc61953', title: 'Aerial View 4' },
];

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`gallery-tabpanel-${index}`}
      aria-labelledby={`gallery-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
};

const a11yProps = (index: number) => {
  return {
    id: `gallery-tab-${index}`,
    'aria-controls': `gallery-tabpanel-${index}`,
  };
};

const GalleryPage: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Layout>
      <Box
        sx={{
          position: 'relative',
          height: '30vh',
          backgroundColor: 'primary.main',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h1"
            align="center"
            sx={{
              color: 'white',
              fontFamily: '"Playfair Display", serif',
            }}
          >
            Gallery
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            sx={{
              color: 'white',
              mt: 2,
              opacity: 0.8,
            }}
          >
            Take a visual tour of Brittney Estates - Explore the beauty, elegance, and craftsmanship of our luxury homes
          </Typography>
        </Container>
      </Box>

      <Section title="" subtitle="">
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs 
              value={tabValue} 
              onChange={handleTabChange} 
              aria-label="gallery tabs"
              centered
              textColor="primary"
              indicatorColor="primary"
            >
              <Tab label="Exterior" {...a11yProps(0)} />
              <Tab label="Interior" {...a11yProps(1)} />
              <Tab label="Aerial & Drone" {...a11yProps(2)} />
            </Tabs>
          </Box>
          
          <TabPanel value={tabValue} index={0}>
            <Typography variant="h6" component="h3" gutterBottom align="center" sx={{ mb: 3 }}>
              Exterior Views
            </Typography>
            <ImageGallery images={exteriorImages} cols={3} />
          </TabPanel>
          
          <TabPanel value={tabValue} index={1}>
            <Typography variant="h6" component="h3" gutterBottom align="center" sx={{ mb: 3 }}>
              Interior Features
            </Typography>
            <ImageGallery images={interiorImages} cols={3} />
          </TabPanel>
          
          <TabPanel value={tabValue} index={2}>
            <Typography variant="h6" component="h3" gutterBottom align="center" sx={{ mb: 3 }}>
              Aerial & Drone Photography
            </Typography>
            <ImageGallery images={aerialImages} cols={3} />
          </TabPanel>
        </Box>
      </Section>
    </Layout>
  );
};

export default GalleryPage; 