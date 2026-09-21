import React from 'react';
import '../styles/HeaderFooter.css';

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-content">
        <div className="logo-section">
          <span className="material-symbols-outlined" style={{ fontSize: '32px', color: 'var(--primary)' }}>restaurant_menu</span>
          <span className="logo-text">Amber & Clove</span>
        </div>
        
        <nav className="main-nav">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Menu</a>
          <a href="#" className="nav-link">About</a>
          <a href="#" className="nav-link">Contact</a>
          <a href="#" className="nav-link">Track Order</a>
        </nav>
        
        <div className="nav-actions">
          <button aria-label="Search menu items" className="icon-btn">
            <span className="material-symbols-outlined" aria-hidden="true">search</span>
          </button>
          <a href="#" aria-label="View shopping cart" className="icon-btn">
            <span className="material-symbols-outlined" aria-hidden="true">shopping_bag</span>
            <span className="badge">3</span>
          </a>
          <a href="#" className="order-btn">Order Now</a>
          <div style={{ paddingLeft: '0.25rem' }}>
            <img 
              alt="Profile" 
              className="profile-pic" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbfTc6jOcpHXqdYuR6DbmlT0LfhBINTP9wzJB_0Gl5AJotq9cu62Ku-sWOR88kNc8WUqoKlE5FOyk-AztDZqHSi9Zjotq4w8y0WyerVx_iHYctwP2o0-VoBunlR9EseGZF8En9fH_NuMhNX_0N3UvquLoeP3WzZORvVifdtkzCAtAAMGb7Z65xI-9x2DlM3EYeUznG70ZFCGuUYahS5jJ3TyNeq-zngHeMk0vRHg3Gk1Bce3-rdzn2"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
