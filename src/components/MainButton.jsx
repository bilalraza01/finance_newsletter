import React from 'react';
import { Button } from '@mui/material';
import { useTheme } from '@mui/material';

export const MainButton = ({text, onlcik}) => {
  const theme = useTheme();
  return(
    <Button
      onClick={onlcik}
      sx={{
        backgroundColor: theme.primary.main,
        color: theme.common.white,
        boxShadow: "rgba(0,0,0,.5) 0 10px 20px -15px",
        borderRadius: "7px",
        padding: "17px 45px",
        fontWeight: "500",
        fontSize: "14px",
        letterSpacing: "1px",
      }}
    >
      {text}
    </Button>
  )
}