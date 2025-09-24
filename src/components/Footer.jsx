import React, { useEffect } from "react";
import { Box, Grid, Typography, Link, Divider } from "@mui/material";
import { Facebook, Instagram, YouTube } from "@mui/icons-material";
import logo from "../components/assets/Logo.png";
import Decor14 from "../components/assets/14.png"; // decorative image
import AOS from "aos";
import "aos/dist/aos.css";
import { Link as RouterLink } from "react-router-dom";

export default function FooterSplit() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const quickLinks = ["Home", "About", "Services", "Contact Us", "Appointment"];
  // const policies = ["Refund Policy", "Terms & Conditions", "Privacy Policy"];

  const linkStyle = {
    color: "inherit",
    textDecoration: "none",
    cursor: "pointer",
    transition: "color 0.3s",
    "&:hover, &:active": { color: "#D4AF37" },
  };

  return (
    <Box
      sx={{
        bgcolor: "#0d0d0d",
        color: "#fff",
        pt: 6,
        position: "relative",
      }}
    >
      {/* Decorative Dotted Lines */}
      <Box
        sx={{
          position: "absolute",
          bottom: "8%",
          right: "2%",
          height: "90px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          zIndex: 1,
        }}
      >
        {[...Array(5)].map((_, i) => (
          <Box
            key={`right-dot-${i}`}
            sx={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: "white",
            }}
          />
        ))}
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: "8%",
          left: "2%",
          height: "90px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          zIndex: 1,
        }}
      >
        {[...Array(5)].map((_, i) => (
          <Box
            key={`left-dot-${i}`}
            sx={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: "white",
            }}
          />
        ))}
      </Box>

      {/* Row - Footer Content */}
    <Grid
  container
  spacing={4}
  justifyContent="center"
  textAlign={{ xs: "center", md: "left" }}
  mb={5}
  data-aos="fade-up"
>
  {/* Logo */}
  <Grid size={{ xs: 12, md: 4, lg: 2 }} textAlign="center">
    <img src={logo} alt="Bonitaa Logo" style={{ height: 70 }} />
  </Grid>

  {/* Contact */}
  <Grid size={{ xs: 12, md: 4, lg: 2 }} ml={5}>
    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
      Contact
      <Typography mt={-2}>____________</Typography>
    </Typography>

    {/* Clickable address (Google Maps) */}
    <Typography
      component="a"
      href="https://maps.google.com/?q=Jaya+Towers,+S+2,+Second+Floor,+East+Second+Street,+Pudukkottai+-+622001"
      target="_blank"
      rel="noopener noreferrer"
      sx={{ display: "block", ...linkStyle }}
    >
      Jaya Towers, S 2, Second Floor, East Second <br />
      Street, Pudukkottai - 622001
    </Typography>

    {/* Phone numbers */}
    <Typography
      component="a"
      href="tel:+919691455668"
      sx={{ mt: 1, display: "block", ...linkStyle }}
    >
      +91 96914 55668
    </Typography>
    <Typography
      component="a"
      href="tel:+918807122992"
      sx={{ display: "block", ...linkStyle }}
    >
      +91 88071 22992
    </Typography>

    {/* Email */}
    <Typography
      component="a"
      href="mailto:bonitaapudukkottai@gmail.com"
      sx={{ mt: 1, display: "block", ...linkStyle }}
    >
      bonitaapudukkottai@gmail.com
    </Typography>
  </Grid>

  {/* Quick Links */}
   <Grid size={{ xs: 12, md: 3, lg: 2 }} ml={{ lg: 7 }}>
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
        Links
        <Typography mt={-2}>________</Typography>
      </Typography>

      {/* Small/Medium screens */}
      <Box
        sx={{
          display: { xs: "flex", md: "none", lg: "none" },
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <Link component={RouterLink} to="/" sx={linkStyle}>
            Home
          </Link>
          <Link component={RouterLink} to="/about" sx={linkStyle}>
            About
          </Link>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <Link component={RouterLink} to="/services" sx={linkStyle}>
            Services
          </Link>
          <Link component={RouterLink} to="/contact" sx={linkStyle}>
            Contact Us
          </Link>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Link component={RouterLink} to="/appointment" sx={linkStyle}>
            Appointment
          </Link>
        </Box>
      </Box>

      {/* Large screens */}
      <Box sx={{ display: { xs: "none", md: "block", lg: "block" } }}>
        {quickLinks.map((link, idx) => {
          let path = "/";
          switch (link) {
            case "Home":
              path = "/";
              break;
            case "About":
              path = "/about";
              break;
            case "Services":
              path = "/services";
              break;
            case "Contact Us":
              path = "/contact";
              break;
            case "Appointment":
              path = "/appointment";
              break;
            default:
              path = "/";
          }
          return (
            <Typography key={idx} sx={{ mb: 1 }}>
              <Link component={RouterLink} to={path} sx={linkStyle}>
                {link}
              </Link>
            </Typography>
          );
        })}
      </Box>
    </Grid>

  {/* Social */}
  <Grid size={{ xs: 12, md: 4, lg: 2 }}>
    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
      Follow Us
      <Typography mt={-2}>_______________</Typography>
    </Typography>

    {/* Small/Medium screens */}
    <Box
      sx={{
        display: { xs: "flex", md: "none", lg: "none" },
        flexDirection: "column",
        gap: 1,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        <Box component={Link} href="https://www.facebook.com/profile.php?id=61558681277636" sx={linkStyle}>
          <Facebook sx={{ mr: 1, verticalAlign: "middle" }} />
          Facebook
        </Box>
        <Box component={Link} href="#" sx={linkStyle}>
          <YouTube sx={{ mr: 1, verticalAlign: "middle" }} />
          Youtube
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box component={Link} href="https://www.instagram.com/bonitaa_skin_hair_pudukkottai?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" sx={linkStyle}>
          <Instagram sx={{ mr: 1, verticalAlign: "middle" }} />
          Instagram
        </Box>
      </Box>
    </Box>

    {/* Large screens */}
    <Box
      sx={{
        display: { xs: "none", lg: "flex", md: "flex" },
        flexDirection: "column",
        gap: 1,
      }}
    >
      <Box component={Link} href="https://www.facebook.com/profile.php?id=61558681277636" sx={linkStyle}>
        <Facebook sx={{ mr: 1, verticalAlign: "middle" }} />
        Facebook
      </Box>
      <Box component={Link} href="https://www.instagram.com/bonitaa_skin_hair_pudukkottai?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" sx={linkStyle}>
        <Instagram sx={{ mr: 1, verticalAlign: "middle" }} />
        Instagram
      </Box>
      <Box component={Link} href="#" sx={linkStyle}>
        <YouTube sx={{ mr: 1, verticalAlign: "middle" }} />
        Youtube
      </Box>
    </Box>
  </Grid>

  {/* Map */}
  <Grid size={{ xs: 12, md: 6, lg: 3 }}>
    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
      Location
      <Typography mt={-2}>______________</Typography>
    </Typography>
    <iframe
      title="Bonitaa Location"
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3924.463876271187!2d78.824014!3d10.384683!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00790e6a71da2f%3A0xe880e8d244cf23da!2sBonitaa%20Skin%20and%20Hair%20Care!5e0!3m2!1sen!2sin!4v1757332718439!5m2!1sen!2sin" 
      width="80%"
      height="200"
      style={{ border: 0, borderRadius: "8px" }}
      allowFullScreen=""
      loading="lazy"
    ></iframe>
  </Grid>
</Grid>


      {/* Divider with 14.png */}
      <Box sx={{ position: "relative" }}>
        <Divider sx={{ bgcolor: "#333" }} />
        <Box
          component="img"
          src={Decor14}
          alt="Decor Divider"
          sx={{
            position: "absolute",
            top: "-30px",
            left: "10%",
            transform: "translateX(-50%)",
            width: { xs: 100, md: 100 },
            opacity: 0.9,
          }}
        />
      </Box>

      {/* Policies + Copyright */}
      <Box data-aos="fade-up" textAlign="center" sx={{ py: 3, px: 2 }}>
        <Typography variant="body2" sx={{ color: "#aaa", mb: 1 }}>
          © 2025 Bonitaa Skin & Hair Care | All Rights Reserved
        </Typography>
        {/* <Box>
          {policies.map((policy, idx) => (
            <Link
              key={idx}
              href="#"
              color="inherit"
              underline="hover"
              sx={{
                mx: 1,
                transition: "color 0.3s",
                "&:hover, &:active": { color: "#D4AF37" },
              }}
            >
              {policy}
            </Link>
          ))}
        </Box> */}
      </Box>
    </Box>
  );
}
