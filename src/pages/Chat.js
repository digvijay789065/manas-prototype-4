import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, Button, TextField, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";

function Chat() {
  const [messages, setMessages] = useState([{ sender: "bot", text: "Hello! How can I assist you today?" }]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    setInput("");

    const botReply = "I'm still learning. But I'm here to help!";
    setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
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
          width: "400px",
          height: "500px",
          backgroundColor: "#fff",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "15px",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "10px" }}>
          <Typography variant="h6" sx={{ color: "#0072ff", fontWeight: "bold" }}>
            🩺 Dr. Manas Chatbot
          </Typography>
          <IconButton onClick={() => window.history.back()}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Box sx={{ flexGrow: 1, overflowY: "auto", padding: "10px", maxHeight: "350px" }}>
          {messages.map((msg, index) => (
            <Box key={index} sx={{ display: "flex", justifyContent: msg.sender === "user" ? "flex-end" : "flex-start" }}>
              <Box sx={{ padding: "10px", backgroundColor: msg.sender === "user" ? "#0072ff" : "#f0f0f0", color: "#fff", borderRadius: "10px" }}>
                {msg.text}
              </Box>
            </Box>
          ))}
          <div ref={chatEndRef}></div>
        </Box>

        <TextField fullWidth variant="outlined" size="small" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleSendMessage()} />
        <IconButton color="primary" onClick={handleSendMessage}><SendIcon /></IconButton>
      </Box>
    </Box>
  );
}

export default Chat;
