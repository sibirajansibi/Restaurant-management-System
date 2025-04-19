import React, { useState } from 'react';
import Button from '../components/Button';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  const itemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px',
    marginBottom: '10px',
    borderRadius: '12px',
    background: 'rgba(255, 255, 255, 0.7)',
    boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.05), -4px -4px 10px rgba(255, 255, 255, 0.8)',
  };

  const itemInfoStyle = {
    flex: '1',
  };

  const itemNameStyle = {
    fontSize: '16px',
    fontWeight: '600',
    color: '#333',
    marginBottom: '5px',
  };

  const itemPriceStyle = {
    fontSize: '15px',
    color: '#666',
  };

  const quantityControlStyle = {
    display: 'flex',
    alignItems: 'center',
    marginRight: '15px',
  };

  const quantityButtonStyle = {
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    background: 'linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%)',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1), -2px -2px 5px rgba(255, 255, 255, 0.7)',
    cursor: 'pointer',
    fontSize: '16px',
    color: '#333',
    transition: 'all 0.2s ease',
  };

  const quantityDisplayStyle = {
    margin: '0 10px',
    fontSize: '15px',
    fontWeight: '600',
    color: '#333',
    minWidth: '20px',
    textAlign: 'center',
  };

  const removeButtonStyle = {
    background: 'none',
    border: 'none',
    color: '#ff6b6b',
    cursor: 'pointer',
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    padding: '5px 10px',
    borderRadius: '8px',
    transition: 'all 0.2s ease',
  };

  const handleIncrement = () => {
    onUpdateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      onUpdateQuantity(item.id, item.quantity - 1);
    }
  };

  return (
    <div style={itemStyle}>
      <div style={itemInfoStyle}>
        <div style={itemNameStyle}>{item.name}</div>
        <div style={itemPriceStyle}>${(item.price * item.quantity).toFixed(2)}</div>
      </div>
      
      <div style={quantityControlStyle}>
        <button style={quantityButtonStyle} onClick={handleDecrement}>-</button>
        <span style={quantityDisplayStyle}>{item.quantity}</span>
        <button style={quantityButtonStyle} onClick={handleIncrement}>+</button>
      </div>
      
      <button style={removeButtonStyle} onClick={() => onRemove(item.id)}>
        <span style={{ marginRight: '5px' }}>✕</span> Remove
      </button>
    </div>
  );
};

const Cart = ({ items = [], onUpdateQuantity, onRemove, onCheckout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const cartIconStyle = {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #a5f3d0 0%, #89cff0 50%, #ffb6c1 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.1), -5px -5px 15px rgba(255, 255, 255, 0.7)',
    zIndex: '1000',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  const cartIconHoverStyle = {
    transform: 'scale(1.05)',
    boxShadow: '7px 7px 20px rgba(0, 0, 0, 0.15), -7px -7px 20px rgba(255, 255, 255, 0.8)',
  };

  const [isCartIconHovered, setIsCartIconHovered] = useState(false);

  const cartBadgeStyle = {
    position: 'absolute',
    top: '0',
    right: '0',
    background: '#ff6b6b',
    color: 'white',
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    fontWeight: '700',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
  };

  const cartContainerStyle = {
    position: 'fixed',
    top: '0',
    right: isOpen ? '0' : '-400px',
    width: '350px',
    height: '100vh',
    background: 'linear-gradient(135deg, rgba(165, 243, 208, 0.3) 0%, rgba(137, 207, 240, 0.3) 50%, rgba(255, 182, 193, 0.3) 100%)',
    backdropFilter: 'blur(10px)',
    boxShadow: '-5px 0 20px rgba(0, 0, 0, 0.1)',
    zIndex: '999',
    transition: 'right 0.4s ease',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    overflowY: 'auto',
  };

  const cartHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    padding: '0 0 15px 0',
    borderBottom: '2px solid rgba(255, 255, 255, 0.5)',
  };

  const cartTitleStyle = {
    fontSize: '22px',
    fontWeight: '700',
    color: '#333',
  };

  const closeButtonStyle = {
    background: 'none',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
    color: '#666',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    transition: 'all 0.2s ease',
  };

  const cartItemsContainerStyle = {
    flex: '1',
    overflowY: 'auto',
    marginBottom: '20px',
  };

  const emptyCartStyle = {
    textAlign: 'center',
    padding: '30px 0',
    color: '#666',
    fontSize: '16px',
  };

  const cartSummaryStyle = {
    padding: '15px',
    borderRadius: '12px',
    background: 'rgba(255, 255, 255, 0.7)',
    boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.05), -4px -4px 10px rgba(255, 255, 255, 0.8)',
    marginBottom: '20px',
  };

  const summaryRowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
    fontSize: '16px',
    color: '#666',
  };

  const totalRowStyle = {
    ...summaryRowStyle,
    marginTop: '15px',
    paddingTop: '15px',
    borderTop: '1px solid rgba(0, 0, 0, 0.1)',
    fontSize: '18px',
    fontWeight: '700',
    color: '#333',
    marginBottom: '0',
  };

  // Calculate cart totals
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax;

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const handleCheckout = () => {
    if (onCheckout) {
      onCheckout();
    }
    setIsOpen(false);
  };

  return (
    <>
      <div 
        style={{...cartIconStyle, ...(isCartIconHovered ? cartIconHoverStyle : {})}}
        onClick={() => setIsOpen(true)}
        onMouseEnter={() => setIsCartIconHovered(true)}
        onMouseLeave={() => setIsCartIconHovered(false)}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18ZM7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L21.16 5.96C21.26 5.79 21.31 5.59 21.31 5.39C21.31 4.9 20.92 4.5 20.42 4.5H5.21L4.27 2.5H1V4.5H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.29 15 7.17 14.89 7.17 14.75Z" fill="#333"/>
        </svg>
        {totalItems > 0 && (
          <div style={cartBadgeStyle}>{totalItems}</div>
        )}
      </div>

      <div style={cartContainerStyle}>
        <div style={cartHeaderStyle}>
          <div style={cartTitleStyle}>Your Cart</div>
          <button style={closeButtonStyle} onClick={() => setIsOpen(false)}>✕</button>
        </div>

        <div style={cartItemsContainerStyle}>
          {items.length === 0 ? (
            <div style={emptyCartStyle}>Your cart is empty</div>
          ) : (
            items.map(item => (
              <CartItem 
                key={item.id} 
                item={item} 
                onUpdateQuantity={onUpdateQuantity}
                onRemove={onRemove}
              />
            ))
          )}
        </div>

        {items.length > 0 && (
          <>
            <div style={cartSummaryStyle}>
              <div style={summaryRowStyle}>
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div style={summaryRowStyle}>
                <span>Tax (8%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div style={totalRowStyle}>
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <Button 
              onClick={handleCheckout} 
              variant="primary" 
              size="large" 
              fullWidth
            >
              Checkout
            </Button>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
