import React from 'react';
import { Card, CardContent, Typography, Avatar, Box, Rating } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

interface TestimonialCardProps {
  name: string;
  role?: string;
  testimonial: string;
  rating?: number;
  avatarUrl?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  testimonial,
  rating = 5,
  avatarUrl,
}) => {
  return (
    <Card elevation={2} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', mb: 2 }}>
          <Box sx={{ position: 'relative' }}>
            <FormatQuoteIcon 
              sx={{ 
                fontSize: 40, 
                color: 'primary.main',
                opacity: 0.2,
                position: 'absolute',
                transform: 'rotate(180deg)',
                top: -10,
                left: -10,
              }} 
            />
            <Typography variant="body1" paragraph sx={{ position: 'relative', pl: 3, pt: 2 }}>
              {testimonial}
            </Typography>
          </Box>
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
          {avatarUrl && (
            <Avatar 
              src={avatarUrl} 
              alt={name}
              sx={{ width: 56, height: 56, mr: 2 }}
            />
          )}
          
          <Box>
            <Typography variant="subtitle1" component="div" fontWeight="bold">
              {name}
            </Typography>
            
            {role && (
              <Typography variant="body2" color="text.secondary">
                {role}
              </Typography>
            )}
            
            <Rating value={rating} readOnly size="small" sx={{ mt: 0.5 }} />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard; 