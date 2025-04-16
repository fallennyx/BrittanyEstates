import React from 'react';
import { Paper, Typography, Box, SvgIconProps } from '@mui/material';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactElement<SvgIconProps>;
  bgcolor?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  bgcolor = 'background.paper',
}) => {
  return (
    <Paper
      elevation={2}
      sx={{
        p: 3,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        bgcolor,
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: 6,
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          mb: 2,
        }}
      >
        <Box
          sx={{
            color: 'primary.main',
            mr: 2,
            '& .MuiSvgIcon-root': {
              fontSize: 40,
            },
          }}
        >
          {icon}
        </Box>
        <Typography variant="h6" component="h3" fontWeight="bold">
          {title}
        </Typography>
      </Box>
      <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
        {description}
      </Typography>
    </Paper>
  );
};

export default FeatureCard; 