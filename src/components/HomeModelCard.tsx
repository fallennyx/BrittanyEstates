import React from 'react';
import { 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Box, 
  Chip, 
  Button,
} from '@mui/material';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import SquareFootIcon from '@mui/icons-material/SquareFoot';

interface HomeModelCardProps {
  name: string;
  description: string;
  imageUrl: string;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  features?: string[];
  price?: string;
  onClick?: () => void;
}

const HomeModelCard: React.FC<HomeModelCardProps> = ({
  name,
  description,
  imageUrl,
  bedrooms,
  bathrooms,
  squareFeet,
  features = [],
  price,
  onClick,
}) => {
  return (
    <Card 
      elevation={3} 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: 6,
        },
      }}
    >
      <CardMedia
        component="img"
        height="250"
        image={imageUrl}
        alt={name}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h5" component="h2" gutterBottom sx={{ fontFamily: '"Playfair Display", serif' }}>
          {name}
        </Typography>
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Box display="flex" alignItems="center">
            <BedIcon sx={{ mr: 1, color: 'primary.main' }} />
            <Typography variant="body2">{bedrooms} Beds</Typography>
          </Box>
          
          <Box display="flex" alignItems="center">
            <BathtubIcon sx={{ mr: 1, color: 'primary.main' }} />
            <Typography variant="body2">{bathrooms} Baths</Typography>
          </Box>
          
          <Box display="flex" alignItems="center">
            <SquareFootIcon sx={{ mr: 1, color: 'primary.main' }} />
            <Typography variant="body2">{squareFeet} sqft</Typography>
          </Box>
        </Box>
        
        <Typography variant="body2" color="text.secondary" paragraph>
          {description}
        </Typography>
        
        {features.length > 0 && (
          <Box sx={{ mb: 2 }}>
            {features.map((feature, index) => (
              <Chip 
                key={index} 
                label={feature} 
                size="small" 
                sx={{ mr: 0.5, mb: 0.5 }} 
              />
            ))}
          </Box>
        )}
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 'auto' }}>
          {price && (
            <Typography variant="h6" color="primary" fontWeight="bold">
              {price}
            </Typography>
          )}
          
          <Button 
            variant="outlined" 
            color="primary" 
            onClick={onClick}
          >
            View Details
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default HomeModelCard; 