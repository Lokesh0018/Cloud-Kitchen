import React, { useState } from 'react';
import '../styles/MenuPage.css';
import QuickViewModal from './QuickViewModal';

const menuItems = [
  {
    "id": 1,
    "name": "Hyderabadi Chicken Dum Biryani",
    "price": 240,
    "category": "biryani",
    "diet": "non-veg",
    "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuApabijbmbBV6FKlZ6HtUKhWYH5kZdeNx7qZZvps8r-mFtuyqaClzCaeYywGvE_98SusXA7R9uarrHPx6b9GNSdNxRhFJ5k0aG-YLkwTt2LUP15fjOZTnvp5Ti9XMWeA_JvJqvLj0Xr80vHRfiLkpuEa4UrGLS75ijDGqIF8g6ygMDjDvYACgv2bqoVWfUG7m1BIOt3PWt3xj3ixXo4kfCc2OUfwev-ooL_vhuP0h6VHagxqkML7lt4",
    "desc": "Tender bone-in chicken layered with aged fragrant basmati rice, caramelized onions, and saffron milk.",
    "rating": 4.9,
    "ratingCount": "1.2k",
    "tag": "Batch 14 • Fresh Dum",
    "kcal": "680 kcal",
    "prep": "20 mins prep",
    "portion": "Portion 750g"
  },
  {
    "id": 2,
    "name": "Awadhi Mutton Dum Biryani",
    "price": 340,
    "category": "biryani",
    "diet": "non-veg",
    "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuAB1jUmFHy0urA4UIGQ8RyZ18rzNvnrIz1K9o4wnZuAOJGe-p8C70ld-K0T3rWxGI9pJYyJqAeO5oI-alcjyl_IkOxz_dkndt3MXmT73iyS5O4SIwUFtfF-SKRZDFcXj2KOpA9ZVcFRBFWBHOiuYbcogvDevXPxf11ImeUw0zSvy2CI3a3TuaLYJgFQBoAL-PdQfR-qZZqkxeToQARrLBPe_-n7pIGIgnK5ludU3UO2Y1v4QC5fXuiR",
    "desc": "Melt-in-mouth mutton shank pieces with aromatic pot spices, layered delicately with golden saffron rice.",
    "rating": 4.8,
    "ratingCount": 840,
    "tag": "Chef's Signature",
    "kcal": "790 kcal",
    "prep": "25 mins prep",
    "portion": "Portion 800g"
  },
  {
    "id": 3,
    "name": "Jackfruit & Mushroom Dum Biryani",
    "price": 210,
    "category": "biryani",
    "diet": "veg",
    "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuALFEqA89b1L-4ks4n6ff2yNDVdI_BTKs6Tt1XpXbdSbGDBy2uKhORNKlxovTrjLZqE4rKO9ZCYJ3f7PyLvnmDl7DrDEJ1ONMfgtyJwVt5MwzrCzccG8Lzd7iqNQ6n81AlP90NRaeAQVd2SU8gcNo__gGeaySYo8I94WxfQtcQ5v3zenu_z-Z6cexmwSuKiHOn11j67OZJGMN8N1nPwV_gWgP7EOVWu5N1Pd2bxIJkI380vt06q6p8t",
    "desc": "Royal vegetarian alternative with rich curd marinade, baby portobellos, and tender young jackfruit chunks.",
    "rating": 4.7,
    "ratingCount": 420,
    "tag": "100% Plant Power",
    "kcal": "520 kcal",
    "prep": "18 mins prep",
    "portion": "Portion 700g"
  },
  {
    "id": 4,
    "name": "Crispy Chicken Ghee Roast",
    "price": 220,
    "category": "starters",
    "diet": "non-veg",
    "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuALDTDssyuY71O_CWFvjROBFNmgF-_Ao_xn5SKopde2UT0ayk6Wllufl2RLIO1TTBWHMxe3gauNPm6zU-ReRuiXQLdxqFurnfd0FpP20yaqYnL_QIyFIW-80ZI43DPmclyqcB-wEVUh04LCdlDRUHTnYLbYmuoXMzUQREmiGjEPB0_icjHYEpQQVj2KJVFQYnSR7C2Kq0kMVwzjLK1WV5tCgz-cheutBs2rkf6rgDLMpImAO-kptqTi",
    "desc": "Tossed in clarified butter with Byadgi chillies and curry leaves for an intensely savory, spicy crunch.",
    "rating": 4.9,
    "ratingCount": 910,
    "tag": "Mangalore Style",
    "kcal": "460 kcal",
    "prep": "14 mins prep",
    "portion": "Starter • 350g"
  },
  {
    "id": 5,
    "name": "Paneer Tikka Angara",
    "price": 190,
    "category": "starters",
    "diet": "veg",
    "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuD361K68SvORpeneUZUBJM8z6VpMvG5W9MJbTAQtIRdRH--iJWZjJDCbDQ4knA5Yt3LVfJP0wieDDW7kdNJugPv4ADmFcFYGi-NZeNys6smkUrWChIz9RnLFDWjtGxlOg-Tys_UyREIlSF0uFeVZh86qERayTT9ORadPveZHgWdxOBi-gSua-3t3Hv_x28snFV-J_R9ofm86olZi3B262AUIC-wsbgzh0tyYNaB6qMWTEM-TZa56-VT",
    "desc": "Charred cottage cheese cubes marinated in mustard oil & spices, smoked with active coal embers.",
    "rating": 4.8,
    "ratingCount": 630,
    "tag": "Clay Oven Smoked",
    "kcal": "410 kcal",
    "prep": "16 mins prep",
    "portion": "Starter • 6 Pcs"
  },
  {
    "id": 6,
    "name": "Butter Chicken & Garlic Naan Combo",
    "price": 260,
    "category": "breads",
    "diet": "non-veg",
    "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuBga5ct91W7KTj-nLrkrwqsbAmHeWha2JY_3i5swrk0pELXdlrwWnIrowDO_IahXBIdySO4LnVnuLW2z5DO_6yoekZjJrLOjb8z5lcA_zT4dfAsUWp8VmLQqns5q__ghqpxjgauCtn2Ssx_5d1B6k7qBjr26iLdY_m7h59ziFmUaHfo-3OksERM6x6x8J4-58-FBVq-sxSXGE201qAFXUvoqIvtELjnLlXkcfcRPklk-KSUm4QoVmSF",
    "desc": "Velvety tomato gravy with pulled tandoori chicken served with 2 fluffy, freshly baked garlic naans.",
    "rating": 5.0,
    "ratingCount": 125,
    "tag": "Full Meal Box",
    "kcal": "820 kcal",
    "prep": "15 mins prep",
    "portion": "Box Combo • 1 Pax"
  },
  {
    "id": 7,
    "name": "Shahi Tukda with Rabdi",
    "price": 130,
    "category": "desserts",
    "diet": "veg",
    "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuCsMlKjrb0skTzSNeH5zg8z8RvRGCTTx_ZuG3x60CGTpa1zr50c0ZACknX7SA21vFrrS5uMbGWkKA4nNH0aHLj1bAV1ILZ702q9p-dEq6mQ11zO8YWEul_sSRtgjEK6xYGzqZDJBU7QfRxCCgNX6DXx46CaQwLyuTznna2RMBJ8mRzMY0hIxVzoJfILL0TW7_ipKGKGjb-bx-NXvTYfIKmrZnc6kjTFChIqH_iG19eDnp98cr4tGhX-",
    "desc": "Crispy golden fried bread soaked in saffron syrup, topped with thick reduced milk and crushed slivered nuts.",
    "rating": 4.9,
    "ratingCount": 510,
    "tag": "Royal Sweet",
    "kcal": "380 kcal",
    "prep": "Instant",
    "portion": "Dessert • 200g"
  },
  {
    "id": 8,
    "name": "Royal Mango Lassi",
    "price": 90,
    "category": "beverages",
    "diet": "veg",
    "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuCbgjerEZc15dSx2548Bg9fcF-sxFRHBFT2qaAQuqRo0WB1N7LAbeR92XMDPG7TxrRh4bRsjN9Wo38lFe-LyKQeWFgQT4jhhECW0U3vWqppmt9EpnFTwlRB2pxb3i4FUle6E4yZz_LWLcomJShugjqQjuHphkwvuyEd86JdYEAkkLoKRK-gMhX8tzZOdOKosqbGCxw2V8Cc4vBFHVaP-oWEjjmlupcPNcG8H9DETE1AeuIWjqD8dOfq",
    "desc": "Authentic Alphonso pulp churned with thick creamy curd, green cardamom, and toasted pistachio garnish.",
    "rating": 4.8,
    "ratingCount": 800,
    "tag": "Chilled Beverage",
    "kcal": "220 kcal",
    "prep": "Instant",
    "portion": "Beverage • 300ml"
  }
];

const categories = [
  { id: 'all', label: 'All Items' },
  { id: 'biryani', label: 'Royal Biryanis' },
  { id: 'starters', label: 'Appetizers & Starters' },
  { id: 'curries', label: 'Curries & Rice Bowls' },
  { id: 'breads', label: 'Breads & Combos' },
  { id: 'beverages', label: 'Beverages' },
  { id: 'desserts', label: 'Desserts' }
];

const MenuPage = ({ onAddToCart }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeDiet, setActiveDiet] = useState('all');
  const [activeCategory, setActiveCategory] = useState('all');
  const [addedItems, setAddedItems] = useState({});
  const [selectedDish, setSelectedDish] = useState(null);
  const [floatParticles, setFloatParticles] = useState([]);

  const filteredItems = menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.desc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDiet = activeDiet === 'all' || item.diet === activeDiet;
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    
    return matchesSearch && matchesDiet && matchesCategory;
  });

  const resetFilters = () => {
    setSearchTerm('');
    setActiveDiet('all');
    setActiveCategory('all');
  };

  const handleAddToCart = (item, e) => {
    if (e) e.stopPropagation();
    onAddToCart(item);
    
    // Float particle logic
    if (e) {
      const rect = e.target.getBoundingClientRect();
      const newParticle = {
        id: Date.now(),
        x: e.clientX - rect.left + 10,
        y: e.clientY - rect.top - 20
      };
      setFloatParticles(prev => [...prev, { ...newParticle, itemId: item.id }]);
      setTimeout(() => {
        setFloatParticles(prev => prev.filter(p => p.id !== newParticle.id));
      }, 800);
    }
    
    setAddedItems(prev => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [item.id]: false }));
    }, 900);
  };

  const handleOpenQuickView = (item) => {
    setSelectedDish(item);
  };

  return (
    <main className="menu-main">
      <div className="menu-container">
      <div className="ambient-glow-top"></div>
      
      {/* Interactive Live Filter & Announcement Strip */}
      <section className="live-announcement-strip">
        <div className="announcement-content">
          <div className="announcement-left">
            <span className="live-ping-dot"></span>
            <span className="live-title">Kitchen Live State:</span>
            <span>Batch #14 slow-dumming now • Dispatch window 18-24 mins</span>
          </div>
          <div className="announcement-right">
            <span className="highlight-text">
              <span className="material-symbols-outlined icon-sm">verified</span> 100% Clarified Desi Ghee
            </span>
            <span className="dot-divider hidden-md">•</span>
            <span className="eco-text hidden-md">
              <span className="material-symbols-outlined icon-sm">eco</span> Handcrafted Spice Blends
            </span>
          </div>
        </div>
      </section>

      {/* Header & Exploration Controls */}
      <section className="explore-header-section">
        <div className="explore-header-content">
          <div className="explore-header-text">
            <h1 className="explore-title">Explore Our Kitchen Menu</h1>
            <p className="explore-subtitle">Freshly prepared favorites, slow-cooked in small batches and made to order.</p>
          </div>
        </div>
        
        {/* Sticky Controls: Search, Stat, Dietary Toggles */}
        <div className="menu-controls-grid sticky-controls">
          {/* Search Field */}
          <div className="search-field-wrapper">
            <span className="material-symbols-outlined search-icon">search</span>
            <input 
              className="menu-search-input" 
              id="menuSearchInput" 
              placeholder="Search dishes, spices, biryanis..." 
              type="text"
              value={searchTerm}
            />
          </div>
          
          <div className="live-stat-compact">
            <span className="material-symbols-outlined icon-sm">local_fire_department</span>
            <span>32 min avg</span>
          </div>
          
          {/* Dietary Segmentation Toggles */}
          <div className="diet-toggles-wrapper">
            <button 
              className={`diet-filter-btn ${activeDiet === 'all' ? 'active' : ''}`} 
              onClick={() => setActiveDiet('all')}
            >
              All
            </button>
            <button 
              className={`diet-filter-btn ${activeDiet === 'veg' ? 'active' : ''}`} 
              onClick={() => setActiveDiet('veg')}
            >
              <span>Veg Only</span>
              <span className="veg-dot"></span>
            </button>
            <button 
              className={`diet-filter-btn ${activeDiet === 'non-veg' ? 'active' : ''}`} 
              onClick={() => setActiveDiet('non-veg')}
            >
              <span>Non-Veg</span>
              <span className="non-veg-dot"></span>
            </button>
          </div>
        </div>

        {/* Category Pills Scrollable Strip */}
        <div className="category-scroll-wrapper">
          <div className="category-pills">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`category-pill ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="menu-grid-section">
        <div className="menu-grid">
          {filteredItems.length === 0 ? (
            <div className="empty-state">
              <span className="material-symbols-outlined empty-icon">search_off</span>
              <h3>No dishes found</h3>
              <p>Try adjusting your search or filters to find what you're craving.</p>
              <button onClick={resetFilters} className="empty-reset-btn">Clear Filters</button>
            </div>
          ) : (
            filteredItems.map((item, index) => (
              <div 
                className="dish-card scroll-reveal" 
                key={item.id}
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => handleOpenQuickView(item)}
              >
                <div className="dish-card-top">
                  <div className="dish-image-container">
                    <img src={item.image} alt={item.name} className="dish-image" loading="lazy" />
                    
                    {/* Tags overlays */}
                    <div className="diet-overlay">
                      <span className={item.diet === 'veg' ? 'veg-dot' : 'non-veg-dot'}></span> 
                      {item.diet === 'veg' ? 'Veg' : 'Non-Veg'}
                    </div>
                    
                    <div className="rating-overlay">
                      <span className="material-symbols-outlined rating-star">star</span>
                      <span className="rating-val">{item.rating}</span>
                      <span className="rating-count">({item.ratingCount})</span>
                    </div>
                  </div>
                  
                  <div className="dish-details">
                    {item.tag && (
                      <div className="promo-label">
                        {item.tag}
                      </div>
                    )}
                    <h2 className="dish-title">{item.name}</h2>
                    <p className="dish-desc">{item.desc}</p>
                    
                    <div className="dish-meta">
                      <span className="meta-item">
                        <span className="material-symbols-outlined icon-sm">local_fire_department</span>
                        {item.kcal}
                      </span>
                      <span className="meta-dot">•</span>
                      <span className="meta-item">
                        <span className="material-symbols-outlined icon-sm">timer</span>
                        {item.prep}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="dish-card-bottom">
                  <div className="dish-pricing">
                    <span className="dish-portion">{item.portion}</span>
                    <span className="dish-price">₹{item.price}</span>
                  </div>
                  
                  <button 
                    className={`add-to-cart-btn ${addedItems[item.id] ? 'added' : ''}`}
                    onClick={(e) => handleAddToCart(item, e)}
                    style={{ position: 'relative', overflow: 'visible' }}
                  >
                    {floatParticles.filter(p => p.itemId === item.id).map(p => (
                      <span key={p.id} className="float-plus-one" style={{ left: p.x, top: p.y }}>+1</span>
                    ))}
                    {addedItems[item.id] ? (
                      <>
                        <span className="material-symbols-outlined icon-sm">check</span>
                        <span>Added</span>
                      </>
                    ) : (
                      <>
                        <span className="material-symbols-outlined icon-sm">add</span>
                        <span>Add</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      <QuickViewModal 
        isOpen={!!selectedDish} 
        item={selectedDish} 
        onClose={() => setSelectedDish(null)} 
        onAddToCart={(customItem) => handleAddToCart(customItem, null)} 
      />
      </div>
    </main>
  );
};

export default MenuPage;
