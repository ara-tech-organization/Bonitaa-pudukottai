import React, { useState, useEffect } from "react";
import { Box, Tabs, Tab, Typography, Paper } from "@mui/material";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import SpaIcon from "@mui/icons-material/Spa";
import AOS from "aos";
import "aos/dist/aos.css";

const treatments = [
  {
    label: "Skin Treatments",
    description:
      "Brighten your face with safe and effective care. We treat wrinkles, dark spots, dryness, and acne with tested techniques.",
    icon: <FaceRetouchingNaturalIcon sx={{ fontSize: 60, color: "#D4AF37" }} />,
  },
  {
    label: "Hair Treatments",
    description:
      "Combat hair loss and encourage healthy growth with PRP therapy, scalp rejuvenation, and hair transplant options.",
    icon: <ContentCutIcon sx={{ fontSize: 60, color: "#D4AF37" }} />,
  },
  {
    label: "Body Treatments",
    description:
      "Feel wonderful from head to toe with laser hair removal, body polishing, tan removal, and skin brightening.",
    icon: <SpaIcon sx={{ fontSize: 60, color: "#D4AF37" }} />,
  },
];

const TreatmentTabs = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => (prev + 1) % treatments.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        py: 8,
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(to bottom, #faf9f6, #f5f5f5)",
      }}
    >
      {/* Decorative Circle - Top Left */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: "5%", md: "8%" },
          left: { xs: "5%", md: "3%" },
          width: { xs: 12, md: 35 },
          height: { xs: 12, md: 35 },
          bgcolor: "black",
          borderRadius: "50%",
          opacity: 0.8,
          animation: "floatLoop 8s ease-in-out infinite",
        }}
      />

      {/* Decorative Circle - Bottom Right */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: "5%", md: "8%" },
          right: { xs: "5%", md: "3%" },
          width: { xs: 12, md: 35 },
          height: { xs: 12, md: 35 },
          bgcolor: "#D4AF37",
          borderRadius: "50%",
          opacity: 0.8,
          animation: "floatLoop 10s ease-in-out infinite",
        }}
      />

      {/* Heading for desktop/tablet */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          mb: 4,
          color: "#000",
          px: 2,
          // display: { xs: "none", sm: "block" }, // hide on xs
        }}
        data-aos="fade-down"
      >
        Best Clinic For Complete Skin & Hair Solutions In Pudukkottai
      </Typography>

      {/* Tabs / Single Heading */}
      <Box
        display="flex"
        justifyContent="center"
        data-aos="fade-up"
        data-aos-delay={150}
      >
        {/* Desktop Tabs */}
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="inherit"
            indicatorColor="secondary"
            variant="scrollable"
            scrollButtons={false}
            sx={{
              maxWidth: 750,
              "& .MuiTab-root": {
                fontWeight: "bold",
                fontSize: "1rem",
                textTransform: "none",
                minWidth: "auto",
                px: 9,
              },
              "& .Mui-selected": { color: "#D4AF37" },
              "& .MuiTabs-indicator": {
                backgroundColor: "#D4AF37",
                height: 3,
              },
            }}
          >
            {treatments.map((item, index) => (
              <Tab key={index} label={item.label} />
            ))}
          </Tabs>
        </Box>

      
        {/* Mobile Single Heading with Arrow */}
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            mt: 2,
          }}
        >
          {/* Active Label */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "#D4AF37",
              borderBottom: "3px solid #D4AF37",
              display: "inline-block",
              pb: 0.5,
            }}
          >
            {treatments[value].label}
          </Typography>

          {/* Next Arrow */}
          <Box
            component="button"
            onClick={() => setValue((prev) => (prev + 1) % treatments.length)}
            sx={{
              border: "none",
              background: "transparent",
              cursor: "pointer",
              color: "#D4AF37",
              fontSize: "1.5rem",
              fontWeight: "bold",
              "&:hover": { opacity: 0.7 },
            }}
          >
            ➜
          </Box>
        </Box>
      </Box>

      {/* Tab Content */}
      <Paper
        elevation={4}
        sx={{
          p: { xs: 3, md: 5 },
          mt: 4,
          maxWidth: { xs: "90%", md: 650 },
          mx: "auto",
          borderRadius: 4,
          border: "3px solid #000",
          textAlign: "center",
          bgcolor: "white",
          transition: "all 0.5s ease",
        }}
        data-aos="zoom-in"
        data-aos-delay={300}
      >
        {treatments[value].icon}

        {/* Show label only on desktop/tablet */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            mt: 2,
            color: "#000",
            display: { xs: "none", sm: "block" },
          }}
        >
          {treatments[value].label}
        </Typography>

        <Typography variant="body1" sx={{ mt: 2, color: "text.secondary" }}>
          {treatments[value].description}
        </Typography>
      </Paper>

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
};

export default TreatmentTabs;
