import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import Dashboard from "./pages/Dashboard"; // Import Dashboard
import VideoCall from "./pages/VideoCall"; // Import Video Call Page

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Fixed Missing Route */}
        <Route path="/video-call" element={<VideoCall />} /> {/* Added Video Call Page */}
      </Routes>
    </Router>
  );
}

export default App;
