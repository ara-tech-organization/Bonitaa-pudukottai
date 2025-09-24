import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  MenuItem,
  Snackbar,
  Alert,
} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ContactWithMap() {
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Mobile: "",
    Email: "",
    Date: "",
    Time: "",
    Treatment: "",
    Message: "",
  });

  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://bonitaa-dvcfa6dwdvaxeagp.centralindia-01.azurewebsites.net/api/bookAppointment",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      setSnackbar({
        open: true,
        message: "✅ Appointment booked successfully!",
        severity: "success",
      });

      setFormData({
        FirstName: "",
        LastName: "",
        Mobile: "",
        Email: "",
        Date: "",
        Time: "",
        Treatment: "",
        Message: "",
      });

      // ✅ Navigate after short delay
      setTimeout(() => {
        navigate("/thankyou");
      }, 2000);
    } catch (err) {
      console.error(err);
      setSnackbar({
        open: true,
        message: "❌ Failed to send appointment. Please try again.",
        severity: "error",
      });
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        py: 6,
        backgroundColor: "#f9f9f9",
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 1200,
          borderRadius: 4,
          bgcolor: "#222",
          boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
        }}
      >
        <CardContent>
          <Grid container spacing={3}>
            {/* Left Side - Contact Info */}
            <Grid size={{ xs: 12, md: 5 }} data-aos="fade-right">
              <Box
                sx={{
                  borderRadius: 3,
                  border: "3px solid #D4AF37",
                  bgcolor: "#D4AF37",
                  color: "black",
                  minHeight: 400,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  p: 4,
                  gap: 3,
                  mt: 6,
                }}
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 2, cursor: "pointer" }}
                  onClick={() => (window.location.href = "tel:+918807122992")}
                >
                  <PhoneIcon />
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    +91 88071 22992
                  </Typography>
                </Box>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 2, cursor: "pointer" }}
                  onClick={() => (window.location.href = "tel:+919691455668")}
                >
                  <PhoneIcon sx={{ visibility: "hidden" }} />
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    +91 96914 55668
                  </Typography>
                </Box>

                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 2, cursor: "pointer" }}
                  onClick={() =>
                    (window.location.href = "mailto:bonitaapudukkottai@gmail.com")
                  }
                >
                  <EmailIcon />
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    bonitaapudukkottai@gmail.com
                  </Typography>
                </Box>

                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 2, cursor: "pointer" }}
                  onClick={() =>
                    window.open(
                      "https://www.google.com/maps/search/?api=1&query=Jaya+Towers,+S+2,+Second+Floor,+East+Second+Street,+Pudukkottai+622001",
                      "_blank"
                    )
                  }
                >
                  <LocationOnIcon />
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Jaya Towers, S 2, Second Floor,East Second Street,Pudukkottai - 622001
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* Right Side - Form */}
            <Grid size={{ xs: 12, md: 7 }} data-aos="fade-left">
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  sx={{
                    display: "grid",
                    gap: 2,
                    width: "100%",
                    backgroundColor: "white",
                    border: "3px solid #D4AF37",
                    p: 3,
                    borderRadius: 3,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: "bold", mb: 1 }}
                    align="center"
                  >
                    Book Your Appointment
                  </Typography>

                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        label="First Name"
                        name="FirstName"
                        value={formData.FirstName}
                        onChange={handleChange}
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        label="Last Name"
                        name="LastName"
                        value={formData.LastName}
                        onChange={handleChange}
                        fullWidth
                      />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        label="Mobile"
                        name="Mobile"
                        value={formData.Mobile}
                        onChange={handleChange}
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        label="Email"
                        name="Email"
                        value={formData.Email}
                        onChange={handleChange}
                        fullWidth
                        required
                      />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        type="date"
                        name="Date"
                        value={formData.Date}
                        onChange={handleChange}
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                        label="Select Date"
                        required
                      />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        type="time"
                        name="Time"
                        value={formData.Time}
                        onChange={handleChange}
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                        label="Select Time"
                        required
                      />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 12 }}>
                      <TextField
                        select
                        label="Treatment"
                        name="Treatment"
                        value={formData.Treatment}
                        onChange={handleChange}
                        fullWidth
                        required
                      >
                        <MenuItem value="Hair Treatment">Hair Treatment</MenuItem>
                        <MenuItem value="Skin Treatment">Skin Treatment</MenuItem>
                      </TextField>
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                      <TextField
                        label="Message"
                        name="Message"
                        value={formData.Message}
                        onChange={handleChange}
                        multiline
                        rows={3}
                        fullWidth
                      />
                    </Grid>
                  </Grid>

                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      mt: 1,
                      backgroundColor: "black",
                      borderRadius: "25px",
                      py: 1.2,
                      fontWeight: "bold",
                      "&:hover": { backgroundColor: "#333" },
                    }}
                    fullWidth
                  >
                    Confirm Appointment
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* ✅ Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={1500}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
