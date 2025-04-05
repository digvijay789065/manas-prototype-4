import React from "react";
import { 
  Typography, 
  Box, 
  Stack, 
  Button,
  LinearProgress
} from "@mui/material";
import { 
  Psychology, 
  Videocam, 
  Healing 
} from "@mui/icons-material";

function VideoCall() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 50%, #80deea 100%)",
        p: 3,
        textAlign: "center"
      }}
    >
      <Box sx={{
        maxWidth: 600,
        p: 4,
        borderRadius: 4,
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        backdropFilter: "blur(8px)",
        boxShadow: "0 8px 32px rgba(0, 137, 123, 0.2)",
        border: "1px solid rgba(255, 255, 255, 0.3)"
      }}>
        {/* Animated icon */}
        <Box sx={{
          width: 100,
          height: 100,
          borderRadius: "50%",
          backgroundColor: "rgba(0, 137, 123, 0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mx: "auto",
          mb: 3,
          animation: "pulse 2s infinite",
          "@keyframes pulse": {
            "0%": { transform: "scale(1)", opacity: 1 },
            "50%": { transform: "scale(1.05)", opacity: 0.7 },
            "100%": { transform: "scale(1)", opacity: 1 }
          }
        }}>
          <Videocam sx={{ 
            fontSize: 48, 
            color: "#00796b" 
          }} />
        </Box>

        <Typography 
          variant="h4" 
          fontWeight="bold"
          sx={{
            mb: 2,
            color: "#00695c",
            background: "linear-gradient(to right, #00796b, #004d40)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          Video Consultations Coming Soon
        </Typography>

        <Typography 
          variant="body1" 
          sx={{ 
            mb: 4,
            color: "#455a64",
            lineHeight: 1.6
          }}
        >
          We're working hard to bring you secure, face-to-face virtual consultations 
          with Dr. Manas to be developed by Digvijay Singh Pundir. This feature will launch in the next update.
        </Typography>

        <LinearProgress 
          sx={{ 
            height: 6, 
            borderRadius: 3,
            mb: 4,
            background: "rgba(0, 121, 107, 0.2)",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#00796b",
              animationDuration: "2.5s"
            }
          }} 
        />

        <Stack direction="row" spacing={2} justifyContent="center">
          <Button
            variant="outlined"
            startIcon={<Psychology />}
            sx={{
              borderRadius: 6,
              px: 3,
              borderColor: "#00796b",
              color: "#00796b",
              "&:hover": {
                backgroundColor: "rgba(0, 121, 107, 0.1)",
                borderColor: "#00695c"
              }
            }}
          >
            Talk to Dr.Manas
          </Button>
          <Button
            variant="contained"
            startIcon={<Healing />}
            sx={{
              borderRadius: 6,
              px: 3,
              backgroundColor: "#00796b",
              "&:hover": {
                backgroundColor: "#00695c"
              }
            }}
          >
            Book Appointment
          </Button>
        </Stack>
      </Box>

      <Typography 
        variant="caption" 
        sx={{ 
          mt: 4,
          color: "rgba(0, 77, 64, 0.7)",
          display: "block"
        }}
      >
        Your health journey matters to us
      </Typography>
    </Box>
  );
}

export default VideoCall;
