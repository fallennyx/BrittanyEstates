import React, {useState} from 'react';
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  Snackbar,
  TextField,
  Typography
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import {Resend} from 'resend';

// In Create React App, environment variables must be prefixed with REACT_APP_
const resendApiKey = process.env.REACT_APP_RESEND_API_KEY;
const resend = new Resend(resendApiKey);

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
  const [sending, setSending] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);

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

  const sendEmail = async (formData: ContactFormData) => {
    try {
      const { data, error } = await resend.emails.send({
        from: 'Brittany Estates <onboarding@resend.dev>',
        to: ['1eakanmu@gmail.com'], // Change this to your email address
        subject: `New Contact Form Submission - ${formData.interestedIn}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
          <p><strong>Interested In:</strong> ${formData.interestedIn}</p>
          <p><strong>Message:</strong></p>
          <p>${formData.message}</p>
        `,
      });

      if (error) {
        console.error({ error });
        setEmailError('Failed to send email. Please try again later.');
        return false;
      }

      console.log({ data });
      return true;
    } catch (err) {
      console.error('Error sending email:', err);
      setEmailError('Failed to send email. Please try again later.');
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setSending(true);
      setEmailError(null);

      const emailSent = await sendEmail(formData);

      if (emailSent) {
        if (onSubmit) {
          onSubmit(formData);
        }

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

      setSending(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSubmitted(false);
    setEmailError(null);
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
                disabled={sending}
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
                disabled={sending}
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
                disabled={sending}
            />

            <TextField
                fullWidth
                id="phone"
                name="phone"
                label="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                disabled={sending}
            />
          </Box>

          <FormControl component="fieldset" sx={{ mb: 2 }} disabled={sending}>
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
              disabled={sending}
          />

          <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              endIcon={sending ? <CircularProgress size={24} color="inherit" /> : <SendIcon />}
              disabled={sending}
          >
            {sending ? 'Sending...' : 'Send Message'}
          </Button>
        </Box>

        <Snackbar open={submitted} autoHideDuration={6000} onClose={handleCloseSnackbar}>
          <Alert onClose={handleCloseSnackbar} severity="success">
            Thank you for your message! We'll respond shortly.
          </Alert>
        </Snackbar>

        <Snackbar open={!!emailError} autoHideDuration={6000} onClose={handleCloseSnackbar}>
          <Alert onClose={handleCloseSnackbar} severity="error">
            {emailError}
          </Alert>
        </Snackbar>
      </Paper>
  );
};

export default ContactForm;
