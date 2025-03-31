import React, { useState } from "react";
import { signInAnonymouslyUser, registerWithEmail, loginWithEmail } from "../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-container">
      <h2>Login / Register</h2>

      {/* Anonymous Login */}
      <button onClick={signInAnonymouslyUser}>Continue as Guest</button>

      <h3>OR</h3>

      {/* Email/Password Login */}
      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => loginWithEmail(email, password)}>Login</button>
      <button onClick={() => registerWithEmail(email, password)}>Register</button>
    </div>
  );
}

export default Login;
