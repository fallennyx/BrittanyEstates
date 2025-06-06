import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';

// Import page components
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CommunityPage from './pages/CommunityPage';
import HomeDesignsPage from './pages/HomeDesignsPage';
import GalleryPage from './pages/GalleryPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';
import FaqPage from './pages/FaqPage';
import ArlingtonHomePage from './pages/homeDesigns/ArlingtonHomePage';
import TheCountryPage from './pages/homeDesigns/TheCountry';
import AshleyTwoPage from './pages/homeDesigns/AshleyTwo';

// ScrollToTop wrapper component
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

// Create theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#2b4a38', // Dark green
    },
    secondary: {
      main: '#d4af37', // Gold accent
    },
  },
  typography: {
    fontFamily: '"Playfair Display", "Roboto", "Arial", sans-serif',
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 500,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/home-designs" element={<HomeDesignsPage />} />
          <Route path="/home-designs/arlington" element={<ArlingtonHomePage />} />
          <Route path="/home-designs/thecountry" element={<TheCountryPage />} />
          <Route path="/home-designs/ashley-two" element={<AshleyTwoPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FaqPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
