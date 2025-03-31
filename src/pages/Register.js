import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInAnonymously } from "firebase/auth";
import { app } from "../firebase"; // Firebase Config Imported

const auth = getAuth(app); // Firebase Authentication

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (!email || !password) {
      alert("Please fill in both email and password fields.");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Registered successfully!");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          alert("Email already in use. Please log in instead.");
        } else if (error.code === "auth/weak-password") {
          alert("Password is too weak. Please use a stronger password.");
        } else {
          alert(error.message);
        }
      });
  };

  const handleAnonymousLogin = () => {
    signInAnonymously(auth)
      .then(() => {
        alert("Logged in as Anonymous User!");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2>Register</h2>
      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: "10px", margin: "5px", width: "200px" }}
      />
      <br />
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ padding: "10px", margin: "5px", width: "200px" }}
      />
      <br />
      <button
        onClick={handleRegister}
        style={{
          padding: "10px 20px",
          margin: "10px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px",
        }}
      >
        Register
      </button>
      <br />
      <div className="separator">OR</div>
      <br />
      <button
        onClick={handleAnonymousLogin}
        style={{
          padding: "10px 20px",
          backgroundColor: "#dc3545",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px",
        }}
      >
        Login Anonymously
      </button>
    </div>
  );
}

export default Register;