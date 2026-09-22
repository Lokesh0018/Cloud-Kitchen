import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/HeaderFooter.css';

const Header = ({ cartItemCount, onOpenCart, onOpenOrderModal }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const searchInputRef = useRef(null);

  const handleSearchClick = () => {
    if (!isSearchActive) {
      setIsSearchActive(true);
      setTimeout(() => {
        if (searchInputRef.current) searchInputRef.current.focus();
      }, 100);
    }
  };

  const handleCloseSearch = (e) => {
    e.stopPropagation();
    setIsSearchActive(false);
  };

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
            <div className={`search-bar-container ${isSearchActive ? 'active' : ''}`} onClick={handleSearchClick}>
              <button aria-label="Search menu items" className="icon-btn search-trigger-btn">
                <span className="material-symbols-outlined" aria-hidden="true">search</span>
              </button>
              <input 
                ref={searchInputRef}
                type="text" 
                className="search-input" 
                placeholder="Search menu..." 
                tabIndex={isSearchActive ? 0 : -1}
              />
              <button 
                aria-label="Close search" 
                className="icon-btn close-search-btn" 
                onClick={handleCloseSearch}
                tabIndex={isSearchActive ? 0 : -1}
              >
                <span className="material-symbols-outlined" aria-hidden="true">close</span>
              </button>
            </div>
            <button aria-label="View shopping cart" className="icon-btn" onClick={onOpenCart}>
              <span className="material-symbols-outlined" aria-hidden="true">shopping_bag</span>
              {cartItemCount > 0 && <span className="badge">{cartItemCount}</span>}
            </button>
            <button onClick={onOpenOrderModal} className="order-btn" style={{ textDecoration: 'none', cursor: 'pointer' }}>Order Now</button>
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
