import React, { useState, useRef, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import emailjs from '@emailjs/browser';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaUser, FaMapMarkedAlt } from 'react-icons/fa';

import './Contact.css';
import callImg from '../assets/call.jpg';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [useWeb3Forms, setUseWeb3Forms] = useState(false);

  const recipientEmail = 'biniyamtegegne21@gmail.com';
  const mapUrl = 'https://maps.app.goo.gl/w47AghFpfT8w34LH8?g_st=atm';

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Web3Forms submission
  const submitToWeb3Forms = async (formData) => {
    try {
      const web3FormData = new FormData();
      web3FormData.append('name', formData.name);
      web3FormData.append('email', formData.email);
      web3FormData.append('message', formData.message);
      web3FormData.append('to_email', recipientEmail);
      web3FormData.append('access_key', '5bea1b2c-2c5c-4899-9a84-f1cbbfe96ada');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: web3FormData,
      });

      const data = await response.json();
      return data.success;
    } catch (error) {
      console.error('Web3Forms error:', error);
      return false;
    }
  };

  // EmailJS submission
  const submitToEmailJS = async () => {
    try {
      await emailjs.sendForm(
        'service_9xrmjuc',
        'template_dm0mpka',
        formRef.current,
        'yIlTZ7wRy6pysn3Mb'
      );
      return true;
    } catch (error) {
      console.error('EmailJS error:', error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    let success = false;

    if (!useWeb3Forms) {
      success = await submitToEmailJS();

      if (!success) {
        console.log('EmailJS failed, trying Web3Forms...');
        success = await submitToWeb3Forms(form);

        if (success) {
          setStatus({
            type: 'success',
            message: 'Message sent successfully.',
          });
        } else {
          setStatus({
            type: 'error',
            message:
              'Both services failed. Please try again or contact me directly via email.',
          });
        }
      } else {
        setStatus({
          type: 'success',
          message: "Thank you! I'll get back to you soon.",
        });
      }
    } else {
      success = await submitToWeb3Forms(form);
      if (success) {
        setStatus({
          type: 'success',
          message: "Thank you! I'll get back to you soon.",
        });
      } else {
        setStatus({
          type: 'error',
          message: 'Something went wrong. Please try again.',
        });
      }
    }

    if (success) {
      setForm({ name: '', email: '', message: '' });
    }

    setLoading(false);
  };

  const contactInfo = [
    {
      icon: <FaUser />,
      title: 'Full Name',
      value: 'Dejene Abebe Negewo',
      link: '#',
    },
    {
      icon: <FaPhone />,
      title: 'Mobile No.',
      value: '0910037682 / 0910115175',
      link: 'tel:0910037682',
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: recipientEmail,
      link: `mailto:${recipientEmail}`,
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Address',
      value: 'Addis Abeba, Ethiopia',
      link: mapUrl,
    },
  ];

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Header */}
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="contact-title">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="contact-subtitle">
            Have a question or want to work together? I'd love to hear from you.
          </p>
        </motion.div>

        {/* Main content: Full-height Image + Contact Form */}
        <div 
          className="contact-content" 
          style={{ 
            display: 'flex', 
            alignItems: 'stretch', 
            gap: '2rem',
            width: '100%' 
          }}
        >
          {/* Left Image Section stretched to match full form height */}
          <motion.div
            className="contact-image-wrapper"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              flex: '1 1 50%',
              display: 'flex',
              width: '100%',
              minHeight: '100%'
            }}
          >
            <img
              src={callImg}
              alt="Contact Person on Phone"
              style={{
                width: '100%',
                height: '100%',
                minHeight: '100%',
                objectFit: 'cover',
                borderRadius: '16px',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)'
              }}
            />
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="form-wrapper"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ flex: '1 1 50%', width: '100%' }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
              {/* Hidden field for target recipient email */}
              <input type="hidden" name="to_email" value={recipientEmail} />

              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              {status.message && (
                <motion.div
                  className={`status-message ${status.type}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {status.message}
                </motion.div>
              )}

              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>

              {process.env.NODE_ENV === 'development' && (
                <button
                  type="button"
                  onClick={() => setUseWeb3Forms(!useWeb3Forms)}
                  style={{ marginTop: '10px', fontSize: '12px' }}
                  className="submit-btn"
                >
                  Switch to {useWeb3Forms ? 'EmailJS' : 'Web3Forms'}
                </button>
              )}
            </form>
          </motion.div>
        </div>

        {/* Contact Information Cards */}
        <motion.div
          className="contact-info-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="info-title">Or reach me directly</h3>
          <div className="info-cards">
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target={item.link !== '#' ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="info-card"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="info-icon">{item.icon}</div>
                <div className="info-details">
                  <h4>{item.title}</h4>
                  <p>{item.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Google Maps Link Button */}
        <motion.div
          className="map-link-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{ marginTop: '30px', textAlign: 'center' }}
        >
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="map-link-button"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 24px',
              backgroundColor: '#4285F4',
              color: '#ffffff',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600',
              transition: 'background-color 0.3s ease',
            }}
          >
            <FaMapMarkedAlt size={20} />
            View Location on Google Maps
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;