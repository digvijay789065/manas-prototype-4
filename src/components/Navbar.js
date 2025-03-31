import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Handle window resize for responsiveness
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <AppBar position="static" className="navbar" sx={{ backgroundColor: "#1976d2" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            Dr. Manas
          </Link>
        </Typography>

        {isMobile ? (
          <>
            <IconButton edge="end" color="inherit" onClick={handleMenuOpen}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              sx={{ "& .MuiPaper-root": { width: "200px" } }}
            >
              <MenuItem onClick={handleMenuClose} component={Link} to="/">Home</MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/chat">Chatbot</MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/about">About</MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/login">Login</MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <Typography sx={{ marginRight: "20px" }}>
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>Home</Link>
            </Typography>
            <Typography sx={{ marginRight: "20px" }}>
              <Link to="/chat" style={{ textDecoration: "none", color: "inherit" }}>Chatbot</Link>
            </Typography>
            <Typography sx={{ marginRight: "20px" }}>
              <Link to="/about" style={{ textDecoration: "none", color: "inherit" }}>About</Link>
            </Typography>
            <Typography>
              <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>Login</Link>
            </Typography>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
