import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword, signInAnonymously, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase"; // Firebase Config Imported
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

const auth = getAuth(app); // Firebase Authentication

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook for redirection

  // Regular Login Function
  const handleLogin = () => {
    console.log("Attempting login with email:", email);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Login Successful:", userCredential.user);
        alert("Logged in successfully!");
        navigate("/dashboard"); // Redirect to the dashboard after successful login
      })
      .catch((error) => {
        console.error("Login Error:", error);
        if (error.code === "auth/user-not-found") {
          alert("User not found. Please sign up first.");
        } else if (error.code === "auth/wrong-password") {
          alert("Incorrect password. Please try again.");
        } else if (error.code === "auth/invalid-credential") {
          alert("Invalid credentials. Please check your email and password.");
        } else {
          alert(error.message);
        }
      });
  };

  // Anonymous Login Function
  const handleAnonymousLogin = () => {
    console.log("Attempting anonymous login...");
    signInAnonymously(auth)
      .then(() => {
        console.log("Anonymous login successful!");
        alert("Logged in as Anonymous User!");
        navigate("/dashboard"); // Redirect to dashboard
      })
      .catch((error) => {
        console.error("Anonymous Login Error:", error);
        alert(error.message);
      });
  };

  // Hardcoded Login Test (Debugging Purpose)
  const handleTestLogin = () => {
    console.log("Attempting test login...");
    signInWithEmailAndPassword(auth, "test@example.com", "password123")
      .then((userCredential) => {
        console.log("Test Login Successful:", userCredential.user);
        alert("Test user logged in successfully!");
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error("Test Login Error:", error);
        alert(error.message);
      });
  };

  // Register a New User for Debugging
  const handleRegister = () => {
    console.log("Attempting user registration...");
    createUserWithEmailAndPassword(auth, "newuser@example.com", "password123")
      .then((userCredential) => {
        console.log("User Registered Successfully:", userCredential.user);
        alert("User registered successfully!");
      })
      .catch((error) => {
        console.error("Registration Error:", error);
        alert(error.message);
      });
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h1 style={styles.heading}>Dr. Manas</h1>
          <p style={styles.subheading}>Your Health Assistant Awaits</p>
        </div>
        <div style={styles.formContainer}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          <button onClick={handleLogin} style={styles.button}>
            Login
          </button>
          <div style={styles.separator}>OR</div>
          <button onClick={handleAnonymousLogin} style={styles.guestButton}>
            Continue as Guest
          </button>
          <br />
          <div style={styles.debugButtons}>
            <button onClick={handleTestLogin} style={styles.debugButton}>
              Test Login
            </button>
            <button onClick={handleRegister} style={styles.debugButton}>
              Register Test User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(120deg, #89f7fe, #66a6ff)",
    fontFamily: "'Roboto', sans-serif",
    padding: "0 20px",
    overflow: "hidden",
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
    width: "100%",
    maxWidth: "450px",
    textAlign: "center",
    backdropFilter: "blur(10px)",
    boxSizing: "border-box",
  },
  header: {
    marginBottom: "30px",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "700",
    letterSpacing: "2px",
    textTransform: "uppercase",
    background: "linear-gradient(120deg, #00c6ff, #0072ff)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  },
  subheading: {
    fontSize: "1.1rem",
    color: "#777",
    letterSpacing: "0.5px",
    marginBottom: "30px",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    width: "100%",
    padding: "12px",
    margin: "12px 0",
    borderRadius: "8px",
    border: "2px solid #ddd",
    backgroundColor: "#f7f7f7",
    boxSizing: "border-box",
    fontSize: "1rem",
    outline: "none",
    transition: "border 0.3s, box-shadow 0.3s",
    boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.1)",
  },
  button: {
    padding: "14px 25px",
    backgroundColor: "#00c6ff",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    borderRadius: "8px",
    fontSize: "1.1rem",
    transition: "background-color 0.3s ease, transform 0.3s ease",
    width: "100%",
    marginTop: "10px",
  },
  guestButton: {
    padding: "14px 25px",
    backgroundColor: "#0072ff",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    borderRadius: "8px",
    fontSize: "1.1rem",
    transition: "background-color 0.3s ease, transform 0.3s ease",
    width: "100%",
    marginTop: "10px",
  },
  separator: {
    margin: "20px 0",
    color: "#bbb",
    fontSize: "0.9rem",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  debugButtons: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginTop: "20px",
  },
  debugButton: {
    padding: "10px 15px",
    backgroundColor: "#ff9800",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    borderRadius: "8px",
    fontSize: "1rem",
    transition: "background-color 0.3s ease, transform 0.3s ease",
    width: "48%",
  },
};

export default Login;
