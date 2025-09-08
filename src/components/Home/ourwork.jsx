import { Box, Grid, Typography } from "@mui/material";
import SkinImg from "../assets/he1.webp"; // your main image
import ListenIcon from "../assets/w1.svg";
import PlanIcon from "../assets/w2.svg";
import HelpIcon from "../assets/w3.svg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HowWeWork() {
  const steps = [
    {
      title: "We Listen",
      desc: "Your story matters. We take time to understand your concerns and what you want to achieve.",
      icon: ListenIcon,
    },
    {
      title: "We Plan Carefully",
      desc: "After listening, we build a custom plan just for you. No rushing. No unrealistic promises.",
      icon: PlanIcon,
    },
    {
      title: "We Keep Helping",
      desc: "We monitor your progress and make adjustments as needed, ensuring the best outcome possible.",
      icon: HelpIcon,
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 6 },
        bgcolor: "#fff",
      }}
    >
      <Grid container spacing={6} alignItems="center">
        {/* Left: Image */}
        <Grid
          size={{xs:12,md:5}}
        
          sx={{ display: "flex", justifyContent: "center" }}
          data-aos="fade-up"
        >
          <Box
            component="img"
            src={SkinImg}
            alt="Skin Treatment"
            sx={{
              width: "100%",
              maxWidth: 480,
              borderRadius: "50% / 40%", // oval shape
              objectFit: "cover",
              border: "3px solid #D4AF37",
            }}
          />
        </Grid>

        {/* Right: Steps */}
        <Grid size={{xs:12,md:5}} data-aos="fade-down">
          <Box sx={{ textAlign: "center", mb: 6 }}>
            {/* Small Label */}
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: "bold",
                color: "black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 2,
              }}
            >
              <Box
                component="span"
                sx={{
                  width: 12,
                  height: 12,
                  bgcolor: "#D4AF37",
                  display: "inline-block",
                  transform: "rotate(45deg)",
                  mr: 1,
                }}
              />
              HOW WE WORK
            </Typography>

            {/* Main Heading */}
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "black",
                lineHeight: 1.3,
              }}
            >
              Skin & Hair Treatment Process From <br /> Consultation To Results
            </Typography>
          </Box>

          {steps.map((step, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 5,
              }}
            >
              {/* Circle with icon */}
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  bgcolor: "#D4AF37",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  mr: 3,
                }}
              >
                <Box
                  component="img"
                  src={step.icon}
                  alt={step.title}
                  sx={{ width: 40, height: 40 }}
                />
              </Box>

              {/* Text */}
              <Box>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                  {step.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {step.desc}
                </Typography>
              </Box>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
