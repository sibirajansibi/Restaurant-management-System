import React, { useState } from 'react';
import Button from './Button';

const ReservationForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 2,
    specialRequests: ''
  });

  const [errors, setErrors] = useState({});

  const containerStyle = {
    borderRadius: '20px',
    padding: '30px',
    background: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(10px)',
    boxShadow: '10px 10px 30px rgba(0, 0, 0, 0.05), -10px -10px 30px rgba(255, 255, 255, 0.8)',
    maxWidth: '600px',
    margin: '0 auto',
    position: 'relative',
    overflow: 'hidden',
  };

  const formTitleStyle = {
    fontSize: '24px',
    fontWeight: '700',
    marginBottom: '25px',
    textAlign: 'center',
    color: '#333',
    position: 'relative',
  };

  const formGroupStyle = {
    marginBottom: '20px',
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

  const formRowStyle = {
    display: 'flex',
    gap: '20px',
    marginBottom: '20px',
  };

  const formColumnStyle = {
    flex: '1',
  };

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
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (!formData.date) {
      newErrors.date = 'Date is required';
    }
    
    if (!formData.time) {
      newErrors.time = 'Time is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      if (onSubmit) {
        onSubmit(formData);
      }
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: 2,
        specialRequests: ''
      });
    }
  };

  const getInputStyles = (fieldName) => {
    return {
      ...inputStyle,
      ...(focusedField === fieldName ? focusedInputStyle : {}),
      ...(errors[fieldName] ? errorInputStyle : {})
    };
  };

  // Get tomorrow's date in YYYY-MM-DD format for min date attribute
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  // Get date 3 months from now for max date attribute
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3);
  const maxDateStr = maxDate.toISOString().split('T')[0];

  return (
    <div style={containerStyle}>
      <h2 style={formTitleStyle}>
        Reserve Your Table
        <div style={{
          position: 'absolute',
          bottom: '-5px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '50px',
          height: '3px',
          background: 'linear-gradient(90deg, #a5f3d0, #89cff0, #ffb6c1)',
          borderRadius: '10px'
        }}></div>
      </h2>
      
      <form onSubmit={handleSubmit}>
        <div style={formGroupStyle}>
          <label style={labelStyle} htmlFor="name">Full Name</label>
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
        
        <div style={formRowStyle}>
          <div style={formColumnStyle}>
            <label style={labelStyle} htmlFor="email">Email</label>
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
          
          <div style={formColumnStyle}>
            <label style={labelStyle} htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              style={getInputStyles('phone')}
              onFocus={() => setFocusedField('phone')}
              onBlur={() => setFocusedField(null)}
              placeholder="(123) 456-7890"
            />
            {errors.phone && <div style={errorMessageStyle}>{errors.phone}</div>}
          </div>
        </div>
        
        <div style={formRowStyle}>
          <div style={formColumnStyle}>
            <label style={labelStyle} htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              min={minDate}
              max={maxDateStr}
              onChange={handleChange}
              style={getInputStyles('date')}
              onFocus={() => setFocusedField('date')}
              onBlur={() => setFocusedField(null)}
            />
            {errors.date && <div style={errorMessageStyle}>{errors.date}</div>}
          </div>
          
          <div style={formColumnStyle}>
            <label style={labelStyle} htmlFor="time">Time</label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              min="11:00"
              max="22:00"
              onChange={handleChange}
              style={getInputStyles('time')}
              onFocus={() => setFocusedField('time')}
              onBlur={() => setFocusedField(null)}
            />
            {errors.time && <div style={errorMessageStyle}>{errors.time}</div>}
          </div>
          
          <div style={formColumnStyle}>
            <label style={labelStyle} htmlFor="guests">Guests</label>
            <input
              type="number"
              id="guests"
              name="guests"
              value={formData.guests}
              min="1"
              max="20"
              onChange={handleChange}
              style={getInputStyles('guests')}
              onFocus={() => setFocusedField('guests')}
              onBlur={() => setFocusedField(null)}
            />
          </div>
        </div>
        
        <div style={formGroupStyle}>
          <label style={labelStyle} htmlFor="specialRequests">Special Requests</label>
          <textarea
            id="specialRequests"
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleChange}
            style={{
              ...getInputStyles('specialRequests'),
              minHeight: '100px',
              resize: 'vertical'
            }}
            onFocus={() => setFocusedField('specialRequests')}
            onBlur={() => setFocusedField(null)}
            placeholder="Any special requests or dietary requirements..."
          />
        </div>
        
        <Button 
          type="submit" 
          variant="primary" 
          size="large" 
          fullWidth
        >
          Reserve Now
        </Button>
      </form>
    </div>
  );
};

export default ReservationForm;
