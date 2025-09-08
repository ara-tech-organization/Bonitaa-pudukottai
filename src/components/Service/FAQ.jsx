import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  MenuItem,
  Select,
  FormControl,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AOS from "aos";
import "aos/dist/aos.css";
import img from '../assets/9.png'

const skinFaqs = [
  {
    q: "How long until I see changes from skin care treatments?",
    a: "It depends on the treatment and your skin. Some people see improvements quickly, while others need a few months.",
  },
  {
    q: "Do skin care treatments hurt?",
    a: "Most treatments are comfortable, though some may cause mild sensations.",
  },
  {
    q: "What should I do before a skin care treatment?",
    a: "Avoid makeup, sun exposure, and follow your doctor’s advice before treatment.",
  },
  {
    q: "Can I wear makeup after a skin care treatment?",
    a: "It depends on the treatment. Some allow makeup immediately, others may need a day of rest.",
  },
];

const hairFaqs = [
  {
    q: "How long does it take to see results?",
    a: "Some people see results in a few weeks, others may take a few months.",
  },
  {
    q: "Do these hair care treatments hurt?",
    a: "Most are painless, though mild sensations can happen depending on the treatment.",
  },
  {
    q: "What should I do before a hair care treatment?",
    a: "Avoid oiling, harsh chemicals, or styling products before treatment.",
  },
  {
    q: "Can I go back to work right after a hair care treatment?",
    a: "Yes, most treatments require no downtime.",
  },
];

export default function FaqDropdown() {
  const [category, setCategory] = useState("skin");

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const renderFaqs = (faqs) => (
    <Box mt={3} sx={{ width: { xs: "90%", md: "60%" } }}>
      {faqs.map((faq, i) => (
        <Accordion key={i} data-aos="fade-up">
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
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        position: "relative",
      }}
    >
      <Box
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
        }}
        data-aos="zoom-in"
      />

      <Box
        sx={{
          position: "absolute",
          bottom: { xs: "5%", md: "10%" },
          right: { xs: "5%", md: "5%" },
          width: { xs: 40, md: 20 },
          height: { xs: 40, md: 20 },
          bgcolor: "black",
          borderRadius: "50%",
          opacity: 0.8,
        }}
        data-aos="fade-right"
      />
      <Box
        sx={{
          position: "absolute",
          top: { xs: "10%", md: "4%" },
          left: { xs: "5%", md: "1%" },
          width: { xs: 40, md: 20 },
          height: { xs: 40, md: 20 },
          bgcolor: "#D4AF37",
          borderRadius: "50%",
          opacity: 0.8,
        }}
        data-aos="fade-left"
      />

      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }} data-aos="fade-down">
        FAQ's – Answers About Treatments In Pudukkottai
      </Typography>

      <FormControl sx={{ width: 150, mb: 3 }} data-aos="fade-up">
        <Select
          value={category}
          onChange={handleChange}
          size="small"
          sx={{
            fontWeight: "bold",
            bgcolor: "#f8f8f8",
            borderRadius: "8px",
            height: 38,
            "& .MuiOutlinedInput-notchedOutline": { borderColor: "#b8860b" },
          }}
        >
          <MenuItem value="skin">Skin Care</MenuItem>
          <MenuItem value="hair">Hair Care</MenuItem>
        </Select>
      </FormControl>

      {category === "skin" && renderFaqs(skinFaqs)}
      {category === "hair" && renderFaqs(hairFaqs)}
    </Box>
  );
}
