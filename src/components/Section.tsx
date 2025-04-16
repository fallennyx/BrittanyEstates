import React from 'react';
import { Box, Container, Typography, Divider, useTheme } from '@mui/material';

interface SectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  bgcolor?: string;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
  titleAlign?: 'left' | 'center' | 'right';
  py?: number;
  id?: string;
}

const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  children,
  bgcolor = 'transparent',
  maxWidth = 'lg',
  titleAlign = 'center',
  py = 6,
  id,
}) => {
  const theme = useTheme();

  return (
    <Box 
      component="section" 
      sx={{ 
        py, 
        bgcolor,
      }}
      id={id}
    >
      <Container maxWidth={maxWidth}>
        <Typography 
          variant="h4" 
          component="h2" 
          align={titleAlign} 
          gutterBottom
          sx={{ 
            fontFamily: '"Playfair Display", serif',
            fontWeight: 600,
            position: 'relative',
            display: 'inline-block',
            width: titleAlign === 'center' ? '100%' : 'auto',
          }}
        >
          {title}
        </Typography>
        
        {subtitle && (
          <Typography 
            variant="subtitle1" 
            align={titleAlign} 
            color="text.secondary" 
            paragraph
            sx={{ mb: 4 }}
          >
            {subtitle}
          </Typography>
        )}
        
        <Divider sx={{ mb: 4, width: titleAlign === 'center' ? '50%' : '100%', mx: titleAlign === 'center' ? 'auto' : 0 }} />
        
        {children}
      </Container>
    </Box>
  );
};

export default Section; 