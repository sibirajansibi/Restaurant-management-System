import { Link } from 'react-router-dom';

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: '#1f2937',
      color: 'white',
      padding: '2rem 1rem',
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
    },
    gridContainer: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '2rem',
    },
    '@media (min-width: 768px)': {
      gridContainer: {
        gridTemplateColumns: 'repeat(3, 1fr)',
      },
    },
    heading: {
      fontSize: '1.125rem',
      fontWeight: '600',
      marginBottom: '1rem',
    },
    text: {
      color: '#d1d5db',
      marginBottom: '0.5rem',
    },
    linkList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    linkItem: {
      marginBottom: '0.5rem',
    },
    link: {
      color: '#d1d5db',
      textDecoration: 'none',
    },
    contactInfo: {
      fontStyle: 'normal',
      color: '#d1d5db',
    },
    divider: {
      borderTop: '1px solid #374151',
      marginTop: '2rem',
      paddingTop: '2rem',
    },
    copyright: {
      fontSize: '0.875rem',
      color: '#d1d5db',
      textAlign: 'center',
    }
  };

  // Apply responsive styles
  const responsiveGridContainer = window.innerWidth >= 768 
    ? { ...styles.gridContainer, gridTemplateColumns: 'repeat(3, 1fr)' } 
    : styles.gridContainer;

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={responsiveGridContainer}>
          <div>
            <h3 style={styles.heading}>Restaurant Management System</h3>
            <p style={styles.text}>
              Streamlining restaurant operations, enhancing customer experience, and optimizing resource management.
            </p>
          </div>
          <div>
            <h3 style={styles.heading}>Quick Links</h3>
            <ul style={styles.linkList}>
              <li style={styles.linkItem}><Link to="/" style={styles.link}>Home</Link></li>
              <li style={styles.linkItem}><Link to="/menu" style={styles.link}>Menu</Link></li>
              <li style={styles.linkItem}><Link to="/reservation" style={styles.link}>Reservations</Link></li>
              <li style={styles.linkItem}><Link to="/about" style={styles.link}>About Us</Link></li>
              <li style={styles.linkItem}><Link to="/contact" style={styles.link}>Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 style={styles.heading}>Contact Us</h3>
            <address style={styles.contactInfo}>
              <p>123 Restaurant Street</p>
              <p>Foodie City, FC 12345</p>
              <p style={{ marginTop: '0.5rem' }}>Phone: (123) 456-7890</p>
              <p>Email: info@rms-restaurant.com</p>
            </address>
          </div>
        </div>
        <div style={styles.divider}>
          <p style={styles.copyright}>&copy; {new Date().getFullYear()} Restaurant Management System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;