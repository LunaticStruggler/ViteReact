import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Header from './components/header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Features2 from './components/Features2';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Faq from './components/Faq';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';
import './App.css';

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [testimonials, setTestimonials] = useState([]);
    const [faqData, setFaqData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                const testimonialsResponse = await axios.get('https://win24-assignment.azurewebsites.net/api/testimonials');
                setTestimonials(testimonialsResponse.data);

                const faqResponse = await axios.get('https://win24-assignment.azurewebsites.net/api/faq');
                setFaqData(faqResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <Router basename="/Figma"> {/* Set the base path */}
            <div className={`App ${darkMode ? 'dark' : ''}`}>
                <Header darkMode={darkMode} onToggleDarkMode={() => setDarkMode(!darkMode)} />
                
                {loading && <div className="loading">Loading data...</div>}
                {error && <div className="error">Error: {error}</div>}

                <Routes>
                    <Route path="/" element={
                        <>
                            <Hero darkMode={darkMode} />
                            <Features darkMode={darkMode} />
                            <HowItWorks darkMode={darkMode} />
                            <Features2 darkMode={darkMode} />
                            <Testimonials testimonials={testimonials} darkMode={darkMode} />
                            <Contact darkMode={darkMode} />
                            <Faq faqData={faqData} darkMode={darkMode} />
                            <Newsletter darkMode={darkMode} />
                        </>
                    } />
                    <Route path="/contact" element={<ContactPage darkMode={darkMode} />} />
                </Routes>

                <Footer darkMode={darkMode} />
            </div>
        </Router>
    );
}

export default App;
