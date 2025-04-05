import React from "react";
import { Box, Container, Typography, Link, useTheme } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.mode === 'dark' ? '#121212' : '#1976d2',
        color: '#fff',
        py: 4,
        mt: 'auto',
        borderTop: `1px solid ${theme.palette.divider}`
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2
          }}
        >
          {/* Copyright */}
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Dr. Manas. All rights reserved.
          </Typography>

          {/* Creator credit with subtle hover effect */}
          <Typography variant="body2">
            Created by{' '}
            <Link 
              href="https://github.com/inyourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              sx={{
                color: 'inherit',
                fontWeight: 600,
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                  textDecorationColor: theme.palette.secondary.main
                }
              }}
            >
              Digvijay Singh Pundir
            </Link>
          </Typography>

          {/* Navigation Links */}
          <Box
            sx={{
              display: 'flex',
              gap: 3,
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}
          >
            {[
              { path: '/', name: 'Home' },
              { path: '/about', name: 'About' },
              { path: '/contact', name: 'Contact' },
              { path: '/privacy', name: 'Privacy' },
              { path: '/terms', name: 'Terms' }
            ].map((item) => (
              <Link
                key={item.path}
                component={RouterLink}
                to={item.path}
                sx={{
                  color: 'inherit',
                  textDecoration: 'none',
                  '&:hover': {
                    color: theme.palette.secondary.light
                  }
                }}
              >
                {item.name}
              </Link>
            ))}
          </Box>
        </Box>

       
      </Container>
    </Box>
  );
};

export default Footer;