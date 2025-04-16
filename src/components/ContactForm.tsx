import React, { useState } from 'react';
import { 
  Box, 
  TextField, 
  Button, 
  Typography, 
  FormControl, 
  FormControlLabel, 
  Radio, 
  RadioGroup, 
  FormLabel, 
  Snackbar, 
  Alert, 
  Paper
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

interface ContactFormProps {
  onSubmit?: (formData: ContactFormData) => void;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  interestedIn: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    interestedIn: 'general-information',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      if (onSubmit) {
        onSubmit(formData);
      }
      
      // In a real application, you would submit this data to a server
      console.log('Form submitted:', formData);
      
      // Reset form after submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        interestedIn: 'general-information',
      });
      
      setSubmitted(true);
    }
  };
  
  const handleCloseSnackbar = () => {
    setSubmitted(false);
  };
  
  return (
    <Paper elevation={2} sx={{ p: 3 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Contact Us
      </Typography>
      
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <TextField
            required
            fullWidth
            id="firstName"
            name="firstName"
            label="First Name"
            value={formData.firstName}
            onChange={handleChange}
            error={!!errors.firstName}
            helperText={errors.firstName}
          />
          
          <TextField
            required
            fullWidth
            id="lastName"
            name="lastName"
            label="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            error={!!errors.lastName}
            helperText={errors.lastName}
          />
        </Box>
        
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <TextField
            required
            fullWidth
            id="email"
            name="email"
            label="Email Address"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
          />
          
          <TextField
            fullWidth
            id="phone"
            name="phone"
            label="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
        </Box>
        
        <FormControl component="fieldset" sx={{ mb: 2 }}>
          <FormLabel component="legend">I'm interested in</FormLabel>
          <RadioGroup
            name="interestedIn"
            value={formData.interestedIn}
            onChange={handleChange}
            row
          >
            <FormControlLabel value="general-information" control={<Radio />} label="General Information" />
            <FormControlLabel value="scheduling-visit" control={<Radio />} label="Scheduling a Visit" />
            <FormControlLabel value="floor-plans" control={<Radio />} label="Floor Plans" />
            <FormControlLabel value="pricing" control={<Radio />} label="Pricing & Availability" />
          </RadioGroup>
        </FormControl>
        
        <TextField
          required
          fullWidth
          id="message"
          name="message"
          label="Message"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
          error={!!errors.message}
          helperText={errors.message}
          sx={{ mb: 3 }}
        />
        
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          endIcon={<SendIcon />}
        >
          Send Message
        </Button>
      </Box>
      
      <Snackbar open={submitted} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success">
          Thank you for your message! We'll respond shortly.
        </Alert>
      </Snackbar>
    </Paper>
  );
};

export default ContactForm; 