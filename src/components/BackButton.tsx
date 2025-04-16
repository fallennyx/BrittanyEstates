import React from 'react';
import { IconButton, SxProps, Theme } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

interface BackButtonProps {
  to?: string;
  sx?: SxProps<Theme>;
  color?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ 
  to = '/home-designs', 
  sx = {}, 
  color = 'white' 
}) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(to);
  };

  return (
    <IconButton 
      onClick={handleGoBack}
      sx={{ 
        color,
        '&:hover': {
          bgcolor: `rgba(255, 255, 255, 0.1)`
        },
        ...sx
      }}
      aria-label="back"
    >
      <ArrowBackIcon />
    </IconButton>
  );
};

export default BackButton; 