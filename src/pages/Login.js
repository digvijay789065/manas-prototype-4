import React, { useState } from "react";
import { 
  Box, 
  Button, 
  TextField, 
  Typography, 
  Divider,
  Paper,
  useTheme,
  Alert,
  Snackbar,
  IconButton,
  InputAdornment,
  CircularProgress
} from "@mui/material";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  signInAnonymously, 
  createUserWithEmailAndPassword 
} from "firebase/auth";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";
import { 
  Visibility, 
  VisibilityOff,
  AccountCircle,
  Lock,
  MedicalInformation,
  Login as LoginIcon,
  PersonAdd,
  Person
} from "@mui/icons-material";

const auth = getAuth(app);

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const theme = useTheme();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleAnonymousLogin = async () => {
    try {
      setLoading(true);
      await signInAnonymously(auth);
      navigate("/dashboard");
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleTestLogin = async () => {
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, "test@example.com", "password123");
      navigate("/dashboard");
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async () => {
    try {
      setLoading(true);
      await createUserWithEmailAndPassword(auth, "newuser@example.com", "password123");
      showSnackbar("Test user registered successfully!");
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleError = (error) => {
    let message = error.message;
    if (error.code === "auth/user-not-found") {
      message = "User not found. Please sign up first.";
    } else if (error.code === "auth/wrong-password") {
      message = "Incorrect password. Please try again.";
    } else if (error.code === "auth/invalid-credential") {
      message = "Invalid credentials. Please check your email and password.";
    }
    setError(message);
    showSnackbar(message);
  };

  const showSnackbar = (message) => {
    setSnackbarMessage(message);
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
        p: 2
      }}
    >
      <Paper
        elevation={10}
        sx={{
          width: "100%",
          maxWidth: "450px",
          p: 4,
          borderRadius: "16px",
          backdropFilter: "blur(8px)",
          backgroundColor: "rgba(255, 255, 255, 0.9)"
        }}
      >
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <MedicalInformation 
            sx={{ 
              fontSize: 60, 
              color: theme.palette.primary.main,
              mb: 1
            }} 
          />
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 700,
              background: "linear-gradient(120deg, #00c6ff, #0072ff)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              mb: 1
            }}
          >
            Dr. Manas
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Your Health Assistant Awaits
          </Typography>
        </Box>

        <Box component="form" sx={{ mb: 3 }}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 2 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle color="primary" />
                </InputAdornment>
              ),
              style: { borderRadius: "12px" }
            }}
          />
          <TextField
            fullWidth
            label="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mb: 3 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock color="primary" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
              style: { borderRadius: "12px" }
            }}
          />

          <Button
            fullWidth
            variant="contained"
            onClick={handleLogin}
            disabled={loading}
            startIcon={<LoginIcon />}
            sx={{
              py: 1.5,
              mb: 2,
              borderRadius: "12px",
              fontSize: "1rem",
              fontWeight: 600
            }}
          >
            {loading ? <CircularProgress size={24} /> : "Login"}
          </Button>

          <Divider sx={{ my: 3 }}>
            <Typography variant="body2" color="text.secondary">
              OR
            </Typography>
          </Divider>

          <Button
            fullWidth
            variant="outlined"
            onClick={handleAnonymousLogin}
            disabled={loading}
            startIcon={<Person />}
            sx={{
              py: 1.5,
              mb: 2,
              borderRadius: "12px",
              fontSize: "1rem",
              fontWeight: 600,
              borderWidth: 2,
              "&:hover": { borderWidth: 2 }
            }}
          >
            Continue as Guest
          </Button>
        </Box>

        <Box sx={{ 
          display: "flex", 
          gap: 2,
          mt: 4,
          justifyContent: "center"
        }}>
          <Button
            variant="text"
            onClick={handleTestLogin}
            disabled={loading}
            sx={{
              borderRadius: "12px",
              fontSize: "0.75rem",
              textTransform: "none"
            }}
          >
            Test Login
          </Button>
          <Button
            variant="text"
            onClick={handleRegister}
            disabled={loading}
            startIcon={<PersonAdd fontSize="small" />}
            sx={{
              borderRadius: "12px",
              fontSize: "0.75rem",
              textTransform: "none"
            }}
          >
            Register Test User
          </Button>
        </Box>
      </Paper>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity="error"
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Login;