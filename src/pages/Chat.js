import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, Button, TextField, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";

function Chat() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([{ sender: "bot", text: "Hello! How can I assist you today?" }]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  // Scroll to the latest message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Function to send a message
  const handleSendMessage = async () => {
    if (!input.trim()) return;
    
    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    setInput("");

    // Simulate bot response
    const botReply = await getAIResponse(input);
    setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
  };

  // Function to fetch AI response
  const getAIResponse = async (userMessage) => {
    try {
      const response = await fetch("https://api.example.com/your-ai-endpoint", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();
      return data.reply || "Sorry, I couldn't understand that.";
    } catch (error) {
      console.error("AI API Error:", error);
      return "I'm currently unavailable. Please try again later.";
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "0 20px",
        background: "linear-gradient(120deg, #89f7fe, #66a6ff)",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          padding: "40px",
          background: "rgba(255, 255, 255, 0.85)",
          borderRadius: "12px",
          boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
          width: "100%",
          maxWidth: "600px",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            color: "#0072ff",
            fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" },
            textTransform: "uppercase",
            letterSpacing: "2px",
            background: "linear-gradient(120deg, #00c6ff, #0072ff)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            marginBottom: "16px",
          }}
        >
          💬 Chat with Dr. Manas
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mt: 2,
            color: "#555",
            fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
            fontWeight: "400",
          }}
        >
          Chat with Dr. Manas for health advice, information, and more.
        </Typography>

        {/* Open Chat Button */}
        <Box sx={{ mt: 4 }}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              padding: "15px 30px",
              fontSize: "18px",
              marginBottom: "20px",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              width: "100%",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
              },
            }}
            onClick={() => setIsChatOpen(true)}
          >
            Start Chat
          </Button>
        </Box>
      </Box>

      {/* Chatbox UI */}
      {isChatOpen && (
        <Box
          sx={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            width: "350px",
            height: "500px",
            backgroundColor: "#fff",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "15px",
            zIndex: 100,
          }}
        >
          {/* Chat Header */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "10px",
              borderBottom: "2px solid #0072ff",
            }}
          >
            <Typography variant="h6" sx={{ color: "#0072ff", fontWeight: "bold" }}>
              🩺 Dr. Manas Chatbot
            </Typography>
            <IconButton onClick={() => setIsChatOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Messages Container */}
          <Box
            sx={{
              flexGrow: 1,
              overflowY: "auto",
              padding: "10px",
              maxHeight: "350px",
            }}
          >
            {messages.map((msg, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: msg.sender === "user" ? "flex-end" : "flex-start",
                  marginBottom: "10px",
                }}
              >
                <Box
                  sx={{
                    padding: "10px 15px",
                    backgroundColor: msg.sender === "user" ? "#0072ff" : "#f0f0f0",
                    color: msg.sender === "user" ? "#fff" : "#333",
                    borderRadius: "10px",
                    maxWidth: "75%",
                  }}
                >
                  {msg.text}
                </Box>
              </Box>
            ))}
            <div ref={chatEndRef}></div>
          </Box>

          {/* Chat Input */}
          <Box sx={{ display: "flex", alignItems: "center", paddingTop: "10px" }}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <IconButton color="primary" onClick={handleSendMessage}>
              <SendIcon />
            </IconButton>
          </Box>
        </Box>
      )}

      {/* Floating Chat Button */}
      {!isChatOpen && (
        <Box
          sx={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            backgroundColor: "#0072ff",
            borderRadius: "50%",
            padding: "15px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
            cursor: "pointer",
            zIndex: 10,
          }}
          onClick={() => setIsChatOpen(true)}
        >
          <Typography sx={{ color: "#fff", fontSize: "1.5rem" }}>💬</Typography>
        </Box>
      )}
    </Box>
  );
}

export default Chat;
