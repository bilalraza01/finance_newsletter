import { Box } from '@mui/material';
import React from 'react';

export const WrapperContainer = ({bgcolor, innerSx, outerSx, children}) => {
  return(
    <Box
      sx={{
        backgroundColor: bgcolor,
        ...outerSx,
      }}
    >
      <Box
        sx={{
          maxWidth: "1080px",
          padding: "0 20px",
          margin: "0 auto",
          ...innerSx,
        }}
      >
        {children}
      </Box>
    </Box>
  )
}
