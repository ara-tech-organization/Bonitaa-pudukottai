import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  MenuItem,
  Button,
  Paper,
  Snackbar,
  Alert,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // ✅ navigate hook
import BgImage from "../assets/Hero.png"; // <-- replace with your image path

const treatments = ["Skin Treatment", "Hair Treatment"];

export default function AppointmentFormWhite() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    treatment: "",
    message: "",
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    try {
      await axios.post(
        "https://bonitaa-dvcfa6dwdvaxeagp.centralindia-01.azurewebsites.net/api/bookAppointment",
        {
          FirstName: formData.firstName,
          LastName: formData.lastName,
          Mobile: formData.phone,
          Email: formData.email,
          Date: formData.date,
          Time: formData.time,
          Treatment: formData.treatment,
          Message: formData.message,
        }
      );
      setSnackbar({
        open: true,
        message: "Appointment booked successfully!",
        severity: "success",
      });
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        date: "",
        time: "",
        treatment: "",
        message: "",
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: "Failed to book appointment.",
        severity: "error",
      });
    }
  };

  // ✅ Snackbar close → navigate to Thank You page
  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") return;
    setSnackbar({ ...snackbar, open: false });
    if (snackbar.severity === "success") {
      navigate("/thankyou");
    }
  };

  // ✅ Glassmorphic style for input fields
  const glassTextField = {
    "& .MuiInputBase-root": {
      borderRadius: "10px",
      color: "#fff",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(255,255,255,0.4)",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#fff",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#fff",
    },
    "& .MuiInputLabel-root": {
      color: "#fff",
      fontWeight: "bold",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#fff",
    },
    "& input, & textarea": {
      color: "#fff",
    },
    "& .MuiSvgIcon-root": {
      color: "#fff", // ✅ Material-UI icons
    },
    "& input[type='date']::-webkit-calendar-picker-indicator, \
   & input[type='time']::-webkit-calendar-picker-indicator": {
      filter: "invert(1)", // ✅ makes calendar/clock icon white
    },
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        mt: -6,
        py: 3,
        backgroundImage: `url(${BgImage})`, // ✅ Background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Outer dark transparent box */}
      <Paper
        elevation={6}
        sx={{
          width: { xs: "100%", sm: "80%", md: "50%" },
          p: 4,
          borderRadius: 3,
          border: "5px solid white",
          backgroundColor: "rgba(0, 0, 0, 0.70)", // ✅ black transparent background
          backdropFilter: "blur(15px)",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            mb: 4,
            textAlign: "center",
            color: "#fff",
          }}
        >
          Book Your Appointment
        </Typography>

        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="First Name *"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              sx={glassTextField}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              sx={glassTextField}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Mobile *"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              sx={glassTextField}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Email *"
              name="email"
              value={formData.email}
              onChange={handleChange}
              sx={glassTextField}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              type="date"
              label="Select Date *"
              name="date"
              value={formData.date}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              sx={glassTextField}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              type="time"
              label="Select Time *"
              name="time"
              value={formData.time}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              sx={glassTextField}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 12 }}>
            <TextField
              select
              fullWidth
              label="Treatment *"
              name="treatment"
              value={formData.treatment}
              onChange={handleChange}
              sx={glassTextField}
            >
              {treatments.map((t, i) => (
                <MenuItem key={i} value={t}>
                  {t}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid size={{ xs: 12, md: 12 }}>
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              sx={glassTextField}
            />
          </Grid>
        </Grid>

        <Box mt={4} display="flex" justifyContent="center">
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              backgroundColor: "#fff",
              color: "#000",
              fontWeight: "bold",
              fontSize: "0.9rem",
              py: 1.5,
              px: 4,
              borderRadius: "30px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
              "&:hover": { backgroundColor: "#eee" },
            }}
          >
            CONFIRM APPOINTMENT
          </Button>
        </Box>
      </Paper>

      {/* Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity={snackbar.severity} sx={{ width: "100%" }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
