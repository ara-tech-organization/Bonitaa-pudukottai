import { Box, Typography, Button } from "@mui/material";
import BgImage from "../assets/Hero.png"; // replace with your background image
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function SkinHairSection() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        px: 4,
        py: 10,
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
        sx={{ position: "relative", maxWidth: "800px" }}
        data-aos="fade-up"
      >
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", mb: 3, lineHeight: 1.4 }}
          data-aos="fade-down"
        >
          Personalized Skin & Hair Solutions That Show Real Progress
        </Typography>

        <Typography
          variant="body1"
          sx={{ mb: 4, fontSize: "1.1rem" }}
          data-aos="fade-up"
          data-aos-delay={200}
        >
          At Bonitaa Skin Hair and Body Care Clinic in Pudukkottai, we create
          each treatment plan based on your needs. If you face dull skin, early
          signs of aging, hair loss, or uneven skin tone, we offer treatments
          that show real results and improve long-term health. We focus on
          helping you feel confident with care that works from the inside out.
        </Typography>

      <Button
  variant="contained"
  href="/appointment"   // 👈 direct link
  sx={{
    bgcolor: "#D4AF37",
    color: "black",
    fontWeight: "bold",
    px: 4,
    py: 1.5,
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
