import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AOS from "aos";
import "aos/dist/aos.css";
import img from "../assets/9.png";

// 👉 Skin FAQs
const skinFaqs = [
  {
    q: "How long until I see changes from skin care treatments?",
    a: "It depends on the skin care treatment and your skin. Some people see improvements quickly. Others might need a few months. We'll give you a clear idea.",
  },
  {
    q: "Do skin care treatments hurt?",
    a: "Most of our skin care treatments are gentle. You might feel a light tingling or warmth. We make sure you're comfortable during your visit.",
  },
  {
    q: "What should I do before a skin care treatment?",
    a: "We'll give you simple steps. This might include avoiding sun or certain creams. We want to make sure your skin is ready.",
  },
  {
    q: "Can I wear makeup after a skin care treatment?",
    a: "It depends on the skin care treatment. For some, you can put makeup on right away. For others, it's best to wait a day or two. We will tell you exactly what to do.",
  },
  {
    q: "Are skin care treatments only for older people?",
    a: "Not at all! Many skin care treatments help with things like acne, dark spots, or uneven skin tone at any age. It's about keeping your skin healthy.",
  },
  {
    q: "What causes dark spots on skin?",
    a: "Dark spots can come from the sun, acne, or changes in hormones. Our skin care treatments can help make them less noticeable.",
  },
  {
    q: "How do I keep my skin looking good after a treatment?",
    a: "We'll give you tips for daily care. Using sunscreen is usually a big one! We'll help you keep your skin healthy and glowing.",
  },
];

// 👉 Hair FAQs
const hairFaqs = [
  {
    q: "How long does it take to see results?",
    a: "Everyone is different. Some people see changes in a few weeks. For others, it might take a few months. We'll tell you what to expect.",
  },
  {
    q: "Do these hair care treatments hurt?",
    a: "Most of our hair care treatments are gentle. Some might feel a little odd, but they are not very painful. We make sure you are comfortable.",
  },
  {
    q: "What should I do before a hair care treatment?",
    a: "We will give you clear instructions. Usually, it's about keeping your scalp clean. Sometimes we ask you to avoid certain hair products.",
  },
  {
    q: "Can I go back to work right after a hair care treatment?",
    a: "For most hair care treatments, yes! You can usually go back to your normal day right away. Some might need a little downtime. We will let you know.",
  },
  {
    q: "Are these hair care treatments permanent?",
    a: "Some hair care treatments, like hair transplants, are long-lasting. Others, like PRP, need follow-up sessions to keep up the results. We will explain everything clearly.",
  },
  {
    q: "What causes hair loss?",
    a: "Many things can cause hair loss. It could be genes, stress, diet, or how you care for your hair. We'll help figure out your cause.",
  },
  {
    q: "Can I wash my hair after a hair care treatment?",
    a: "It depends on the hair care treatment. We will give you specific instructions on when and how to wash your hair afterwards.",
  },
];

export default function FaqSideBySide() {
  const [expandedSkin, setExpandedSkin] = useState(false);
  const [expandedHair, setExpandedHair] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  const handleChangeSkin = (panel) => (event, isExpanded) => {
    setExpandedSkin(isExpanded ? panel : false);
  };
  const handleChangeHair = (panel) => (event, isExpanded) => {
    setExpandedHair(isExpanded ? panel : false);
  };

  const renderFaqs = (faqs, expanded, handleChange) => (
    <Box mt={3} sx={{ width: "100%" }}>
      {faqs.map((faq, i) => (
        <Accordion
          key={i}
          expanded={expanded === i}
          onChange={handleChange(i)}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: "bold" }}>{faq.q}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.a}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );

  return (
    <Box
      sx={{
        width: "100%",
        py: 6,
        position: "relative",
      }}
    >
      {/* Decorative floating image */}
      {/* <Box
        component="img"
        src={img}
        alt="Decorative F6"
        sx={{
          position: "absolute",
          bottom: { xs: "5%", md: "50%" },
          right: { xs: "5%", md: "6%" },
          width: { xs: 40, md: 150 },
          height: { xs: 40, md: 150 },
          borderRadius: "50%",
          objectFit: "cover",
          opacity: 0.9,
          animation: "float 6s ease-in-out infinite",
        }}
        data-aos="zoom-in"
      />

      <style>
        {`
        @keyframes float {
          0% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-10px) translateX(5px); }
          50% { transform: translateY(0px) translateX(0px); }
          75% { transform: translateY(10px) translateX(-5px); }
          100% { transform: translateY(0px) translateX(0px); }
        }
      `}
      </style> */}

      {/* 2 Column Layout */}
      <Grid
        container
        spacing={4}
        justifyContent="center"
        data-aos="fade-up"
        sx={{ maxWidth: {xs:"90%",md:'95%',lg:'90%'}, mx: "auto" }}
      >
        {/* Left - Skin Care FAQ */}
        <Grid size={{xs:12,md:6}} >
          <Typography variant="h5" sx={{ fontWeight: "bold", textAlign: "center" }}>
            Skin Care Treatments – FAQ
          </Typography>
          {renderFaqs(skinFaqs, expandedSkin, handleChangeSkin)}
        </Grid>

        {/* Right - Hair Care FAQ */}
        <Grid size={{xs:12,md:6}}>
          <Typography variant="h5" sx={{ fontWeight: "bold", textAlign: "center" }}>
            Hair Care Treatments – FAQ
          </Typography>
          {renderFaqs(hairFaqs, expandedHair, handleChangeHair)}
        </Grid>
      </Grid>
    </Box>
  );
}
