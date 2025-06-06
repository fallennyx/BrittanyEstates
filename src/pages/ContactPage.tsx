import React from 'react';
import {Box, Link, Paper, Typography} from '@mui/material';
import Layout from '../components/Layout';
import Section from '../components/Section';
import ContactForm from '../components/ContactForm';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const ContactPage: React.FC = () => {
  return (
    <Layout>
      <Section
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out to learn more about Brittney Estates."
      >
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, mb: 6 }}>
          <Box sx={{ flex: 1 }}>
            <ContactForm />
          </Box>
          
          <Box sx={{ flex: 1 }}>
            <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h4" component="h3" gutterBottom sx={{ fontFamily: '"Playfair Display", serif' }}>
                Contact Information
              </Typography>
              
              <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                <LocationOnIcon sx={{ color: 'primary.main', mr: 2, mt: 0.5, fontSize: '1.5rem' }} />
                <Box>
                  <Typography variant="h6" fontWeight="bold">
                    Visit Our Sales Office
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 1, fontSize: '1.1rem' }}>
                    Douglas Elliman<br />
                    1772 E Jericho Turnpike<br />
                    Huntington, NY 11743
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                    <br />
                    Pebble Hill Building Corp<br />
                    1016 Fort Salonga Road<br />
                    Northport, NY 11768
                  </Typography>
                </Box>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                <PhoneIcon sx={{ color: 'primary.main', mr: 2, mt: 0.5, fontSize: '1.5rem' }} />
                <Box>
                  <Typography variant="h6" fontWeight="bold">
                    Call Us
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                    <Link href="tel:6317932255" color="inherit" underline="hover">
                      (631) 793-CALL (2255)
                    </Link>
                  </Typography>
                </Box>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                <EmailIcon sx={{ color: 'primary.main', mr: 2, mt: 0.5, fontSize: '1.5rem' }} />
                <Box>
                  <Typography variant="h6" fontWeight="bold">
                    Email Us
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                    <Link href="mailto:info@brittneyestates.com" color="inherit" underline="hover">
                      info@brittneyestates.com
                    </Link>
                  </Typography>
                </Box>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <AccessTimeIcon sx={{ color: 'primary.main', mr: 2, mt: 0.5, fontSize: '1.5rem' }} />
                <Box>
                  <Typography variant="h6" fontWeight="bold">
                    Office Hours
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                    Monday - Friday: 9:00 AM - 5:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: By appointment only
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Box>
        </Box>

        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" component="h3" gutterBottom textAlign="center" sx={{ fontFamily: '"Playfair Display", serif' }}>
            Find Us
          </Typography>
          
          {/* Embedded Google Map - In a real project, replace with actual Google Maps embed or component */}
          <Box 
            component="iframe" 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48217.19126283846!2d-73.36176651305892!3d40.89967033113422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e8265a2a849549%3A0xf8bc9ac05c03a80!2sNorthport%2C%20NY!5e0!3m2!1sen!2sus!4v1614967913081!5m2!1sen!2sus" 
            width="100%" 
            height="450" 
            sx={{ border: 0, borderRadius: 1 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Brittney Estates Location"
            aria-label="Map showing the location of Brittney Estates"
          />
        </Box>
      </Section>
    </Layout>
  );
};

export default ContactPage; 