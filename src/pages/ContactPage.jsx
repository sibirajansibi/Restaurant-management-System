import React, { useState } from 'react';
import Button from '../components/Button';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const containerStyle = {
    minHeight: '100vh',
    position: 'relative',
    overflow: 'hidden',
  };

  const backgroundStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(135deg, #a5f3d0 0%, #89cff0 50%, #ffb6c1 100%)',
    backgroundSize: '400% 400%',
    animation: 'gradient 15s ease infinite',
    zIndex: -1,
  };

  const contentStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '80px 20px',
    position: 'relative',
    zIndex: 1,
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '50px',
  };

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '15px',
    color: '#333',
  };

  const subtitleStyle = {
    fontSize: '1.2rem',
    color: '#555',
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: '1.6',
  };

  const contactSectionStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '40px',
    margin: '40px 0',
  };

  const formContainerStyle = {
    borderRadius: '20px',
    padding: '40px',
    background: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(10px)',
    boxShadow: '10px 10px 30px rgba(0, 0, 0, 0.05), -10px -10px 30px rgba(255, 255, 255, 0.8)',
  };

  const infoContainerStyle = {
    borderRadius: '20px',
    padding: '40px',
    background: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(10px)',
    boxShadow: '10px 10px 30px rgba(0, 0, 0, 0.05), -10px -10px 30px rgba(255, 255, 255, 0.8)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  const formTitleStyle = {
    fontSize: '1.8rem',
    fontWeight: '700',
    marginBottom: '25px',
    color: '#333',
    position: 'relative',
  };

  const formGroupStyle = {
    marginBottom: '25px',
    position: 'relative',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontSize: '16px',
    fontWeight: '600',
    color: '#555',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 15px',
    borderRadius: '12px',
    border: '2px solid transparent',
    background: 'rgba(255, 255, 255, 0.9)',
    boxShadow: 'inset 3px 3px 7px rgba(0, 0, 0, 0.05), inset -3px -3px 7px rgba(255, 255, 255, 0.6)',
    fontSize: '16px',
    transition: 'all 0.3s ease',
    outline: 'none',
  };

  const focusedInputStyle = {
    borderColor: '#89cff0',
    boxShadow: 'inset 3px 3px 7px rgba(0, 0, 0, 0.05), inset -3px -3px 7px rgba(255, 255, 255, 0.6), 0 0 10px rgba(137, 207, 240, 0.5)',
  };

  const errorInputStyle = {
    borderColor: '#ffb6c1',
    boxShadow: 'inset 3px 3px 7px rgba(0, 0, 0, 0.05), inset -3px -3px 7px rgba(255, 255, 255, 0.6), 0 0 10px rgba(255, 182, 193, 0.5)',
  };

  const errorMessageStyle = {
    color: '#d63031',
    fontSize: '14px',
    marginTop: '5px',
    fontWeight: '500',
  };

  const infoTitleStyle = {
    fontSize: '1.8rem',
    fontWeight: '700',
    marginBottom: '25px',
    color: '#333',
    position: 'relative',
  };

  const infoItemStyle = {
    marginBottom: '25px',
  };

  const infoLabelStyle = {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#333',
    marginBottom: '8px',
    display: 'flex',
    alignItems: 'center',
  };

  const infoTextStyle = {
    fontSize: '1rem',
    color: '#555',
    lineHeight: '1.6',
    marginLeft: '30px',
  };

  const iconStyle = {
    marginRight: '10px',
    fontSize: '1.3rem',
    width: '24px',
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const socialLinksStyle = {
    display: 'flex',
    gap: '15px',
    marginTop: '20px',
  };

  const socialIconStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #a5f3d0 0%, #89cff0 50%, #ffb6c1 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#333',
    fontSize: '1.2rem',
    boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.1), -4px -4px 10px rgba(255, 255, 255, 0.7)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
  };

  const socialIconHoverStyle = {
    transform: 'translateY(-5px)',
    boxShadow: '6px 6px 15px rgba(0, 0, 0, 0.15), -6px -6px 15px rgba(255, 255, 255, 0.8)',
  };

  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a RA this would send the data to a backend API
      console.log('Form submitted:', formData);
      
      // Show success message
      setSubmitted(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }
  };

  const getInputStyles = (fieldName) => {
    return {
      ...inputStyle,
      ...(focusedField === fieldName ? focusedInputStyle : {}),
      ...(errors[fieldName] ? errorInputStyle : {})
    };
  };

  const successMessageStyle = {
    padding: '15px',
    borderRadius: '12px',
    background: 'rgba(165, 243, 208, 0.7)',
    color: '#2a7d5f',
    marginBottom: '20px',
    textAlign: 'center',
    fontWeight: '600',
    boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.05), -4px -4px 10px rgba(255, 255, 255, 0.8)',
  };

  const mapContainerStyle = {
    borderRadius: '20px',
    overflow: 'hidden',
    height: '300px',
    marginTop: '40px',
    boxShadow: '10px 10px 30px rgba(0, 0, 0, 0.05), -10px -10px 30px rgba(255, 255, 255, 0.8)',
    background: 'rgba(255, 255, 255, 0.8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#555',
    fontSize: '1.2rem',
    fontWeight: '600',
  };

  return (
    <div style={containerStyle}>
      <div style={backgroundStyle}></div>
      
      <div style={contentStyle}>
        <header style={headerStyle}>
          <h1 style={titleStyle}>Contact Us</h1>
          <p style={subtitleStyle}>
            Have questions, feedback, or want to make a special request? We'd love to hear from you. 
            Reach out to us using any of the methods below.
          </p>
        </header>

        <div style={contactSectionStyle}>
          <div style={formContainerStyle}>
            <h2 style={formTitleStyle}>
              Send Us a Message
              <div style={{
                position: 'absolute',
                bottom: '-5px',
                left: '0',
                width: '50px',
                height: '3px',
                background: 'linear-gradient(90deg, #a5f3d0, #89cff0, #ffb6c1)',
                borderRadius: '10px'
              }}></div>
            </h2>
            
            {submitted && (
              <div style={successMessageStyle}>
                Thank you for your message! We'll get back to you soon.
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div style={formGroupStyle}>
                <label style={labelStyle} htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  style={getInputStyles('name')}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="John Doe"
                />
                {errors.name && <div style={errorMessageStyle}>{errors.name}</div>}
              </div>
              
              <div style={formGroupStyle}>
                <label style={labelStyle} htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={getInputStyles('email')}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="your@email.com"
                />
                {errors.email && <div style={errorMessageStyle}>{errors.email}</div>}
              </div>
              
              <div style={formGroupStyle}>
                <label style={labelStyle} htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  style={getInputStyles('subject')}
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Reservation Inquiry"
                />
                {errors.subject && <div style={errorMessageStyle}>{errors.subject}</div>}
              </div>
              
              <div style={formGroupStyle}>
                <label style={labelStyle} htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  style={{
                    ...getInputStyles('message'),
                    minHeight: '150px',
                    resize: 'vertical'
                  }}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Your message here..."
                />
                {errors.message && <div style={errorMessageStyle}>{errors.message}</div>}
              </div>
              
              <Button 
                type="submit" 
                variant="primary" 
                size="large" 
                fullWidth
              >
                Send Message
              </Button>
            </form>
          </div>
          
          <div style={infoContainerStyle}>
            <div>
              <h2 style={infoTitleStyle}>
                Contact Information
                <div style={{
                  position: 'absolute',
                  bottom: '-5px',
                  left: '0',
                  width: '50px',
                  height: '3px',
                  background: 'linear-gradient(90deg, #a5f3d0, #89cff0, #ffb6c1)',
                  borderRadius: '10px'
                }}></div>
              </h2>
              
              <div style={infoItemStyle}>
                <div style={infoLabelStyle}>
                  <span style={iconStyle}>📍</span> Address
                </div>
                <div style={infoTextStyle}>
                  123 Culinary Street<br />
                  Foodie District<br />
                  Gourmet City, GC 12345
                </div>
              </div>
              
              <div style={infoItemStyle}>
                <div style={infoLabelStyle}>
                  <span style={iconStyle}>📞</span> Phone
                </div>
                <div style={infoTextStyle}>
                  (123) 456-7890<br />
                  (098) 765-4321
                </div>
              </div>
              
              <div style={infoItemStyle}>
                <div style={infoLabelStyle}>
                  <span style={iconStyle}>✉️</span> Email
                </div>
                <div style={infoTextStyle}>
                  info@restaurant.com<br />
                  reservations@restaurant.com
                </div>
              </div>
              
              <div style={infoItemStyle}>
                <div style={infoLabelStyle}>
                  <span style={iconStyle}>⏰</span> Hours
                </div>
                <div style={infoTextStyle}>
                  Monday - Friday: 11:00 AM - 10:00 PM<br />
                  Saturday - Sunday: 10:00 AM - 11:00 PM
                </div>
              </div>
            </div>
            
            <div>
              <div style={infoLabelStyle}>Follow Us</div>
              <div style={socialLinksStyle}>
                <div 
                  style={{
                    ...socialIconStyle, 
                    ...(hoveredIcon === 'facebook' ? socialIconHoverStyle : {})
                  }}
                  onMouseEnter={() => setHoveredIcon('facebook')}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
                  f
                </div>
                <div 
                  style={{
                    ...socialIconStyle, 
                    ...(hoveredIcon === 'instagram' ? socialIconHoverStyle : {})
                  }}
                  onMouseEnter={() => setHoveredIcon('instagram')}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
                  i
                </div>
                <div 
                  style={{
                    ...socialIconStyle, 
                    ...(hoveredIcon === 'twitter' ? socialIconHoverStyle : {})
                  }}
                  onMouseEnter={() => setHoveredIcon('twitter')}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
                  t
                </div>
                <div 
                  style={{
                    ...socialIconStyle, 
                    ...(hoveredIcon === 'yelp' ? socialIconHoverStyle : {})
                  }}
                  onMouseEnter={() => setHoveredIcon('yelp')}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
                  y
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div style={mapContainerStyle}>
          Map will be soon
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
