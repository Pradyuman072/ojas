import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

export default function EmailSubmissionForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false, // Whether animation should happen only once
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const result = await emailjs.send(
        'service_lsq4ntl',
        'template_9verytf',
        formData,
        '7ver1tPHmU-csThcG'
      );
      setStatus('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Email send error:', error);
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <div 
      style={{
        maxWidth: '28rem',
        margin: '0 auto',
        padding: '2rem',
        color: 'white'
      }}
      data-aos="fade-up" // Add AOS attribute here
    >
      <h2 
        style={{
          fontSize: '2rem',
          textAlign: 'center',
          fontWeight: 'bold',
          marginBottom: '1.5rem',
          color: 'white'
        }}
      >
        Contact Ojas
      </h2>
      <form 
        onSubmit={handleSubmit} 
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}
      >
        <div>
          <label 
            htmlFor="name" 
            style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: 'rgba(255,255,255,0.9)'
            }}
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '2px solid rgba(255,255,255,0.2)',
              borderRadius: '0.5rem',
              background: 'rgba(255,255,255,0.1)',
              color: 'white',
              outline: 'none',
            }}
          />
        </div>
        <div>
          <label 
            htmlFor="email" 
            style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: 'rgba(255,255,255,0.9)'
            }}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '2px solid rgba(255,255,255,0.2)',
              borderRadius: '0.5rem',
              background: 'rgba(255,255,255,0.1)',
              color: 'white',
              outline: 'none',
            }}
          />
        </div>
        <div>
          <label 
                       htmlFor="message" 
                       style={{
                         display: 'block',
                         marginBottom: '0.5rem',
                         color: 'rgba(255,255,255,0.9)'
                       }}
                     >
                       Message
                     </label>
                     <textarea
                       id="message"
                       name="message"
                       value={formData.message}
                       onChange={handleChange}
                       required
                       rows={4}
                       style={{
                         width: '100%',
                         padding: '0.75rem',
                         border: '2px solid rgba(255,255,255,0.2)',
                         borderRadius: '0.5rem',
                         background: 'rgba(255,255,255,0.1)',
                         color: 'white',
                         resize: 'vertical',
                         outline: 'none',
                       }}
                     />
                   </div>
                   {status && (
                     <div 
                       style={{
                         textAlign: 'center',
                         padding: '0.5rem',
                         borderRadius: '0.375rem',
                         color: status.includes('successfully') ? '#10b981' : '#ef4444'
                       }}
                     >
                       {status}
                     </div>
                   )}
                   <button
                     type="submit"
                     style={{
                       width: '100%',
                       background: 'linear-gradient(270deg, #ff6b6b, #4ecdc4, #45b7d1, #f9d56e)',
                       backgroundSize: '400% 400%',
                       animation: 'gradientAnimation 15s ease infinite',
                       color: 'white',
                       padding: '0.75rem',
                       borderRadius: '0.5rem',
                       fontWeight: 'bold',
                       cursor: 'pointer',
                       border: 'none',
                       position: 'relative',
                       overflow: 'hidden',
                       transition: 'transform 0.2s',
                     }}
                     onMouseEnter={() => setIsHovered(true)}
                     onMouseLeave={() => setIsHovered(false)}
                   >
                     Send Message
                   </button>
                 </form>
                 <style>
                   {`
                     @keyframes gradientAnimation {
                       0% {background-position: 0% 50%}
                       50% {background-position: 100% 50%}
                       100% {background-position: 0% 50%}
                     }
                     button:hover {
                       transform: scale(1.02);
                     }
                   `}
                 </style>
               </div>
             );
           }