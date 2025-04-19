const Button = ({ 
  children, 
  type = 'button', 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  disabled = false, 
  onClick 
}) => {
  // Base styles
  const baseStyle = {
    borderRadius: '8px',
    fontWeight: '500',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s ease',
    opacity: disabled ? '0.6' : '1',
    padding: '0.5rem 1rem',
    border: 'none',
    outline: 'none',
    boxShadow: '4px 4px 10px rgba(0,0,0,0.1), -4px -4px 10px rgba(255,255,255,0.7)',
  };
  
  // Variant styles
  const variantStyles = {
    primary: {
      backgroundColor: '#3b82f6',
      color: 'white',
    },
    secondary: {
      backgroundColor: '#6b7280',
      color: 'white',
    },
    success: {
      backgroundColor: '#10b981',
      color: 'white',
    },
    danger: {
      backgroundColor: '#ef4444',
      color: 'white',
    },
    warning: {
      backgroundColor: '#f59e0b',
      color: 'white',
    },
    outline: {
      backgroundColor: 'transparent',
      color: '#3b82f6',
      border: '1px solid #3b82f6',
    },
    ghost: {
      backgroundColor: 'transparent',
      color: '#3b82f6',
      boxShadow: 'none',
    },
  };

  // Size styles
  const sizeStyles = {
    sm: {
      fontSize: '0.875rem',
      padding: '0.375rem 0.75rem',
    },
    md: {
      fontSize: '1rem',
      padding: '0.5rem 1rem',
    },
    lg: {
      fontSize: '1.125rem',
      padding: '0.75rem 1.5rem',
    },
  };

  // Combine styles
  const combinedStyle = {
    ...baseStyle,
    ...variantStyles[variant],
    ...sizeStyles[size],
  };

  // Add hover effect
  const handleMouseOver = (e) => {
    if (!disabled) {
      e.target.style.transform = 'translateY(-2px)';
      if (variant !== 'ghost') {
        e.target.style.boxShadow = '6px 6px 14px rgba(0,0,0,0.15), -6px -6px 14px rgba(255,255,255,0.8)';
      }
    }
  };

  const handleMouseOut = (e) => {
    if (!disabled) {
      e.target.style.transform = 'translateY(0)';
      if (variant !== 'ghost') {
        e.target.style.boxShadow = '4px 4px 10px rgba(0,0,0,0.1), -4px -4px 10px rgba(255,255,255,0.7)';
      }
    }
  };

  return (
    <button
      type={type}
      style={combinedStyle}
      disabled={disabled}
      onClick={onClick}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {children}
    </button>
  );
};

export default Button;