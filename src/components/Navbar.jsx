import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, List, ListItem } from '@mui/material';
import { styled, useTheme } from '@mui/system';
import { WrapperContainer } from './WrapperContainer';
import { MainButton } from './MainButton';
import {slide as Menu} from 'react-burger-menu';

const MenuLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  fontFamily: theme.typography.fontFamily,
  fontSize: "16px",
  display: "block",
  fontWeight: "700",
  marginBottom: "15px",
  color: theme.common.white,
  marginRight: "20px",
  cursor: "pointer",
  width: "fit-content",
}));

export const Navbar = () => {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleBurgerToggle = () => {
    setDrawerOpen(!drawerOpen);
    document.querySelector("#nav-icon4").classList.toggle("open");
  }

  return(
    <>
      <WrapperContainer bgcolor={theme.common.white}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 0",
          }}
        >
          {/* logo */}
          <Link
            to="/"
          >
            <img src="https://briefs.co/wp-content/uploads/2022/12/Briefs-Media-2.png" alt="logo" height="35px" />
          </Link>
          {/* Navigation */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: {xs: "none", md: "block"},
              }}
            >
              <Link
                to="/about"
                style={{
                  textDecoration: "none",
                  fontFamily: theme.typography.fontFamily,
                  fontSize: "14px",
                  fontWeight: "500",
                  marginRight: "20px",
                  color: theme.common.black,
                }}
              >
                About Us
              </Link>
              <MainButton text="Join Market Briefs" />
            </Box>
            <Box
              sx={{ display: {xs: "block", md: "none"} }}
              id="nav-icon4"
              onClick={() => handleBurgerToggle()}
            >
              <span></span>
              <span></span>
              <span></span>
            </Box>
          </Box>
          {/* <List>
            <ListItem>
              <Link to="/">Home</Link>
            </ListItem>
            <ListItem>
              <Link to="/about">Boost Your Grades</Link>
            </ListItem>
            <ListItem>
              <Link to="/advertise">Advertise</Link>
            </ListItem>
            <ListItem>
              <Link to="/contact">Contact</Link>
            </ListItem>
            <ListItem>
              <Link to="/faq">FAQ</Link>
            </ListItem>
            <ListItem>
              <Link to="/privacy">Privacy</Link>
            </ListItem>
            <ListItem>
              <Link to="/terms">Terms</Link>
            </ListItem>
          </List> */}
        </Box>
      </WrapperContainer>
      <Menu
        left
        isOpen={drawerOpen}
        onStateChange={({isOpen}) => setDrawerOpen(isOpen)}
        customBurgerIcon={false}
        customCrossIcon={false}
        styles={{
          bmBurgerButton: {
            display: "none",
          },
          bmCrossButton: {
            display: "none",
          },
          bmMenu: {
            backgroundColor: theme.primary.main,
            color: theme.common.white,
            padding: "1.5em 1.5em 0",
            height: "calc(100% - 2.5em)",
            fontSize: "1.15em",
          },
          bmMorphShape: {
            fill: theme.primary.main,
          },
          bmItemList: {
            color: theme.common.black,
            padding: "0.8em",
            height: "fit-content",
          },
          bmItem: {
            display: "inline-block",
            color: theme.common.black,
            textDecoration: "none",
            marginBottom: "20px",
          },
          bmOverlay: {
            backgroundColor: "rgba(0, 0, 0, 0.3)",
          },
        }}
      >
        <Box>
          <MenuLink to="/" className="menu-item" onClick={() => handleBurgerToggle()}>Home</MenuLink>
          <MenuLink to="/about" className="menu-item" onClick={() => handleBurgerToggle()}>Boost Your Grades</MenuLink>
          <MenuLink to="/advertise" className="menu-item" onClick={() => handleBurgerToggle()}>Advertise</MenuLink>
          <MenuLink to="/contact" className="menu-item" onClick={() => handleBurgerToggle()}>Contact</MenuLink>
          <MenuLink to="/faq" className="menu-item" onClick={() => handleBurgerToggle()}>FAQ</MenuLink>
          <MenuLink to="/privacy" className="menu-item" onClick={() => handleBurgerToggle()}>Privacy</MenuLink>
          <MenuLink to="/terms" className="menu-item" onClick={() => handleBurgerToggle()}>Terms</MenuLink>
        </Box>
      </Menu>

      {/*
      {drawerOpen && (
        <Box
          sx={{
            position: "absolute",
            top: "0",
            left: "0",
            backgroundColor: "red",
            width: "50vw",
            height: "100vh",   
            transition: "all .3s ease",  
          }}
        >

          cfgvhbjnkm
        </Box>
      )} */}
    </>
  )
}
