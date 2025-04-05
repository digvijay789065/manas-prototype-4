import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import Footer from "../components/Footer";
import laptopHero from "../assets/laptop-hero.jpg";
import mobileHero from "../assets/mobile-hero.jpg";

function Home() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:768px)");
  const isTablet = useMediaQuery("(max-width:1024px)");

  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      backgroundColor: "#f9fafc"
    }}>
      {/* Hero Section with Gradient Overlay */}
      <Box sx={{
        position: "relative",
        width: "100%",
        height: isMobile ? "50vh" : "70vh",
        overflow: "hidden"
      }}>
        <Box
          component="img"
          src={isMobile ? mobileHero : laptopHero}
          alt="AI Health Assistant"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center"
          }}
        />
        <Box sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
          px: 2
        }}>
          <Typography 
            variant={isMobile ? "h3" : "h2"}
            sx={{
              fontWeight: 700,
              mb: 2,
              textShadow: "0 2px 4px rgba(0,0,0,0.3)",
              fontSize: {
                xs: "2rem",
                sm: "3rem",
                md: "3.5rem"
              }
            }}
          >
            Welcome to Dr. Manas
          </Typography>
          <Typography 
            variant={isMobile ? "h6" : "h5"}
            sx={{
              mb: 4,
              textShadow: "0 1px 2px rgba(0,0,0,0.3)",
              maxWidth: "800px"
            }}
          >
            Your AI-powered health companion for personalized care
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              fontSize: "1.1rem",
              fontWeight: 600,
              borderRadius: "50px",
              boxShadow: "0 4px 12px rgba(25, 118, 210, 0.3)",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 6px 16px rgba(25, 118, 210, 0.4)"
              },
              transition: "all 0.3s ease"
            }}
            onClick={() => navigate("/login")}
          >
            Get Started
          </Button>
        </Box>
      </Box>

      {/* Features Section */}
      <Box sx={{
        py: 8,
        px: isMobile ? 2 : 6,
        maxWidth: "1200px",
        mx: "auto",
        textAlign: "center"
      }}>
        <Typography variant="h4" sx={{ mb: 6, fontWeight: 600 }}>
          Why Choose Dr. Manas?
        </Typography>
        
        <Box sx={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
          gap: 4
        }}>
          {[
            {
              icon: "⚕️",
              title: "AI-Powered Diagnosis",
              description: "Get instant preliminary assessments using advanced AI algorithms"
            },
            {
              icon: "📱",
              title: "24/7 Availability",
              description: "Access healthcare guidance anytime, anywhere"
            },
            {
              icon: "🔒",
              title: "Secure & Private",
              description: "Your health data is protected with enterprise-grade security"
            }
          ].map((feature, index) => (
            <Box key={index} sx={{
              p: 3,
              borderRadius: 2,
              backgroundColor: "white",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "translateY(-5px)"
              }
            }}>
              <Typography variant="h3" sx={{ mb: 2 }}>{feature.icon}</Typography>
              <Typography variant="h6" sx={{ mb: 1.5, fontWeight: 600 }}>{feature.title}</Typography>
              <Typography variant="body1" color="text.secondary">
                {feature.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* CTA Section */}
      <Box sx={{
        py: 8,
        px: isMobile ? 2 : 6,
        backgroundColor: "#1976d2",
        color: "white",
        textAlign: "center"
      }}>
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
          Ready to Experience the Future of Healthcare?
        </Typography>
        <Typography variant="h6" sx={{ mb: 4, maxWidth: "800px", mx: "auto" }}>
          Join thousands of users who trust Dr. Manas for their health needs
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{
            px: 6,
            py: 1.5,
            fontSize: "1.1rem",
            fontWeight: 600,
            borderRadius: "50px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            "&:hover": {
              backgroundColor: "white",
              color: "#1976d2"
            }
          }}
          onClick={() => navigate("/login")}
        >
          Create Free Account
        </Button>
      </Box>

      {/* Footer */}
      <Footer sx={{ mt: "auto" }} />
    </Box>
  );
}

export default Home;