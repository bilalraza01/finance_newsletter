import React from 'react';
import { WrapperContainer } from '../components/WrapperContainer';
import ContactForm from '../components/ContactForm';
import { useTheme } from '@mui/material';

export const Contact = () => {
  const theme = useTheme();
  return(
    <WrapperContainer bgcolor={theme.primary.light} innerSx={{paddingY: "50px"}}>
      <ContactForm />
    </WrapperContainer>
  )
}
