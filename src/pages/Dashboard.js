import React from "react";
import { Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleVideoCall = () => {
    navigate("/video-call");
  };

  const handleChat = () => {
    navigate("/chat");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "20px",
        background: "linear-gradient(120deg, #89f7fe, #66a6ff)",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          padding: "20px",
          background: "rgba(255, 255, 255, 0.9)",
          borderRadius: "12px",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
          width: "100%",
          maxWidth: "600px",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            color: "#0072ff",
            fontSize: { xs: "2rem", sm: "2.5rem" },
            textTransform: "uppercase",
            letterSpacing: "2px",
            background: "linear-gradient(120deg, #00c6ff, #0072ff)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Dr. Manas is Here!
        </Typography>

        <Typography
          variant="h6"
          sx={{
            mt: 2,
            color: "#444",
            fontSize: "1.2rem",
            fontWeight: "400",
          }}
        >
          Choose one of the options below to get started:
        </Typography>

        <Box sx={{ mt: 4, width: "100%" }}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              padding: "12px 24px",
              fontSize: "18px",
              marginBottom: "16px",
              borderRadius: "8px",
              width: "100%",
              "&:hover": {
                backgroundColor: "#0056b3",
              },
            }}
            onClick={handleVideoCall}
          >
            Video Call with Dr. Manas
          </Button>

          <Button
            variant="contained"
            color="secondary"
            sx={{
              padding: "12px 24px",
              fontSize: "18px",
              borderRadius: "8px",
              width: "100%",
              "&:hover": {
                backgroundColor: "#c62828",
              },
            }}
            onClick={handleChat}
          >
            Chat with Dr. Manas
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
