import React from 'react';
import { Box, Typography, Button, Container, useTheme, useMediaQuery } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaText: string;
  ctaLink: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  backgroundImage,
  ctaText,
  ctaLink,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: '70vh', md: '80vh' },
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)',
          zIndex: -1,
        },
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            bgcolor: 'rgba(255, 255, 255, 0.85)',
            p: { xs: 3, md: 5 },
            borderRadius: 2,
            boxShadow: 3,
            textAlign: 'center',
            maxWidth: isMobile ? '100%' : '80%',
            mx: 'auto',
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 700,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              color: 'primary.main',
            }}
          >
            {title}
          </Typography>
          
          <Typography
            variant="h5"
            component="p"
            gutterBottom
            sx={{
              fontWeight: 400,
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              mb: 4,
              fontStyle: 'italic',
            }}
          >
            {subtitle}
          </Typography>
          
          <Button
            component={RouterLink}
            to={ctaLink}
            variant="contained"
            color="primary"
            size="large"
            sx={{
              py: 1.5,
              px: 4,
              fontSize: '1.1rem',
              fontWeight: 500,
              borderRadius: '30px',
              boxShadow: 2,
              '&:hover': {
                boxShadow: 4,
              },
            }}
          >
            {ctaText}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection; 