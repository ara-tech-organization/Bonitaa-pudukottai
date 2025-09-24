import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import Logo1 from "../assets/u1.svg";
import Logo2 from "../assets/u2.svg";
import Logo3 from "../assets/u3.svg";
import Logo4 from "../assets/u4.svg";
// import F5Image from "../assets/f5.webp"; // center image commented out as in your last version

const features = [
  {
    icon: Logo1,
    bg: "#D4AF37",
    title: "Visible, Lasting Results",
    desc: "Our clients experience real improvement. Healthier skin, stronger hair, and renewed confidence.",
  },
  {
    icon: Logo2,
    bg: "#D4AF37",
    title: "Advanced, Safe Technology",
    desc: "We use modern equipment & proven techniques handled by trained professionals.",
  },
  {
    icon: Logo3,
    bg: "#D4AF37",
    title: "Personalized Care Plans",
    desc: "Custom treatment plans designed for your skin, hair, and lifestyle.",
  },
  {
    icon: Logo4,
    bg: "#D4AF37",
    title: "Compassionate Expert Team",
    desc: "Supportive, kind, and expert care from start to finish.",
  },
];

export default function WhyChooseUs() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const FeatureCard = ({ item }) => (
    <Card
      data-aos="zoom-in"
      sx={{
        height: 300, // all cards same height
        p: 3,
        textAlign: "center",
        borderRadius: 2, // ~10px
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
        },
      }}
    >
      <Box
        sx={{
          width: 60,
          height: 60,
          borderRadius: "50%",
          backgroundColor: item.bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 2,
          mx: "auto",
        }}
      >
        <img
          src={item.icon}
          alt={item.title}
          style={{ width: "50%", height: "50%", objectFit: "contain" }}
        />
      </Box>
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        {item.title}
      </Typography>
      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        {item.desc}
      </Typography>
    </Card>
  );

  return (
    <Box sx={{ py: 6, px: 5, textAlign: "center" }}>
      {/* Heading */}
      <Typography
        data-aos="fade-down"
        sx={{ fontWeight: "bold", fontSize: "1.2rem", color: "#D4AF37", mb: 2 }}
      >
        Why Choose Us?
      </Typography>
      <Typography
        variant="h4"
        data-aos="fade-up"
        sx={{ mb: 6, fontFamily: "Kurale, serif" }}
      >
        Why People Trust Bonitaa Skin & Hair Care Clinic In Pudukkottai
      </Typography>

      {/* Grid Layout */}
      <Grid container spacing={4} alignItems="center" justifyContent="center"  data-aos="fade-down">
        {/* Left 2 cards */}
        {features.slice(0, 2).map((feature, index) => (
          <Grid size={{xs:12,sm:6,md:3}}  key={index}>
            <FeatureCard item={feature} />
          </Grid>
        ))}

        {/* Center image commented out */}
        {/* <Grid item xs={12} md={3} display="flex" justifyContent="center">
          <Box
            component="img"
            src={F5Image}
            alt="Decorative Design"
            sx={{
              width: { xs: 180, md: 200 },
              height: "auto",
              animation: "floatLoop 6s ease-in-out infinite",
            }}
          />
        </Grid> */}

        {/* Right 2 cards */}
        {features.slice(2, 4).map((feature, index) => (
          <Grid size={{xs:12,sm:6,md:3}} key={index}>
            <FeatureCard item={feature} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
