import { Box, Grid, Typography } from "@mui/material";
import Image from "../assets/hero2.avif";
import F3Image from "../assets/f3.png"; // 👈 left top decorative image
import F4Image from "../assets/f1.png"; // 👈 bottom decorative image
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

function VisionMissionSection() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <Box
      sx={{
        position: "relative", // for absolute decorative images
        bgcolor: "black",
        color: "white",
        py: 8,
        marginTop: "-70px",
        px: { xs: 2, md: 6, lg: 10 },
        overflow: "hidden",
      }}
    >
      {/* Decorative F3 Image (left top) */}
      <Box
        component="img"
        src={F3Image}
        alt="Decorative F3"
        sx={{
          position: "absolute",
          top: { xs: "20px", md: "40px" },
          left: { xs: "10px", md: "30px" },
          width: { xs: 80, md: 120 },
          height: "auto",
          opacity: 0.9,
          animation: "floatLoop 6s ease-in-out infinite",
          zIndex: 1,
        }}
      />

      {/* Decorative F4 Image (bottom right) */}
      <Box
        component="img"
        src={F4Image}
        alt="Decorative F4"
        sx={{
          position: "absolute",
          bottom: { xs: "5%", md: "5%" },
          left: { xs: "10%", md: "90%" },
          width: { xs: 60, md: 100 },
          opacity: 0.9,
          animation: "floatLoop 10s ease-in-out infinite", // slow loop
        }}
        data-aos="fade-up"
      />

      {/* Top: About Section */}
      <Box
        sx={{ textAlign: "center", mb: 6, position: "relative", zIndex: 2 }}
        data-aos="fade-up"
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", mb: 2, color: "#D4AF37" }}
        >
          <Box
            component="span"
            sx={{
              width: 20,
              height: 20,
              bgcolor: "#D4AF37",
              display: "inline-block",
              transform: "rotate(45deg)",
              mr: 3,
            }}
          />
          ABOUT US
        </Typography>
         <Typography
          variant="h3"
          sx={{ fontWeight: "bold", fontFamily: "Kurale, serif", mb: 3 }}
        >
          Bonitaa Skin & Hair Care Clinic In Pudukkottai
        </Typography>
        <Typography
          variant="body1"
          sx={{ mb: 2, lineHeight: 1.7, maxWidth: "900px", mx: "auto" }}
        >
          Since 2008, Bonitaa Skin & Hair Care has been a trusted name for skin
          and hair care. Now in Pudukkottai, we bring the same commitment to
          quality and results that made us a favorite. Our goal goes beyond
          surface-level change. It's about enabling you to feel seen and
          secure...
        </Typography>
        <Typography
          variant="body1"
          sx={{ lineHeight: 1.7, maxWidth: "900px", mx: "auto" }}
        >
          Choosing Bonitaa Skin & Hair Care means picking dependability, empathy,
          and clarity. From advanced equipment to experienced hands and honest
          guidance, we stay by your side at every step of your care journey.
        </Typography>
      </Box>

      {/* Row: Left (Vision + Mission stacked) - Right (Image) */}
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
        sx={{ position: "relative", zIndex: 2 }}
      >
        {/* Left Column: Vision & Mission stacked */}
        <Grid size={{xs:12,md:6}} >
          <Box
            data-aos="fade-right"
            sx={{
              bgcolor: "#D4AF37",
              borderRadius: "16px",
              p: 3,
              boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
              textAlign: "center",
              color: "black",
              mb: 3,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              Our Vision
            </Typography>
            <Typography variant="body2">
              To be Pudukkottai’s most trusted name in skincare and haircare...
            </Typography>
          </Box>

          <Box
            data-aos="fade-right"
            sx={{
              bgcolor: "#D4AF37",
              borderRadius: "16px",
              p: 3,
              boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
              textAlign: "center",
              color: "black",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              Our Mission
            </Typography>
            <Typography variant="body2">
              We focus on long-term solutions that prioritize the health of your
              skin and hair...
            </Typography>
          </Box>
        </Grid>

        {/* Right Column: Image */}
        <Grid size={{xs:12,md:6}} sx={{ textAlign: "center" }}>
          <Box
            component="img"
            src={Image}
            alt="Clinic"
            data-aos="zoom-in"
            sx={{
              maxWidth: "400px",
              width: "100%",
              borderRadius: "16px",
              boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
              mx: "auto",
            }}
          />
        </Grid>
      </Grid>

      {/* Floating animation */}
      <style>
        {`
          @keyframes floatLoop {
            0%   { transform: translateY(0); }
            50%  { transform: translateY(-15px); }
            100% { transform: translateY(0); }
          }
        `}
      </style>
    </Box>
  );
}

export default VisionMissionSection;
