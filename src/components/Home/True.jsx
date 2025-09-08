import { Box, Typography, CircularProgress, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import StarIcon from "@mui/icons-material/Stars";
import ApartmentIcon from "@mui/icons-material/Apartment";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import PhoneIcon from "@mui/icons-material/Phone";

import AOS from "aos";
import "aos/dist/aos.css";

const statsData = [
  { icon: <StarIcon sx={{ fontSize: 28, color: "#D4AF37" }} />, number: 15, label: "Experience", suffix: "+" },
  { icon: <ApartmentIcon sx={{ fontSize: 28, color: "#D4AF37" }} />, number: 12, label: "Branches", suffix: "+" },
  { icon: <EmojiEmotionsIcon sx={{ fontSize: 28, color: "#D4AF37" }} />, number: 50, label: "Happy Customers", suffix: "k" },
];

export default function StatsSection() {
  const [progress, setProgress] = useState([0, 0, 0]);

  useEffect(() => {
    const timers = statsData.map((item, index) =>
      setInterval(() => {
        setProgress((prev) => {
          const updated = [...prev];
          if (updated[index] < item.number) updated[index] += 1;
          return updated;
        });
      }, 40)
    );
    return () => timers.forEach((t) => clearInterval(t));
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "black",
        py: 6,
        px: { xs: 2, md: 6 },
        color: "white",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: { xs: "center", md: "space-between" },
        alignItems: "center",
        textAlign: { xs: "center", md: "left" },
        gap: 6,
      }}
      data-aos="fade-up"
    >
      {/* Left Side Content */}
      <Box sx={{ maxWidth: { xs: "100%", md: 420 } }}>
        <Typography
          variant="h5"
          sx={{
            color: "#D4AF37",
            fontWeight: "bold",
            mb: 1,
          }}
        >
          Show Your True Self
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 2,
            lineHeight: 1.6,
            fontSize: { xs: "14px", md: "16px" },
          }}
        >
          At Bonitaa Skin & Hair Care in Pudukkottai, our goal isn’t to change who
          you are. It’s to help you become the most confident, natural version of
          yourself.
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1, justifyContent: "center" }}>
          <PhoneIcon sx={{ color: "#D4AF37" }} />
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            +91 96914 55666
          </Typography>
        </Box>
      </Box>

      {/* Right Side Stats */}
      <Box sx={{ flex: 1 }}>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="center"
        >
          {statsData.map((item, index) => (
            <Grid
              item
              xs={12} // center all items on xs
              sm={6}
              md={4}
              key={index}
              sx={{ textAlign: "center" }}
              data-aos="zoom-in"
              data-aos-delay={index * 200}
            >
              <Box sx={{ position: "relative", display: "inline-flex" }}>
                <CircularProgress
                  variant="determinate"
                  value={(progress[index] / item.number) * 100}
                  size={100}
                  thickness={4}
                  sx={{ color: "#D4AF37" }}
                />
                <Box
                  sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: "absolute",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "#FFD700" }}
                  >
                    {progress[index]}
                    {item.suffix}
                  </Typography>
                </Box>
              </Box>
              <Typography variant="h6" sx={{ fontWeight: "bold", mt: 1 }}>
                {item.label}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
