import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import ReservationPage from './pages/ReservationPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';
import Cart from './components/Cart';


function App() {
  const appStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    background: 'linear-gradient(-45deg, #e0f5e9, #d4f0f7, #f9e0e8, #e6e0f9)',
    backgroundSize: '400% 400%',
    animation: 'gradient 15s ease infinite',
  };

  return (
    <Router>
      <div style={appStyle}>
        <style>
          {`
            @keyframes gradient {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
            body {
              margin: 0;
              padding: 0;
              font-family: Arial, sans-serif;
            }
            .neumorphic {
              border-radius: 15px;
              background: linear-gradient(145deg, #f0f0f0, #ffffff);
              box-shadow: 6px 6px 12px #d9d9d9, -6px -6px 12px #ffffff;
            }
            .floating-icon {
              animation: floating 3s ease-in-out infinite;
            }
            @keyframes floating {
              0% { transform: translateY(0px); }
              50% { transform: translateY(-10px); }
              100% { transform: translateY(0px); }
            }
            .glow {
              box-shadow: 0 0 15px rgba(155, 207, 255, 0.5);
            }
          `}
        </style>
        <Navbar />
        <main style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
             <Route path="/reservation" element={<ReservationPage />} /> 
             <Route path="/about" element={<AboutUsPage/>}/>
             <Route path='/contact' element={<ContactPage/>}/>
             <Route path='/cart' element={<Cart/>}/>
            {/* Add more routes as you create them */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;