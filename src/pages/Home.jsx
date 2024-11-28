import React, { useState } from 'react';
import { WrapperContainer } from '../components/WrapperContainer';
import { fontWeight, letterSpacing, lineHeight, padding, textAlign, useTheme } from '@mui/system';
import { Heading } from '../components/ContentPage';
import { Grid, Box, Input, Button, Typography } from '@mui/material';

export const Home = () => {
  const theme = useTheme();

  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    setEmail(event.target.value); // Update state with the input value
  };

  return(
    <>
      <WrapperContainer bgcolor={theme.primary.light} outerSx={{paddingTop: "80px"}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box sx={{width: {xs: "100%", md: "90%"}}}>
              <Heading
                text="Market Briefs: The free financial newsletter for regular investors"
                sx={{
                  textAlign: "left",
                  fontSize: {xs: "28px", sm: "36px", md: "40px"},
                  lineHeight: "1.3",
                }}
              />
              <Heading
                text="We keep it brief, sign up for Market Briefs today!"
                sx={{
                  textAlign: "left",
                  fontSize: {xs: "18px", sm: "22px"},
                  fontWeight: "400",
                  lineHeight: "1.5",
                }}
              />
              <Box
                sx={{
                  width: "100%",
                  height: {xs: "fit-content", md: "60px"},
                  padding: {xs: "8px 0", md: "8px"},
                  borderRadius: "7px",
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: {xs: "column", md: "row"},
                  border: {xs: "none", md: `3px solid ${theme.primary.main}`},
                }}
              >
                <input
                  className='email-input'
                  placeholder="Email Address"
                  style={{
                    display: "inline-block",
                    backgroundColor: "#f5f5f5",
                    height: "40px",
                    fontSize: "18px",
                    borderRadius: "7px",
                    padding: "10px",
                    border: "none",
                    color: theme.primary.main,
                    outline: "none",
                  }}
                />
                <Button
                  sx={{
                    textTransform: "none !important",
                    height: "100%",
                    fontSize: "16px",
                    flexGrow: "1",
                    margin: {xs: "10px 0 10px 0", md: "0 0 0 10px"},
                    fontWeight: "700",
                    borderRadius: "7px",
                    letterSpacing: "1px",
                    color: theme.common.white,
                    backgroundColor: theme.primary.main,
                    lineHeight: "1.5",
                    transition: "none",
                    paddingY: {xs: "15px", md: "15px"},
                    "&:hover": {
                      backgroundColor: "rgba(0, 106, 254, 0.9)",
                    }
                  }}
                >
                  Join Free
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{display: "flex", justifyContent: "center", paddingTop: {xs: "50px", md: "0"}}}>
            <Box
              sx={{
                width: {xs: "350px", md: "340px"},
                maxWidth: "80%",
                position: "relative",
                top: "5px",
              }}
            >
              <img src="https://briefs.gumlet.io/wp-content/uploads/2022/01/MarketBriefs-Email.png?compress=true&quality=80&w=576&dpr=1" width="100%" />
            </Box>
          </Grid>
        </Grid>
      </WrapperContainer>
      <WrapperContainer bgcolor={theme.primary.main} outerSx={{paddingY: "40px", position: "relative", zIndex: "5"}}>
        <Heading
          type="h2"
          text="Read LESS News, 100,000s Of Investors"
          sx={{
            textAlign: "center",
            fontSize: {xs: "28px", sm: "36px", md: "44px"},
            lineHeight: "1.3",
            letterSpacing: "1px",
            paddingBottom: "20px !important",
            color: theme.common.white,
          }}
        />
        <Typography
          sx={{
            textAlign: "center",
            fontSize: {xs: "16px", sm: "20px"},
            fontWeight: "400",
            lineHeight: "1.5",
            color: "rgba(255, 255, 255, 0.8)",
          }}
        >
          start their mornings with Market Briefs. You should too.
        </Typography>
      </WrapperContainer>
    </>
  )
}
