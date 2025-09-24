import { Box, Grid, Typography } from "@mui/material";
import SkinImg from "../assets/he1.webp"; // your main image
import ListenIcon from "../assets/w1.svg";
import PlanIcon from "../assets/w2.svg";
import HelpIcon from "../assets/w3.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function HowWeWork() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

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

  return (
    <Box
      sx={{
        py: 10,
        px: { xs: 2, sm: 4, md: 6 }, // responsive padding
        display: "flex",
        justifyContent: "center",
        bgcolor: "#fff",
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Left: Image */}
        <Grid
          size={{xs:12,sm:12,md:5}}
          sx={{
            display: "flex",
            justifyContent: { xs: "center", sm: "center", md: "flex-start" }, // center on small screens
            mb: { xs: 4, sm: 4, md: 0 }, // spacing below image on small screens
          }}
          data-aos="fade-up"
        >
          <Box
            component="img"
            src={SkinImg}
            alt="Skin Treatment"
            sx={{
              width: { xs: "80%", sm: "60%", md: "100%" }, // responsive width
              maxWidth: 500,
                border:'3px solid #D4AF37',
              borderRadius: "20px", // oval shape
              objectFit: "cover",
            }}
          />
        </Grid>

        {/* Right: Steps */}
        <Grid
          size={{xs:12,sm:12,md:6}}
          
          sx={{
            ml: { xs: 0, sm: 0, md: 5 }, // remove margin-left on small screens
            textAlign: { xs: "center", sm: "center", md: "left" }, // center text on small screens
          }}
          data-aos="fade-down"
        >
          <Box sx={{ mb: 6 }}>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: "bold",
                color: "black",
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", sm: "center", md: "flex-start" },
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
                flexDirection: { xs: "column", sm: "column", md: "row" }, // stack on small screens
                textAlign: { xs: "center", sm: "center", md: "left" },
                mb: 6,
              }}
              data-aos="fade-up"
              data-aos-delay={index * 200} // stagger animation
            >
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
                  mr: { xs: 0, sm: 0, md: 3 }, // margin-right only on md
                  mb: { xs: 2, sm: 2, md: 0 }, // margin-bottom on small screens
                }}
              >
                <Box
                  component="img"
                  src={step.icon}
                  alt={step.title}
                  sx={{ width: 40, height: 40 }}
                />
              </Box>

              <Box>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                  {step.title}
                </Typography>
                <Typography variant="body2">{step.desc}</Typography>
              </Box>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
