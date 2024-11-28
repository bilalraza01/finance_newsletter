import React from 'react';
import { Box, Grid, useTheme, Typography, Link as MuiLink } from '@mui/material';
import { WrapperContainer } from './WrapperContainer';
import { color, fontSize, styled } from '@mui/system';
import { Link } from 'react-router-dom';
import  {ReactComponent as LinkedinIcon}  from '../assets/images/icons/linkedin.svg';
import  {ReactComponent as InstagramIcon}  from '../assets/images/icons/instagram.svg';
import  {ReactComponent as TwitterIcon}  from '../assets/images/icons/twitter.svg';

const SocialIcon = ({
  link,
  children,
}) => {
  const theme = useTheme();
  return (
    <MuiLink href={link} target="_blank">
      <Box
        sx={{
          width: "30px",
          height: "30px",
          backgroundColor: theme.primary.link,
          borderRadius: "10px",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          marginRight: "10px",
          cursor: "pointer",
          transition: "background-color 0.3s",
          '&:hover': {
            backgroundColor: theme.primary.main,
          }
        }}
        >
        {children}
      </Box>
    </MuiLink>
  );
}
const MenuLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  fontFamily: theme.typography.fontFamily,
  fontSize: "14px",
  display: "block",
  fontWeight: "400",
  textAlign: "right",
  margin: "0 auto 15px 0", // Default value
  width: "fit-content",
  color: theme.primary.link,
  cursor: "pointer",
  transition: "color .3s",
  "&:hover": {
    color: theme.palette.primary.main,
  },
  [theme.breakpoints.up("md")]: {
    margin: "0 0 15px auto", // Overwrite for larger screens
  },
}));


// const MenuLink = styled(Link)(({ theme }) => ({
//   textDecoration: "none",
//   fontFamily: theme.typography.fontFamily,
//   fontSize: "14px",
//   display: "block",
//   fontWeight: "400",
//   textAlign: "right",
//   margin: {xs: "15px auto", md: "0 0 15px auto"},
//   width: "fit-content",
//   color: theme.primary.link,
//   cursor: "pointer",
//   transition: "color .3s",
//   "&:hover": {
//     color: theme.primary.main,
//   }
//   [theme.breakpoints.up("md")]: {
// }));

export const Footer = () => {
  const theme = useTheme();
  console.log(theme.primary.main);
  return(
    <WrapperContainer
      bgcolor={theme.common.white}
      innerSx={{
        padding: "50px 20px",
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <Typography
            component="h6"
            sx={{
              color: theme.primary.heading,
              fontWeight: "600",
              lineHeight: "1.3",
              fontSize: "24px",
              marginBottom: "10px",
            }}
          >
            About The Briefs
          </Typography>
          <Typography
            sx={{
              color: theme.primary.footerText,
              fontSize: "14px",
              textAlign: "justify",
              fontWeight: "400",
              lineHeight: "1.5",
            }}
          >
            Hello Briefers! Our Briefs are intended to keep you educated and entertained. Every morning, we break down the top news stories and deliver them to your inbox for free.
          </Typography>
          <Box sx={{display: "flex", justifyContent: "left", width: "calc(100% - 20px)", marginTop: "15px"}}>
            <SocialIcon link="https://www.linkedin.com">
              <LinkedinIcon width='15px' fill='#FFF' />
            </SocialIcon>

            <SocialIcon link="https://www.instagram.com">
              <InstagramIcon width='15px' fill='#FFF' />
            </SocialIcon>

            <SocialIcon link="https://www.twitter.com">
              <TwitterIcon width='15px' fill='#FFF' />
            </SocialIcon>
          </Box>
        </Grid>
        <Grid
          item xs={12} md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            paddingTop: {xs: "20px !important", md: "0"},
          }}
        >
          <MenuLink to="/about">About Us</MenuLink>
          <MenuLink to="/advertise">Advertise</MenuLink>
          <MenuLink to="/contact">Contact</MenuLink>
          <MenuLink to="/faq">FAQ</MenuLink>
          <MenuLink to="/privacy">Privacy</MenuLink>
          <MenuLink to="/terms">Terms of Use</MenuLink>
        </Grid>
      </Grid>
      <Typography
        sx={{
          color: theme.primary.footerText,
          fontSize: "14px",
          textAlign: "center",
          fontWeight: "400",
          lineHeight: "1.5",
          marginTop: {xs: "20px", md: "50px"},
        }}
      >
        Copyright © 2022 – 2024 Briefs Media, LLC All Rights Reserved.
      </Typography>
    </WrapperContainer>
  )
}
