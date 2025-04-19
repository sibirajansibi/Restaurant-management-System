import React from 'react';
import ReservationForm from '../components/ReservationForm';

const ReservationPage = () => {
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

  const infoSectionStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
    margin: '50px 0',
  };

  const infoCardStyle = {
    padding: '30px',
    borderRadius: '20px',
    background: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(10px)',
    boxShadow: '8px 8px 20px rgba(0, 0, 0, 0.05), -8px -8px 20px rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
  };

  const infoIconStyle = {
    fontSize: '2.5rem',
    marginBottom: '15px',
  };

  const infoTitleStyle = {
    fontSize: '1.3rem',
    fontWeight: '600',
    marginBottom: '10px',
    color: '#333',
  };

  const infoTextStyle = {
    fontSize: '1rem',
    color: '#555',
    lineHeight: '1.6',
  };

  const handleReservationSubmit = (formData) => {
    // In a real app, this would send the data to a backend API
    console.log('Reservation submitted:', formData);
    alert('Reservation submitted successfully! We will contact you to confirm your booking.');
  };

  return (
    <div style={containerStyle}>
      <div style={backgroundStyle}></div>
      
      <div style={contentStyle}>
        <header style={headerStyle}>
          <h1 style={titleStyle}>Reserve Your Table</h1>
          <p style={subtitleStyle}>
            Secure your spot for an unforgettable dining experience. We recommend making reservations at least 24 hours in advance.
          </p>
        </header>

        <div style={infoSectionStyle}>
          <div style={infoCardStyle}>
            <div style={infoIconStyle}>⏰</div>
            <h3 style={infoTitleStyle}>Opening Hours</h3>
            <p style={infoTextStyle}>
              Monday - Friday: 11:00 AM - 10:00 PM<br />
              Saturday - Sunday: 10:00 AM - 11:00 PM
            </p>
          </div>

          <div style={infoCardStyle}>
            <div style={infoIconStyle}>📞</div>
            <h3 style={infoTitleStyle}>Contact</h3>
            <p style={infoTextStyle}>
              Phone: (123) 456-7890<br />
              Email: reservations@restaurant.com
            </p>
          </div>

          <div style={infoCardStyle}>
            <div style={infoIconStyle}>ℹ️</div>
            <h3 style={infoTitleStyle}>Policies</h3>
            <p style={infoTextStyle}>
              We hold reservations for 15 minutes.<br />
              For parties of 6+, please call directly.
            </p>
          </div>
        </div>

        <ReservationForm onSubmit={handleReservationSubmit} />
      </div>
    </div>
  );
};

export default ReservationPage;
