import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
  Snackbar,
  MenuItem,
  Alert,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ added
import axios from "axios";
import Logo from "../assets/he1.webp";

export default function MinimalAppointmentForm() {
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

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const navigate = useNavigate(); // ✅ init navigation

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://bonitaa-dvcfa6dwdvaxeagp.centralindia-01.azurewebsites.net/api/bookAppointment",
        formData
      );

      if (res.status === 200) {
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

        // ✅ Move to ThankYou after snackbar
        setTimeout(() => {
          navigate("/thankyou");
        }, 2000);
      }
    } catch (error) {
      console.error("Error booking appointment:", error);
      setSnackbar({
        open: true,
        message: "❌ Failed to book appointment. Try again!",
        severity: "error",
      });
    }
  };

  return (
    <Box
      data-aos="fade-up"
      sx={{
        py: 8,
        px: 2,
        minHeight: "60vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          width: "100%",
          maxWidth: 1000,
          p: { xs: 3, md: 5 },
          borderRadius: 4,
          backgroundColor: "rgba(255,255,255,0.9)",
          backdropFilter: "blur(8px)",
        }}
      >
        <Grid container spacing={4} alignItems="center">
          {/* Left Side: Form */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                mb: 3,
                fontFamily: "Kurale, serif",
                fontSize: { xs: "1.8rem", md: "2.2rem" },
              }}
            >
              Book Appointment
            </Typography>

            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    label="First Name"
                    name="FirstName"
                    value={formData.FirstName}
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    label="Last Name"
                    name="LastName"
                    value={formData.LastName}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    label="Mobile"
                    name="Mobile"
                    value={formData.Mobile}
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    label="Email"
                    name="Email"
                    value={formData.Email}
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
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
                <Grid size={{ xs: 12, md: 6 }}>
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

                <Grid size={{ xs: 12 }}>
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
                  mt: 3,
                  py: 1.4,
                  fontSize: "1rem",
                  fontWeight: "bold",
                  letterSpacing: "0.5px",
                  borderRadius: "50px",
                  width: "100%",
                  color: "#fff",
                  background: "linear-gradient(90deg, #000000 0%, #D4AF37 100%)",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    background:
                      "linear-gradient(90deg, #333333 0%, #B89F2F 100%)",
                    transform: "scale(1.05)",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
                  },
                }}
              >
                Confirm Appointment
              </Button>
            </form>
          </Grid>

          {/* Right Side: Image */}
          <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "center" }}>
            <Box
              component="img"
              src={Logo}
              alt="Bonitaa Salon Pudukottai"
              sx={{
                width: { xs: 200, sm: 550, md: 400 },
                height: { xs: 200, sm: 350, md: 500 },
                borderRadius: 4,
                border: "3px solid black",
                objectFit: "cover",
                mx: "auto",
              }}
            />
          </Grid>
        </Grid>

        {/* Snackbar */}
        <Snackbar
          open={snackbar.open}
          autoHideDuration={2000}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            severity={snackbar.severity}
            onClose={() => setSnackbar({ ...snackbar, open: false })}
            sx={{ width: "100%" }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Paper>
    </Box>
  );
}
