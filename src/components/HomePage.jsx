import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

const FadeIn = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={isVisible ? 'fade-up-active fade-up-enter' : 'fade-up-enter'}>
      {children}
    </div>
  );
};

const heroSlides = [
  {
    id: 1,
    title: <>Good Food.<br/><span className="text-primary-container">Made Fresh.</span><br/>Delivered Fast.</>,
    desc: "Delicious gourmet meals prepared fresh in our hygiene-certified cloud kitchen and delivered piping hot straight to your doorstep in 30 mins.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzN9U-ngT9O8pTw-C7EewwuiNBxR08oy8woNGUXqnVHCdsdgyfjtXFMJSQdRJuvmXmyiwpunqHE4xfcy5E9689s8FfOG10hOzoE_Pb0NNSjwno5gb6fPWymvRszreZo5Sm4sqGk4NXttoN4Ua9kk2muQcsInEuJ2XKbLTiNn2sJfpC9UXQFKDUasiyZW82ZP8t3OKRqQ-SRpbpz0lY2e5qFnk3jPQaO3NCXiTYr7oayTHzV56KRbBw",
    trendingName: "Royal Dum Biryani",
    badgeLabel: "Rating",
    badgeValue: "4.8"
  },
  {
    id: 2,
    title: <>Authentic Spice.<br/><span className="text-primary-container">Chef Crafted.</span><br/>Unforgettable.</>,
    desc: "Savor the rich heritage of slow-cooked biryanis, aromatic curries, and tantalizing starters made with hand-ground spices.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJbxrsD9zXpzI-xsfz6n86fButBoucrlPam6cDNNaJdxjlYueohvp8rymwhguiYRE6gIeKb1sMbzYNd14zSUrmApEpyUEv8lFkN1SfUQ3fAhfi6UqraYIabNpKnZSDhJsEZt06DkJyKyGIlkCoQxLERHW899KjFhPFPxBY9ydbWLbMBQR9LYIQsmrF4uze0Mzw5hcjXzXDOXva-WkuBci6GK86tmcDB_70IODoQ-lkeTT_QviWTS4u",
    trendingName: "Hyderabadi Chicken Biryani",
    badgeLabel: "Spicy",
    badgeValue: "Hot"
  },
  {
    id: 3,
    title: <>Midnight Craving?<br/><span className="text-primary-container">Satisfied.</span><br/>Any Time.</>,
    desc: "Late night hunger pangs? We've got you covered with our special late-night menu, delivered piping hot to your door.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAy0aIJ9_BHhYE2CjbUJRcIk87mcuJs5xPbOE_O9JS96Nf552KWpyD-pwteeg8j-n8s6RJQIFa33Yh-D29bY9VjQVorBd7drqRRBCb2xBhY99s7EQU7AezHVP_cAsx5xG4KOL-S5DHO94pLtS0XncYQnjAgbhIyq_1q7VjfDqmJJJugRL6pGW78PLcsFGFvE5dPmV0kWJI6GQh1lOQ_S7CtG3RDoNpZR3qBncU3K6gt_ik58VQO72Ik",
    trendingName: "Smoked Burger",
    badgeLabel: "Popular",
    badgeValue: "#1"
  }
];

const HomePage = ({ onAddToCart, onOpenOrderModal }) => {
  const catScrollRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);


  const allProducts = [
    {
      id: 101,
      name: 'Hyderabadi Chicken Dum Biryani',
      price: 240,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJbxrsD9zXpzI-xsfz6n86fButBoucrlPam6cDNNaJdxjlYueohvp8rymwhguiYRE6gIeKb1sMbzYNd14zSUrmApEpyUEv8lFkN1SfUQ3fAhfi6UqraYIabNpKnZSDhJsEZt06DkJyKyGIlkCoQxLERHW899KjFhPFPxBY9ydbWLbMBQR9LYIQsmrF4uze0Mzw5hcjXzXDOXva-WkuBci6GK86tmcDB_70IODoQ-lkeTT_QviWTS4u',
      category: 'Biryani'
    },
    {
      id: 102,
      name: 'Crispy Chicken 65 Starter',
      price: 180,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1U3M6GiEltgtGj1WkweNKxcN7ZKG38BoUdShvLe47wtB6QhCWP4kS1npAn5A8CVzBx46sgyiTEIKrgU_xo-dRw6fSlAll_k9i5j0PqbXQD2Nm1Qmhxui9-2Pix04vRPWToL07iArkj7rc96gZSVmuZNpdm280Scp73opd7V2W90rMG6VZeCmtOzy0r-coJnw6GT19tqlET3uUz8cY3pS4gFzQFH2OwyQWscMeateLYS7DipIobDve',
      category: 'Starters & Appetizers'
    },
    {
      id: 103,
      name: 'Paneer Butter Masala Bowl',
      price: 210,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2SrTB_nvd7x118wrLb7d_OsCz-nRDiA_3yI8O_rMnf1nd0Atk9XBn9M9a46CgZVK9j7ledHRukPqqTgkgM143xiXQtRXOnsqsM8P5gjAYSoEHNMnuLHKq6pxf8KVeWVFBCR8dgqUfc0Z_MsF1zKp1LezyfxJDvRYsCkC0PFXgnrcVa4BJ0j2voEG8lZkC3w46tNhX6WYAq3hRFEOBZV7RpLLcTynSkf1DxnZevxapI3-8i3CR2MXR',
      category: 'Rice Bowls'
    },
    {
      id: 104,
      name: 'Smoked Spiced Tandoori Burger',
      price: 160,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAy0aIJ9_BHhYE2CjbUJRcIk87mcuJs5xPbOE_O9JS96Nf552KWpyD-pwteeg8j-n8s6RJQIFa33Yh-D29bY9VjQVorBd7drqRRBCb2xBhY99s7EQU7AezHVP_cAsx5xG4KOL-S5DHO94pLtS0XncYQnjAgbhIyq_1q7VjfDqmJJJugRL6pGW78PLcsFGFvE5dPmV0kWJI6GQh1lOQ_S7CtG3RDoNpZR3qBncU3K6gt_ik58VQO72Ik',
      category: 'Gourmet Burgers'
    },
    {
      id: 105,
      name: 'Mutton Handi Biryani',
      price: 320,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJbxrsD9zXpzI-xsfz6n86fButBoucrlPam6cDNNaJdxjlYueohvp8rymwhguiYRE6gIeKb1sMbzYNd14zSUrmApEpyUEv8lFkN1SfUQ3fAhfi6UqraYIabNpKnZSDhJsEZt06DkJyKyGIlkCoQxLERHW899KjFhPFPxBY9ydbWLbMBQR9LYIQsmrF4uze0Mzw5hcjXzXDOXva-WkuBci6GK86tmcDB_70IODoQ-lkeTT_QviWTS4u',
      category: 'Biryani'
    },
    {
      id: 106,
      name: 'Rajma Chawal Bowl',
      price: 150,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2SrTB_nvd7x118wrLb7d_OsCz-nRDiA_3yI8O_rMnf1nd0Atk9XBn9M9a46CgZVK9j7ledHRukPqqTgkgM143xiXQtRXOnsqsM8P5gjAYSoEHNMnuLHKq6pxf8KVeWVFBCR8dgqUfc0Z_MsF1zKp1LezyfxJDvRYsCkC0PFXgnrcVa4BJ0j2voEG8lZkC3w46tNhX6WYAq3hRFEOBZV7RpLLcTynSkf1DxnZevxapI3-8i3CR2MXR',
      category: 'Rice Bowls'
    }
  ];

  const categories = [
    { name: 'All', icon: '🍽️' },
    { name: 'Biryani', icon: '🍚' },
    { name: 'Rice Bowls', icon: '🍲' },
    { name: 'Starters & Appetizers', icon: '🍗' },
    { name: 'Gourmet Burgers', icon: '🍔' },
    { name: 'Signature Combos', icon: '🍱' }
  ];

  const displayedItems = activeCategory === 'All' 
    ? allProducts.slice(0, 4) 
    : allProducts.filter(item => item.category === activeCategory).slice(0, 4);

  const testimonials = [
    { id: 1, name: "Sarah J.", text: "Best midnight craving fix! The smoked burger is absolute perfection. Arrived hot and fresh.", initial: "S" },
    { id: 2, name: "Michael T.", text: "Unbelievable flavors. The Dum Biryani has that authentic, slow-cooked taste that you rarely find in delivery.", initial: "M" },
    { id: 3, name: "Priya R.", text: "My go-to for weekend dinners. The paneer butter masala is incredibly rich and the packaging is so premium.", initial: "P" },
    { id: 4, name: "David L.", text: "Lightning fast delivery! Food was still steaming hot when it arrived. 10/10 would recommend.", initial: "D" },
    { id: 5, name: "Anita K.", text: "The crispy chicken 65 starter is a must-try. Spicy, tangy, and totally addictive.", initial: "A" }
  ];

  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 20; // -10px to +10px
      const yPos = (clientY / window.innerHeight - 0.5) * 20;
      
      containerRef.current.style.setProperty('--mouse-x', `${xPos}px`);
      containerRef.current.style.setProperty('--mouse-y', `${yPos}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className="home-main" ref={containerRef}>
      <div className="home-container">
        {/* Top Ambient Glow */}
        <div className="hero-section-wrapper">
          <div className="ambient-glow-top parallax-glow"></div>
          
          {/* Hero Section */}
          <section 
            className="hero-section"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="hero-grid">
              
              {/* Hero Copy (Left Side) */}
              <div className="hero-copy">
                
                {/* Static Fire label */}
                <div className="fire-label">
                  <span className="fire-icon">🔥</span>
                  <span>FRESH • FAST • CHEF CRAFTED</span>
                </div>
                
                {/* Cross-fading Title & Desc */}
                <div className="hero-slides-wrapper">
                  {heroSlides.map((slide, index) => {
                    let slideClass = 'carousel-text-next';
                    if (index === currentSlide) {
                      slideClass = 'carousel-text-active';
                    } else if (index === currentSlide - 1 || (currentSlide === 0 && index === heroSlides.length - 1)) {
                      slideClass = 'carousel-text-prev';
                    }

                    return (
                      <div 
                        key={slide.id} 
                        className={`carousel-text-slide ${slideClass}`}
                      >
                        <h1 className="hero-title">
                          {slide.title}
                        </h1>
                        <p className="hero-desc">
                          {slide.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
                
                {/* Premium Carousel Indicators */}
                <div className="carousel-indicators">
                  {heroSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`carousel-indicator ${currentSlide === idx ? 'active' : 'inactive'}`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
                
                {/* Static CTAs */}
                <div className="hero-ctas">
                  <button 
                    onClick={onOpenOrderModal} 
                    className="btn-primary"
                    style={{ cursor: 'pointer', border: 'none', fontFamily: 'inherit' }}
                  >
                    <span>Order Now</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                  <Link 
                    to="/menu" 
                    className="btn-secondary"
                  >
                    <span>Explore Menu</span>
                  </Link>
                </div>
                
                {/* Static Trust Badges Metrics Strip */}
                <div className="hero-badges-strip">
                  <div className="badge-item">
                    <span className="badge-item-icon">★</span>
                    <span className="badge-item-val">4.9</span>
                    <span className="badge-item-sub">(4,200+ Reviews)</span>
                  </div>
                  <div className="badge-item">
                    <span className="badge-item-icon">⚡</span>
                    <span className="badge-item-text">Avg 28 Min Delivery</span>
                  </div>
                  <div className="badge-item">
                    <span className="badge-item-icon">🍃</span>
                    <span className="badge-item-text">100% Fresh Ingredients</span>
                  </div>
                </div>
              </div>
              
              {/* Hero Visual Composition (Right Side, Cross-fading Images) */}
              <div className="hero-visual">
                {heroSlides.map((slide, index) => {
                  let visualClass = 'carousel-visual-next';
                  if (index === currentSlide) {
                    visualClass = 'carousel-visual-active';
                  } else if (index === currentSlide - 1 || (currentSlide === 0 && index === heroSlides.length - 1)) {
                    visualClass = 'carousel-visual-prev';
                  }

                  return (
                    <div 
                      key={slide.id} 
                      className={`carousel-visual-slide ${visualClass}`}
                    >
                      <div className="hero-image-wrapper">
                        <img 
                          alt={slide.trendingName} 
                          src={slide.img}
                        />
                        <div className="hero-image-overlay"></div>
                      </div>
                      
                      {/* Floating Badges Layered Around Visual */}
                      <div className="floating-badge-top">
                        <span className="floating-badge-top-icon">★</span>
                        <span className="floating-badge-top-val">{slide.badgeValue}</span>
                        <span className="floating-badge-top-label">{slide.badgeLabel}</span>
                      </div>
                      
                      <div className="floating-badge-bottom">
                        <div className="floating-badge-icon-wrapper">
                          <span className="material-symbols-outlined">local_fire_department</span>
                        </div>
                        <div>
                          <span className="floating-badge-bottom-label">Trending</span>
                          <span className="floating-badge-bottom-val">{slide.trendingName}</span>
                        </div>
                      </div>
                      
                      <div className="floating-badge-side">
                        <span className="pulse-dot"></span>
                        <span>Freshly Prepared &amp; Sealed</span>
                      </div>
                    </div>
                  );
                })}
              </div>
              
            </div>
          </section>
        </div>

        {/* Category Section: "What's on your mind?" */}
        <FadeIn>
          <section className="category-section">
            <div className="section-header">
            <div>
              <span className="section-eyebrow">Curation</span>
              <h2 className="section-title">What's on your mind?</h2>
            </div>
          </div>
          
          {/* Category Pills List */}
          <div ref={catScrollRef} className="category-list">
            {categories.map((cat) => (
              <button 
                key={cat.name}
                className={`category-pill ${activeCategory === cat.name ? 'category-pill-active' : 'category-pill-inactive'}`}
                onClick={() => setActiveCategory(cat.name)}
              >
                <span className={activeCategory === cat.name ? 'category-icon-active' : 'category-icon-inactive'}>{cat.icon}</span>
                <span className="category-name">{cat.name}</span>
              </button>
            ))}
          </div>
          </section>
        </FadeIn>

        {/* Customer Favorites (Popular Items Grid) */}
        <FadeIn>
          <section className="favorites-section">
            <div className="favorites-header">
            <div>
              <div className="favorites-eyebrow">
                <span className="material-symbols-outlined">stars</span>
                <span>Chef Recommends</span>
              </div>
              <h2 className="favorites-title">Customer Favorites</h2>
            </div>
            <p className="favorites-desc">
              Freshly cooked upon receipt of your ticket. Our kitchen line prepares every element right before dispatch.
            </p>
          </div>
          
          {/* 4-Card Asymmetric Grid */}
          <div className="favorites-grid">
            {displayedItems.length > 0 ? displayedItems.map((item) => (
              
                <div className="product-card">
                  <div>
                    <div className="product-image-container">
                      <img 
                        className="product-image" 
                        alt={item.name} 
                        src={item.image}
                      />
                      <span className="product-badge-primary">{item.category || 'Popular'}</span>
                      <button aria-label="Add to favorites" className="fav-btn">
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                      </button>
                    </div>
                    <div className="product-meta">
                      <span className="product-category">{item.category}</span>
                      <span className="product-meta-dot">•</span>
                      <span className="product-time">25-30 mins</span>
                    </div>
                    <h3 className="product-name">{item.name}</h3>
                    <p className="product-description">
                      Freshly prepared, crafted with the finest ingredients and authentic spices.
                    </p>
                  </div>
                  <div className="product-footer">
                    <div>
                      <span className="product-portion">Portion for 1</span>
                      <span className="product-price">₹{item.price}</span>
                    </div>
                    <button 
                      onClick={() => onAddToCart && onAddToCart(item)}
                      className="add-btn"
                    >
                      <span className="material-symbols-outlined">add</span>
                      <span>Add</span>
                    </button>
                  </div>
                </div>
              
            )) : (
              <div className="no-items-message">
                <p>No items found for this category currently. Try another one!</p>
              </div>
            )}
          </div>
          </section>
        </FadeIn>

        {/* Testimonials Section */}
        <FadeIn>
          <section className="testimonials-section">
            <div className="testimonials-header">
              <span className="testimonials-eyebrow">Real Reviews</span>
              <h2 className="testimonials-title">What Our Customers Say</h2>
            </div>
            
            <div className="testimonials-marquee-wrapper">
              {/* Duplicate the array to create a seamless infinite scroll effect */}
              {[...testimonials, ...testimonials].map((testimonial, idx) => (
                <div key={`${testimonial.id}-${idx}`} className="testimonial-card">
                  <div className="testimonial-stars">★★★★★</div>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <div className="testimonial-author">
                    <div className="testimonial-author-avatar">{testimonial.initial}</div>
                    <span className="testimonial-author-name">{testimonial.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* Promotional Banner */}
        <FadeIn>
          <section className="promo-section">
            <div className="promo-banner">
            {/* Ambient Circle */}
            <div className="promo-glow"></div>
            
            <div className="promo-content">
              <div className="promo-text-wrapper">
                <div className="promo-badge">
                  <span className="material-symbols-outlined text-primary">redeem</span>
                  <span>First Taste Special</span>
                </div>
                <h2 className="promo-title">
                  Made Fresh, Just For You.
                </h2>
                <p className="promo-desc">
                  Enjoy <span style={{ fontWeight: 'bold', color: 'var(--primary)' }}>Flat 20% OFF</span> on your first 3 cloud kitchen orders with promo code <code className="promo-code">FRESH20</code> at checkout.
                </p>
              </div>
              <Link 
                to="/menu" 
                className="promo-btn"
              >
                <span>Explore Menu</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
          </section>
        </FadeIn>

        {/* How It Works (3 Steps) */}
        <FadeIn>
          <section className="how-section">
            <div className="how-header">
            <span className="how-eyebrow">Seamless Logistics</span>
            <h2 className="how-title">How Cloud Kitchen Delivers</h2>
          </div>
          
          <div className="how-grid">
            {/* Step 1 */}
            <div className="how-card">
              <div className="how-step">01</div>
              <div>
                <div className="how-icon-wrapper-1">
                  <span className="material-symbols-outlined">restaurant_menu</span>
                </div>
                <h3 className="how-card-title">Choose Your Favorites</h3>
                <p className="how-card-desc">
                  Browse our chef-crafted daily line up of dum biryanis, sizzling starters, and fresh fusion bowls tailored for comfort food cravings.
                </p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="how-card">
              <div className="how-step">02</div>
              <div>
                <div className="how-icon-wrapper-2">
                  <span className="material-symbols-outlined">skillet</span>
                </div>
                <h3 className="how-card-title">Cooked Fresh &amp; Sealed</h3>
                <p className="how-card-desc">
                  Zero batch pre-cooking. Orders are fired instantly on live stoves, packed into tamper-proof thermal insulation, and quality-inspected.
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="how-card">
              <div className="how-step">03</div>
              <div>
                <div className="how-icon-wrapper-3">
                  <span className="material-symbols-outlined">moped</span>
                </div>
                <h3 className="how-card-title">Piping Hot Delivery</h3>
                <p className="how-card-desc">
                  Our temperature-monitored fleet dispatches swiftly, arriving at your dining table within nominal 28-minute turnaround benchmarks.
                </p>
              </div>
            </div>
          </div>
          </section>
        </FadeIn>

        {/* Why Choose Us (4 Feature Cards) */}
        <FadeIn>
          <section className="features-section">
            <div className="features-header">
            <div>
              <span className="features-eyebrow">Our Standard</span>
              <h2 className="features-title">Engineered For Culinary Excellence</h2>
            </div>
          </div>
          <div className="features-grid">
            
              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <span className="material-symbols-outlined">eco</span>
                </div>
                <h3 className="feature-card-title">100% Fresh Ingredients</h3>
                <p className="feature-card-desc">
                  Farm-sourced spices, premium basmati grain, and local produce. Zero frozen compromises or artificial preservatives.
                </p>
              </div>
            
            
              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <span className="material-symbols-outlined">thermostat</span>
                </div>
                <h3 className="feature-card-title">Temperature Controlled</h3>
                <p className="feature-card-desc">
                  Proprietary heat-retaining containers preserve textures, steam levels, and flavors as if straight from the flame.
                </p>
              </div>
            
            
              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <span className="material-symbols-outlined">verified_user</span>
                </div>
                <h3 className="feature-card-title">Zero-Contact Hygiene</h3>
                <p className="feature-card-desc">
                  Strict stainless steel cloud kitchen operations audited weekly with sealed tamper-evident foil wraps on every dispatch.
                </p>
              </div>
            
            
              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <span className="material-symbols-outlined">smartphone</span>
                </div>
                <h3 className="feature-card-title">Real-Time Kitchen Feed</h3>
                <p className="feature-card-desc">
                  Monitor your ticket from prep station cook time down to delivery bike GPS coordinates in sub-second precision.
                </p>
              </div>
            
          </div>
          </section>
        </FadeIn>

        {/* Final Call to Action */}
        <section className="cta-section">
          <div className="cta-banner">
            {/* Glow ambient backdrop */}
            <div className="cta-glow-1"></div>
            <div className="cta-glow-2"></div>
            
            <div className="cta-content">
              <div className="cta-badge">
                <span className="cta-badge-dot"></span>
                <span>Kitchen Active • Dispatching Now</span>
              </div>
              <h2 className="cta-title">
                Craving something delicious tonight?
              </h2>
              <p className="cta-desc">
                Your next comfort meal is just a few clicks away. Freshly prepared, securely packed, and delivered right to your door.
              </p>
              
              <div className="cta-actions">
                <button 
                  onClick={onOpenOrderModal} 
                  className="cta-btn-primary"
                  style={{ cursor: 'pointer', border: 'none', fontFamily: 'inherit' }}
                >
                  <span>Order Now</span>
                  <span className="material-symbols-outlined">bolt</span>
                </button>
                <Link 
                  to="/track-order" 
                  className="cta-btn-secondary"
                >
                  <span>Track Live Order</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default HomePage;
