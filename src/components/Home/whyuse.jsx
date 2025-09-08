import { Box, Typography, Paper, Grid } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import Logo1 from "../assets/u1.svg";
import Logo2 from "../assets/u2.svg";
import Logo3 from "../assets/u3.svg";
import Logo4 from "../assets/u4.svg";
import F5Image from "../assets/f5.webp"; // 👈 decorative image

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

  const CircleCard = ({ item }) => (
    <Box
      data-aos="zoom-in"
      sx={{
        width: 260,
        height: 260,
        borderRadius: "50%",
        border: "3px solid black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mx: "auto",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: 220,
          height: 220,
          borderRadius: "50%",
          p: 2,
          border: "3px solid #D4AF37",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
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
            mb: 1,
          }}
        >
          <img
            src={item.icon}
            alt={item.title}
            style={{ width: "50%", height: "50%", objectFit: "contain" }}
          />
        </Box>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", mb: 1, fontFamily: "Kurale, serif" }}
        >
          {item.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary", px: 1 }}>
          {item.desc}
        </Typography>
      </Paper>
    </Box>
  );

  return (
    <Box sx={{ py: 6, px: 5, textAlign: "center" }}>
      {/* Heading */}
      <Typography
        data-aos="fade-down"
        sx={{ fontWeight: "bold", fontSize: "1.2rem", color: "#D4AF37" }}
      >
        <Box
          sx={{
            position: "absolute",
            top: { xs: "10%", md: "1500%" },
            left: { xs: "5%", md: "1%" },
            width: { xs: 40, md: 20 },
            height: { xs: 40, md: 20 },
            bgcolor: "black",
            borderRadius: "50%",
            opacity: 0.8,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: "5%", md: "50%" },
            right: { xs: "5%", md: "5%" },
            width: { xs: 40, md: 20 },
            height: { xs: 40, md: 20 },
            bgcolor: "#D4AF37",
            borderRadius: "50%",
            opacity: 0.8,
          }}
        />
        <Box
          component="span"
          sx={{
            width: 12,
            height: 12,
            bgcolor: "#D4AF37",
            display: "inline-block",
            transform: "rotate(45deg)",
            mr: 2,
          }}
        />
        Why Choose Us ?
      </Typography>
      <Typography
        variant="h4"
        data-aos="fade-up"
        sx={{ mb: 6, fontFamily: "Kurale, serif" }}
      >
        Why People Trust Bonitaa Skin & Hair Care Clinic In Pudukkottai
      </Typography>

      {/* Layout: 2 left circles | center image | 2 right circles */}
      <Grid
        container
        spacing={6}
        alignItems="center"
        justifyContent="center"
        textAlign={{ xs: "center", sm: "center", md: "inherit" }}
      >
        {/* Left 2 circles */}
        <Grid  size={{xs:12,md:4}}>
          <Grid
            container
            spacing={4}
            direction="column"
            alignItems={{ xs: "center", sm: "center", md: "center" }}
            justifyContent={{ xs: "center", sm: "center", md: "flex-start" }}
          >
            <Grid  size>
              <CircleCard item={features[0]} />
            </Grid>
            <Grid  size>
              <CircleCard item={features[1]} />
            </Grid>
          </Grid>
        </Grid>

        {/* Center image */}
        <Grid
           size={{xs:12,md:4}}
         
          
          display="flex"
          justifyContent={{ xs: "center", sm: "center", md: "center" }}
        >
          <Box
            component="img"
            src={F5Image}
            alt="Decorative Center"
            sx={{
              width: { xs: 180, md: 260 },
              height: "auto",
              animation: "floatLoop 6s ease-in-out infinite",
            }}
          />
        </Grid>

        {/* Right 2 circles */}
        <Grid  size={{xs:12,md:4}}>
          <Grid
            container
            spacing={4}
            direction="column"
            alignItems={{ xs: "center", sm: "center", md: "center" }}
            justifyContent={{ xs: "center", sm: "center", md: "flex-start" }}
          >
            <Grid  size>
              <CircleCard item={features[2]} />
            </Grid>
            <Grid size>
              <CircleCard item={features[3]} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Floating animation */}
      <style>
        {`
          @keyframes floatLoop {
            0%   { transform: translateY(0); }
            50%  { transform: translateY(-20px); }
            100% { transform: translateY(0); }
          }
        `}
      </style>
    </Box>
  );
}
