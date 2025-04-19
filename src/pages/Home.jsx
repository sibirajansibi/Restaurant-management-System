
// import React from 'react';
// import Button from '../components/Button';

// const HomePage = () => {
//   const containerStyle = {
//     minHeight: '100vh',
//     position: 'relative',
//     overflow: 'hidden',
//   };

//   const backgroundStyle = {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     background: 'linear-gradient(135deg, #a5f3d0 0%, #89cff0 50%, #ffb6c1 100%)',
//     backgroundSize: '400% 400%',
//     animation: 'gradient 15s ease infinite',
//     zIndex: -1,
//   };

//   const contentStyle = {
//     maxWidth: '1200px',
//     margin: '0 auto',
//     padding: '80px 20px',
//     position: 'relative',
//     zIndex: 1,
//   };

//   const heroSectionStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     textAlign: 'center',
//     marginBottom: '80px',
//   };

//   const headingStyle = {
//     fontSize: '3.5rem',
//     fontWeight: '800',
//     marginBottom: '20px',
//     color: '#333',
//     textShadow: '2px 2px 4px rgba(255, 255, 255, 0.5)',
//   };

//   const subheadingStyle = {
//     fontSize: '1.5rem',
//     fontWeight: '500',
//     marginBottom: '40px',
//     color: '#555',
//     maxWidth: '700px',
//     lineHeight: '1.6',
//   };

//   const buttonContainerStyle = {
//     display: 'flex',
//     gap: '20px',
//     marginTop: '20px',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//   };

//   const featuresSectionStyle = {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//     gap: '30px',
//     margin: '80px 0',
//   };

//   const featureCardStyle = {
//     padding: '40px 30px',
//     borderRadius: '20px',
//     background: 'rgba(255, 255, 255, 0.8)',
//     backdropFilter: 'blur(10px)',
//     boxShadow: '10px 10px 30px rgba(0, 0, 0, 0.05), -10px -10px 30px rgba(255, 255, 255, 0.8)',
//     textAlign: 'center',
//     transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//   };

//   const featureCardHoverStyle = {
//     transform: 'translateY(-10px)',
//     boxShadow: '15px 15px 35px rgba(0, 0, 0, 0.08), -15px -15px 35px rgba(255, 255, 255, 0.9)',
//   };

//   const [hoveredFeature, setHoveredFeature] = React.useState(null);

//   const featureIconStyle = {
//     fontSize: '3rem',
//     marginBottom: '20px',
//     display: 'inline-block',
//     padding: '20px',
//     borderRadius: '50%',
//     background: 'rgba(255, 255, 255, 0.7)',
//     boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.05), -5px -5px 15px rgba(255, 255, 255, 0.8)',
//   };

//   const featureTitleStyle = {
//     fontSize: '1.5rem',
//     fontWeight: '700',
//     marginBottom: '15px',
//     color: '#333',
//   };

//   const featureDescStyle = {
//     fontSize: '1rem',
//     color: '#666',
//     lineHeight: '1.6',
//   };

//   const testimonialSectionStyle = {
//     margin: '80px 0',
//     textAlign: 'center',
//   };

//   const sectionTitleStyle = {
//     fontSize: '2.5rem',
//     fontWeight: '700',
//     marginBottom: '50px',
//     color: '#333',
//     position: 'relative',
//     display: 'inline-block',
//   };

//   const testimonialContainerStyle = {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//     gap: '30px',
//     margin: '40px 0',
//   };

//   const testimonialCardStyle = {
//     padding: '30px',
//     borderRadius: '20px',
//     background: 'rgba(255, 255, 255, 0.8)',
//     backdropFilter: 'blur(10px)',
//     boxShadow: '8px 8px 20px rgba(0, 0, 0, 0.05), -8px -8px 20px rgba(255, 255, 255, 0.8)',
//     textAlign: 'left',
//     position: 'relative',
//   };

//   const quoteStyle = {
//     fontSize: '4rem',
//     position: 'absolute',
//     top: '20px',
//     right: '30px',
//     color: 'rgba(137, 207, 240, 0.2)',
//     fontFamily: 'Georgia, serif',
//   };

//   const testimonialTextStyle = {
//     fontSize: '1rem',
//     color: '#555',
//     lineHeight: '1.7',
//     marginBottom: '20px',
//     position: 'relative',
//     zIndex: '1',
//   };

//   const testimonialAuthorStyle = {
//     display: 'flex',
//     alignItems: 'center',
//   };

//   const authorAvatarStyle = {
//     width: '50px',
//     height: '50px',
//     borderRadius: '50%',
//     marginRight: '15px',
//     objectFit: 'cover',
//     boxShadow: '3px 3px 8px rgba(0, 0, 0, 0.1)',
//   };

//   const authorInfoStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//   };

//   const authorNameStyle = {
//     fontSize: '1.1rem',
//     fontWeight: '600',
//     color: '#333',
//   };

//   const authorRoleStyle = {
//     fontSize: '0.9rem',
//     color: '#666',
//   };

//   const ctaSectionStyle = {
//     padding: '60px 40px',
//     borderRadius: '20px',
//     background: 'rgba(255, 255, 255, 0.8)',
//     backdropFilter: 'blur(10px)',
//     boxShadow: '10px 10px 30px rgba(0, 0, 0, 0.05), -10px -10px 30px rgba(255, 255, 255, 0.8)',
//     textAlign: 'center',
//     margin: '80px 0',
//   };

//   const ctaTitleStyle = {
//     fontSize: '2rem',
//     fontWeight: '700',
//     marginBottom: '20px',
//     color: '#333',
//   };

//   const ctaDescStyle = {
//     fontSize: '1.1rem',
//     color: '#555',
//     marginBottom: '30px',
//     maxWidth: '700px',
//     margin: '0 auto 30px',
//     lineHeight: '1.6',
//   };

//   const features = [
//     {
//       icon: '🍽️',
//       title: 'Exquisite Dining',
//       description: 'Experience culinary excellence with our carefully crafted menu featuring both traditional favorites and innovative creations.'
//     },
//     {
//       icon: '🥂',
//       title: 'Special Events',
//       description: 'From intimate gatherings to grand celebrations, our venue provides the perfect setting for your special occasions.'
//     },
//     {
//       icon: '🚚',
//       title: 'Home Delivery',
//       description: 'Enjoy our delicious meals in the comfort of your home with our prompt and reliable delivery service.'
//     }
//   ];

//   const testimonials = [
//     {
//       text: "The food was absolutely amazing! Every dish was prepared with such attention to detail. The ambiance was perfect for our anniversary dinner.",
//       author: "Emily Johnson",
//       role: "Food Enthusiast",
//       avatar: "https://randomuser.me/api/portraits/women/12.jpg"
//     },
//     {
//       text: "I've hosted several business dinners here, and each time the service has been impeccable. The staff is attentive without being intrusive.",
//       author: "Michael Chen",
//       role: "Business Executive",
//       avatar: "https://randomuser.me/api/portraits/men/32.jpg"
//     },
//     {
//       text: "Their vegetarian options are creative and flavorful. As someone with dietary restrictions, I appreciate the thought put into these dishes.",
//       author: "Sophia Rodriguez",
//       role: "Nutrition Coach",
//       avatar: "https://randomuser.me/api/portraits/women/45.jpg"
//     }
//   ];

//   return (
//     <div style={containerStyle}>
//       <div style={backgroundStyle}></div>
      
//       <div style={contentStyle}>
//         <section style={heroSectionStyle}>
//           <h1 style={headingStyle}>Culinary Excellence Awaits</h1>
//           <p style={subheadingStyle}>
//             Experience the perfect blend of traditional recipes and modern culinary innovation in an atmosphere designed for memorable dining.
//           </p>
//           <div style={buttonContainerStyle}>
//             <Button variant="primary" size="large" onClick={() => window.location.href = '/menu'}>
//               View Our Menu
//             </Button>
//             <Button variant="secondary" size="large" onClick={() => window.location.href = '/reservation'}>
//               Reserve a Table
//             </Button>
//           </div>
//         </section>

//         <section style={featuresSectionStyle}>
//           {features.map((feature, index) => (
//             <div 
//               key={index} 
//               style={{
//                 ...featureCardStyle, 
//                 ...(hoveredFeature === index ? featureCardHoverStyle : {})
//               }}
//               onMouseEnter={() => setHoveredFeature(index)}
//               onMouseLeave={() => setHoveredFeature(null)}
//             >
//               <div style={featureIconStyle}>{feature.icon}</div>
//               <h3 style={featureTitleStyle}>{feature.title}</h3>
//               <p style={featureDescStyle}>{feature.description}</p>
//             </div>
//           ))}
//         </section>

//         <section style={testimonialSectionStyle}>
//           <h2 style={sectionTitleStyle}>
//             What Our Guests Say
//             <div style={{
//               position: 'absolute',
//               bottom: '-10px',
//               left: '50%',
//               transform: 'translateX(-50%)',
//               width: '80px',
//               height: '4px',
//               background: 'linear-gradient(90deg, #a5f3d0, #89cff0, #ffb6c1)',
//               borderRadius: '10px'
//             }}></div>
//           </h2>
          
//           <div style={testimonialContainerStyle}>
//             {testimonials.map((testimonial, index) => (
//               <div key={index} style={testimonialCardStyle}>
//                 <div style={quoteStyle}>"</div>
//                 <p style={testimonialTextStyle}>{testimonial.text}</p>
//                 <div style={testimonialAuthorStyle}>
//                   <img src={testimonial.avatar} alt={testimonial.author} style={authorAvatarStyle} />
//                   <div style={authorInfoStyle}>
//                     <span style={authorNameStyle}>{testimonial.author}</span>
//                     <span style={authorRoleStyle}>{testimonial.role}</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         <section style={ctaSectionStyle}>
//           <h2 style={ctaTitleStyle}>Ready for an Unforgettable Dining Experience?</h2>
//           <p style={ctaDescStyle}>
//             Join us for lunch or dinner and discover why our guests keep coming back. 
//             Reserve your table now to avoid disappointment.
//           </p>
//           <Button variant="primary" size="large" onClick={() => window.location.href = '/reservation'}>
//             Make a Reservation
//           </Button>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default HomePage;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [specialDishes, setSpecialDishes] = useState([
    {
      id: 1,
      name: "Signature Biryani",
      category: "Main Course",
      rating: 4.8,
      prepTime: "25 min",
      price: "₹350",
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 2,
      name: "Butter Chicken",
      category: "Main Course",
      rating: 4.7,
      prepTime: "20 min",
      price: "₹320",
      image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 3,
      name: "Special Thali",
      category: "Main Course",
      rating: 4.9,
      prepTime: "30 min",
      price: "₹450",
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 4,
      name: "Masala Dosa",
      category: "Breakfast",
      rating: 4.6,
      prepTime: "15 min",
      price: "₹180",
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [foodCategories] = useState([
    { name: "Starters", image: 'https://images.unsplash.com/photo-1541014741259-de529411b96a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
    { name: "Main Course", image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
    { name: "Breads", image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
    { name: "Rice", image: 'https://images.unsplash.com/photo-1541014741259-de529411b96a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
    { name: "Desserts", image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
    { name: "Beverages", image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' }
  ]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredDishes = specialDishes.filter(dish =>
    dish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dish.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-container" style={styles.homeContainer}>
      {/* Hero Section */}
      <div className="hero-section" style={styles.heroSection}>
        <div className="hero-content" style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Food Engine Restaurant</h1>
          <p style={styles.heroSubtitle}>Authentic flavors. Memorable experiences.</p>
          <div className="search-bar" style={styles.searchBar}>
            <input
              type="text"
              placeholder="Search our menu..."
              style={styles.searchInput}
              value={searchTerm}
              onChange={handleSearch}
            />
            <button style={styles.searchButton}>
              Search
            </button>
          </div>
          
          {/* Navigation Buttons */}
          <div style={styles.navButtons}>
            <Link to="/menu" style={styles.navLink}>
              <button style={styles.navButton}>View Our Menu</button>
            </Link>
            <Link to="/reservation" style={styles.navLink}>
              <button style={styles.navButton}>Reserve A Table</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Categories Section - Fixed spacing */}
      <div className="categories-section" style={styles.categoriesSection}>
        <h2 style={styles.sectionTitle}>Menu Categories</h2>
        <div className="categories-container" style={styles.categoriesContainer}>
          {foodCategories.map((category, index) => (
            <div key={index} className="category-card" style={styles.categoryCard}>
              <div className="category-image-container" style={styles.categoryImageContainer}>
                <img src={category.image} alt={category.name} style={styles.categoryImage} />
              </div>
              <p style={styles.categoryName}>{category.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Special Dishes Section - Updated from "Popular Restaurants" */}
      <div className="special-dishes-section" style={styles.specialDishesSection}>
        <h2 style={styles.sectionTitle}>Our Special Dishes</h2>
        <div className="dishes-container" style={styles.dishesContainer}>
          {filteredDishes.map(dish => (
            <div key={dish.id} className="dish-card" style={styles.dishCard}>
              <div className="dish-image-container" style={styles.dishImageContainer}>
                <img src={dish.image} alt={dish.name} style={styles.dishImage} />
                <div className="prep-time" style={styles.prepTime}>{dish.prepTime}</div>
              </div>
              <div className="dish-info" style={styles.dishInfo}>
                <div className="dish-header" style={styles.dishHeader}>
                  <h3 style={styles.dishName}>{dish.name}</h3>
                  <div className="rating" style={styles.rating}>{dish.rating} ★</div>
                </div>
                <p style={styles.category}>{dish.category}</p>
                <p style={styles.price}>{dish.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chef's Special Section - New Addition */}
      <div className="chefs-special" style={styles.chefsSpecial}>
        <div style={styles.chefsSpecialContent}>
          <div style={styles.chefsSpecialInfo}>
            <h2 style={styles.chefsSpecialTitle}>Chef's Special of the Month</h2>
            <h3 style={styles.chefsSpecialDish}>Mandhi Biriyani</h3>
            <p style={styles.chefsSpecialDesc}>
              Experience our royal feast featuring 14 delicacies, hand-picked by our master chef. A perfect blend of 
              flavors from across India created with authentic spices and traditional cooking methods.
            </p>
            <Link to="/menu" style={styles.navLink}>
              <button style={styles.chefsSpecialButton}>Explore Menu</button>
            </Link>
          </div>
          <div style={styles.chefsSpecialImageContainer}>
            <img 
              src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Chef's Special Dish" 
              style={styles.chefsSpecialImage} 
            />
          </div>
        </div>
      </div>

      {/* Reservation Banner */}
      <div className="reservation-banner" style={styles.reservationBanner}>
        <div style={styles.reservationContent}>
          <h2 style={styles.reservationTitle}>Reserve Your Table</h2>
          <p style={styles.reservationText}>
            Secure your spot for an unforgettable dining experience. We recommend making reservations at least 24 hours in advance.
          </p>
          <Link to="/reservation" style={styles.navLink}>
            <button style={styles.reservationButton}>Make Reservation</button>
          </Link>
        </div>
      </div>

      {/* Restaurant Ambiance Section - New Addition */}
      <div className="ambiance-section" style={styles.ambianceSection}>
        <h2 style={styles.sectionTitle}>Our Restaurant</h2>
        <div style={styles.ambianceGrid}>
          <div style={styles.ambianceImageContainer}>
            <img 
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Restaurant Interior" 
              style={styles.ambianceImage} 
            />
          </div>
          <div style={styles.ambianceImageContainer}>
            <img 
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Restaurant Food" 
              style={styles.ambianceImage} 
            />
          </div>
          <div style={styles.ambianceImageContainer}>
            <img 
              src="https://images.unsplash.com/photo-1554679665-f5537f187268?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Restaurant Patio" 
              style={styles.ambianceImage} 
            />
          </div>
          <div style={styles.ambianceImageContainer}>
            <img 
              src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Restaurant Table Setting" 
              style={styles.ambianceImage} 
            />
          </div>
        </div>
      </div>

      {/* Customer Review Section - New Addition */}
      <div className="reviews-section" style={styles.reviewsSection}>
        <h2 style={styles.sectionTitle}>What Our Customers Say</h2>
        <div style={styles.reviewsContainer}>
          <div style={styles.reviewCard}>
            <div style={styles.reviewRating}>★★★★★</div>
            <p style={styles.reviewText}>"The best authentic cuisine I've had in years! The flavors were extraordinary and the service was impeccable."</p>
            <p style={styles.reviewAuthor}>Ranjit</p>
          </div>
          <div style={styles.reviewCard}>
            <div style={styles.reviewRating}>★★★★★</div>
            <p style={styles.reviewText}>"Adengappa Restaurant's ambiance and food quality are unmatched. Their Special Thali is a must-try!"</p>
            <p style={styles.reviewAuthor}>sibi</p>
          </div>
          <div style={styles.reviewCard}>
            <div style={styles.reviewRating}>★★★★★</div>
            <p style={styles.reviewText}>"Wonderful experience every time. The chef's specials never disappoint and the staff makes you feel at home."</p>
            <p style={styles.reviewAuthor}>jack</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Internal CSS with React
const styles = {
  homeContainer: {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    maxWidth: '100%',
    margin: '0 auto',
    padding: '0',
    backgroundColor: '#f8f8f8'
  },
  heroSection: {
    backgroundImage: 'linear-gradient(135deg, #FF6B6B 10%, #FF8E53 100%)',
    color: 'white',
    padding: '80px 20px',
    textAlign: 'center',
    borderRadius: '0 0 20px 20px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
  },
  heroContent: {
    maxWidth: '700px',
    margin: '0 auto'
  },
  heroTitle: {
    fontSize: '3.5rem',
    marginBottom: '10px',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
  },
  heroSubtitle: {
    fontSize: '1.2rem',
    marginBottom: '30px',
    fontWeight: '300'
  },
  searchBar: {
    display: 'flex',
    maxWidth: '600px',
    margin: '0 auto',
    borderRadius: '50px',
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
  },
  searchInput: {
    flex: '1',
    padding: '15px 20px',
    fontSize: '1rem',
    border: 'none',
    outline: 'none'
  },
  searchButton: {
    padding: '15px 30px',
    backgroundColor: '#fc8019',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '1rem',
    transition: 'background-color 0.3s'
  },
  navButtons: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '30px',
    gap: '20px'
  },
  navLink: {
    textDecoration: 'none'
  },
  navButton: {
    padding: '14px 28px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: 'white',
    border: '2px solid white',
    borderRadius: '50px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '1rem',
    transition: 'all 0.3s',
    backdropFilter: 'blur(5px)'
  },
  categoriesSection: {
    padding: '40px 20px',
    backgroundColor: 'white',
    margin: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
  },
  sectionTitle: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    margin: '0 0 20px 0',
    borderLeft: '4px solid #fc8019',
    paddingLeft: '10px'
  },
  categoriesContainer: {
    display: 'flex',
    overflowX: 'auto',
    padding: '10px 0',
    gap: '20px'
  },
  categoryCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    transition: 'transform 0.3s',
    cursor: 'pointer',
    padding: '10px'
  },
  categoryImageContainer: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s'
  },
  categoryImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  categoryName: {
    marginTop: '10px',
    fontWeight: 'bold',
    fontSize: '1rem'
  },
  specialDishesSection: {
    padding: '40px 20px',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    margin: '20px'
  },
  dishesContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '30px',
    padding: '10px 0'
  },
  dishCard: {
    backgroundColor: 'white',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer'
  },
  dishImageContainer: {
    position: 'relative',
    height: '200px',
    overflow: 'hidden'
  },
  dishImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s'
  },
  prepTime: {
    position: 'absolute',
    bottom: '10px',
    right: '10px',
    backgroundColor: 'rgba(255,255,255,0.9)',
    padding: '5px 10px',
    borderRadius: '4px',
    fontSize: '0.8rem',
    fontWeight: 'bold'
  },
  dishInfo: {
    padding: '15px'
  },
  dishHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '5px'
  },
  dishName: {
    margin: '0',
    fontSize: '1.2rem',
    fontWeight: 'bold'
  },
  rating: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '3px 8px',
    borderRadius: '4px',
    fontSize: '0.9rem',
    fontWeight: 'bold'
  },
  category: {
    color: '#666',
    margin: '5px 0',
    fontSize: '0.9rem'
  },
  price: {
    color: '#666',
    margin: '5px 0',
    fontSize: '0.9rem',
    fontWeight: 'bold'
  },
  chefsSpecial: {
    margin: '20px',
    backgroundColor: '#fff8f0',
    borderRadius: '10px',
    padding: '30px 20px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
  },
  chefsSpecialContent: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: '30px'
  },
  chefsSpecialInfo: {
    flex: '1'
  },
  chefsSpecialTitle: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
    borderLeft: '4px solid #fc8019',
    paddingLeft: '10px'
  },
  chefsSpecialDish: {
    fontSize: '2rem',
    color: '#fc8019',
    margin: '10px 0 20px 0'
  },
  chefsSpecialDesc: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: '#555',
    marginBottom: '25px'
  },
  chefsSpecialButton: {
    padding: '12px 25px',
    backgroundColor: '#fc8019',
    color: 'white',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '1rem',
    transition: 'all 0.3s'
  },
  chefsSpecialImageContainer: {
    flex: '1',
    maxWidth: '400px',
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
  },
  chefsSpecialImage: {
    width: '100%',
    height: 'auto',
    display: 'block'
  },
  reservationBanner: {
    backgroundImage: 'linear-gradient(135deg, #6e7ff3 10%, #8e5aff 100%)',
    color: 'white',
    padding: '60px 20px',
    margin: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    textAlign: 'center'
  },
  reservationContent: {
    maxWidth: '700px', 
    margin: '0 auto'
  },
  reservationTitle: {
    fontSize: '2.5rem',
    marginBottom: '15px',
    fontWeight: 'bold'
  },
  reservationText: {
    fontSize: '1.1rem',
    marginBottom: '30px',
    lineHeight: '1.6'
  },
  reservationButton: {
    padding: '15px 30px',
    backgroundColor: 'white',
    color: '#8e5aff',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '1rem',
    transition: 'all 0.3s',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
  },
  ambianceSection: {
    padding: '40px 20px',
    backgroundColor: 'white',
    margin: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
  },
  ambianceGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '20px'
  },
  ambianceImageContainer: {
    borderRadius: '10px',
    overflow: 'hidden',
    height: '200px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
  },
  ambianceImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease'
  },
  reviewsSection: {
    padding: '40px 20px',
    backgroundColor: 'white',
    margin: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
  },
  reviewsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'space-between'
  },
  reviewCard: {
    flex: '1 1 300px',
    padding: '25px',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 3px 10px rgba(0,0,0,0.05)',
    transition: 'transform 0.3s ease'
  },
  reviewRating: {
    color: '#fc8019',
    fontSize: '1.2rem',
    marginBottom: '10px'
  },
  reviewText: {
    fontSize: '1rem',
    lineHeight: '1.6',
    fontStyle: 'italic',
    color: '#555',
    marginBottom: '15px'
  },
  reviewAuthor: {
    fontSize: '0.9rem',
    fontWeight: 'bold',
    textAlign: 'right',
    color: '#333'
  }
};

export default Home;