import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  IconButton,
  Card,
  CardContent,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// 👉 AOS Import
import AOS from "aos";
import "aos/dist/aos.css";

// 👉 Logo imports
import SkinLogo from "../assets/logo1.svg";
import LaserLogo from "../assets/logo2.svg";
import WhiteningLogo from "../assets/logo3.svg";
import HairLogo from "../assets/logo4.svg";
import MassageLogo from "../assets/logo5.svg";
import SkinHairLogo from "../assets/logo6.svg";

// 👉 Image imports
import img1 from "../assets/a1.webp";
import img2 from "../assets/a2.webp";
import img3 from "../assets/a3.webp";
import img4 from "../assets/a4.webp";
import img5 from "../assets/a5.webp";
import img6 from "../assets/a6.webp";

// 👉 Data
const cardData = [
  { id: 1, image: img1, logo: SkinLogo, treatment: "Skin PRP Treatment", description: "..." },
  { id: 2, image: img2, logo: LaserLogo, treatment: "Q-Switch Treatment", description: "..." },
  { id: 3, image: img3, logo: WhiteningLogo, treatment: "Skin Lightening Treatment", description: "..." },
  { id: 4, image: img4, logo: HairLogo, treatment: "Hairstyling Services", description: "..." },
  { id: 5, image: img5, logo: MassageLogo, treatment: "Massage Therapy", description: "..." },
  { id: 6, image: img6, logo: SkinHairLogo, treatment: "Hair & Skin", description: "..." },
];

const CardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ Responsive breakpoints
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm")); // <600px
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md")); // 600-899px
  const isMdUp = useMediaQuery(theme.breakpoints.up("md")); // ≥900px

  // ✅ Determine how many cards to show
  const cardsToShow = isXs ? 1 : isSm ? 2 : 3;

  // ✅ Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [cardsToShow]);

  // 👉 Init AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? cardData.length - cardsToShow : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === cardData.length - cardsToShow ? 0 : prev + 1
    );
  };

  return (
    <Box sx={{ position: "relative", overflow: "hidden", py: 6 }}>
      {/* Title */}
      <Box sx={{ textAlign: "center", mb: 6 }} data-aos="fade-up">
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            fontFamily: "Kurale, serif",
            color: "#D4AF37",
            mb: 2,
          }}
        >
          <Box
            component="span"
            data-aos="fade-up"
            sx={{
              width: 20,
              height: 20,
              bgcolor: "#D4AF37",
              display: "inline-block",
              transform: "rotate(45deg)",
              mr: 3,
            }}
          />
          Our Treatments
        </Typography>

        <Typography
          data-aos="fade-up"
          sx={{
            fontSize: { xs: "1rem", md: "1.2rem" },
            color: "black",
            fontFamily: "Kurale, serif",
            maxWidth: "700px",
            mx: "auto",
          }}
        >
          Customized Skin & Hair Care For Women & Men in Pudukkottai
        </Typography>
      </Box>

      {/* Arrows */}
      <IconButton
        onClick={prevSlide}
        sx={{
          position: "absolute",
          top: "45%",
          left: 20,
          zIndex: 10,
          backgroundColor: "black",
          color: "#D4AF37",
          "&:hover": {
            backgroundColor: "#D4AF37",
            color: "black",
          },
        }}
        data-aos="fade-down"
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      <IconButton
        onClick={nextSlide}
        sx={{
          position: "absolute",
          top: "45%",
          right: 20,
          zIndex: 10,
          backgroundColor: "black",
          color: "#D4AF37",
          "&:hover": {
            backgroundColor: "#D4AF37",
            color: "black",
          },
        }}
        data-aos="fade-up"
      >
        <ArrowForwardIosIcon />
      </IconButton>

      {/* Cards Row */}
      <Grid
        container
        justifyContent="center"
        spacing={4}
        sx={{
          transition: "all 0.5s ease-in-out",
          maxWidth: "1200px",
          mx: "auto",
        }}
      >
        {cardData
          .slice(currentIndex, currentIndex + cardsToShow)
          .map((card, idx) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={card.id}
              sx={{ display: "flex" }}
              data-aos="zoom-in"
              data-aos-delay={idx * 200}
            >
              <Card
                sx={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: 3,
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  height: "100%",
                  transition: "all 0.4s ease",
                  "&:hover": { transform: "scale(1.015)" },
                }}
              >
                {/* Image */}
                <Box sx={{ position: "relative" }}>
                  <img
                    src={card.image}
                    alt={card.treatment}
                    style={{
                      width: "100%",
                      height: "230px",
                      objectFit: "cover",
                      borderTopLeftRadius: "20px",
                      borderTopRightRadius: "20px",
                    }}
                  />

                  {/* Logo */}
                  <Box
                    className="logoCircle"
                    sx={{
                      position: "absolute",
                      bottom: "-30px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      backgroundColor: "#D4AF37",
                      borderRadius: "50%",
                      width: "70px",
                      height: "70px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: 2,
                      transition: "all 0.3s ease",
                    }}
                  >
                    <Box
                      component="img"
                      src={card.logo}
                      alt="Logo"
                      className="logoImg"
                      sx={{
                        height: 40,
                        width: 40,
                        transition: "all 0.3s ease",
                      }}
                    />
                  </Box>
                </Box>

                {/* Content */}
                <CardContent sx={{ mt: 4, flexGrow: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                    {card.treatment}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 3 }}
                  >
                    {card.description}
                  </Typography>
                </CardContent>

                {/* Footer */}
                <Box
                  className="footerBox"
                  sx={{
                    backgroundColor: "black",
                    color: "white",
                    p: 3,
                    borderBottomLeftRadius: "20px",
                    borderBottomRightRadius: "20px",
                    transition: "all 0.3s ease",
                  }}
                />
              </Card>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default CardSlider;
