import './App.css'; 
import React, { useRef } from "react"; 
import { ThemeProvider, createTheme, CssBaseline,Box  } from "@mui/material";
import HeroSection from './Component/heroSection'; 
import WorkSection from './Component/workSection'; 
import AboutMe from './Component/aboutMe'; 
import ContactMe from './Component/contactMe';

function App() {
    // References for AboutMe and ContactMe sections
    const aboutMeRef = useRef(null); 
    const contactMeRef = useRef(null);

    // Scroll handler for AboutMe section
    const handleAboutMeClick = () => {
        if (aboutMeRef.current) {
            aboutMeRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Scroll handler for ContactMe section
    const handleContactMeClick = () => {
        if (contactMeRef.current) {
            contactMeRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Global theme for consistent styling
    const theme = createTheme({
        palette: {
            background: {
                default: "#FDF4E3",
            },
            text: {
                primary: "#3C3C3C",
                secondary: "#6D6D6D",
            },
        },
        typography: {
            fontFamily: "'Roboto', 'Arial', sans-serif",
            h3: {
                fontSize: "2.5rem",
                fontWeight: 700,
            },
            h4: {
                fontSize: "2rem",
                fontWeight: 600,
            },
            body1: {
                fontSize: "1rem",
                lineHeight: 1.6,
            },
            body2: {
                fontSize: "0.875rem",
                lineHeight: 1.5,
            },
        },
        spacing: 4, // Default spacing for margins/paddings
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="App">
            <Box sx={{ mx: 6 /* Apply margin to HeroSection container */ }}>
                    <HeroSection 
                        onAboutMeClick={handleAboutMeClick} 
                        onContactMeClick={handleContactMeClick} 
                    />
                </Box>
                <WorkSection />
                <AboutMe ref={aboutMeRef} />
                <ContactMe ref={contactMeRef} />
            </div>
        </ThemeProvider>
    );
}

export default App;
