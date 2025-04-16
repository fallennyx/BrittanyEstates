import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Paper,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  faqs: FaqItem[];
  title?: string;
}

const FaqAccordion: React.FC<FaqAccordionProps> = ({ 
  faqs, 
  title = 'Frequently Asked Questions' 
}) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (
    _event: React.SyntheticEvent,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Paper elevation={0} sx={{ bgcolor: 'transparent' }}>
      {title && (
        <Typography 
          variant="h5" 
          component="h2" 
          gutterBottom 
          sx={{ mb: 3, fontFamily: '"Playfair Display", serif' }}
        >
          {title}
        </Typography>
      )}
      
      <Box>
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            sx={{
              mb: 1,
              '&:before': {
                display: 'none',
              },
              boxShadow: expanded === `panel${index}` ? 2 : 1,
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
              sx={{
                backgroundColor: expanded === `panel${index}` ? 'rgba(0, 0, 0, 0.03)' : 'transparent',
              }}
            >
              <Typography variant="subtitle1" fontWeight={expanded === `panel${index}` ? 'bold' : 'normal'}>
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" color="text.secondary">
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Paper>
  );
};

export default FaqAccordion; 