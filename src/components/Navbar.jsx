// import { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const navbarStyle = {
//     background: '#1f2937',
//     color: 'white',
//   };

//   const containerStyle = {
//     maxWidth: '1280px',
//     margin: '0 auto',
//     padding: '0 1rem',
//   };

//   const flexBetweenStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     height: '64px',
//   };

//   const logoStyle = {
//     fontSize: '1.25rem',
//     fontWeight: 'bold',
//     textDecoration: 'none',
//     color: 'white',
//   };

//   const navLinkStyle = {
//     padding: '0.5rem 0.75rem',
//     borderRadius: '0.375rem',
//     fontSize: '0.875rem',
//     fontWeight: '500',
//     color: 'white',
//     textDecoration: 'none',
//   };

//   const navLinkHoverStyle = {
//     ...navLinkStyle,
//     backgroundColor: '#374151',
//   };

//   const buttonStyle = {
//     marginLeft: '0.5rem',
//     padding: '0.5rem 0.75rem',
//     borderRadius: '0.375rem',
//     backgroundColor: '#2563eb',
//     color: 'white',
//     fontSize: '0.875rem',
//     fontWeight: '500',
//     textDecoration: 'none',
//   };

//   const mobileMenuButtonStyle = {
//     display: 'inline-flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: '0.5rem',
//     borderRadius: '0.375rem',
//     color: '#9ca3af',
//   };

//   const mobileMenuStyle = {
//     padding: '0.5rem',
//   };

//   const mobileNavLinkStyle = {
//     display: 'block',
//     padding: '0.5rem 0.75rem',
//     borderRadius: '0.375rem',
//     fontSize: '1rem',
//     fontWeight: '500',
//     marginBottom: '0.25rem',
//     color: 'white',
//     textDecoration: 'none',
//   };

//   return (
//     <nav style={navbarStyle}>
//       <div style={containerStyle}>
//         <div style={flexBetweenStyle}>
//           <div style={{ display: 'flex', alignItems: 'center' }}>
//             <div>
//               <Link to="/" style={logoStyle}>RMS</Link>
//             </div>
//             <div style={{ marginLeft: '2.5rem', display: 'none', '@media (min-width: 768px)': { display: 'block' } }}>
//               <div style={{ display: 'flex', gap: '1rem' }}>
//                 <Link to="/" style={navLinkStyle}>Home</Link>
//                 <Link to="/menu" style={navLinkStyle}>Menu</Link>
//                 <Link to="/reservation" style={navLinkStyle}>Reservations</Link>
//                 <Link to="/about" style={navLinkStyle}>About</Link>
//                 <Link to="/contact" style={navLinkStyle}>Contact</Link>
//               </div>
//             </div>
//           </div>
//           <div style={{ display: 'none', '@media (min-width: 768px)': { display: 'block' } }}>
//             <div style={{ display: 'flex', alignItems: 'center', marginLeft: '1.5rem' }}>
//               <Link to="/login" style={navLinkStyle}>Login</Link>
//               <Link to="/dashboard" style={buttonStyle}>Staff Portal</Link>
//             </div>
//           </div>
//           <div style={{ display: 'flex', '@media (min-width: 768px)': { display: 'none' } }}>
//             <button
//               onClick={toggleMenu}
//               style={mobileMenuButtonStyle}
//               aria-expanded="false"
//             >
//               <span style={{ position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', borderWidth: '0' }}>Open main menu</span>
//               <svg style={{ height: '1.5rem', width: '1.5rem' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {isMenuOpen && (
//         <div style={{ '@media (min-width: 768px)': { display: 'none' } }}>
//           <div style={mobileMenuStyle}>
//             <Link to="/" style={mobileNavLinkStyle}>Home</Link>
//             <Link to="/menu" style={mobileNavLinkStyle}>Menu</Link>
//             <Link to="/reservation" style={mobileNavLinkStyle}>Reservations</Link>
//             <Link to="/about" style={mobileNavLinkStyle}>About</Link>
//             <Link to="/contact" style={mobileNavLinkStyle}>Contact</Link>
//             <Link to="/login" style={mobileNavLinkStyle}>Login</Link>
//             <Link to="/dashboard" style={{...mobileNavLinkStyle, backgroundColor: '#2563eb'}}>Staff Portal</Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;





import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navbarStyle = {
    background: '#1f2937',
    color: 'white',
  };

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 1rem',
  };

  const flexBetweenStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '64px',
  };

  const logoStyle = {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: 'white',
  };

  const desktopNavStyle = {
    marginLeft: '2.5rem',
    display: 'none',
    '@media (min-width: 768px)': {
      display: 'block',
    }
  };

  const navLinksContainerStyle = {
    display: 'flex',
    gap: '1rem',
  };

  const navLinkStyle = {
    padding: '0.5rem 0.75rem',
    borderRadius: '0.375rem',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: 'white',
    textDecoration: 'none',
  };

  const navLinkHoverStyle = {
    backgroundColor: '#374151',
  };

  const buttonStyle = {
    marginLeft: '0.5rem',
    padding: '0.5rem 0.75rem',
    borderRadius: '0.375rem',
    backgroundColor: '#2563eb',
    color: 'white',
    fontSize: '0.875rem',
    fontWeight: '500',
    textDecoration: 'none',
    border: 'none',
    cursor: 'pointer',
  };

  const rightNavStyle = {
    display: 'none',
    '@media (min-width: 768px)': {
      display: 'block',
    }
  };

  const rightNavContentStyle = {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '1.5rem',
  };

  const mobileMenuButtonContainerStyle = {
    display: 'flex',
    '@media (min-width: 768px)': {
      display: 'none',
    }
  };

  const mobileMenuButtonStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.5rem',
    borderRadius: '0.375rem',
    color: '#9ca3af',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
  };

  const srOnlyStyle = {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: '0',
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    borderWidth: '0',
  };

  const mobileMenuStyle = {
    padding: '0.5rem',
    '@media (min-width: 768px)': {
      display: 'none',
    }
  };

  const mobileNavLinkStyle = {
    display: 'block',
    padding: '0.5rem 0.75rem',
    borderRadius: '0.375rem',
    fontSize: '1rem',
    fontWeight: '500',
    marginBottom: '0.25rem',
    color: 'white',
    textDecoration: 'none',
  };

  const mobileStaffButtonStyle = {
    ...mobileNavLinkStyle,
    backgroundColor: '#2563eb',
  };

  // Media query styles
  const mediaStyles = {
    '@media (min-width: 768px)': {
      desktopNav: {
        display: 'block',
      },
      rightNav: {
        display: 'block',
      },
      mobileMenuButton: {
        display: 'none',
      },
      mobileMenu: {
        display: 'none',
      }
    }
  };

  // Apply media query styles
  if (window.innerWidth >= 768) {
    desktopNavStyle.display = 'block';
    rightNavStyle.display = 'block';
    mobileMenuButtonContainerStyle.display = 'none';
  }

  return (
    <nav style={navbarStyle}>
      <div style={containerStyle}>
        <div style={flexBetweenStyle}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div>
              <Link to="/" style={logoStyle}>RMS</Link>
            </div>
            <div style={desktopNavStyle}>
              <div style={navLinksContainerStyle}>
                <Link to="/" style={navLinkStyle}>Home</Link>
                <Link to="/menu" style={navLinkStyle}>Menu</Link>
                <Link to="/reservation" style={navLinkStyle}>Reservations</Link>
                <Link to="/about" style={navLinkStyle}>About</Link>
                <Link to="/contact" style={navLinkStyle}>Contact</Link>
              </div>
            </div>
          </div>
          <div style={rightNavStyle}>
            <div style={rightNavContentStyle}>
              <Link to="/login" style={navLinkStyle}>Login</Link>
              <Link to="/dashboard" style={buttonStyle}>Staff Portal</Link>
            </div>
          </div>
          <div style={mobileMenuButtonContainerStyle}>
            <button
              onClick={toggleMenu}
              style={mobileMenuButtonStyle}
              aria-expanded="false"
            >
              <span style={srOnlyStyle}>Open main menu</span>
              <svg style={{ height: '1.5rem', width: '1.5rem' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div style={{ display: window.innerWidth >= 768 ? 'none' : 'block' }}>
          <div style={mobileMenuStyle}>
            <Link to="/" style={mobileNavLinkStyle}>Home</Link>
            <Link to="/menu" style={mobileNavLinkStyle}>Menu</Link>
            <Link to="/reservation" style={mobileNavLinkStyle}>Reservations</Link>
            <Link to="/about" style={mobileNavLinkStyle}>About</Link>
            <Link to="/contact" style={mobileNavLinkStyle}>Contact</Link>
            <Link to="/login" style={mobileNavLinkStyle}>Login</Link>
            <Link to="/dashboard" style={{...mobileNavLinkStyle, backgroundColor: '#2563eb'}}>Staff Portal</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;