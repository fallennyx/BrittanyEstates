import React, { useState } from 'react';
import { Box, ImageList, ImageListItem, Modal, IconButton, useTheme, useMediaQuery } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export interface GalleryImage {
  img: string;
  title: string;
  featured?: boolean;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  cols?: number;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, cols = 3 }) => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));

  const handleOpen = (index: number) => {
    setSelectedImage(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const getResponsiveCols = () => {
    if (isMobile) return 1;
    if (isMedium) return 2;
    return cols;
  };

  return (
    <>
      <ImageList variant="masonry" cols={getResponsiveCols()} gap={16}>
        {images.map((item, index) => (
          <ImageListItem 
            key={index} 
            onClick={() => handleOpen(index)}
            sx={{
              '& img': {
                borderRadius: 2,
                transition: 'transform 0.3s ease',
              },
              '&:hover img': {
                transform: 'scale(1.02)',
              },
              cursor: 'pointer',
            }}
          >
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="image-modal"
        aria-describedby="full-size-image"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box sx={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh' }}>
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: 'white',
              bgcolor: 'rgba(0,0,0,0.4)',
              '&:hover': {
                bgcolor: 'rgba(0,0,0,0.6)',
              },
              zIndex: 1,
            }}
          >
            <CloseIcon />
          </IconButton>

          <IconButton
            onClick={handlePrev}
            sx={{
              position: 'absolute',
              left: 8,
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'white',
              bgcolor: 'rgba(0,0,0,0.4)',
              '&:hover': {
                bgcolor: 'rgba(0,0,0,0.6)',
              },
              zIndex: 1,
            }}
          >
            <ArrowBackIosIcon />
          </IconButton>

          <Box
            component="img"
            src={images[selectedImage].img}
            alt={images[selectedImage].title}
            sx={{
              maxWidth: '100%',
              maxHeight: '90vh',
              objectFit: 'contain',
              display: 'block',
              borderRadius: 2,
            }}
          />

          <IconButton
            onClick={handleNext}
            sx={{
              position: 'absolute',
              right: 8,
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'white',
              bgcolor: 'rgba(0,0,0,0.4)',
              '&:hover': {
                bgcolor: 'rgba(0,0,0,0.6)',
              },
              zIndex: 1,
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Modal>
    </>
  );
};

export default ImageGallery; 