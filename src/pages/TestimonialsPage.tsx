import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Layout from '../components/Layout';
import Section from '../components/Section';
import TestimonialCard from '../components/TestimonialCard';

// Sample testimonial data
const testimonials = [
  {
    name: 'Michael & Sarah Johnson',
    role: 'Homeowners since 2022',
    testimonial: 'Moving to Brittney Estates was the best decision we\'ve made. The quality of construction is exceptional, and the attention to detail in our home is something visitors always comment on. The community is peaceful yet close to everything we need.',
    rating: 5,
  },
  {
    name: 'David Rodriguez',
    role: 'Custom Home Client',
    testimonial: 'Working with Pebble Hill Building Corp to design our custom home was a seamless experience. Their team was attentive to our needs and vision, and the finished product exceeded our expectations. The craftsmanship is simply outstanding.',
    rating: 5,
  },
  {
    name: 'Jennifer & Robert Chen',
    role: 'Residents since 2021',
    testimonial: 'We fell in love with Brittney Estates from the moment we visited. The location is perfect - close to beaches, great schools, and still private. Our home is beautiful and solidly built. We appreciate the developer\'s commitment to creating a special community.',
    rating: 5,
  },
  {
    name: 'Elizabeth Taylor',
    role: 'New Homeowner',
    testimonial: 'After searching for months, we knew Brittney Estates was special. The design of our home strikes the perfect balance between luxury and comfort. The builder was responsive and professional throughout the entire process.',
    rating: 4,
  },
  {
    name: 'James & Mary Wilson',
    role: 'Homeowners since 2022',
    testimonial: 'The quality of construction in our Brittney Estates home is remarkable. From the foundation to the finishes, everything is top-notch. We especially love the open floor plan and high ceilings that give our home a spacious, airy feel.',
    rating: 5,
  },
  {
    name: 'Thomas & Patricia Murphy',
    role: 'Relocated from Manhattan',
    testimonial: 'After years in the city, we wanted a home that offered both luxury and tranquility. Brittney Estates delivered exactly what we were looking for. The natural setting combined with elegant, well-built homes makes this community unique.',
    rating: 5,
  },
];

const TestimonialsPage: React.FC = () => {
  return (
    <Layout>
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ fontFamily: '"Playfair Display", serif' }}
          >
            Client Testimonials
          </Typography>
          <Typography variant="h6">
            Hear what our homeowners have to say about life at Brittney Estates
          </Typography>
        </Container>
      </Box>

      <Section title="Our Homeowners' Stories" subtitle="Real experiences from families who call Brittney Estates home">
        <Box sx={{ flexGrow: 1, py: 2 }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
            {testimonials.map((testimonial, index) => (
              <Box key={index} sx={{ width: { xs: '100%', sm: 'calc(50% - 16px)', md: 'calc(33.333% - 16px)' } }}>
                <TestimonialCard
                  name={testimonial.name}
                  role={testimonial.role}
                  testimonial={testimonial.testimonial}
                  rating={testimonial.rating}
                />
              </Box>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            my: 6,
            p: 4,
            bgcolor: 'background.paper',
            borderRadius: 2,
            textAlign: 'center',
            boxShadow: 1,
          }}
        >
          <Typography variant="h5" component="h3" gutterBottom sx={{ fontFamily: '"Playfair Display", serif' }}>
            Share Your Experience
          </Typography>
          <Typography variant="body1" paragraph>
            Are you a Brittney Estates homeowner? We'd love to hear about your experience.
            Please contact us to share your testimonial.
          </Typography>
          <Typography variant="body2" color="primary" fontWeight="bold">
            Email us at testimonials@brittanyestates.com
          </Typography>
        </Box>
      </Section>
    </Layout>
  );
};

export default TestimonialsPage; 