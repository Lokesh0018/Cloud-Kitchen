import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/SignupPage.css';
import '../styles/LoginPage.css'; /* Share layout styles */
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
            <div className="login-grid">
              
              {/* Left Showcase Side */}
              <div className="showcase-section">
                <div className="showcase-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2000&auto=format&fit=crop')" }}></div>
                <div className="showcase-overlay"></div>
                
                <div className="showcase-top">
                  <div className="rating-tag">
                    <span className="material-symbols-outlined" style={{ color: 'var(--primary-container)', fontSize: '18px', fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="rating-score">4.96</span>
                    <span className="rating-count">(3,200+ foodies)</span>
                  </div>
                  <div className="live-tag" style={{ display: 'inline-flex' }}>
                    <span className="live-indicator"></span>
                    Live Onboarding
                  </div>
                </div>

                <div className="showcase-center">
                  <span className="eyebrow">FLAT 20% OFF ON FIRST 3 ORDERS</span>
                  <h1 className="showcase-title">Join the Cloud Kitchen Table</h1>
                  <p className="showcase-desc">
                    Step into high-velocity gourmet dining. Authentic earthen dum pots, kinetic telemetry tracking, and early access to weekend culinary experiments.
                  </p>
                  <ul className="feature-list">
                    <li className="feature-item">
                      <span className="feature-icon-wrapper">
                        <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>skillet</span>
                      </span>
                      <span>Dum Handi Guarantee: Slow-fired in earthen clay</span>
                    </li>
                    <li className="feature-item">
                      <span className="feature-icon-wrapper">
                        <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>radar</span>
                      </span>
                      <span>Live Telemetry: KDS line cook & temperature metrics</span>
                    </li>
                    <li className="feature-item">
                      <span className="feature-icon-wrapper">
                        <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>lock_open</span>
                      </span>
                      <span>Curated Secret Menu: Weekend tasting flights</span>
                    </li>
                  </ul>
                </div>

                <div className="showcase-bottom">
                  <div className="testimonial">
                    <span className="material-symbols-outlined" style={{ color: 'var(--primary-fixed)', fontSize: '22px' }}>verified_user</span>
                    <p className="testimonial-text">
                      "End-to-End Encrypted Verification for all new members."
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Right Registration Form Side */}
              <div className="form-section">
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
                    
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      {/* Full Name */}
                      <div className="form-group" style={{ flex: 1, marginBottom: '1rem' }}>
                        <div className="input-wrapper">
                          <span className="material-symbols-outlined input-icon">person</span>
                          <input 
                            className="form-input" 
                            id="fullName"
                            name="fullName"
                            placeholder=" " 
                            required 
                            type="text"
                            value={formData.fullName}
                            onChange={handleChange}
                          />
                          <label className="form-label" htmlFor="fullName">Full Name</label>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="form-group" style={{ flex: 1, marginBottom: '1rem' }}>
                        <div className="input-wrapper">
                          <span className="material-symbols-outlined input-icon">mail</span>
                          <input 
                            className="form-input" 
                            id="email"
                            name="email"
                            placeholder=" " 
                            required 
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                          />
                          <label className="form-label" htmlFor="email">Email Address</label>
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem' }}>
                      {/* Mobile Number */}
                      <div className="form-group" style={{ flex: 1, marginBottom: '1rem' }}>
                        <div className="input-wrapper">
                          <span className="material-symbols-outlined input-icon">call</span>
                          <input 
                            className="form-input" 
                            id="mobile"
                            name="mobile"
                            maxLength="10" 
                            placeholder=" " 
                            required 
                            type="tel"
                            value={formData.mobile}
                            onChange={handleChange}
                          />
                          <label className="form-label" htmlFor="mobile">Mobile No. (+91)</label>
                        </div>
                      </div>

                      {/* Create Password */}
                      <div className="form-group" style={{ flex: 1, marginBottom: '1rem' }}>
                        <div className="input-wrapper">
                          <span className="material-symbols-outlined input-icon">lock</span>
                          <input 
                            className="form-input" 
                            type={showPassword ? "text" : "password"} 
                            id="password" 
                            name="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            placeholder=" " 
                            required 
                            style={{ paddingRight: '3rem' }}
                          />
                          <label className="form-label" htmlFor="password">Password (8+ chars)</label>
                          <button 
                            type="button" 
                            className="toggle-pwd-btn" 
                            onClick={() => setShowPassword(!showPassword)}
                            aria-label={showPassword ? "Hide password" : "Show password"}
                          >
                            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                              {showPassword ? 'visibility_off' : 'visibility'}
                            </span>
                          </button>
                        </div>
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
                          className="checkbox" 
                          required 
                          type="checkbox"
                          name="agreedToTos"
                          checked={formData.agreedToTos}
                          onChange={handleChange}
                        />
                        <span className="checkbox-text">
                          I agree to Cloud Kitchen <a className="checkbox-link" href="#">Terms of Service</a> & <a className="checkbox-link" href="#">Privacy Policy</a>.
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
    </>
  );
};

export default SignupPage;
