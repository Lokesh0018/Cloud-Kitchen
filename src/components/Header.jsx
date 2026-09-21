import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/HeaderFooter.css';

const Header = ({ cartItemCount, onOpenCart }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide header when scrolling down past 60px, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header className={`app-header ${isVisible ? '' : 'header-hidden'}`}>
        <div className="header-content">
          <div className="logo-section">
            <span className="material-symbols-outlined" style={{ fontSize: '32px', color: 'var(--primary)' }}>restaurant_menu</span>
            <span className="logo-text">Cloud Kitchen</span>
          </div>
          
          <nav className="main-nav">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/menu" className="nav-link">Menu</NavLink>
            <NavLink to="/about" className="nav-link">About</NavLink>
            <NavLink to="/contact" className="nav-link">Contact</NavLink>
            <NavLink to="/track-order" className="nav-link">Track Order</NavLink>
          </nav>
          
          <div className="nav-actions">
            <button aria-label="Search menu items" className="icon-btn">
              <span className="material-symbols-outlined" aria-hidden="true">search</span>
            </button>
            <button aria-label="View shopping cart" className="icon-btn" onClick={onOpenCart}>
              <span className="material-symbols-outlined" aria-hidden="true">shopping_bag</span>
              {cartItemCount > 0 && <span className="badge">{cartItemCount}</span>}
            </button>
            <Link to="/menu" className="order-btn" style={{ textDecoration: 'none' }}>Order Now</Link>
            <div style={{ paddingLeft: '0.25rem' }}>
              <Link to="/login">
                <img 
                  alt="Profile" 
                  className="profile-pic" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbfTc6jOcpHXqdYuR6DbmlT0LfhBINTP9wzJB_0Gl5AJotq9cu62Ku-sWOR88kNc8WUqoKlE5FOyk-AztDZqHSi9Zjotq4w8y0WyerVx_iHYctwP2o0-VoBunlR9EseGZF8En9fH_NuMhNX_0N3UvquLoeP3WzZORvVifdtkzCAtAAMGb7Z65xI-9x2DlM3EYeUznG70ZFCGuUYahS5jJ3TyNeq-zngHeMk0vRHg3Gk1Bce3-rdzn2"
                />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Floating Nav that stays visible when header hides */}
      <div className={`floating-nav-container ${!isVisible ? 'visible' : ''}`}>
        <nav className="main-nav floating-nav">
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/menu" className="nav-link">Menu</NavLink>
          <NavLink to="/about" className="nav-link">About</NavLink>
          <NavLink to="/contact" className="nav-link">Contact</NavLink>
          <NavLink to="/track-order" className="nav-link">Track Order</NavLink>
        </nav>
      </div>
    </>
  );
};

export default Header;
