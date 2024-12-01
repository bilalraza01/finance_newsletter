import React, { useState } from 'react';
import { CircularProgress, TextField, Button, Select, MenuItem, FormControl, InputLabel, Typography, Box, Divider, Grid, Alert } from '@mui/material';
import axios from 'axios';
import { Heading } from './ContentPage';

const ContactForm = () => {
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("success"); // Can be "success" or "error"
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dropdown: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateFields = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First Name is required.';
    if (!formData.email) newErrors.email = 'Email is required.';
    if (!formData.dropdown) newErrors.dropdown = 'Please select an option.';
    if (!formData.message) newErrors.message = 'Message is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (!validateFields()) return;

    try {
      const dataForKit = {
        "email_address": formData.email,
        "fields[first_name]": formData.firstName,
        "fields[last_name]": formData.lastName,
        "fields[how_can_we_help]": formData.dropdown,
        "fields[subject]": formData.subject,
        "fields[your_message]": formData.message,
      }
      const response = await axios.post(
        `https://app.kit.com/forms/7421312/subscriptions`,
        dataForKit,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded", // Ensure the data is sent correctly
          },
        }
      );
      if (response.status === 200) {
        setMessage("Form submitted successfully!");
        setMessageType("success");
      }
    } catch (error) {
      setMessage("Error submitting form. Please try again later.");
      setMessageType("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      sx={{
        maxWidth: '700px',
        margin: 'auto',
        padding: {xs: "40px", md: "60px"},
        backgroundColor: 'white',
        boxShadow: "0px 5px 15px rgba(0,0,0,0.08)",
        borderRadius: 2,
        marginTop: "30px",
      }}
    >
      <Heading
        text="Contact Us"
        sx={{
          fontSize: {xs: "28px", sm: "36px", md: "54px"},
          padding: {xs: "10px 0 30px 0 !important", md: "10px 0 70px 0 !important"},
        }}
      />
      <Divider sx={{ mb: 3 }} />
      <form onSubmit={handleSubmit} style={{ paddingTop: "10px" }}>
        {message && <Alert severity={messageType} sx={{marginBottom: "20px"}}>{message}</Alert>}
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 2 }}>
              <TextField
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                fullWidth
                required
                error={!!errors.firstName}
                helperText={errors.firstName}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 2 }}>
              <TextField
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                fullWidth
              />
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ mb: 2 }}>
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
            error={!!errors.email}
            helperText={errors.email}
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <FormControl fullWidth error={!!errors.dropdown}>
            <InputLabel>How Can We Help?</InputLabel>
            <Select
              name="dropdown"
              value={formData.dropdown}
              onChange={handleChange}
            >
              <MenuItem value="">- Select -</MenuItem>
              <MenuItem value="Need support with your Briefs?">
                Need support with your Briefs?
              </MenuItem>
              <MenuItem value="Media Inquiry?">Media Inquiry?</MenuItem>
              <MenuItem value="Want to talk about something else?">
                Want to talk about something else?
              </MenuItem>
            </Select>
            {errors.dropdown && (
              <Typography color="error" variant="caption">
                {errors.dropdown}
              </Typography>
            )}
          </FormControl>
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextField
            label="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            fullWidth
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextField
            label="Your Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            multiline
            rows={4}
            fullWidth
            required
            error={!!errors.message}
            helperText={errors.message}
          />
        </Box>
        <Button disabled={isLoading} type="submit" variant="contained" color="primary" fullWidth>
          {isLoading ? <CircularProgress size={24} sx={{ color: "white" }} /> : "Submit Form"}
        </Button>
      </form>
    </Box>
  );
};

export default ContactForm;
