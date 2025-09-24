import React, { useState, useEffect } from "react";
import {
  Box,
  Tabs,
  Tab,
  Typography,
  Paper,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

import skin1 from "../assets/s1.webp";
import skin2 from "../assets/s2.webp";
import skin3 from "../assets/s3.webp";
import skin4 from "../assets/s4.webp";
import skin5 from "../assets/s5.webp";
import hair1 from "../assets/h1.webp";
import hair2 from "../assets/h2.webp";
import hair3 from "../assets/h3.webp";
import hair4 from "../assets/h4.webp";
import hair5 from "../assets/h5.webp";
import hair6 from "../assets/h6.webp";
import hair7 from "../assets/h7.webp";
import hair8 from "../assets/h8.webp";

// === Treatments Data ===
const treatmentsData = {
  skin: [
    {
      title: "Skin PRP Treatments",
      description:
        "Want your skin to look stunning in Pudukkottai? At Bonitaa Skin & Hair Care Clinic, we're changing people's ideas of beauty by providing platelet-rich plasma (PRP) therapy. This treatment safely uses your own body's ability to heal, leaving you with outstanding outcomes. Say farewell to your scars, smooth over your fine lines, and look forward to healthy, young-looking skin. Because Pudukkottai is lively, our PRP treatments make it easy to notice the results and feel confident in the community immediately. Choose Bonitaa Skin & Hair Care Clinic for unparalleled dermatological excellence.",
      image: skin1,
    },
    {
      title: "Q-Switch Treatment",
      description:
        "Regain your confidence with clear, radiant skin. At Bonitaa Skin and Hair Care Clinic in Pudukkottai, we help you eliminate uneven tone, pigmentation, thinning, acne scars, signs of aging, and even unwanted tattoos. Our FDA-approved q-switch Laser Treatment delivers short, precise pulses that gently target pigmentation such as dark spots, freckles, and ink without damaging surrounding skin. Our experienced dermatologists personalize each session to match your unique skin care goals. As the laser breaks down the problem areas, your body naturally clears away the residue, revealing smoother, healthier-looking skin. Let us help you feel beautiful in the skin you’re in. Book your appointment today and begin your journey to glowing skin.",
      image: skin2,
    },
    {
      title: "Skin Lightening Treatment",
      description:
        "At Bonitaa Skin & Hair Care in Pudukkottai,We help people feel confident in their skin. Our team listens to your needs and offers the right care for your skin type. We use proven methods that are safe and simple. Each step is easy to follow and made to give real results. You will feel welcome and cared for during every visit. We focus on natural changes that improve how you look and feel. Your comfort and satisfaction are always our top goals. Our work brings lasting results that help you smile with confidence.",
      image: skin3,
    },
    {
      title: "Laser Hair Removal",
      description:
        "A painless and contemporary method of hairless and smooth skin without repetitive use of shaving, waxing, and threading is Laser Hair Removal. Treatment is done by introducing concentrated light energy into the skin to destroy the active hair follicles, and the surrounding skin is not likely to be affected. In the long run it decreases hair growth irreversibly and enhances the skin texture and tone. Our Bonitaa Skin & Hair Care, which has Laser Hair Removal in Pudukottai, is based on advanced FDA-approved laser systems, which can be modified according to the type of skin, sensitive skin, or tanned skin. The areas that can be treated are the facial hair, underarms, arms, legs, and bikini areas; the treatment can provide a temporary effect that is lasting. When sessions are scheduled at a regular interval and with a certain distance between each other, unwanted hair will become smaller and much lighter in color, and it can completely go unnoticed eventually. The process is not forceful or risk-free and is quite suited especially for both men and women in search of a good and wholesome clean and confident look without the problem of irritation and problematic ingrowth of hair. Beauty and comfort come together with a low way to do this form of treatment.",
      image: skin4,
    },
    {
      title: "Exosome GFC Skin Treatment",
      description:
        "Exosome GFC therapy is a new skin treatment. It uses special lab-made exosomes with extra growth factors. These exosomes send healing signals right to tired and damaged skin cells. Unlike other treatments, Our Exosome GFC skin rejuvenation treatment in Pudukkottai works deep down in your cells. It helps your skin repair itself naturally and grow new cells. This treatment makes your skin more hydrated, smooths fine lines, and makes your skin clearer and softer. It's a gentle treatment with no recovery time needed. It works precisely and helps you heal fast. You'll see improvements after just a few sessions. Exosome GFC is a popular choice for lasting skin renewal from the inside out.",
      image: skin5,
    },
  ],
  hair: [
    {
      title: "Hair Fall Treatments",
      description:
        "The Bonitaa Skin and Hair Care is located in the heart of Pudukkottai, and it is fully aware of the extent to which hair loss can undermine self-confidence. In the event you find more strands on the pillow or when you start observing balding areas, we guide you through a complete hair care approach. Our trichologists and dermatologists will prescribe effective solutions since they diagnose the real cause of your hair loss as opposed to just treating the symptom. Thanks to the latest technologies, including PRP, QR678, and even enhanced hair transplant options, including Bio-FUE and Sapphire FUE, we have helped thousands of people regain their hair and pride. Our services do not end at Pudukkottai but do cover other patients in Aranthangi, Illuppur, and Ponnamaravathi.",
      image: hair1,
    },
    {
      title: "Hair PRP Treatment",
      description:
        "Ready to welcome thick, healthy hair to Pudukkottai? In a population renowned for being welcoming and rural in their lifestyle, self-care is essential. With Bonitaa Skin & Hair Care, we're with you every step along the way to natural hair rejuvenation with tried-and-tested Platelet-Rich Plasma (PRP) therapy. This evidence-based treatment utilizes your very own body's healing potential to reduce thinning hair and baldness, resulting in thicker, healthier-looking hair with zero downtime. Best suited to Pudukkottai's way of life, our PRP treatments are designed to work best as you go about your daily life. Allow Bonitaa Skin & Hair Care to use dermatological and trichological expertise with a dash of personalized service.",
      image: hair2,
    },
    {
      title: "SHI Transplant",
      description:
        "Ready to ditch the thinning hair worries and welcome a confident, fuller you? Discover Simultaneous Harvesting and Implantation (SHI) transplant surgery right here at Bonitaa Skin & Hair Care Clinic in Pudukkottai! This amazing treatment takes hair restoration to the next level by gathering and planting healthy hair follicles all at once. This means you get thicker, natural-looking hair, and it happens faster! No more stressing about a receding hairline or those stubborn bald spots.",
      image: hair3,
    },
    {
      title: "Bio-FUE Hair Transplant",
      description:
        "Bonitaa Skin & Hair Care in Pudukkottai provides Bio FUE hair transplant surgery to restore hair growth naturally with accuracy and long-lasting results. The advanced method involves Follicular Unit Extraction with platelet-rich plasma (PRP) therapy to stimulate graft survival, enhance recovery, and provide a higher density of hair. It is a better, less damaging solution for thinning hair, receding hairline, or early hair loss. Situated in a useful location in the center of Pudukkottai, our clinic maintains good standards of hygiene and is run by professionals dedicated to safe and effective treatment.",
      image: hair4,
    },
    {
      title: "Y CELL PRP Treatment",
      description:
        "At Bonitaa Skin and Hair Care Clinic, Pudukkottai, the Y-Cell PRP therapy is more than just a treatment; it is a well-placed program that focuses on the desired comfort and care for our clients. It is a new, medically advanced, non-surgical hair growth procedure that uses platelets concentrated from the patient's blood to re-stimulate the hair follicles that are inactive and trigger intrinsic hair growth to occur naturally and be of increased density. The team creates a stable, comforting environment right off the bat and focuses on personal issues by treating the patients with the kept-in-mind attitude of intimacy and cold professionalism. Taking care of the Pudukkottai town and areas nearby, Bonitaa combines the newest science with genuine hospitality, ensuring that each phase of the procedure is both comforting and outcome-driven.",
      image: hair5,
    },
    {
      title: "Bonitaa Biotin PRO PRP",
      description:
        "Biotin PRO PRP is a sophisticated, non-invasive solution that pairs the body's own natural healing capability of Platelet-Rich Plasma (PRP) with Biotin, a key vitamin that strengthens hair. This solution stimulates hair follicles, produces thicker hair growth, and addresses early thinning or loss of hair by enlisting the repair power of your own body with the rejuvenating force of Biotin. At Pudukkottai city center near Thirumalai Nagar's Bonitaa Skin & Hair Care, you get safe, efficient hair fall treatment that suits the climate and life status of the area. It is fast with minimal downtime, and you will have healthier, denser hair and a higher confidence level the natural way.",
      image: hair6,
    },
    {
      title: "TriCell PRP Treatments",
      description:
        "Facing hair thinning or early-stage hair loss in Pudukkottai? Bonitaa Skin and Hair Care presents TriCell PRP therapy, an innovative, physician-supervised, non-invasive hair restoration procedure that allows your scalp to heal itself naturally.",
      image: hair7,
    },
    {
      title: "Sapphire Hair Transplant",
      description:
        "Hair loss doesn't have to merely affect your appearance; it can reach your confidence and daily sense of self. At Bonitaa Skin & Hair Care, we provide the Sapphire Hair Transplant, a state-of-the-art procedure that replaces more hair with a natural appearance and swift recovery, lasting over time.",
      image: hair8,
    },
  ],
};

// === Component ===
export default function SkinHairSection() {
  const [tab, setTab] = useState("skin");
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  const treatments = treatmentsData[tab];
  const selectedTreatment = treatments[selectedIndex];

  return (
    <Box sx={{ p: 4 }}>
      {/* Tabs */}
      <Tabs
        value={tab}
        onChange={(e, newValue) => {
          setTab(newValue);
          setSelectedIndex(0);
        }}
        centered
        TabIndicatorProps={{ style: { display: "none" } }}
        sx={{ mb: 3 }}
        data-aos="fade-down"
      >
        <Tab
          label="Skin Treatments"
          value="skin"
          sx={{
            bgcolor: tab === "skin" ? "black" : "transparent",
            color: tab === "skin" ? "#D4AF37" : "black",
            borderRadius: 2,
            mx: 1,
            fontWeight: "bold",
            "&.Mui-selected": { color: "#D4AF37 !important" },
            "&:hover": { bgcolor: "#333", color: "#D4AF37" },
          }}
        />
        <Tab
          label="Hair Treatments"
          value="hair"
          sx={{
            bgcolor: tab === "hair" ? "black" : "transparent",
            color: tab === "hair" ? "#D4AF37" : "black",
            borderRadius: 2,
            mx: 1,
            fontWeight: "bold",
            "&.Mui-selected": { color: "#D4AF37 !important" },
            "&:hover": { bgcolor: "#333", color: "#D4AF37" },
          }}
        />
      </Tabs>

      <Box
        sx={{
          display: "flex",
          gap: 4,
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* Sidebar */}
        <Paper
          elevation={3}
          sx={{
            width: { xs: "100%", md: "30%" },
            borderRadius: 3,
            p: 0, // remove padding, we'll handle inside
            background: "linear-gradient(180deg, #000000, #222222)",
            color: "#D4AF37",
            height: "90%",
            display: "inline-block",
          }}
          data-aos="fade-up"
        >
          {/* 🔑 Separate header bar */}
          <Box
            sx={{
              bgcolor: tab === "skin" ? "#D4AF37" : "#D4AF37", // red for skin, blue for hair (you can change)
              color: "black",
              textAlign: "center",
              py: 1,
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {tab === "skin" ? "Skin Treatment" : "Hair Care Treatment"}
            </Typography>
          </Box>

          {/* 🔑 Content */}
          <Box sx={{ p: 2 }}>
            <List>
              {treatments.map((t, index) => (
                <ListItemButton
                  key={t.title}
                  selected={index === selectedIndex}
                  onClick={() => setSelectedIndex(index)}
                  sx={{
                    borderRadius: 2,
                    mb: 1,
                    color: "#D4AF37",
                    "&.Mui-selected": { bgcolor: "#111", color: "#fff" },
                  }}
                >
                  <ListItemText primary={t.title} />
                </ListItemButton>
              ))}
            </List>
          </Box>
        </Paper>

        {/* Right Content */}
        <Paper
          elevation={3}
          sx={{
            flex: 1,
            p: 3,
            borderRadius: 3,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
          data-aos="fade-down"
        >
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            {selectedTreatment.title}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {selectedTreatment.description}
          </Typography>
          <Box
            component="img"
            src={selectedTreatment.image}
            alt={selectedTreatment.title}
            sx={{
              width: "100%",
              maxHeight: 400,
              objectFit: "cover",
              borderRadius: 3,
            }}
            // data-aos="zoom-in"
          />
        </Paper>
      </Box>
    </Box>
  );
}
