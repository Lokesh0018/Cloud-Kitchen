import React, { useState } from 'react';
import '../styles/LoginPage.css';
import '../styles/HeaderFooter.css';

const LoginPage = () => {
  const [isOtpMode, setIsOtpMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [otpValues, setOtpValues] = useState(['', '', '', '', '', '']);

  const handleOtpChange = (index, value) => {
    const newOtp = [...otpValues];
    newOtp[index] = value.slice(-1); // Only take last character
    setOtpValues(newOtp);
    
    // Auto-advance
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otpValues[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`)?.focus();
    }
  };

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
      <header className="app-header">
        <div className="header-content">
          <div className="logo-section">
            <img 
              alt="Amber & Clove Logo" 
              className="logo-img" 
              src="https://lh3.googleusercontent.com/aida/AEtjO1XzuUR5T5GcOfK9_-SVBWnAITpqYgTLPZsPN7HK_Y389_6ULAlBlTwsXJvMnK9L2roKcgPUdJrD8E598KxfUWtp_SHowK35HlUrmx8yvAQ3MJAvqMRAczP6HUFtsFSodBW7EfkW8SVsBOehVrACYZZIG2kt6SWi_AvygDWBgQgiD2pzAXMIM4k26zkdZy2ektLxOE0jhqKFMG2OVSAiInPk5L0f10_72OAon-3JP3jSGwwvRexNnQgdc9A" 
            />
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
              <span className="material-symbols-outlined">search</span>
            </button>
            <a href="#" aria-label="View shopping cart" className="icon-btn">
              <span className="material-symbols-outlined">shopping_bag</span>
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

      <main className="login-page-container">
        <div className="login-content">
          <div className="ambient-orb-1"></div>
          <div className="ambient-orb-2"></div>

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
                  <div className="form-eyebrow">
                    <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>lock</span>
                    Customer Portal
                  </div>
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
                  <button className="auth-btn" type="button" onClick={() => setIsOtpMode(!isOtpMode)}>
                    <span className="material-symbols-outlined" style={{ color: 'var(--primary)', fontSize: '20px' }}>sms</span>
                    <span>{isOtpMode ? 'Sign in with Password' : 'Sign in via Mobile OTP'}</span>
                  </button>
                </div>

                <div className="divider">
                  <div className="divider-line"></div>
                  <span className="divider-text">Or sign in with credentials</span>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="identifier">Email or Mobile Number</label>
                    <div className="input-wrapper">
                      <span className="material-symbols-outlined input-icon">account_circle</span>
                      <input 
                        className="form-input" 
                        id="identifier" 
                        name="identifier" 
                        placeholder="e.g. rahul@example.com or +91 98765 43210" 
                        required 
                        type="text" 
                      />
                    </div>
                  </div>

                  <div className={`form-group ${isOtpMode ? 'hidden' : ''}`}>
                    <div className="password-header">
                      <label className="form-label" htmlFor="password" style={{ marginBottom: 0 }}>Password</label>
                      <a href="#" className="forgot-link">Forgot password?</a>
                    </div>
                    <div className="input-wrapper">
                      <span className="material-symbols-outlined input-icon">lock</span>
                      <input 
                        className="form-input" 
                        id="password" 
                        name="password" 
                        placeholder="Enter your master password" 
                        required={!isOtpMode} 
                        type={showPassword ? 'text' : 'password'} 
                        style={{ paddingRight: '3rem' }}
                      />
                      <button 
                        type="button" 
                        className="toggle-pwd-btn"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        <span className="material-symbols-outlined">{showPassword ? 'visibility_off' : 'visibility'}</span>
                      </button>
                    </div>
                  </div>

                  <div className={`form-group ${!isOtpMode ? 'hidden' : ''}`}>
                    <label className="form-label">6-Digit Verification Code</label>
                    <div className="otp-inputs">
                      {[0, 1, 2, 3, 4, 5].map((index) => (
                        <input 
                          key={index}
                          id={`otp-${index}`}
                          className="otp-input" 
                          maxLength={1} 
                          type="text"
                          value={otpValues[index]}
                          onChange={(e) => handleOtpChange(index, e.target.value)}
                          onKeyDown={(e) => handleOtpKeyDown(index, e)}
                        />
                      ))}
                    </div>
                    <p className="otp-resend">
                      <span>Code sent via SMS</span>
                      <button type="button" className="otp-resend-btn">Resend in 0:42</button>
                    </p>
                  </div>

                  <div className="remember-me">
                    <label className="checkbox-label">
                      <input type="checkbox" className="checkbox" defaultChecked />
                      <span className="checkbox-text">Remember me on this device</span>
                    </label>
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
                        <span>{isOtpMode ? 'Verify & Sign In' : 'Sign In to Amber & Clove'}</span>
                        <span className="material-symbols-outlined">arrow_forward</span>
                      </>
                    )}
                  </button>
                </form>

                <div className="register-text">
                  New to Amber & Clove? 
                  <a href="#" className="register-link">
                    Create an account
                    <span className="material-symbols-outlined" style={{ fontSize: '16px', marginLeft: '2px' }}>chevron_right</span>
                  </a>
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

      <footer className="app-footer">
        <div className="footer-content">
          <div className="footer-grid">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <img 
                  alt="Amber & Clove Logo" 
                  style={{ height: '2rem', width: 'auto', objectFit: 'contain' }}
                  src="https://lh3.googleusercontent.com/aida/AEtjO1XzuUR5T5GcOfK9_-SVBWnAITpqYgTLPZsPN7HK_Y389_6ULAlBlTwsXJvMnK9L2roKcgPUdJrD8E598KxfUWtp_SHowK35HlUrmx8yvAQ3MJAvqMRAczP6HUFtsFSodBW7EfkW8SVsBOehVrACYZZIG2kt6SWi_AvygDWBgQgiD2pzAXMIM4k26zkdZy2ektLxOE0jhqKFMG2OVSAiInPk5L0f10_72OAon-3JP3jSGwwvRexNnQgdc9A" 
                />
                <span className="footer-col-title" style={{ marginBottom: 0 }}>Amber & Clove</span>
              </div>
              <p className="footer-desc">
                Crafting kinetic, chef-driven culinary experiences delivered fresh to your door from our state-of-the-art cloud kitchens.
              </p>
              <div className="social-links">
                <a href="#" aria-label="Global Kitchen network" className="social-btn">
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>public</span>
                </a>
                <a href="#" aria-label="Customer support channel" className="social-btn">
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>chat</span>
                </a>
                <a href="#" aria-label="Direct communication channel" className="social-btn">
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>alternate_email</span>
                </a>
              </div>
            </div>

            <div>
              <div className="footer-col-title">Quick Links</div>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">Chef's Curated Menu</a></li>
                <li><a href="#" className="footer-link">My Order Cart</a></li>
                <li><a href="#" className="footer-link">Real-Time Order Tracker</a></li>
                <li><a href="#" className="footer-link">Our Culinary Standards</a></li>
              </ul>
            </div>

            <div>
              <div className="footer-col-title">Dispatch Kitchen</div>
              <div className="contact-info">
                <p className="contact-item">
                  <span className="material-symbols-outlined" style={{ color: 'var(--primary)', fontSize: '18px' }}>schedule</span>
                  11:00 AM – 11:30 PM Everyday
                </p>
                <p className="contact-item">
                  <span className="material-symbols-outlined" style={{ color: 'var(--primary)', fontSize: '18px' }}>pin_drop</span>
                  44 Culinary District, Central Hub
                </p>
                <p className="contact-item">
                  <span className="material-symbols-outlined" style={{ color: 'var(--primary)', fontSize: '18px' }}>call</span>
                  +1 (800) 555-CLOVE
                </p>
                <p className="contact-item">
                  <span className="material-symbols-outlined" style={{ color: 'var(--primary)', fontSize: '18px' }}>forum</span>
                  WhatsApp: +1 (800) 555-2568
                </p>
              </div>
            </div>

            <div>
              <div className="footer-col-title">Live Telemetry</div>
              <p className="footer-desc" style={{ marginBottom: '0.5rem' }}>
                Average prep-to-dispatch latency is currently running below nominal targets.
              </p>
              <div className="telemetry-box">
                <div className="telemetry-header">
                  <span className="telemetry-label">Kitchen Load</span>
                  <span className="telemetry-value">Optimal • 82%</span>
                </div>
                <div className="progress-bar-bg">
                  <div className="progress-bar-fill"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div>© 2024 Amber & Clove Culinary Platform. All rights reserved.</div>
            <div className="legal-links">
              <a href="#" className="legal-link">Privacy Policy</a>
              <a href="#" className="legal-link">Terms of Service</a>
              <a href="#" className="legal-link">Kitchen Hygiene Certifications</a>
            </div>
          </div>
        </div>
      </footer>

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
