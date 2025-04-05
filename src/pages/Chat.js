import React, { useState, useEffect, useRef } from 'react';
import { 
  Box, 
  TextField, 
  Button, 
  Typography, 
  Avatar, 
  Paper, 
  List, 
  ListItem, 
  ListItemAvatar, 
  ListItemText,
  IconButton,
  Divider,
  useTheme
} from '@mui/material';
import { 
  Send, 
  MedicalInformation,
  Psychology,
  EmergencyRecording,
  LocalPharmacy
} from '@mui/icons-material';

// Medical knowledge base
const medicalKnowledge = {
  "headache": {
    dos: [
      "Rest in a quiet, dark room",
      "Apply a cool compress to your forehead",
      "Try over-the-counter pain relievers like acetaminophen or ibuprofen",
      "Stay hydrated by drinking water"
    ],
    donts: [
      "Don't consume alcohol",
      "Avoid staring at screens for prolonged periods",
      "Don't skip meals",
      "Avoid loud noises and bright lights"
    ],
    emergency: "Seek immediate help if: Headache is severe and sudden, accompanied by fever, stiff neck, confusion, or vision changes"
  },
  "depression": {
    dos: [
      "Maintain a regular sleep schedule",
      "Engage in light physical activity daily",
      "Connect with friends or family",
      "Practice mindfulness or meditation"
    ],
    donts: [
      "Don't isolate yourself for long periods",
      "Avoid alcohol and drugs",
      "Don't neglect basic self-care",
      "Avoid making major life decisions when feeling low"
    ],
    emergency: "Seek immediate help if: You have thoughts of self-harm or suicide"
  },
  "back pain": {
    dos: [
      "Apply ice or heat to the painful area",
      "Try gentle stretching exercises",
      "Maintain good posture",
      "Use over-the-counter pain relievers as needed"
    ],
    donts: [
      "Don't lift heavy objects",
      "Avoid prolonged bed rest",
      "Don't sit for long periods without breaks",
      "Avoid sudden twisting motions"
    ],
    emergency: "Seek immediate help if: Pain radiates down your legs, causes weakness/numbness, or follows an injury"
  }
};

function DrManasChatbot() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);
  const theme = useTheme();

  // Initial greeting
  useEffect(() => {
    setMessages([
      {
        text: "Hello! I'm Dr. Manas. How can I help you today? Please describe your symptoms (e.g., headache, back pain, feeling low).",
        sender: 'bot'
      }
    ]);
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Process input after slight delay
    setTimeout(() => generateResponse(input.toLowerCase()), 500);
  };

  const generateResponse = (userInput) => {
    let response = { text: "", sender: 'bot' };
    const symptoms = Object.keys(medicalKnowledge);

    // Check for recognized symptoms
    const foundSymptom = symptoms.find(symptom => 
      userInput.includes(symptom)
    );

    if (foundSymptom) {
      const { dos, donts, emergency } = medicalKnowledge[foundSymptom];
      
      response.text = (
        <Box>
          <Typography variant="body1" gutterBottom>
            For <strong>{foundSymptom}</strong>, here's my advice:
          </Typography>
          
          <Typography variant="h6" sx={{ mt: 2, color: theme.palette.success.main }}>
            <Psychology sx={{ verticalAlign: 'middle', mr: 1 }} />
            Recommended:
          </Typography>
          <List dense>
            {dos.map((item, i) => (
              <ListItem key={`do-${i}`} sx={{ py: 0 }}>
                <ListItemAvatar sx={{ minWidth: 32 }}>
                  <Avatar sx={{ bgcolor: theme.palette.success.light, width: 24, height: 24 }}>
                    <MedicalInformation sx={{ fontSize: 16 }} />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>

          <Typography variant="h6" sx={{ mt: 2, color: theme.palette.error.main }}>
            <EmergencyRecording sx={{ verticalAlign: 'middle', mr: 1 }} />
            Avoid:
          </Typography>
          <List dense>
            {donts.map((item, i) => (
              <ListItem key={`dont-${i}`} sx={{ py: 0 }}>
                <ListItemAvatar sx={{ minWidth: 32 }}>
                  <Avatar sx={{ bgcolor: theme.palette.error.light, width: 24, height: 24 }}>
                    <LocalPharmacy sx={{ fontSize: 16 }} />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>

          <Typography variant="body2" sx={{ 
            mt: 2, 
            p: 2, 
            backgroundColor: theme.palette.warning.light,
            borderRadius: 1
          }}>
            ⚠️ <strong>Emergency:</strong> {emergency}
          </Typography>
        </Box>
      );
    } else {
      response.text = "Digvijay didn't trained me for this🙁! Can only tell about headache, back pain and depression";
    }

    setMessages(prev => [...prev, response]);
  };

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      height: '80vh',
      maxWidth: '800px',
      mx: 'auto',
      p: 2,
      border: `1px solid ${theme.palette.divider}`,
      borderRadius: 2
    }}>
      {/* Chat Header */}
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        p: 2,
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        borderRadius: '8px 8px 0 0'
      }}>
        <MedicalInformation sx={{ mr: 2 }} />
        <Typography variant="h6">Dr. Manas - AI Health Assistant</Typography>
      </Box>

      {/* Messages Area */}
      <Box sx={{ 
        flex: 1, 
        overflowY: 'auto', 
        p: 2,
        backgroundColor: theme.palette.background.default
      }}>
        <List>
          {messages.map((msg, index) => (
            <React.Fragment key={index}>
              <ListItem 
                sx={{ 
                  justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  alignItems: 'flex-start'
                }}
              >
                {msg.sender === 'bot' && (
                  <ListItemAvatar sx={{ minWidth: 40 }}>
                    <Avatar sx={{ bgcolor: theme.palette.primary.main }}>
                      <MedicalInformation />
                    </Avatar>
                  </ListItemAvatar>
                )}
                <Paper
                  elevation={2}
                  sx={{
                    p: 2,
                    maxWidth: '70%',
                    backgroundColor: msg.sender === 'user' 
                      ? theme.palette.primary.light 
                      : theme.palette.background.paper,
                    color: msg.sender === 'user' ? 'white' : 'inherit',
                    borderRadius: msg.sender === 'user' 
                      ? '18px 18px 0 18px' 
                      : '18px 18px 18px 0'
                  }}
                >
                  {typeof msg.text === 'string' ? (
                    <Typography>{msg.text}</Typography>
                  ) : (
                    msg.text
                  )}
                </Paper>
              </ListItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
          ))}
          <div ref={messagesEndRef} />
        </List>
      </Box>

      {/* Input Area */}
      <Box sx={{ 
        display: 'flex', 
        p: 2,
        borderTop: `1px solid ${theme.palette.divider}`
      }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Describe your symptoms..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          sx={{ mr: 1 }}
        />
        <IconButton
          color="primary"
          onClick={handleSend}
          disabled={!input.trim()}
          sx={{ 
            backgroundColor: theme.palette.primary.main,
            color: 'white',
            '&:hover': {
              backgroundColor: theme.palette.primary.dark
            }
          }}
        >
          <Send />
        </IconButton>
      </Box>
    </Box>
  );
}

export default DrManasChatbot;