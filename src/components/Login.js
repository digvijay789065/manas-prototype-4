import React, { useState } from "react";
import { 
  Box, 
  Button, 
  TextField, 
  Typography, 
  Divider,
  Paper,
  useTheme
} from "@mui/material";
import { 
  signInAnonymouslyUser, 
  registerWithEmail, 
  loginWithEmail 
} from "../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
        p: 2
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          width: "100%",
          maxWidth: "450px",
          borderRadius: "12px",
          backgroundColor: theme.palette.background.paper
        }}
      >
        <Typography 
          variant="h4" 
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 600,
            color: theme.palette.primary.main,
            textAlign: "center",
            mb: 3
          }}
        >
          Welcome to Dr. Manas
        </Typography>

        {/* Guest Login */}
        <Button
          fullWidth
          variant="outlined"
          onClick={signInAnonymouslyUser}
          sx={{
            py: 1.5,
            mb: 3,
            borderRadius: "8px",
            borderWidth: "2px",
            "&:hover": {
              borderWidth: "2px"
            }
          }}
        >
          Continue as Guest
        </Button>

        <Divider sx={{ my: 3 }}>
          <Typography variant="body2" color="text.secondary">
            OR
          </Typography>
        </Divider>

        {/* Email/Password Form */}
        <Box component="form" sx={{ mb: 3 }}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 2 }}
            InputProps={{
              style: {
                borderRadius: "8px"
              }
            }}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mb: 3 }}
            InputProps={{
              style: {
                borderRadius: "8px"
              }
            }}
          />

          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              fullWidth
              variant="contained"
              onClick={() => loginWithEmail(email, password)}
              sx={{
                py: 1.5,
                borderRadius: "8px",
                fontWeight: 600
              }}
            >
              Login
            </Button>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => registerWithEmail(email, password)}
              sx={{
                py: 1.5,
                borderRadius: "8px",
                fontWeight: 600,
                borderWidth: "2px",
                "&:hover": {
                  borderWidth: "2px"
                }
              }}
            >
              Register
            </Button>
          </Box>
        </Box>

        <Typography 
          variant="body2" 
          color="text.secondary"
          sx={{ textAlign: "center", mt: 2 }}
        >
          Your health data is always secure with us
        </Typography>
      </Paper>
    </Box>
  );
}

export default Login;