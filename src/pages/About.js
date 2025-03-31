import React from "react";
import { Box, Typography, Container, Paper } from "@mui/material";

const About = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ padding: 4, borderRadius: "10px", textAlign: "center" }}>
        <Typography 
          variant="h3" 
          fontWeight="bold" 
          sx={{ color: "#1976d2", mb: 2 }}
        >
          About Dr. Manas
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ fontSize: "1.2rem", color: "#555" }}
        >
          Dr. Manas is an AI-powered virtual health assistant designed to provide 
          medical advice, health tips, and support to users in a conversational way. 
          Our goal is to make healthcare more accessible, personalized, and intelligent 
          using advanced AI technologies.
        </Typography>
      </Paper>
    </Container>
  );
};

export default About;
