import React, { useState } from 'react';
import { WrapperContainer } from '../components/WrapperContainer';
import { fontWeight, letterSpacing, lineHeight, padding, textAlign, useTheme } from '@mui/system';
import { Heading } from '../components/ContentPage';
import axios from 'axios';
import { Grid, Box, Input, Button, Typography, Alert, CircularProgress } from '@mui/material';

export const Home = () => {
  const theme = useTheme();
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("success"); // Can be "success" or "error"
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    setEmail(event.target.value); // Update state with the input value
  };

  const handleClick = async (e) => {
    if (!email) {
      setMessage("Please enter a valid email address.");
      setMessageType("error");
      return;
    }
    try {
      const response = await axios.post(
        `https://app.kit.com/forms/7421354/subscriptions`,
        {email_address: email},
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded", // Ensure the data is sent correctly
          },
        }
      );
      if (response.status === 200) {
        setMessage("You have successfully subscribed to the Trends!");
        setMessageType("success");
      }
    } catch (error) {
      setMessage("Error subscribing. Please try again later.");
      setMessageType("error");
    } finally {
      setIsLoading(false);
    }
  }

  return(
    <>
      <WrapperContainer bgcolor={theme.primary.light} outerSx={{paddingTop: "80px"}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box sx={{width: {xs: "100%", md: "90%"}}}>
              <Heading
                text="The Trends: Liquidity moves where the trends go—it’s the law of the land."
                sx={{
                  textAlign: "left",
                  fontSize: {xs: "28px", sm: "36px", md: "40px"},
                  lineHeight: "1.3",
                }}
              />
              <Heading
                text="Your daily guide to the world of cryptocurrency, blockchain, and decentralized finance."
                sx={{
                  textAlign: "left",
                  fontSize: {xs: "18px", sm: "22px"},
                  fontWeight: "400",
                  lineHeight: "1.5",
                }}
              />
              {message && <Alert severity={messageType} sx={{marginBottom: "20px"}}>{message}</Alert>}
              <Box
                sx={{
                  width: "100%",
                  height: {xs: "fit-content", md: "60px"},
                  padding: {xs: "8px 0", md: "8px"},
                  borderRadius: "7px",
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: {xs: "column", md: "row"},
                  marginBottom: "20px",
                  border: {xs: "none", md: `3px solid ${theme.primary.main}`},
                }}
              >
                <input
                  onChange={handleChange}
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
                  onClick={() => handleClick()}
                  disabled={isLoading}
                  sx={{
                    textTransform: "none !important",
                    height: "100%",
                    fontSize: "16px",
                    flexGrow: "1",
                    margin: {xs: "10px 0 10px 0", md: "0 0 0 10px"},
                    fontWeight: "700",
                    borderRadius: "7px",
                    letterSpacing: "1px",
                    color: theme.common.black,
                    backgroundColor: theme.primary.main,
                    lineHeight: "1.5",
                    transition: "none",
                    paddingY: {xs: "15px", md: "15px"},
                    "&:hover": {
                      backgroundColor: "rgba(232, 179, 11, 0.9)",
                    }
                  }}
                >
                  { isLoading ? <CircularProgress size={24} sx={{ color: "white" }} /> : "Join Free" }
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{display: "flex", justifyContent: "center", paddingTop: {xs: "50px", md: "0"}}}>
            <Box
              sx={{
                width: {xs: "350px", md: "340px"},
                maxWidth: "80%",
                minHeight: "400px",
                position: "relative",
              }}
            >
              <img
                style={{
                  // display: "block",
                  // marginTop: "auto",
                  position: "absolute",
                  bottom: "0",
                }}
                alt='The Trends'
                src="https://briefs.gumlet.io/wp-content/uploads/2022/01/MarketBriefs-Email.png?compress=true&quality=80&w=576&dpr=1" width="100%"
              />
            </Box>
          </Grid>
        </Grid>
      </WrapperContainer>
      <WrapperContainer bgcolor={theme.primary.main} outerSx={{paddingY: "40px", position: "relative", zIndex: "5"}}>
        <Heading
          type="h2"
          text="Stay Ahead in the Crypto Revolution"
          sx={{
            textAlign: "center",
            fontSize: {xs: "28px", sm: "36px", md: "44px"},
            lineHeight: "1.3",
            letterSpacing: "1px",
            paddingBottom: "20px !important",
            color: theme.common.black,
          }}
        />
        <Typography
          sx={{
            textAlign: "center",
            fontSize: {xs: "16px", sm: "20px"},
            fontWeight: "400",
            lineHeight: "1.5",
            color: "rgba(0, 0, 0, 0.8)",
          }}
        >
          Join thousands of readers who get the latest updates on cryptocurrency, blockchain innovations, and emerging financial trends. Delivered daily to your inbox.
        </Typography>
      </WrapperContainer>
    </>
  )
}
