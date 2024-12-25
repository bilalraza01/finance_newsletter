import React from 'react';
import { Heading } from '../components/ContentPage';
import AdvertisingForm from '../components/AdvertisingForm';
import { WrapperContainer } from '../components/WrapperContainer';
import { Typography, useTheme } from '@mui/material'

export const Advertise = () => {
  const theme = useTheme();

  return(
    <WrapperContainer bgcolor={theme.common.white}>
      <Heading text="Advertise with us" />
      <Typography
        sx={{
          width: { xs: "100%", md: "60%" },
          textAlign: "center",
          margin: "0 auto 30px",
        }}
      >
        We’re excited about the opportunity to collaborate! If your brand aligns with the world of modern finance, investing, or innovation, fill out the form below. A member of The Trends team will get back to you shortly.
      </Typography>
      <AdvertisingForm />
    </WrapperContainer>
  )
}
