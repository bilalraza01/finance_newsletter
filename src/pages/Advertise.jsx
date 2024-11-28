import React from 'react';
import { Heading } from '../components/ContentPage';
import AdvertisingForm from '../components/AdvertisingForm';
import { WrapperContainer } from '../components/WrapperContainer';
import { useTheme } from '@mui/material'

export const Advertise = () => {
  const theme = useTheme();

  return(
    <WrapperContainer bgcolor={theme.common.white}>
      <Heading text="Advertise with us" />
      <AdvertisingForm />
    </WrapperContainer>
  )
}
