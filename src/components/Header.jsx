// Header.jsx
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useLocation } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useState } from "react";
import Logo from "./assets/Logo.png";

function Header() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const menuItems = [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
    { text: "Services", path: "/services" },
    { text: "Contact", path: "/contact" },
  ];

  const clickableStyle = {
    cursor: "pointer",
    color: "black",
    display: "flex",
    alignItems: "center",
    gap: 0.5,
    "&:hover": { color: "#D4AF37" },
    "&:active": { color: "#D4AF37" },
    transition: "0.3s",
  };

  return (
    <>
      {/* Top Bar */}
      <Box
        data-aos="fade-down"
        sx={{
          backgroundColor: "white",
          color: "black",
          display: { xs: "none", md: "flex" },
          justifyContent: "space-between",
          alignItems: "center",
          px: 3,
          py: 1,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1301,
        }}
      >
        {/* Left side */}
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Box
            data-aos="fade-right"
            sx={clickableStyle}
            onClick={() =>
              (window.location.href = "mailto:customercare@bonitaa.co.in")
            }
          >
            <EmailIcon fontSize="small" />
            <Typography variant="body2">customercare@bonitaa.co.in</Typography>
          </Box>

          <Box
            data-aos="fade-right"
            data-aos-delay="200"
            sx={clickableStyle}
            onClick={() =>
              window.open(
                "https://www.google.com/maps/search/?api=1&query=Jaya+Towers,+S+2,+Second+Floor,+East+Second+Street,+Pudukkottai",
                "_blank"
              )
            }
          >
            <LocationOnIcon fontSize="small" />
            <Typography variant="body2">
              Jaya Towers, S 2, Second Floor, East Second Street, Pudukkottai.
            </Typography>
          </Box>
        </Box>

        {/* Right side - Social Icons */}
        <Box data-aos="fade-left" sx={{ display: "flex", gap: 1 }}>
          <IconButton
            sx={{ color: "black", "&:hover": { color: "#D4AF37" } }}
            onClick={() => window.open("https://www.facebook.com", "_blank")}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            sx={{ color: "black", "&:hover": { color: "#D4AF37" } }}
            onClick={() =>
              window.open("https://www.instagram.com", "_blank")
            }
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            sx={{ color: "black", "&:hover": { color: "#D4AF37" } }}
            onClick={() => window.open("https://www.youtube.com", "_blank")}
          >
            <YouTubeIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Main Header (Fixed) */}
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "black",
          boxShadow: "none",
          py: 2,
          top: { xs: 0, md: 40 },
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Box component={Link} to="/" sx={{ display: "inline-block" }}>
            <Box
              component="img"
              src={Logo}
              alt="Logo"
              sx={{ height: 55 }}
              data-aos="zoom-in"
            />
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
            {menuItems.map((item, index) => (
              <Typography
                key={item.text}
                component={Link}
                to={item.path}
                sx={{
                  textDecoration: "none",
                  color: location.pathname === item.path ? "#FFD700" : "white",
                  borderBottom:
                    location.pathname === item.path
                      ? "2px solid #FFD700"
                      : "2px solid transparent",
                  "&:hover": { color: "#FFD700" },
                  transition: "0.3s",
                  fontSize: "1rem",
                }}
                data-aos="fade-right"
                data-aos-delay={index * 150}
              >
                {item.text}
              </Typography>
            ))}
          </Box>

          {/* Desktop Button */}
          <Button
            component={Link}
            to="/appointment"
            data-aos="fade-left"
            sx={{
              display: { xs: "none", md: "block" },
              backgroundColor: "#D4AF37",
              color: "black",
              borderRadius: "30px",
              px: 4,
              py: 1.2,
              fontSize: "1rem",
              textTransform: "none",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#c5a028" },
            }}
          >
            Appointment →
          </Button>

          {/* Mobile Hamburger */}
          <IconButton
            sx={{ display: { xs: "block", md: "none" }, color: "white" }}
            onClick={() => setOpen(true)}
            data-aos="fade-left"
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              <Box
                sx={{
                  width: 25,
                  height: 2,
                  bgcolor: "#FFD700",
                  borderRadius: 1,
                }}
              />
              <Box
                sx={{
                  width: 25,
                  height: 2,
                  bgcolor: "#FFD700",
                  borderRadius: 1,
                }}
              />
              <Box
                sx={{
                  width: 25,
                  height: 2,
                  bgcolor: "#FFD700",
                  borderRadius: 1,
                }}
              />
            </Box>
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Offset */}
      <Toolbar />
      <Box sx={{ height: { xs: 64, md: 120 } }} />

      {/* Drawer for Mobile */}
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 260, p: 2 }}>
          <Box display="flex" justifyContent="flex-end">
            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon sx={{ fontSize: 28, color: "#D4AF37" }} />
            </IconButton>
          </Box>

          <List>
            {menuItems.map((item, index) => (
              <ListItem
                button
                key={item.text}
                component={Link}
                to={item.path}
                onClick={() => setOpen(false)}
                data-aos="fade-right"
                data-aos-delay={index * 150}
              >
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    fontSize: "1rem",
                    fontWeight:
                      location.pathname === item.path ? "bold" : "normal",
                    color:
                      location.pathname === item.path ? "#D4AF37" : "black",
                  }}
                />
              </ListItem>
            ))}
          </List>

          <Button
            component={Link}
            to="/appointment"
            fullWidth
            data-aos="zoom-in"
            sx={{
              mt: 3,
              backgroundColor: "#D4AF37",
              color: "black",
              borderRadius: "30px",
              py: 1.2,
              fontSize: "1rem",
              textTransform: "none",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#c5a028" },
            }}
          >
            Appointment →
          </Button>
        </Box>
      </Drawer>
    </>
  );
}

export default Header;
