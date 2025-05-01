import React from 'react';
import { Box, Typography, Paper, Divider } from '@mui/material';
import Layout from '../components/Layout';
import Section from '../components/Section';

// Placeholder image for the about page
const aboutImage = 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80';

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <Box
        sx={{
          position: 'relative',
          height: '40vh',
          backgroundImage: `url(${aboutImage})`,
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
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{
            color: 'white',
            position: 'relative',
            fontFamily: '"Playfair Display", serif',
            textAlign: 'center',
            px: 2,
          }}
        >
          About Brittney Estates
        </Typography>
      </Box>

      <Section
        title="Our Story"
        subtitle="A Vision of Luxury Living in Northport"
      >
        <Box sx={{ mb: 6 }}>
          <Typography variant="body1" paragraph>
            Brittney Estates began as a vision to create an exclusive community of luxury homes that harmonize with the natural beauty of Northport, Long Island. What was once pristine land has been thoughtfully developed into a collection of elegant residences, each designed to offer residents an unparalleled living experience.
          </Typography>
          <Typography variant="body1" paragraph>
            Our journey started with careful planning and a commitment to preserving the natural character of the land. Each lot was meticulously laid out to maximize privacy and views, while roadways and infrastructure were designed to blend seamlessly with the landscape.
          </Typography>
          <Typography variant="body1" paragraph>
            Today, Brittney Estates stands as a testament to our dedication to creating not just houses, but true homes where families can thrive and create lasting memories.
          </Typography>
        </Box>

        <Paper elevation={2} sx={{ p: 4, mb: 6, bgcolor: 'rgba(43, 74, 56, 0.05)' }}>
          <Typography variant="h5" component="h3" gutterBottom sx={{ fontFamily: '"Playfair Display", serif' }}>
            Our Vision
          </Typography>
          <Typography variant="body1" paragraph>
            To create an exceptional living environment that combines architectural excellence, natural beauty, and community harmony. We envision Brittney Estates as more than just a luxury development—it's a place where residents feel a deep connection to their surroundings and enjoy a lifestyle of comfort and distinction.
          </Typography>
        </Paper>

        <Divider sx={{ my: 6 }} />

        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" component="h3" gutterBottom sx={{ fontFamily: '"Playfair Display", serif' }}>
            About The Developer
          </Typography>
          <Typography variant="body1" paragraph>
            Pebble Hill Building Corp has established itself as a premier developer of luxury properties across Long Island. With over two decades of experience, our portfolio showcases our commitment to quality, innovation, and customer satisfaction.
          </Typography>
          <Typography variant="body1" paragraph>
            Led by a team of seasoned professionals, we approach each project with a dedication to excellence that has earned us a reputation for creating exceptional living spaces that stand the test of time.
          </Typography>
          <Typography variant="body1" paragraph>
            Our approach integrates sustainable building practices with innovative design, ensuring that our developments not only provide comfort and luxury but also respect and enhance the natural environment.
          </Typography>
        </Box>

        <Box>
          <Typography variant="h5" component="h3" gutterBottom sx={{ fontFamily: '"Playfair Display", serif' }}>
            About The Builder
          </Typography>
          <Typography variant="body1" paragraph>
            Each home in Brittney Estates is crafted with unwavering attention to detail by our skilled team of builders. Our construction specialists bring decades of combined experience to every project, ensuring that each residence meets our exacting standards.
          </Typography>
          <Typography variant="body1" paragraph>
            We employ only the finest materials and latest building techniques, combining traditional craftsmanship with modern innovations to create homes that are both beautiful and enduring.
          </Typography>
          <Typography variant="body1" paragraph>
            Our builders work closely with homeowners throughout the construction process, providing regular updates and opportunities for customization to ensure that each residence truly reflects the owner's vision and lifestyle.
          </Typography>
        </Box>
      </Section>
    </Layout>
  );
};

export default AboutPage; 