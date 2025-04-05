import React from "react";
import { Routes, Route } from "react-router-dom"; // Removed BrowserRouter
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import Dashboard from "./pages/Dashboard"; 
import VideoCall from "./pages/VideoCall"; 

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/video-call" element={<VideoCall />} />
      </Routes>
    </>
  );
}

export default App;
