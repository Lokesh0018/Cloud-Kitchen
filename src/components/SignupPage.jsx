import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/SignupPage.css';
import '../styles/HeaderFooter.css';

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState({ text: 'Min 8+ chars', class: '' });
  const [activeDiet, setActiveDiet] = useState('all');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form fields
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    agreedToTos: false,
    marketingOptIn: true
  });

  useEffect(() => {
    if (password.length === 0) {
      setPasswordStrength({ text: 'Min 8+ chars', class: '' });
    } else if (password.length < 6) {
      setPasswordStrength({ text: 'Weak', class: 'weak' });
    } else if (password.length < 10) {
      setPasswordStrength({ text: 'Moderate', class: 'moderate' });
    } else {
      setPasswordStrength({ text: 'Strong: 8+ chars', class: 'strong' });
    }
  }, [password]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      setTimeout(() => {
        // Here you would typically redirect
        console.log("Account created", { ...formData, password, activeDiet });
        setIsSuccess(false);
      }, 2000);
    }, 1500);
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
            <span className="logo-text" style={{ display: 'none', '@media (minWidth: 640px)': { display: 'inline-block' } }}>
              Amber & Clove
            </span>
          </div>
          
          <nav className="main-nav" style={{ display: 'none', '@media (minWidth: 1024px)': { display: 'flex' } }}>
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
            <a href="#" aria-label="View shopping cart" className="icon-btn" style={{ position: 'relative' }}>
              <span className="material-symbols-outlined">shopping_bag</span>
              <span className="badge" style={{ position: 'absolute', top: '-4px', right: '-4px', backgroundColor: 'var(--primary)', color: 'var(--on-primary)', fontSize: '11px', width: '20px', height: '20px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>3</span>
            </a>
            <a href="#" className="order-btn" style={{ display: 'none', '@media (minWidth: 640px)': { display: 'inline-flex' } }}>
              Order Now
            </a>
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

      <main className="signup-page-container">
        <section className="signup-content">
          <div className="signup-inner">
            
            {/* Top Micro Notice */}
            <div className="micro-notice-container">
              <div className="micro-notice-pill">
                <span className="pulse-dot"></span>
                <span className="micro-notice-text">Cloud Kitchen Network • Live Onboarding</span>
              </div>
              <div className="encryption-notice">
                <span className="material-symbols-outlined" style={{ color: 'var(--primary)', fontSize: '18px' }}>verified_user</span>
                <span>End-to-End Encrypted Verification</span>
              </div>
            </div>

            {/* Main Split Grid */}
            <div className="signup-grid">
              
              {/* Left Showcase Side */}
              <div className="signup-showcase">
                <div className="glow-element-1"></div>
                <div className="glow-element-2"></div>
                
                <div className="showcase-content">
                  <div className="promo-pill">
                    <span style={{ fontSize: '1rem' }}>🎁</span>
                    <span className="promo-text">FLAT 20% OFF ON YOUR FIRST 3 ORDERS</span>
                    <span className="promo-code">FRESH20</span>
                  </div>
                  
                  <h1 className="signup-headline">
                    Join the <span className="highlight-text">Amber & Clove</span> Table
                  </h1>
                  <p className="signup-story">
                    Step into high-velocity gourmet dining. Authentic earthen dum pots, kinetic telemetry tracking, and early access to weekend culinary experiments.
                  </p>
                  
                  <div className="food-card">
                    <img 
                      className="food-img"
                      alt="Nawabi Murg Zafraani Biryani" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnX3B7Sh8N5Cp1wziNDfhYmx7pMY7Stm0x-HRLNY6YlebSLQeMRc4izW_SM35-sBIrxDdftgO0fDh5WR9g3KN-9mvyHJoV7hkCDir-19ya-SiplDES0T9yDAiP1U0JtyW26tN-oELdkAH7_xEHspl3BnHfzkfz0Dv62HFTRf0f6i3LscC7RtNojYcODVBgxv9AUGlE5qTS3YCwgDJwHHyOJwGsb2v6hUms3rdvzh0IDtAs0Htahajt"
                    />
                    <div className="food-card-overlay"></div>
                    
                    <div className="sensor-pill">
                      <span className="material-symbols-outlined" style={{ color: 'var(--primary-container)', fontSize: '18px' }}>thermostat</span>
                      <span style={{ fontFamily: 'var(--label-sm-font)', fontSize: 'var(--label-sm-size)' }}>Thermal Dum Pot Seal: 91°C Active</span>
                    </div>
                    
                    <div className="chef-badge">
                      <div>
                        <span className="dish-category">Signature Slow-Cook</span>
                        <p className="dish-name">Nawabi Murg Zafraani Biryani</p>
                      </div>
                      <div className="dish-rating">
                        <span className="material-symbols-outlined" style={{ color: 'var(--primary-container)', fontSize: '16px', fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span style={{ fontWeight: 'bold' }}>4.96</span>
                        <span style={{ color: 'var(--on-surface-variant)', fontWeight: 'normal', fontSize: 'var(--body-sm-size)' }}>(3.2k)</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Value Propositions Matrix */}
                <div className="value-matrix">
                  <div className="value-card">
                    <div className="value-icon-wrapper" style={{ backgroundColor: 'var(--primary-fixed)', color: 'var(--primary)' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>skillet</span>
                    </div>
                    <div>
                      <p className="value-title">Dum Handi Guarantee</p>
                      <p className="value-desc">Slow-fired in earthen clay upon ticket confirmation.</p>
                    </div>
                  </div>
                  
                  <div className="value-card">
                    <div className="value-icon-wrapper" style={{ backgroundColor: 'var(--secondary-container)', color: 'var(--secondary)' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>radar</span>
                    </div>
                    <div>
                      <p className="value-title">Live Telemetry</p>
                      <p className="value-desc">Real-time KDS line cook & dispatch temperature metrics.</p>
                    </div>
                  </div>
                  
                  <div className="value-card">
                    <div className="value-icon-wrapper" style={{ backgroundColor: 'var(--tertiary-fixed)', color: 'var(--tertiary)' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>lock_open</span>
                    </div>
                    <div>
                      <p className="value-title">Curated Secret Menu</p>
                      <p className="value-desc">Weekend tasting flights & reserved small-batch curries.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Registration Form Side */}
              <div className="signup-form-side">
                <div>
                  <div style={{ marginBottom: 'var(--space-md)' }}>
                    <div className="form-eyebrow-wrapper">
                      <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>restaurant_menu</span>
                      Join Our Community
                    </div>
                    <h2 className="form-main-title">Create Your Foodie Account</h2>
                    <p className="form-subtitle">
                      Sign up in under 30 seconds for faster checkout, delivery tracking, and taste preferences.
                    </p>
                  </div>

                  <button className="social-signup-btn" type="button">
                    <svg style={{ width: '20px', height: '20px' }} viewBox="0 0 24 24">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"></path>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"></path>
                    </svg>
                    <span>Sign up with Google</span>
                  </button>

                  <div className="signup-divider">
                    <div className="signup-divider-line"></div>
                    <span className="signup-divider-text">Or register with mobile / email</span>
                  </div>

                  <form className="signup-form" onSubmit={handleSubmit}>
                    
                    {/* Full Name */}
                    <div className="input-group">
                      <label className="input-label" htmlFor="fullName">Full Name</label>
                      <div className="input-relative">
                        <span className="material-symbols-outlined input-icon-left">person</span>
                        <input 
                          className="signup-input" 
                          id="fullName"
                          name="fullName"
                          placeholder="e.g. Rahul Verma" 
                          required 
                          type="text"
                          value={formData.fullName}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    {/* Mobile Number */}
                    <div className="input-group">
                      <div className="input-label-row">
                        <label className="input-label" htmlFor="mobile" style={{ marginBottom: 0 }}>Mobile Number</label>
                        <span className="input-label-hint">
                          <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>sms</span>
                          OTP verification on next step
                        </span>
                      </div>
                      <div className="phone-input-row">
                        <div className="country-code-pill">
                          <span style={{ fontSize: '1rem' }}>🇮🇳</span>
                          <span>+91</span>
                        </div>
                        <div className="input-relative">
                          <span className="material-symbols-outlined input-icon-left">call</span>
                          <input 
                            className="signup-input" 
                            id="mobile"
                            name="mobile"
                            maxLength="10" 
                            placeholder="98765 43210" 
                            required 
                            type="tel"
                            value={formData.mobile}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Email Address */}
                    <div className="input-group">
                      <label className="input-label" htmlFor="email">Email Address</label>
                      <div className="input-relative">
                        <span className="material-symbols-outlined input-icon-left">alternate_email</span>
                        <input 
                          className="signup-input" 
                          id="email"
                          name="email"
                          placeholder="name@example.com" 
                          required 
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    {/* Create Password with strength */}
                    <div className="input-group">
                      <div className="input-label-row">
                        <label className="input-label" htmlFor="password" style={{ marginBottom: 0 }}>Create Password</label>
                        <span className={`pwd-strength-pill ${passwordStrength.class}`}>
                          {passwordStrength.text}
                        </span>
                      </div>
                      <div className="input-relative">
                        <span className="material-symbols-outlined input-icon-left">lock</span>
                        <input 
                          className="signup-input" 
                          id="password" 
                          placeholder="••••••••" 
                          required 
                          type={showPassword ? 'text' : 'password'}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <button 
                          className="pwd-toggle-btn" 
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                            {showPassword ? 'visibility_off' : 'visibility'}
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* Taste / Dietary Preferences Pill Toggles */}
                    <div className="input-group">
                      <label className="input-label" style={{ marginBottom: '0.5rem' }}>
                        Primary Taste & Dietary Preference <span style={{ fontWeight: 'normal', color: 'var(--on-surface-variant)' }}>(Optional)</span>
                      </label>
                      <div className="diet-grid">
                        <button 
                          className={`diet-pill ${activeDiet === 'all' ? 'active-diet' : ''}`} 
                          type="button"
                          onClick={() => setActiveDiet('all')}
                        >
                          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>dinner_dining</span>
                          <span>All Menus</span>
                        </button>
                        <button 
                          className={`diet-pill ${activeDiet === 'non-veg' ? 'active-diet' : ''}`} 
                          type="button"
                          onClick={() => setActiveDiet('non-veg')}
                        >
                          <span className="material-symbols-outlined" style={{ fontSize: '18px', color: activeDiet === 'non-veg' ? 'inherit' : 'var(--error)' }}>kebab_dining</span>
                          <span>Non-Veg</span>
                        </button>
                        <button 
                          className={`diet-pill ${activeDiet === 'pure-veg' ? 'active-diet' : ''}`} 
                          type="button"
                          onClick={() => setActiveDiet('pure-veg')}
                        >
                          <span className="material-symbols-outlined" style={{ fontSize: '18px', color: activeDiet === 'pure-veg' ? 'inherit' : 'var(--primary)' }}>eco</span>
                          <span>Pure Veg</span>
                        </button>
                      </div>
                    </div>

                    {/* Checkbox Options */}
                    <div className="checkbox-group">
                      <label className="checkbox-label">
                        <input 
                          className="signup-checkbox" 
                          required 
                          type="checkbox"
                          name="agreedToTos"
                          checked={formData.agreedToTos}
                          onChange={handleChange}
                        />
                        <span className="checkbox-text">
                          I agree to Amber & Clove's <a className="checkbox-link" href="#">Terms of Service</a> & <a className="checkbox-link" href="#">Privacy Policy</a>.
                        </span>
                      </label>
                      <label className="checkbox-label">
                        <input 
                          className="signup-checkbox" 
                          type="checkbox"
                          name="marketingOptIn"
                          checked={formData.marketingOptIn}
                          onChange={handleChange}
                        />
                        <span className="checkbox-text" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                          <span>Send me mouth-watering weekend specials and cooking updates via WhatsApp</span>
                          <span className="material-symbols-outlined" style={{ color: 'var(--primary)', fontSize: '16px' }}>chat</span>
                        </span>
                      </label>
                    </div>

                    {/* Primary Submit CTA */}
                    <div style={{ paddingTop: '0.5rem' }}>
                      <button 
                        className="signup-submit-btn" 
                        type="submit"
                        disabled={isSubmitting || isSuccess}
                        style={{ 
                          backgroundColor: isSuccess ? 'var(--primary)' : '',
                          opacity: isSubmitting ? 0.9 : 1
                        }}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="material-symbols-outlined" style={{ animation: 'spin 1s linear infinite' }}>progress_activity</span>
                            <span>Creating Account...</span>
                          </>
                        ) : isSuccess ? (
                          <>
                            <span className="material-symbols-outlined">check_circle</span>
                            <span>Account Created!</span>
                          </>
                        ) : (
                          <>
                            <span>Create Account & Claim ₹100 Off</span>
                            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>arrow_forward</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
                
                {/* Bottom Micro Links & Fast Guest Access */}
                <div className="bottom-links">
                  <p className="signin-prompt">
                    Already have an account? 
                    <Link className="signin-link" to="/login">Sign in here</Link>
                  </p>
                  <div className="guest-access-pill">
                    <span>
                      ⚡ In a hurry? <a className="guest-access-link" href="#">Guest checkout</a> is always available.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Culinary Safety & Transparency Mini Banner */}
            <div className="safety-banner">
              <div className="safety-banner-left">
                <div className="safety-icon-wrapper">
                  <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>verified</span>
                </div>
                <div>
                  <p className="safety-title">FSSAI 5-Star Hygiene Certified Cloud Pods</p>
                  <p className="safety-desc">Every dispatch kitchen maintains constant medical-grade sanitized airflows and HEPA filters.</p>
                </div>
              </div>
              
              <div className="safety-stats">
                <div className="stat-item">
                  <span className="stat-label">Average Prep Time</span>
                  <span className="stat-value">14 Mins</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-label">Kitchen Pods</span>
                  <span className="stat-value-dark">12 Central Hubs</span>
                </div>
              </div>
            </div>
            
          </div>
        </section>
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
    </>
  );
};

export default SignupPage;
