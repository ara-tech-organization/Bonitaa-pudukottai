import { BrowserRouter, Routes, Route } from "react-router-dom"; // ✅ added BrowserRouter
import { createTheme, ThemeProvider,  } from "@mui/material";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Appointment from "./pages/Appointment";
import ThankYou from "./components/Appointment/Thankyou";

const theme = createTheme({
  typography: {
    fontFamily: '"Kurale", serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/thankyou" element={<ThankYou />} />
        </Routes>
      
    </ThemeProvider>
  );
}

export default App;
