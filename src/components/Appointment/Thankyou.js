import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Open popup when component mounts
    setOpen(true);

    // Wait a moment to ensure gtag is loaded
    const timer = setTimeout(() => {
      if (window.gtag) {
        window.gtag("event", "conversion", {
          send_to: "AW-17494196458/yN5PCLerzp8bEOqB8ZVB",
          value: 500.0,
          currency: "INR",
        });
      }
    }, 500); // slight delay to ensure gtag is ready

    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      PaperProps={{ sx: { borderRadius: 3, p: 2 } }}
    >
      <DialogContent sx={{ textAlign: "center", p: 4 }}>
        <Typography variant="h4" fontWeight="bold" color="green" gutterBottom>
          Thank You!
        </Typography>
        <Typography variant="body1" gutterBottom>
          Your submission has been received.
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 2,
            bgcolor: "green",
            "&:hover": { bgcolor: "darkgreen" },
          }}
          onClick={() => navigate("/")}
        >
          Back to Home
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ThankYou;
