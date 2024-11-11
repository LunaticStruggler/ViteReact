import React, { useState } from 'react';
import './ContactPage.css'; 

const ContactPage = ({ darkMode }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        
        if (!name || !email || !message) {
            setError('All fields are required.');
            return;
        }

        
        setError('');

        
        alert('Form submitted successfully!');
    };

    return (
        <div className={`contact-page ${darkMode ? 'dark-mode' : ''}`}>
            <div className="contact-section">
                <h1>Contact Us</h1>
                <p>If you have any questions or inquiries, feel free to reach out to us.</p>

                {error && <div className="error">{error}</div>}

                <form className="contact-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Your Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Enter your name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    />

                    <label htmlFor="email">Your Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="Enter your email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />

                    <label htmlFor="message">Your Message</label>
                    <textarea 
                        id="message" 
                        name="message" 
                        placeholder="Enter your message" 
                        rows="4" 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} 
                    ></textarea>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
