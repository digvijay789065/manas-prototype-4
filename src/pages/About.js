import React from "react";
import { 
  Box, 
  Typography, 
  Container, 
  Paper, 
  Grid,
  Avatar,
  useTheme
} from "@mui/material";
import {
  MedicalServices,
  Psychology,
  AccessTime,
  Security
} from "@mui/icons-material";

const About = () => {
  const theme = useTheme();

  const features = [
    {
      icon: <MedicalServices fontSize="large" />,
      title: "AI-Powered Diagnosis",
      description: "Advanced algorithms provide preliminary health assessments"
    },
    {
      icon: <Psychology fontSize="large" />,
      title: "Mental Health Support",
      description: "24/7 conversational therapy and wellness guidance"
    },
    {
      icon: <AccessTime fontSize="large" />,
      title: "Instant Responses",
      description: "No waiting times for medical information"
    },
    {
      icon: <Security fontSize="large" />,
      title: "Secure & Private",
      description: "HIPAA-compliant data protection standards"
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Hero Section */}
      <Box 
        sx={{ 
          textAlign: "center",
          mb: 8,
          px: { xs: 2, sm: 0 }
        }}
      >
        <Typography
          variant="h2"
          fontWeight={700}
          sx={{
            color: theme.palette.primary.main,
            mb: 2,
            fontSize: { xs: '2.5rem', md: '3.5rem' }
          }}
        >
          Revolutionizing Healthcare with AI
        </Typography>
        <Typography
          variant="h5"
          component="p"
          sx={{
            color: theme.palette.text.secondary,
            maxWidth: 800,
            mx: "auto",
            lineHeight: 1.6
          }}
        >
          Dr. Manas combines cutting-edge artificial intelligence with medical 
          expertise to deliver personalized health guidance anytime, anywhere.
        </Typography>
      </Box>

      {/* Feature Grid - Fixed spacing and alignment */}
      <Grid 
        container 
        spacing={{ xs: 2, md: 4 }} // Different spacing for mobile vs desktop
        sx={{ 
          mb: 8,
          justifyContent: "center" // Centers grid items
        }}
      >
        {features.map((feature, index) => (
          <Grid 
            item 
            xs={12} 
            sm={6} 
            md={3} 
            key={index}
            sx={{
              display: 'flex', // Ensures equal height cards
              minHeight: '100%' // Prevents content squishing
            }}
          >
            <Paper
              elevation={3}
              sx={{
                p: 3,
                width: '100%', // Takes full grid width
                borderRadius: 3,
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 6
                }
              }}
            >
              <Avatar
                sx={{
                  bgcolor: theme.palette.primary.light,
                  color: theme.palette.primary.main,
                  width: 60,
                  height: 60,
                  mb: 2,
                  mx: 'auto' // Center avatar
                }}
              >
                {feature.icon}
              </Avatar>
              <Typography 
                variant="h5" 
                fontWeight={600} 
                gutterBottom
                align="center" // Center text
              >
                {feature.title}
              </Typography>
              <Typography 
                variant="body1" 
                color="text.secondary"
                align="center" // Center text
              >
                {feature.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Mission Section */}
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, md: 6 },
          borderRadius: 3,
          background: theme.palette.mode === 'dark' 
            ? 'rgba(25, 118, 210, 0.1)' 
            : 'rgba(25, 118, 210, 0.05)',
          mb: 6
        }}
      >
        <Typography
          variant="h4"
          fontWeight={600}
          gutterBottom
          sx={{ color: theme.palette.primary.main }}
        >
          Our Mission
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
          At Dr. Manas, we're bridging the gap between technology and healthcare 
          by creating an AI assistant that understands medical contexts, provides 
          reliable information, and helps users make informed health decisions.
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
          Our platform continuously learns from medical research and user 
          interactions to deliver increasingly accurate and personalized support.
        </Typography>
      </Paper>
    </Container>
  );
};

export default About;