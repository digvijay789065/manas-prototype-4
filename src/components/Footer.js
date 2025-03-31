import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      component="footer"
      className="footer"
      sx={{
        backgroundColor: "#333",
        color: "#fff",
        textAlign: "center",
        padding: "15px",
        marginTop: "auto", // Pushes footer to the bottom
      }}
    >
      <Container>
        <Typography variant="body1">
          &copy; {new Date().getFullYear()} Dr. Manas. All rights reserved |  
          Created by <strong>Digvijay Singh Pundir</strong>
        </Typography>
        
        {/* Navigation Links */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            marginTop: "5px",
            flexWrap: "wrap", // Ensures proper alignment on small screens
          }}
        >
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>Home</Link>
          <Link to="/about" style={{ color: "inherit", textDecoration: "none" }}>About</Link>
          <Link to="/contact" style={{ color: "inherit", textDecoration: "none" }}>Contact</Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
