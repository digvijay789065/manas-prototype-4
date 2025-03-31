import React from "react";
import { Typography, Box } from "@mui/material";

function VideoCall() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h4" fontWeight="bold">
        Video Call Feature Coming Soon! 🎥
      </Typography>
    </Box>
  );
}

export default VideoCall;
