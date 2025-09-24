import React, { useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 👉 Logo imports
import SkinLogo from "../assets/logo1.svg"
import LaserLogo from "../assets/logo2.svg"
import WhiteningLogo from "../assets/logo3.svg"
import HairLogo from "../assets/logo4.svg"
import MassageLogo from "../assets/logo5.svg"
import SkinHairLogo from"../assets/logo6.svg"


// 👉 Image imports
import img1 from "../assets/a1.webp";
import img2 from "../assets/a2.webp";
import img3 from "../assets/a3.webp";

import img4 from "../assets/a4.webp";
import img5 from "../assets/a5.webp";
import img6 from "../assets/a6.webp";

// 👉 Data
const cardData = [
  {
    id: 1,
    image: img1,
    logo: SkinLogo,
    treatment: "Skin PRP Treatment",
    description:
      "Want glowing skin in Pudukottai? At Bonitaa Skin & Hair Care Clinic, we offer safe PRP therapy that uses your body’s natural healing power. Fade scars, smooth fine lines, and enjoy youthful, healthy skin with visible results. Choose Bonitaa for trusted dermatological care and confidence that shines.",
  },
  {
    id: 2,
    image: img2,
    logo: LaserLogo,
    treatment: "Q-Switch Treatment",
    description:
      "Regain your confidence with radiant skin at Bonitaa Skin & Hair Care Clinic, Pudukottai. Our FDA-approved Q-switch Laser treats pigmentation, acne scars, aging signs, and even unwanted tattoos. With expert dermatologists customizing each session, the laser gently clears problem areas without harming skin. ",
  },
  {
    id: 3,
    image: img3,
    logo: WhiteningLogo,
    treatment: "Skin Lightening Treatment",
    description:
      "At Bonitaa Skin & Hair Care, Pudukottai, we help you feel confident in your skin with safe, proven treatments. Our team listens to your needs and tailors care to your skin type, ensuring comfort at every step. We focus on natural improvements that enhance your look and well-being, delivering lasting results that bring confidence and smiles.",
  },
  {
    id: 4,
    image: img4,
    logo: HairLogo,
    treatment: "Laser Hair Removal",
    description:
      "Laser Hair Removal at Bonitaa Skin & Hair Care, Pudukottai, gives you smooth, hair-free skin without shaving, waxing, or threading. Using FDA-approved lasers safe for all skin types, it reduces hair growth, improves texture, and prevents irritation or ingrown hairs. Suitable for both men and women, it offers lasting comfort and confidence.",
  },
  {
    id: 5,
    image: img5,
    logo: MassageLogo,
    treatment: "Exosome GFC Skin Treatment",
    description:
      "Exosome GFC Therapy is an advanced skin rejuvenation treatment that repairs and renews skin from within. Using lab-made exosomes rich in growth factors, it boosts cell healing, hydration, and clarity while reducing fine lines. Gentle, safe, and with no downtime, it delivers smoother, healthier skin in just a few sessions.",
  },
  {
    id: 6,
    image: img6,
    logo: SkinHairLogo,
    treatment: "Hair Fall Treatment",
    description:
      "Bonitaa Skin & Hair Care, Pudukottai, helps restore confidence with expert hair loss treatments like PRP, QR678, Bio-FUE, and Sapphire FUE. We diagnose the cause, not just symptoms, and serve patients from Pudukottai and nearby areas.",
  },
];

const CardGrid = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // 👉 detect xs & sm

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // 👉 Slider settings
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  // 👉 Card Component (reuse in grid + slider)
  const renderCard = (card) => (
    <Card
      key={card.id}
      sx={{
        borderRadius: 2,
        overflow: "hidden",
        boxShadow: 4,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        transition: "0.3s",
        "&:hover": { transform: "translateY(-8px)", boxShadow: 6 },
      }}
    >
      {/* Image */}
      <Box sx={{ position: "relative" }}>
        <img
          src={card.image}
          alt={card.treatment}
          style={{
            width: "100%",
            height: "280px",
            objectFit: "cover",
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
          }}
        />

        {/* Logo */}
        <Box
          sx={{
            position: "absolute",
            bottom: "-30px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#FFD700",
            borderRadius: "50%",
            width: "70px",
            height: "70px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: 2,
          }}
        >
          <Box
            component="img"
            src={card.logo}
            alt="Logo"
            sx={{ height: 40, width: 40 }}
          />
        </Box>
      </Box>

      {/* Content */}
      <CardContent sx={{ mt: 4, flexGrow: 1 }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", mb: 1, color: "#111" }}
        >
          {card.treatment}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {card.description}
        </Typography>
      </CardContent>
    </Card>
  );

  return (
    <Box sx={{ py: 6, px: { xs: 2, md: 8 }, bgcolor: "#fafafa" }}>
      {/* Title */}
      <Box sx={{ textAlign: "center", mb: 6 }} data-aos="fade-up">
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", color: "#FFD700", mb: 1 }}
        >
          OUR TREATMENTS
        </Typography>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", mb: 3 }}
        >
          Customized Skin & Hair Care <br /> For Women & Men in Pudukottai
        </Typography>
      </Box>

      {/* 👉 Desktop Grid / Mobile Slider */}
      {!isMobile ? (
        <Grid container spacing={4} data-aos="fade-up">
          {cardData.map((card) => (
            <Grid key={card.id} size={{ xs: 12, sm: 6, md: 4 }}>
              {renderCard(card)}
            </Grid>
          ))}
        </Grid>
      ) : (
        <Slider {...sliderSettings}>
          {cardData.map((card) => (
            <Box key={card.id} sx={{ px: 1 }}>
              {renderCard(card)}
            </Box>
          ))}
        </Slider>
      )}
    </Box>
  );
};

export default CardGrid;