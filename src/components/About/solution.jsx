import { Box, Typography, Button } from "@mui/material";
import BgImage from "../assets/Hero.png"; // replace with your background image
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function SkinHairSection() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        width: "92%",
        minHeight: { xs: "80vh", md: "70vh" }, // taller on small devices
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        px: { xs: 2, sm: 4, md: 6, lg: 8 },
        py: { xs: 6, sm: 8, md: 10 },
        backgroundImage: `url(${BgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          bgcolor: "rgba(0,0,0,0.6)", // dark overlay
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          maxWidth: { xs: "100%", sm: "600px", md: "800px" },
        }}
        data-aos="fade-up"
      >
        {/* Title */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            mb: { xs: 2, sm: 3 },
            lineHeight: 1.3,
            fontSize: {
              xs: "1.8rem", // phones
              sm: "2.2rem", // tablets
              md: "2.8rem", // laptops
              lg: "3.2rem", // desktops
            },
          }}
          data-aos="fade-up"
        >
          Personalized Skin & Hair Solutions That Show Real Progress
        </Typography>

        {/* Paragraph */}
        <Typography
          variant="body1"
          sx={{
            mb: { xs: 3, sm: 4 },
            fontSize: {
              xs: "0.95rem",
              sm: "1rem",
              md: "1.1rem",
              lg: "1.15rem",
            },
            lineHeight: 1.6,
          }}
          data-aos="fade-up"
          data-aos-delay={200}
        >
          At Bonitaa Skin Hair and Body Care Clinic in Pudukkottai, we create
          each treatment plan based on your needs. If you face dull skin, early
          signs of aging, hair loss, or uneven skin tone, we offer treatments
          that show real results and improve long-term health. We focus on
          helping you feel confident with care that works from the inside out.
        </Typography>

        {/* Button */}
        <Button
          variant="contained"
          component={Link}
          to="/appointment"
          sx={{
            bgcolor: "#D4AF37",
            color: "black",
            fontWeight: "bold",
            px: { xs: 3, sm: 4, md: 5 },
            py: { xs: 1, sm: 1.2, md: 1.5 },
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.05rem" },
            borderRadius: "8px",
            "&:hover": { bgcolor: "#c09c32" },
          }}
          data-aos="zoom-in"
          data-aos-delay={400}
        >
          Book a Consultation
        </Button>
      </Box>
    </Box>
  );
}
