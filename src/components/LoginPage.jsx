import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/LoginPage.css';
import '../styles/HeaderFooter.css';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      setTimeout(() => {
        setIsSuccess(false);
      }, 2000);
    }, 1200);
  };

  return (
    <>
      <main className="login-page-container">
        <div className="login-content">

          <div className="login-grid">
            {/* Showcase Section */}
            <div className="showcase-section">
              <div className="showcase-bg"></div>
              <div className="showcase-overlay"></div>
              
              <div className="showcase-top">
                <div className="rating-tag">
                  <span className="material-symbols-outlined" style={{ color: 'var(--primary-container)', fontSize: '18px', fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="rating-score">4.9</span>
                  <span className="rating-count">(4,200+ foodies)</span>
                </div>
                <div className="live-tag">
                  <span className="live-indicator"></span>
                  Cloud Line Live
                </div>
              </div>

              <div className="showcase-center">
                <span className="eyebrow">Handcrafted Fire & Clay</span>
                <h1 className="showcase-title">Taste the Hearth Dum Tradition</h1>
                <p className="showcase-desc">
                  Directly from artisanal clay ovens to your tabletop. Fast kinetic kitchen dispatch with sealed temperature tracking.
                </p>
                <ul className="feature-list">
                  <li className="feature-item">
                    <span className="feature-icon-wrapper">
                      <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>bolt</span>
                    </span>
                    <span>Save favorite orders & re-order in 1 click</span>
                  </li>
                  <li className="feature-item">
                    <span className="feature-icon-wrapper">
                      <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>thermostat</span>
                    </span>
                    <span>Track live kitchen ticket & thermal dispatch</span>
                  </li>
                  <li className="feature-item">
                    <span className="feature-icon-wrapper">
                      <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>verified</span>
                    </span>
                    <span>Exclusive chef specials & seasonal tasting access</span>
                  </li>
                </ul>
              </div>

              <div className="showcase-bottom">
                <div className="testimonial">
                  <span className="material-symbols-outlined" style={{ color: 'var(--primary-fixed)', fontSize: '22px' }}>restaurant_menu</span>
                  <p className="testimonial-text">
                    "The layered saffron aromas stay intact all the way to dispatch. Exceptional."
                  </p>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="form-section">
              <div className="form-wrapper">
                <div>
                  <h2 className="form-title">Welcome Back, Foodie</h2>
                  <p className="form-subtitle">Sign in to access saved addresses, order history, and instant re-ordering.</p>
                </div>

                <div className="social-auth">
                  <button className="auth-btn" type="button">
                    <svg style={{ width: '20px', height: '20px', flexShrink: 0 }} viewBox="0 0 24 24">
                      <path d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z" fill="#4285F4"></path>
                      <path d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.15C3.25 21.36 7.31 24 12 24z" fill="#34A853"></path>
                      <path d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.14-1.55.38-2.27V6.58H1.26C.46 8.16 0 9.94 0 12s.46 3.84 1.26 5.42l4.02-3.15z" fill="#FBBC05"></path>
                      <path d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.25 2.64 1.26 6.58l4.02 3.15c.95-2.83 3.6-4.98 6.72-4.98z" fill="#EA4335"></path>
                    </svg>
                    <span>Continue with Google</span>
                  </button>
                </div>

                <div className="divider">
                  <div className="divider-line"></div>
                  <span className="divider-text">Or sign in with credentials</span>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <div className="input-wrapper">
                      <span className="material-symbols-outlined input-icon">account_circle</span>
                      <input 
                        className="form-input" 
                        id="identifier" 
                        name="identifier" 
                        placeholder=" " 
                        required 
                        type="text" 
                      />
                      <label className="form-label" htmlFor="identifier">Email or Mobile Number</label>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="input-wrapper">
                      <span className="material-symbols-outlined input-icon">lock</span>
                      <input 
                        className="form-input" 
                        id="password" 
                        name="password" 
                        placeholder=" " 
                        required 
                        type={showPassword ? 'text' : 'password'} 
                        style={{ paddingRight: '3rem' }}
                      />
                      <label className="form-label" htmlFor="password">Password</label>
                      <button 
                        type="button" 
                        className="toggle-pwd-btn"
                        onClick={() => setShowPassword(!showPassword)}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>{showPassword ? 'visibility_off' : 'visibility'}</span>
                      </button>
                    </div>
                  </div>

                  <div className="remember-me" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <label className="checkbox-label">
                      <input type="checkbox" className="checkbox" defaultChecked />
                      <span className="checkbox-text">Remember me on this device</span>
                    </label>
                    <Link to="/forgot-password" style={{ fontSize: '13px', color: 'var(--primary)', textDecoration: 'none', fontWeight: '600' }}>Forgot Password?</Link>
                  </div>

                  <button 
                    type="submit" 
                    className="submit-btn" 
                    disabled={isSubmitting || isSuccess}
                    style={{ 
                      backgroundColor: isSuccess ? 'var(--primary)' : '',
                      opacity: isSubmitting ? 0.9 : 1
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="material-symbols-outlined" style={{ animation: 'spin 1s linear infinite' }}>progress_activity</span> 
                        <span>Authenticating...</span>
                      </>
                    ) : isSuccess ? (
                      <>
                        <span className="material-symbols-outlined">check_circle</span> 
                        <span>Welcome back!</span>
                      </>
                    ) : (
                      <>
                        <span>Sign In to Cloud Kitchen</span>
                        <span className="material-symbols-outlined">arrow_forward</span>
                      </>
                    )}
                  </button>
                </form>

                <div className="register-text">
                  New to Cloud Kitchen? 
                  <Link to="/signup" className="register-link">
                    Create an account
                    <span className="material-symbols-outlined" style={{ fontSize: '16px', marginLeft: '2px' }}>chevron_right</span>
                  </Link>
                </div>

                <div className="footer-strip">
                  <div className="guest-link">
                    <span className="material-symbols-outlined" style={{ color: 'var(--primary)', fontSize: '18px' }}>shopping_cart_checkout</span>
                    <span>Need dinner right now? <a href="#" className="guest-link-text">Guest Checkout</a></span>
                  </div>
                  <div className="security-badge">
                    <span className="material-symbols-outlined" style={{ fontSize: '15px', color: 'var(--primary)' }}>verified_user</span>
                    <span>256-Bit SSL Encrypted</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
};

export default LoginPage;
