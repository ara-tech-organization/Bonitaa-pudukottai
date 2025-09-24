import React, { useEffect } from "react";
import { Box, Typography, Avatar, Rating } from "@mui/material";

// ✅ Import images like normal JS modules
import krithikImg from "../assets/av1.svg";
import suganthiImg from "../assets/av2.svg";
import priyankaImg from "../assets/av2.svg";

import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    name: "Krithik Shailesh",
    text: "I went for a hair transplant and from day one I have experienced a great service...",
    rating: 5,
    image: krithikImg,
  },
  {
    name: "Suganthi Pitchai",
    text: "I took laser treatment from Bonitaa clinic in Coimbatore for hair reduction...",
    rating: 4,
    image: suganthiImg,
  },
  {
    name: "Priyanka Rajendran",
    text: "Me and my friend visited Bonitaa by reference for our hair fall problems...",
    rating: 5,
    image: priyankaImg,
  },
];

const FlipCard = ({ name, text, rating, image, index }) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <Box
      sx={{
        perspective: "1000px",
        width: { xs: "250px", sm: "280px" },
        height: { xs: "300px", sm: "320px" },
      }}
      data-aos="fade-up"
      data-aos-delay={index * 200} // stagger effect for each card
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          textAlign: "center",
          transition: "transform 0.8s",
          transformStyle: "preserve-3d",
          "&:hover": { transform: "rotateY(180deg)" },
          cursor: "pointer",
        }}
      >
        {/* Front Side */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            background: "linear-gradient(135deg, #fff, #f0f0f0)",
            borderRadius: "16px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            p: 2,
            boxShadow: 3,
          }}
        >
          <Avatar
            src={image}
            alt={name}
            sx={{
              width: 64,
              height: 64,
              mb: 2,
              fontWeight: "bold",
              fontSize: "20px",
              color: "#fff",
            }}
          >
            {!image && initials}
          </Avatar>
          <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
            {name}
          </Typography>
          <Rating value={rating} readOnly />
          <Typography variant="body2" sx={{ mt: 2, color: "#555" }}>
            Hover to read full testimonial...
          </Typography>
        </Box>

        {/* Back Side */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            background: "linear-gradient(135deg, #f0f0f0, #ffffff)",
            borderRadius: "16px",
            transform: "rotateY(180deg)",
            p: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            overflowY: "auto",
            boxShadow: 3,
          }}
        >
          <Typography
            variant="body1"
            sx={{ fontStyle: "italic", mb: 2, color: "#333" }}
          >
            “{text}”
          </Typography>
          <Typography variant="h6" fontWeight="bold" sx={{ color: "#1976d2" }}>
            {name}
          </Typography>
          <Rating value={rating} readOnly sx={{ mt: 1 }} />
        </Box>
      </Box>
    </Box>
  );
};

const TestimonialFlipCards = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <Box sx={{ py: 6, px: 2, backgroundColor: "#fafafa" }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", mb: 4 }}
        data-aos="fade-down"
      >
        Client Testimonials Of Skin Care Treatments
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center", // 🔑 center horizontally
          alignItems: "center", // 🔑 center vertically (for equal height rows)
          gap: 15, // 🔑 spacing between cards
          mb:7
        }}
      >
        {testimonials.map((item, index) => (
          <FlipCard key={index} {...item} index={index} />
        ))}
      </Box>
    </Box>
  );
};

export default TestimonialFlipCards;
