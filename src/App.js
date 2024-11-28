import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material';
import { Home } from "./pages/Home";
import { Advertise } from "./pages/Advertise";
import { About } from "./pages/About";
import { Footer } from "./components/Footer";
import { Contact } from './pages/Contact';
import { Faq } from './pages/Faq';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { Navbar } from './components/Navbar';
import ScrollToTop from './helpers/ScrollToTop';

const theme = createTheme({
  "mode": "light",
  "common": {
    "black": "#000",
    "white": "#fff"
  },
  "primary": {
    "main": "#006afe",
    "light": "#f9f9f9",
    "link": "#686868",
    "heading": "#0f0f0f",
    "footerText": "#333333"
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
  },
});


function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/advertise" element={<Advertise />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
