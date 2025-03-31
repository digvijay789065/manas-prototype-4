import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";

import laptopHero from "../assets/laptop-hero.jpg"; // Laptop image
import mobileHero from "../assets/mobile-hero.jpg"; // Mobile image
import Footer from "../components/Footer";

function Home() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Box 
      sx={{ 
        display: "flex", 
        flexDirection: "column", 
        minHeight: "100vh" 
      }}
    >
      {/* Hero Section with Responsive Image */}
      <Box
        component="img"
        src={isMobile ? mobileHero : laptopHero}
        alt="Hero"
        sx={{
          width: "100%",
          height: "auto",
          minHeight: "40vh",
          maxHeight: "60vh",
          objectFit: "cover",
        }}
      />

      {/* Content Below Hero Image */}
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Typography 
          variant="h3" 
          fontWeight="bold" 
          sx={{ fontSize: { xs: '2rem', sm: '3rem' } }}
        >
          Welcome to Dr. Manas
        </Typography>
        <Typography variant="h6" sx={{ mt: 1 }}>
          Your AI Health Assistant
        </Typography>

        {/* Get Started Button */}
        <Button
          variant="contained"
          color="primary"
          sx={{
            mt: 3,
            padding: { xs: "8px 15px", sm: "10px 20px" },
            fontSize: { xs: "14px", sm: "18px" },
          }}
          onClick={() => navigate("/login")}
        >
          Get Started
        </Button>
      </Box>

      {/* Empty Box to push Footer down */}
      <Box sx={{ flexGrow: 1 }} />

      {/* Footer (sticks to bottom) */}
      <Footer sx={{ padding: { xs: "10px", sm: "20px" }, textAlign: "center" }} />
    </Box>
  );
}

export default Home;
