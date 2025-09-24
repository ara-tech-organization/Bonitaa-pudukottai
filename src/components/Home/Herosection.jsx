// HeroSection.jsx
import { Box, Typography, Button, Grid } from "@mui/material";
import HeroImage from "../assets/Hero.png";
import F4Image from "../assets/f1.png";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";

function HeroSection() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "black",
        py: { xs: 6, sm: 8, md: 10 }, // adaptive padding
        px: { xs: 2, sm: 4, md: 6 },
        color: "#D4AF37",
        marginTop: { xs: "-40px", sm: "-60px", md: "-70px" },
        overflow: "hidden",
      }}
    >
      {/* Floating Decorative Image */}
      {/* <Box
        component="img"
        src={F4Image}
        alt=" Foral Decorative image"
        sx={{
          position: "absolute",
          bottom: { xs: "5%", md: "70%" },
          left: { xs: "10%", md: "90%" },
          width: { xs: 50, sm: 70, md: 100 },
          opacity: 0.9,
          animation: "floatLoop 10s ease-in-out infinite",
        }}
        data-aos="fade-up"
      /> */}

      {/* Floating Circles */}
      {/* <Box
        sx={{
          position: "absolute",
          bottom: { xs: "5%", md: "10%" },
          right: { xs: "5%", md: "5%" },
          width: { xs: 25, sm: 30, md: 40 },
          height: { xs: 25, sm: 30, md: 40 },
          bgcolor: "white",
          borderRadius: "50%",
          opacity: 0.8,
        }}
      /> */}
      {/* <Box
        sx={{
          position: "absolute",
          top: { xs: "8%", md: "4%" },
          left: { xs: "5%", md: "1%" },
          width: { xs: 25, sm: 30, md: 40 },
          height: { xs: 25, sm: 30, md: 40 },
          bgcolor: "#D4AF37",
          borderRadius: "50%",
          opacity: 0.8,
        }}
      /> */}

      <Grid container spacing={4} alignItems="center">
        {/* Left Image */}
        <Grid  size={{xs:12,md:6}}>
          <Box
            component="img"
            src={HeroImage}
            alt="Trusted Skin and Hair Care Clinic in Pudukkottai"
            data-aos="fade-up"
            sx={{
              width: "100%",
              border: "3px solid white",
              height: { xs: 220, sm: 300, md: 450 },
              objectFit: "cover",
              borderRadius: 2,
            }}
          />
        </Grid>

        {/* Right Content */}
        <Grid size={{xs:12,md:6}} >
          <Box
            data-aos="fade-up"
            sx={{
              textAlign: { xs: "center", md: "left" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
              px: { xs: 1, sm: 2, md: 4 },
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                fontFamily: "Kurale, serif",
                fontSize: { xs: "1.2rem", sm: "1.8rem", md: "2.5rem" },
                mb: 2,
              }}
            >
              Trusted Clinic For Skin & Hair Care Treatment In Pudukkottai
            </Typography>

            <Typography
              sx={{
                color: "white",
                mb: 4,
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.3rem" },
                fontFamily: "Kurale, serif",
              }}
            >
              Let your skin breathe and your hair shine with confidence
            </Typography>

            <Button
              variant="contained"
              component={Link}
              to="/appointment"
              data-aos="zoom-in"
              sx={{
                backgroundColor: "#D4AF37",
                color: "black",
                borderRadius: "30px",
                px: { xs: 3, sm: 4 },
                py: { xs: 1, sm: 1.5 },
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                fontWeight: "bold",
                textTransform: "none",
                alignSelf: { xs: "center", md: "flex-start" },
                "&:hover": { backgroundColor: "#c5a028" },
              }}
            >
              Book Your Appointment →
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/* Floating Animations */}
      <style>
        {`
          @keyframes floatLoop {
            0% { transform: translateY(0); }
            50% { transform: translateY(-60px); }
            100% { transform: translateY(0); }
          }
        `}
      </style>
    </Box>
  );
}

export default HeroSection;