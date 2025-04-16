import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Layout from '../components/Layout';
import Section from '../components/Section';
import FaqAccordion, { FaqItem } from '../components/FaqAccordion';
import { Link as RouterLink } from 'react-router-dom';

// Sample FAQ data
const generalFaqs: FaqItem[] = [
  {
    question: "What is Brittany Estates?",
    answer: "Brittany Estates is an exclusive community of luxury homes in Northport, Long Island, developed by Pebble Hill Building Corp. It offers elegant residences designed with premium finishes and exceptional craftsmanship."
  },
  {
    question: "Where is Brittany Estates located?",
    answer: "Brittany Estates is located in Northport, Long Island, New York. The community is situated in a peaceful setting that offers privacy while still being conveniently close to local amenities."
  },
  {
    question: "How many homes will be in the community?",
    answer: "Brittany Estates is an intimate community with a limited number of homesites to ensure privacy and exclusivity. Please contact our sales office for the most up-to-date information on availability."
  },
  {
    question: "Is Brittany Estates located in a good school district?",
    answer: "Yes, Brittany Estates is located in the highly rated Northport-East Northport School District, known for its excellent academic programs, extracurricular activities, and dedicated faculty."
  }
];

const homesFaqs: FaqItem[] = [
  {
    question: "What home designs are available?",
    answer: "We offer a variety of home designs ranging from traditional to contemporary styles. Each design can be customized to meet your specific preferences and needs. Visit our Home Designs page to view our available models."
  },
  {
    question: "What are the standard features included in Brittany Estates homes?",
    answer: "Our homes include premium features such as gourmet kitchens with high-end appliances, luxurious master suites, hardwood flooring, custom millwork, energy-efficient systems, and smart home technology. Each home is built with exceptional attention to detail and quality craftsmanship."
  },
  {
    question: "Can I customize my home?",
    answer: "Yes, we offer extensive customization options. Our design team will work with you to personalize your home, from layout adjustments to finishes and fixtures. We want to ensure your home reflects your individual style and preferences."
  },
  {
    question: "What is the size range of the homes?",
    answer: "Our homes range from approximately 2,800 to 4,500+ square feet, with various bedroom and bathroom configurations available to suit different family sizes and lifestyle needs."
  }
];

const buyingFaqs: FaqItem[] = [
  {
    question: "What is the price range for homes in Brittany Estates?",
    answer: "Home prices vary depending on the model, lot size, and customizations. Please contact our sales office for current pricing information."
  },
  {
    question: "How do I reserve a homesite?",
    answer: "To reserve a homesite, you'll need to make an appointment with our sales team, select your preferred lot, and provide a reservation deposit. Our team will guide you through the entire process."
  },
  {
    question: "Do you offer financing options?",
    answer: "While we don't provide direct financing, we work with several preferred lenders who are familiar with our community and can offer competitive rates and terms. We're happy to provide referrals upon request."
  },
  {
    question: "What is the timeline from contract to move-in?",
    answer: "The construction timeline typically ranges from 10-14 months, depending on the complexity of your home design and customizations. Our team will provide you with a detailed schedule during the contract phase."
  }
];

const FaqPage: React.FC = () => {
  return (
    <Layout>
      <Section
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about Brittany Estates"
      >
        <Box sx={{ mb: 6 }}>
          <Typography variant="h6" gutterBottom sx={{ color: 'primary.main' }}>
            General Information
          </Typography>
          <FaqAccordion faqs={generalFaqs} title="" />
        </Box>
        
        <Box sx={{ mb: 6 }}>
          <Typography variant="h6" gutterBottom sx={{ color: 'primary.main' }}>
            About Our Homes
          </Typography>
          <FaqAccordion faqs={homesFaqs} title="" />
        </Box>
        
        <Box sx={{ mb: 6 }}>
          <Typography variant="h6" gutterBottom sx={{ color: 'primary.main' }}>
            Buying Process
          </Typography>
          <FaqAccordion faqs={buyingFaqs} title="" />
        </Box>
        
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Typography variant="h6" gutterBottom>
            Have more questions?
          </Typography>
          <Typography variant="body1" paragraph>
            We're here to help! Contact us for personalized assistance.
          </Typography>
          <Button
            component={RouterLink}
            to="/contact"
            variant="contained"
            color="primary"
            size="large"
          >
            Contact Us
          </Button>
        </Box>
      </Section>
    </Layout>
  );
};

export default FaqPage; 