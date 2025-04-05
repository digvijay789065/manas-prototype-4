import React from "react";
import { 
  Box, 
  Button, 
  Typography, 
  Card, 
  CardContent, 
  Grid,
  useTheme,
  Avatar,
  Paper,
  useMediaQuery
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  Videocam,
  Chat,
  MedicalServices,
  HealthAndSafety
} from "@mui/icons-material";

function Dashboard() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const features = [
    {
      icon: <Videocam fontSize={isMobile ? "medium" : "large"} />,
      title: "Video Consultation",
      description: "Real-time video call with Dr. Manas",
      action: () => navigate("/video-call"),
      color: theme.palette.primary.main
    },
    {
      icon: <Chat fontSize={isMobile ? "medium" : "large"} />,
      title: "AI Chat Assistant",
      description: "24/7 text-based health support",
      action: () => navigate("/chat"),
      color: theme.palette.secondary.main
    },
    {
      icon: <MedicalServices fontSize={isMobile ? "medium" : "large"} />,
      title: "Health Records",
      description: "Access your medical history",
      action: () => navigate("/records"),
      color: theme.palette.success.main
    },
    {
      icon: <HealthAndSafety fontSize={isMobile ? "medium" : "large"} />,
      title: "Wellness Tips",
      description: "Personalized health recommendations",
      action: () => navigate("/wellness"),
      color: theme.palette.warning.main
    }
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        p: isMobile ? 2 : 3,
        pb: 4
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          mt: { xs: 2, md: 6 }
        }}
      >
        {/* Header Section */}
        <Box
          sx={{
            textAlign: "center",
            mb: isMobile ? 4 : 6,
            px: isMobile ? 1 : 0
          }}
        >
          <Typography
            variant={isMobile ? "h4" : "h3"}
            sx={{
              fontWeight: 700,
              mb: 2,
              color: theme.palette.primary.dark,
              fontSize: isMobile ? '1.8rem' : '2.5rem'
            }}
          >
            Welcome to Your Health Dashboard
          </Typography>
          <Typography
            variant={isMobile ? "body1" : "h6"}
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: "600px",
              mx: "auto",
              px: isMobile ? 1 : 0
            }}
          >
            Access all your healthcare services in one place
          </Typography>
        </Box>

        {/* Features Grid - Fixed for Mobile */}
        <Grid 
          container 
          spacing={isMobile ? 2 : 4}
          sx={{
            justifyContent: "center",
            alignItems: "stretch"
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
                display: "flex",
                minHeight: "100%"
              }}
            >
              <Card
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "12px",
                  boxShadow: theme.shadows[3],
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: isMobile ? "none" : "translateY(-5px)",
                    boxShadow: isMobile ? theme.shadows[3] : theme.shadows[6]
                  }
                }}
              >
                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    p: isMobile ? 2 : 3
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: `${feature.color}20`,
                      color: feature.color,
                      width: isMobile ? 50 : 60,
                      height: isMobile ? 50 : 60,
                      mb: isMobile ? 2 : 3
                    }}
                  >
                    {feature.icon}
                  </Avatar>
                  <Typography
                    variant={isMobile ? "h6" : "h5"}
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                      fontSize: isMobile ? '1.1rem' : '1.25rem'
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ 
                      mb: isMobile ? 1.5 : 3,
                      fontSize: isMobile ? '0.9rem' : '1rem'
                    }}
                  >
                    {feature.description}
                  </Typography>
                  <Button
                    variant="contained"
                    size={isMobile ? "small" : "medium"}
                    sx={{
                      mt: "auto",
                      borderRadius: "8px",
                      px: isMobile ? 2 : 4,
                      bgcolor: feature.color,
                      fontSize: isMobile ? '0.8rem' : '0.9rem',
                      "&:hover": {
                        bgcolor: feature.color,
                        opacity: 0.9
                      }
                    }}
                    onClick={feature.action}
                  >
                    Access
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Recent Activity Section */}
        <Paper
          elevation={0}
          sx={{
            mt: isMobile ? 4 : 6,
            p: isMobile ? 2 : 3,
            borderRadius: "12px",
            background: theme.palette.background.paper
          }}
        >
          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{
              fontWeight: 600,
              mb: 2,
              color: theme.palette.primary.dark
            }}
          >
            Your Recent Activity
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "80px",
              border: `1px dashed ${theme.palette.divider}`,
              borderRadius: "8px",
              p: 2
            }}
          >
            <Typography 
              variant="body2"
              color="text.secondary"
              sx={{ textAlign: "center" }}
            >
              {isMobile ? "Activity will appear here" : "Your recent consultations and health data will appear here"}
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}

export default Dashboard;