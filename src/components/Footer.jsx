import React, { useEffect } from "react";
import { Box, Grid, Typography, Link, Divider } from "@mui/material";
import { Facebook, Instagram, YouTube } from "@mui/icons-material";
import logo from "../components/assets/Logo.png";
import Decor14 from "../components/assets/14.png"; // 👈 decorative image
import AOS from "aos";
import "aos/dist/aos.css";

export default function FooterSplit() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const quickLinks = [
    "Home",
    "About ",
    "Services",
    "Contact Us",
    "Appointment",
  ];
  const policies = ["Refund Policy", "Terms & Conditions", "Privacy Policy"];

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
        mt: 6,
        pt: 6,
        position: "relative",
      }}
    >
      {/* Right-bottom dotted line */}
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

      {/* Left-top dotted line */}
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

      {/* Top - Logo + Tagline */}
      <Box
        data-aos="fade-up"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          mb: 3,
          flexWrap: "wrap",
        }}
      >
        <img src={logo} alt="Bonitaa Logo" style={{ height: 60 }} />
        <Box>
          <Typography
            sx={{ color: "#D4AF37", fontSize: "1.3rem", fontWeight: "bold" }}
          >
            Transform Your Skin
          </Typography>
          <Typography sx={{ color: "#D4AF37" }}>
            Transform Your Confidence
          </Typography>
        </Box>
      </Box>

      {/* Middle - Quick Links */}
      <Box
        data-aos="fade-up"
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 3,
          mb: 3,
        }}
      >
        {quickLinks.map((link, idx) => {
          let href = "#";
          switch (link) {
            case "Home":
              href = "/";
              break;
            case "About ":
              href = "/about";
              break;
            case "Services":
              href = "/services";
              break;
            case "Contact Us":
              href = "/contact";
              break;
            case "Appointment":
              href = "/appointment";
              break;
            default:
              href = "#";
          }
          return (
            <Link
              key={idx}
              href={href}
              underline="hover"
              sx={{
                fontSize: "0.95rem",
                color: "#fff", // default color
                transition: "color 0.3s",
                "&:hover, &:active": { color: "#D4AF37" },
              }}
            >
              {link}
            </Link>
          );
        })}
      </Box>

      {/* Bottom - Contact + Socials */}
      <Grid
        container
        spacing={2}
        alignItems="flex-start"
        data-aos="fade-up"
        sx={{
          px: { xs: 3, md: 20 },
          pb: 2,
          mt: 5,
          textAlign: { xs: "center", md: "center" },
        }}
      >
        {/* Contact Us Heading */}
        <Grid size={{ xs: 12, md: 2 }} textAlign="center">
          <Typography
            variant="subtitle1"
            sx={{ color: "#f1c40f", fontWeight: "bold", mb: { xs: 1, md: 0 } }}
          >
            Contact Us
          </Typography>
        </Grid>

        {/* Address */}
        <Grid size={{ xs: 12, md: 3 }} textAlign="center">
          <Typography
            sx={linkStyle}
            onClick={() =>
              window.open(
                "https://www.google.com/maps/search/?api=1&query=Jaya+Towers,+S+2,+Second+Floor,+East+Second+Street,+Pudukkottai+622001",
                "_blank"
              )
            }
          >
            Jaya Towers, S 2, Second Floor,
          </Typography>
          <Typography
            sx={linkStyle}
            onClick={() =>
              window.open(
                "https://www.google.com/maps/search/?api=1&query=Jaya+Towers,+S+2,+Second+Floor,+East+Second+Street,+Pudukkottai+622001",
                "_blank"
              )
            }
          >
            East Second Street,
          </Typography>
          <Typography
            sx={linkStyle}
            onClick={() =>
              window.open(
                "https://www.google.com/maps/search/?api=1&query=Jaya+Towers,+S+2,+Second+Floor,+East+Second+Street,+Pudukkottai+622001",
                "_blank"
              )
            }
          >
            Pudukkottai - 622001
          </Typography>
        </Grid>

        {/* Phones + Email */}
        <Grid size={{ xs: 12, md: 3 }} textAlign="center">
          <Typography
            sx={linkStyle}
            onClick={() => (window.location.href = "tel:+919691455668")}
          >
            +91 96914 55668
          </Typography>
          <Typography
            sx={linkStyle}
            onClick={() => (window.location.href = "tel:+918807122992")}
          >
            +91 88071 22992
          </Typography>
          <Typography
            sx={linkStyle}
            onClick={() =>
              (window.location.href = "mailto:customercare@bonitaa.co.in")
            }
          >
            customercare@bonitaa.co.in
          </Typography>
        </Grid>

        {/* Social Icons */}
        <Grid
          size={{ xs: 12, md: 4 }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", md: "flex-start" },
            gap: 3,
            flexWrap: "wrap",
          }}
        >
          <Box
            component={Link}
            href="#"
            underline="none"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: "#fff",
              transition: "color 0.3s",
              "&:hover, &:active": { color: "#D4AF37" },
            }}
          >
            <Facebook />
            <Typography>Facebook</Typography>
          </Box>

          <Box
            component={Link}
            href="#"
            underline="none"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: "#fff",
              transition: "color 0.3s",
              "&:hover, &:active": { color: "#D4AF37" },
            }}
          >
            <Instagram />
            <Typography>Instagram</Typography>
          </Box>

          <Box
            component={Link}
            href="#"
            underline="none"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: "#fff",
              transition: "color 0.3s",
              "&:hover, &:active": { color: "#D4AF37" },
            }}
          >
            <YouTube />
            <Typography>Youtube</Typography>
          </Box>
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
        <Box>
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
        </Box>
      </Box>
    </Box>
  );
}
