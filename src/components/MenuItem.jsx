import React, { useState } from 'react';
import Button from './Button';

const MenuItem = ({ 
  id, 
  name, 
  description, 
  price, 
  image, 
  category, 
  isVegetarian = false, 
  spicyLevel = 0,
  onAddToCart 
}) => {
  const [quantity, setQuantity] = useState(1);

  const containerStyle = {
    position: 'relative',
    borderRadius: '16px',
    padding: '20px',
    margin: '15px 0',
    width: '100%',
    maxWidth: '350px',
    minHeight: '180px',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    background: 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(10px)',
    boxShadow: '8px 8px 20px rgba(0, 0, 0, 0.05), -8px -8px 20px rgba(255, 255, 255, 0.8)',
    overflow: 'hidden',
  };

  const hoverStyle = {
    transform: 'translateY(-5px)',
    boxShadow: '10px 10px 25px rgba(0, 0, 0, 0.08), -10px -10px 25px rgba(255, 255, 255, 0.9)',
  };

  const [isHovered, setIsHovered] = useState(false);

  const imageStyle = {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    borderRadius: '10px',
    marginBottom: '15px',
    transition: 'transform 0.5s ease',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
  };

  const titleStyle = {
    fontSize: '18px',
    fontWeight: '700',
    marginBottom: '8px',
    color: '#333',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const descriptionStyle = {
    fontSize: '14px',
    color: '#666',
    marginBottom: '15px',
    lineHeight: '1.5',
    flexGrow: '1',
  };

  const priceStyle = {
    fontSize: '18px',
    fontWeight: '700',
    color: '#333',
    marginBottom: '15px',
  };

  const badgeContainerStyle = {
    display: 'flex',
    gap: '8px',
    marginBottom: '12px',
  };

  const badgeStyle = {
    padding: '4px 8px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '600',
    display: 'inline-flex',
    alignItems: 'center',
  };

  const vegetarianBadgeStyle = {
    ...badgeStyle,
    backgroundColor: 'rgba(165, 243, 208, 0.7)',
    color: '#2a7d5f',
  };

  const categoryBadgeStyle = {
    ...badgeStyle,
    backgroundColor: 'rgba(137, 207, 240, 0.7)',
    color: '#1a5276',
  };

  const spicyBadgeStyle = {
    ...badgeStyle,
    backgroundColor: 'rgba(255, 182, 193, 0.7)',
    color: '#943126',
  };

  const quantityControlStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
  };

  const quantityButtonStyle = {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    background: 'linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%)',
    boxShadow: '3px 3px 6px rgba(0, 0, 0, 0.1), -3px -3px 6px rgba(255, 255, 255, 0.7)',
    cursor: 'pointer',
    fontSize: '18px',
    color: '#333',
    transition: 'all 0.2s ease',
  };

  const quantityDisplayStyle = {
    margin: '0 15px',
    fontSize: '16px',
    fontWeight: '600',
    color: '#333',
  };

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart({ id, name, price, quantity });
    }
  };

  const renderSpicyLevel = () => {
    if (spicyLevel === 0) return null;
    
    return (
      <div style={spicyBadgeStyle}>
        {'🌶️'.repeat(spicyLevel)}
      </div>
    );
  };

  return (
    <div 
      style={{...containerStyle, ...(isHovered ? hoverStyle : {})}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {image && <img src={image} alt={name} style={imageStyle} />}
      
      <div style={badgeContainerStyle}>
        {isVegetarian && <div style={vegetarianBadgeStyle}>🥬 Vegetarian</div>}
        {category && <div style={categoryBadgeStyle}>{category}</div>}
        {renderSpicyLevel()}
      </div>
      
      <div style={titleStyle}>
        <span>{name}</span>
      </div>
      
      <div style={descriptionStyle}>{description}</div>
      
      <div style={priceStyle}>${price.toFixed(2)}</div>
      
      <div style={quantityControlStyle}>
        <button 
          style={quantityButtonStyle} 
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
        >
          -
        </button>
        <span style={quantityDisplayStyle}>{quantity}</span>
        <button 
          style={quantityButtonStyle} 
          onClick={() => setQuantity(quantity + 1)}
        >
          +
        </button>
      </div>
      
      <Button 
        onClick={handleAddToCart} 
        variant="primary" 
        size="small"
        fullWidth
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default MenuItem;
