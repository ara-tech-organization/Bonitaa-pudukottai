import { Box, Grid, Typography } from "@mui/material";
import Image from "../assets/hero2.avif";
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
        bgcolor: "black",
        color: "white",
        py: 8,
        px: { xs: 2, sm: 4, md: 6, lg: 10 },
      }}
    >
      {/* Top: About Section */}
      <Box sx={{ textAlign: "center", mb: 6 }} data-aos="fade-up">
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
              mr: 2,
            }}
          />
          ABOUT US
        </Typography>

        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            fontFamily: "Kurale, serif",
            mb: 3,
            fontSize: { xs: "1.6rem", sm: "2rem", md: "2.5rem" },
          }}
        >
          Bonitaa Skin & Hair Care Clinic In Pudukkottai
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 2,
            lineHeight: 1.7,
            maxWidth: "900px",
            mx: "auto",
            fontSize: { xs: "0.9rem", md: "1rem" },
          }}
        >
          Since 2008, Bonitaa Skin & Hair Care has been a trusted name for skin
          and hair care. Now in Pudukkottai, we bring the same commitment to
          quality and results that made us a favorite. Our goal goes beyond
          surface-level change. It's about enabling you to feel seen and secure...
        </Typography>

        <Typography
          variant="body1"
          sx={{
            lineHeight: 1.7,
            maxWidth: "900px",
            mx: "auto",
            fontSize: { xs: "0.9rem", md: "1rem" },
          }}
        >
          Choosing Bonitaa Skin & Hair Care means picking dependability, empathy,
          and clarity. From advanced equipment to experienced hands and honest
          guidance, we stay by your side at every step of your care journey.
        </Typography>
      </Box>

      {/* Row: Vision + Mission (left) and Image (right) */}
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        {/* Left Column */}
        <Grid size={{xs:12,md:6}}>
          <Box
            data-aos="fade-up"
            sx={{
              bgcolor: "#D4AF37",
              borderRadius: "16px",
              p: { xs: 2, sm: 3 },
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
              To be Pudukkottai’s most trusted name in skincare and haircare,
              delivering effective treatments with deep empathy and care.
            </Typography>
          </Box>

          <Box
            data-aos="fade-up"
            sx={{
              bgcolor: "#D4AF37",
              borderRadius: "16px",
              p: { xs: 2, sm: 3 },
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
              skin and hair, not just the way they look.
            </Typography>
          </Box>
        </Grid>

        {/* Right Column: Image */}
        <Grid size={{xs:12,md:6}} sx={{ textAlign: "center" }}>
          <Box
            component="img"
            src={Image}
           alt="Bonitaa Beauty Spa"
            data-aos="zoom-in"
            sx={{
              maxWidth: { xs: "100%", sm: "400px" },
              width: "100%",
              borderRadius: "16px",
              boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
              mx: "auto",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default VisionMissionSection;
