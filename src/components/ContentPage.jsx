import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material';
import { WrapperContainer } from './WrapperContainer';

export const Heading = ({text, sx, type = "h1"}) => {
  const theme = useTheme();
  return(
    <Typography
      component={type}
      sx={{
        color: theme.primary.heading,
        fontSize: {xs: "28px", sm: "36px", md: "46px"},
        fontWeight: "700",
        textAlign: "center",
        paddingBottom: "30px",
        ...sx,
      }}
    >
      {text}
    </Typography>
  )
}

export const ContentPage = ({heading, children}) => {
  const theme = useTheme();
  return(
    <WrapperContainer
      bgcolor={theme.primary.light}
      innerSx={{
        paddingY: "50px",
      }}
    >
      <Box>
        <Heading textAlign="center" text={heading} />
        {children}
      </Box>
    </WrapperContainer>
  )
}