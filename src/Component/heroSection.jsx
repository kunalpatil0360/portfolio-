import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Grid,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  autocompleteClasses,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactsIcon from "@mui/icons-material/Contacts";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import Hero from "../Images/Hero.png"; // Ensure the path to your image is correct

const HeroSection = ({ onAboutMeClick, onContactMeClick }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Toggle the Drawer
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  // LinkedIn button handler
  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/kunal-patil-b01903204/");
  };

  const handleBehanceInClick = () => {
    window.open("https://shorturl.at/HdIox");
  };

  // Download CV handler
  const handleDownload = () => {
    const fileURL = "./KunalCV.pdf";
    const link = document.createElement("a");
    link.href = fileURL;
    link.download = "Kunal_Patil_FullStack_Developer";
    link.click();
  };

  return (
    <>
      {/* Navigation Bar */}
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#FDF4E3",
          boxShadow: "none",
          borderBottom: "1px solid #ccc",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", flexWrap: "wrap", px: 2 }}>
          {/* Left Buttons for Desktop View */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" }, // Hide on mobile
              gap: 2,
            }}
          ></Box>

          {/* Right Buttons for Desktop View */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" }, // Hide on mobile
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="contained"
              color="success"
              sx={{ color: "#ffffff", textTransform: "none" }}
              onClick={handleLinkedInClick}
            >
              LinkedIn
            </Button>
            <Button color="inherit" sx={{ color: "#333" }}
            onClick={handleBehanceInClick}
            >
              Behance
            </Button>
            <Button
              color="inherit"
              sx={{ color: "#333" }}
              onClick={handleDownload}
            >
              Download CV
            </Button>
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            edge="end"
            sx={{
              display: { xs: "flex", md: "none" },
              color: "#333",
            }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Side Drawer for Mobile View */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: 240,
            backgroundColor: "#FDF4E3",
          },
        }}
      >
        <List>
          <ListItem button onClick={() => setDrawerOpen(false)}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={onAboutMeClick}>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button onClick={handleBehanceInClick}>
            <ListItemIcon>
              <ContactsIcon />
            </ListItemIcon>
            <ListItemText primary="Behannce" />
          </ListItem>
          <ListItem button onClick={handleLinkedInClick}>
            <ListItemIcon>
              <LinkedInIcon />
            </ListItemIcon>
            <ListItemText primary="LinkedIn" />
          </ListItem>
          <ListItem button onClick={handleDownload}>
            <ListItemIcon>
              <FileDownloadIcon />
            </ListItemIcon>
            <ListItemText primary="Download CV" />
          </ListItem>
        </List>
      </Drawer>

      {/* Hero Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Stack on small screens
          alignItems: "center",
          justifyContent: "center",
          minHeight: "calc(100vh - 64px)", // Full viewport height minus Navbar
          backgroundColor: "#FDF4E3",
          px: 2,
          overflow: "hidden", // Prevent overflow issues
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
          sx={{ height: "100%", overflow: "hidden" }}
        >
          {/* Left Content */}
          <Grid item xs={12} md={6}>
            <Box>
              <Typography
                variant="h3"
                component="h1"
                fontWeight="bold"
                gutterBottom
              >
                I'm <span style={{ color: "Green" }}>Kunal Patil</span>,
              </Typography>
              <Typography
                variant="h4"
                component="h2"
                fontWeight="bold"
                gutterBottom
              >
                Full Stack Developer and UI UX Designer
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  mt: 2,
                  maxWidth: "500px",
                  mx: { xs: "auto", md: 0 },
                }}
              >
                To implement the knowledge, discipline, and desire to grow in a
                professional field to obtain a position that will enable me to
                use my strong organizational skills, educational background, and
                ability to work well with people to reach the apex in the field
                with sheer determination, dedication, and diligence.
              </Typography>
              <Box
                sx={{
                  mt: 4,
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" }, // Stack buttons on small screens
                  gap: 2,
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: "#3C3C3C",
                    color: "#3C3C3C",
                    textTransform: "none",
                    padding: "0.5rem 2rem",
                    "&:hover": {
                      backgroundColor: "#FFF5E1",
                      borderColor: "#3C3C3C",
                    },
                  }}
                  onClick={onAboutMeClick}
                >
                  About Me
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: "#3C3C3C",
                    color: "#3C3C3C",
                    textTransform: "none",
                    padding: "0.5rem 2rem",
                    "&:hover": {
                      backgroundColor: "#FFF5E1",
                      borderColor: "#3C3C3C",
                    },
                  }}
                  onClick={onContactMeClick}
                >
                  Contact Me
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Right Image */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={Hero}
              alt="Creative Designer"
              sx={{
                width: { xs: "90%", sm: "80%", md: "70%" }, // Responsive width
                maxWidth: "400px", // Limit maximum size
                height: "auto", // Maintain aspect ratio
                objectFit: "contain", // Ensure the image fits within its container
                overflow: "hidden", // Prevent overflow issues
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default HeroSection;
