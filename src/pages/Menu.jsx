import React, { useState, useEffect } from 'react';
import MenuItem from '../components/MenuItem';
import Button from '../components/Button';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  // Simulated menu data - in a real app, this would come from an API
  useEffect(() => {
    // Simulate API fetch delay
    const timer = setTimeout(() => {
      setMenuItems([
        {
          id: 1,
          name: 'Classic Margherita Pizza',
          description: 'Fresh mozzarella, tomato sauce, basil, and extra virgin olive oil on our house-made crust.',
          price: 14.99,
          image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
          category: 'mains',
          isVegetarian: true,
          spicyLevel: 0
        },
        {
          id: 2,
          name: 'Truffle Mushroom Risotto',
          description: 'Creamy arborio rice with wild mushrooms, finished with truffle oil and parmesan.',
          price: 18.99,
          image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
          category: 'mains',
          isVegetarian: true,
          spicyLevel: 0
        },
        {
          id: 3,
          name: 'Spicy Thai Basil Chicken',
          description: 'Stir-fried chicken with Thai basil, chili, and garlic, served with jasmine rice.',
          price: 16.99,
          image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
          category: 'mains',
          isVegetarian: false,
          spicyLevel: 3
        },
        {
          id: 4,
          name: 'Mediterranean Mezze Platter',
          description: 'Hummus, baba ganoush, tzatziki, olives, and warm pita bread.',
          price: 12.99,
          image: 'https://images.unsplash.com/photo-1541528772347-5f07ce6d9b37?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
          category: 'starters',
          isVegetarian: true,
          spicyLevel: 0
        },
        {
          id: 5,
          name: 'Crispy Calamari',
          description: 'Lightly battered and fried calamari rings served with lemon aioli.',
          price: 13.99,
          image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
          category: 'starters',
          isVegetarian: false,
          spicyLevel: 0
        },
        {
          id: 6,
          name: 'Classic Tiramisu',
          description: 'Layers of coffee-soaked ladyfingers and mascarpone cream, dusted with cocoa.',
          price: 8.99,
          image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
          category: 'desserts',
          isVegetarian: true,
          spicyLevel: 0
        },
        {
          id: 7,
          name: 'Chocolate Lava Cake',
          description: 'Warm chocolate cake with a molten center, served with vanilla ice cream.',
          price: 9.99,
          image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
          category: 'desserts',
          isVegetarian: true,
          spicyLevel: 0
        },
        {
          id: 8,
          name: 'Fresh Berry Smoothie',
          description: 'Blend of seasonal berries, yogurt, and honey.',
          price: 6.99,
          image: 'https://images.unsplash.com/photo-1553530666-ba11a90a0868?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
          category: 'drinks',
          isVegetarian: true,
          spicyLevel: 0
        },
        {
          id: 9,
          name: 'Artisanal Cheese Board',
          description: 'Selection of fine cheeses, seasonal fruits, nuts, and artisanal crackers.',
          price: 16.99,
          image: 'https://images.unsplash.com/photo-1536411396596-afed9fa3c1b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
          category: 'starters',
          isVegetarian: true,
          spicyLevel: 0
        },
        {
          id: 10,
          name: 'Grilled Salmon',
          description: 'Fresh Atlantic salmon with lemon herb butter, served with seasonal vegetables.',
          price: 22.99,
          image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
          category: 'mains',
          isVegetarian: false,
          spicyLevel: 0
        },
        {
          id: 11,
          name: 'Spicy Buffalo Wings',
          description: 'Crispy chicken wings tossed in our signature buffalo sauce, served with blue cheese dip.',
          price: 14.99,
          image: 'https://images.unsplash.com/photo-1608039755401-742074f0548d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
          category: 'starters',
          isVegetarian: false,
          spicyLevel: 2
        },
        {
          id: 12,
          name: 'Classic Mojito',
          description: 'Refreshing blend of white rum, mint, lime, sugar, and soda water.',
          price: 9.99,
          image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
          category: 'drinks',
          isVegetarian: true,
          spicyLevel: 0
        }
      ]);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

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

  const categoriesStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '15px',
    marginBottom: '40px',
  };

  const categoryButtonStyle = {
    padding: '10px 20px',
    borderRadius: '30px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    background: 'rgba(255, 255, 255, 0.7)',
    color: '#555',
    border: 'none',
    boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.05), -4px -4px 10px rgba(255, 255, 255, 0.8)',
  };

  const activeCategoryStyle = {
    background: 'linear-gradient(135deg, #a5f3d0 0%, #89cff0 50%, #ffb6c1 100%)',
    color: '#333',
    boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.1), -4px -4px 10px rgba(255, 255, 255, 0.8)',
  };

  const menuGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '30px',
    marginTop: '30px',
  };

  const loadingStyle = {
    textAlign: 'center',
    padding: '50px 0',
    fontSize: '1.2rem',
    color: '#555',
  };

  const noItemsStyle = {
    textAlign: 'center',
    padding: '50px 0',
    fontSize: '1.2rem',
    color: '#555',
  };

  // Filter menu items based on active category
  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  // Get unique categories from menu items
  const categories = ['all', ...new Set(menuItems.map(item => item.category))];

  const handleAddToCart = (item) => {
    // In a real app, this would dispatch to a cart state or context
    console.log('Added to cart:', item);
    alert(`Added ${item.quantity} ${item.name}(s) to cart!`);
  };

  return (
    <div style={containerStyle}>
      <div style={backgroundStyle}></div>
      
      <div style={contentStyle}>
        <header style={headerStyle}>
          <h1 style={titleStyle}>Our Menu</h1>
          <p style={subtitleStyle}>
            Explore our carefully crafted dishes made with the freshest ingredients and culinary expertise.
          </p>
        </header>

        <div style={categoriesStyle}>
          {categories.map(category => (
            <button
              key={category}
              style={{
                ...categoryButtonStyle,
                ...(activeCategory === category ? activeCategoryStyle : {})
              }}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {isLoading ? (
          <div style={loadingStyle}>Loading menu items...</div>
        ) : filteredItems.length === 0 ? (
          <div style={noItemsStyle}>No items found in this category.</div>
        ) : (
          <div style={menuGridStyle}>
            {filteredItems.map(item => (
              <MenuItem
                key={item.id}
                id={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
                category={item.category}
                isVegetarian={item.isVegetarian}
                spicyLevel={item.spicyLevel}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
