import React, { useState } from 'react';
import '../styles/MenuPage.css';

const menuItems = [
  {
    id: 1,
    name: 'Awadhi Chicken Dum Biryani',
    desc: 'Slow-cooked in earthen clay pots with aromatic spices, saffron, and tender chicken pieces.',
    price: 349,
    diet: 'non-veg',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Paneer Tikka Butter Masala',
    desc: 'Charcoal-smoked paneer cubes simmered in a rich tomato-cashew gravy with a hint of fenugreek.',
    price: 299,
    diet: 'veg',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Mutton Galouti Kebab',
    desc: 'Melt-in-mouth minced mutton kebabs spiced with a secret blend of 32 spices. Served with ulte tawa ka paratha.',
    price: 429,
    diet: 'non-veg',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'Dal Makhani Signature',
    desc: 'Black lentils slow-cooked for 18 hours over charcoal, finished with white butter and fresh cream.',
    price: 249,
    diet: 'veg',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 5,
    name: 'Tandoori Garlic Naan',
    desc: 'Soft and flaky flatbread baked in a clay oven, generously brushed with garlic butter.',
    price: 69,
    diet: 'veg',
    image: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 6,
    name: 'Kashmiri Rogan Josh',
    desc: 'Succulent lamb chunks braised in a gravy flavored with fennel, ginger, and Kashmiri red chilies.',
    price: 459,
    diet: 'non-veg',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 7,
    name: 'Malai Kofta',
    desc: 'Cottage cheese and potato dumplings in a velvety cashew and onion gravy.',
    price: 289,
    diet: 'veg',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc0?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 8,
    name: 'Hyderabadi Double Ka Meetha',
    desc: 'Fried bread slices soaked in saffron-infused milk, topped with almonds and silver leaf.',
    price: 149,
    diet: 'veg',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=800&auto=format&fit=crop'
  }
];

const MenuPage = ({ onAddToCart }) => {
  const [filter, setFilter] = useState('all');

  const filteredItems = menuItems.filter(item => {
    if (filter === 'all') return true;
    return item.diet === filter;
  });

  return (
    <div className="menu-page-container">
      <div className="menu-content">
        <header className="menu-header">
          <h1 className="menu-title">Curated Secret Menu</h1>
          <p className="menu-subtitle">Explore our weekend tasting flights and signature dum handi dishes.</p>
        </header>

        <div className="filter-bar">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Items
          </button>
          <button 
            className={`filter-btn ${filter === 'veg' ? 'active' : ''}`}
            onClick={() => setFilter('veg')}
          >
            Pure Veg
          </button>
          <button 
            className={`filter-btn ${filter === 'non-veg' ? 'active' : ''}`}
            onClick={() => setFilter('non-veg')}
          >
            Non-Veg
          </button>
        </div>

        <div className="menu-grid">
          {filteredItems.map(item => (
            <div className="food-card" key={item.id}>
              <div className="food-image-wrapper">
                <img src={item.image} alt={item.name} className="food-image" loading="lazy" />
                {item.diet === 'veg' ? (
                  <div className="diet-tag tag-veg">
                    <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>eco</span>
                    Veg
                  </div>
                ) : (
                  <div className="diet-tag tag-nonveg">
                    <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>kebab_dining</span>
                    Non-Veg
                  </div>
                )}
              </div>
              
              <div className="food-details">
                <h3 className="food-name">{item.name}</h3>
                <p className="food-desc">{item.desc}</p>
                <div className="food-footer">
                  <span className="food-price">₹{item.price}</span>
                  <button className="add-btn" onClick={() => onAddToCart(item)}>
                    + Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
