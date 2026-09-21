import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/LoginPage.css';

const ForgotPasswordPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [timer, setTimer] = useState(45);
  const [otp, setOtp] = useState(['', '', '', '']);
  const otpRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleOtpChange = (index, value) => {
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value !== '' && index < 3) {
      otpRefs[index + 1].current.focus();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    // Auto-focus previous input on backspace if current is empty
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      otpRefs[index - 1].current.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      const interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }, 1200);
  };

  return (
    <>
      <main className="login-page-container">
        <div className="login-content">
          <div className="login-grid" style={{ minHeight: 'auto' }}>
            {/* Showcase Section */}
            <div className="showcase-section">
              <div className="showcase-bg" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDCrWMjxYJHRYxsXlrkw4_L1Vc7I4ZTCs7oaKlhY_ti_oNH7dzqRkgWxIxeq_xjPUuECdWRHjZRcqEPlTyb3BP-L10aoNAujBhFZ7t873q05B1Y1H-l9vgHNArUAr9W-5P_pP43wucS3AoQdBnb0N-hB0qMhYHZxCoxVYLvPkjoDIVaXO2Fh9N6-dPJzwqW0YsusgYOFwkx0yatQTscmgVK90XAoVV7qC-W5T3fkUq55ELaRl-BaONp')" }}></div>
              <div className="showcase-overlay"></div>
              
              <div className="showcase-top">
                <div className="inline-flex" style={{ backgroundColor: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', padding: '0.25rem 0.75rem', borderRadius: '9999px', display: 'flex', alignItems: 'center', gap: '0.25rem', marginBottom: '0.5rem' }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--primary-container)', fontSize: '18px' }}>lock_reset</span>
                  <span style={{ fontSize: '14px', color: 'var(--inverse-on-surface)', fontWeight: '600' }}>Recover Your Foodie Account</span>
                </div>
              </div>

              <div className="showcase-center">
                <h1 className="showcase-title" style={{ fontSize: '32px', lineHeight: '36px', margin: '0.5rem 0' }}>Hassle-free dining access.</h1>
                <p className="showcase-desc" style={{ maxWidth: '400px', fontSize: '14px', marginBottom: '0.5rem' }}>
                  Get back to your saved hearth favorites, live dispatch telemetry, and bespoke chef tasting notes in seconds.
                </p>
                <ul className="feature-list" style={{ marginTop: '0.5rem', gap: '0.25rem' }}>
                  <li className="feature-item" style={{ backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(4px)', padding: '0.5rem 0.75rem', borderRadius: '9999px', fontSize: '13px' }}>
                    <span className="feature-icon-wrapper" style={{ backgroundColor: 'var(--primary-container)', color: 'var(--on-primary-container)', width: '1.25rem', height: '1.25rem' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>speed</span>
                    </span>
                    <span>Instant SMS OTP or Email Magic Link</span>
                  </li>
                  <li className="feature-item" style={{ backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(4px)', padding: '0.5rem 0.75rem', borderRadius: '9999px', fontSize: '13px' }}>
                    <span className="feature-icon-wrapper" style={{ backgroundColor: 'var(--primary-container)', color: 'var(--on-primary-container)', width: '1.25rem', height: '1.25rem' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>shield</span>
                    </span>
                    <span>End-to-end Encrypted Verification</span>
                  </li>
                  <li className="feature-item" style={{ backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(4px)', padding: '0.5rem 0.75rem', borderRadius: '9999px', fontSize: '13px' }}>
                    <span className="feature-icon-wrapper" style={{ backgroundColor: 'var(--primary-container)', color: 'var(--on-primary-container)', width: '1.25rem', height: '1.25rem' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>room_service</span>
                    </span>
                    <span>Instant Guest Checkout remains active</span>
                  </li>
                </ul>
              </div>

              <div className="showcase-bottom" style={{ paddingTop: '0.5rem' }}>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', padding: '0.75rem', borderRadius: '0.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                    <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em', opacity: 0.7 }}>Dispatch Kitchen State</span>
                    <span style={{ fontSize: '11px', color: 'var(--primary-fixed)', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--primary-container)' }}></span> Ready for Orders
                    </span>
                  </div>
                  <p style={{ fontSize: '13px', margin: 0, opacity: 0.9 }}>
                    Current kitchen prep-to-dispatch latency is 18 mins. Your saved cart items are safely held in guest state.
                  </p>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="form-section" style={{ padding: '2.5rem 2rem', justifyContent: 'center' }}>
              <div className="form-wrapper">
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '2rem' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '18px', background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.15) 0%, rgba(249, 115, 22, 0.05) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.5), 0 4px 12px rgba(249, 115, 22, 0.1)', border: '1px solid rgba(249, 115, 22, 0.2)' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>lock_reset</span>
                  </div>
                  <span style={{ fontSize: '11px', padding: '0.4rem 0.75rem', borderRadius: '8px', backgroundColor: 'var(--surface-container-low)', color: 'var(--on-surface-variant)', fontWeight: '700', border: '1px solid var(--surface-container-high)', letterSpacing: '0.05em', textTransform: 'uppercase', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                    Account Recovery
                  </span>
                </div>

                <div>
                  <h2 className="form-title" style={{ fontSize: '32px', fontWeight: '800', letterSpacing: '-0.03em', marginBottom: '0.5rem', color: 'var(--on-surface)' }}>Reset Password</h2>
                  <p className="form-subtitle" style={{ fontSize: '15px', color: 'var(--on-surface-variant)', marginTop: '0', marginBottom: '2rem', lineHeight: '1.6' }}>Enter your registered email address and we'll send you a 4-digit OTP to regain access.</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                      <div className="input-wrapper">
                        <span className="material-symbols-outlined input-icon">mail</span>
                        <input 
                          className="form-input" 
                          id="recovery-email" 
                          placeholder=" " 
                          required 
                          type="email" 
                          style={{ height: '3.25rem' }}
                        />
                        <label className="form-label" htmlFor="recovery-email">Email Address</label>
                      </div>
                    </div>

                  {!isSuccess && (
                    <button 
                      type="submit" 
                      className="submit-btn" 
                      disabled={isSubmitting}
                      style={{ 
                        marginTop: '2rem',
                        height: '3.5rem',
                        borderRadius: '12px',
                        background: 'linear-gradient(135deg, var(--primary) 0%, #ea580c 100%)',
                        opacity: isSubmitting ? 0.7 : 1,
                        cursor: isSubmitting ? 'not-allowed' : 'pointer',
                        border: 'none',
                        color: 'white',
                        fontWeight: '700',
                        fontSize: '16px',
                        letterSpacing: '0.03em',
                        boxShadow: '0 8px 20px -4px rgba(249, 115, 22, 0.3), inset 0 1px 1px rgba(255,255,255,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        width: '100%',
                        transition: 'transform 0.2s, box-shadow 0.2s'
                      }}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="material-symbols-outlined" style={{ animation: 'spin 1s linear infinite' }}>progress_activity</span> 
                          <span>Sending OTP...</span>
                        </>
                      ) : (
                        <>
                          <span>Send OTP</span>
                          <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>arrow_forward</span>
                        </>
                      )}
                    </button>
                  )}
                </form>

                {isSuccess && (
                  <div style={{ marginTop: '1.5rem', animation: 'fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                      <label style={{ fontSize: '14px', fontWeight: '600', color: 'var(--on-surface)' }}>Enter 4-digit OTP</label>
                      <div style={{ fontSize: '13px', color: 'var(--primary)', fontWeight: '600' }}>
                        {timer > 0 ? `00:${timer.toString().padStart(2, '0')}` : (
                          <button style={{ background: 'none', border: 'none', padding: 0, color: 'inherit', font: 'inherit', cursor: 'pointer' }} onClick={() => setTimer(45)}>Resend OTP</button>
                        )}
                      </div>
                    </div>
                    <div className="otp-inputs" style={{ justifyContent: 'center', gap: '1rem' }}>
                      {otp.map((digit, index) => (
                        <input 
                          key={index}
                          ref={otpRefs[index]}
                          type="text" 
                          maxLength="1" 
                          className="otp-input" 
                          placeholder="-" 
                          value={digit}
                          onChange={(e) => handleOtpChange(index, e.target.value)}
                          onKeyDown={(e) => handleOtpKeyDown(index, e)}
                        />
                      ))}
                    </div>
                    <button 
                      className="submit-btn" 
                      style={{ 
                        marginTop: '2rem',
                        height: '3.5rem',
                        borderRadius: '12px',
                        background: 'linear-gradient(135deg, var(--primary) 0%, #ea580c 100%)',
                        border: 'none',
                        color: 'white',
                        fontWeight: '700',
                        fontSize: '16px',
                        letterSpacing: '0.03em',
                        boxShadow: '0 8px 20px -4px rgba(249, 115, 22, 0.3), inset 0 1px 1px rgba(255,255,255,0.2)',
                        width: '100%'
                      }}
                    >
                      Verify & Reset Password
                    </button>
                  </div>
                )}

                <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', fontSize: '14px' }}>
                  <Link to="/login" style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: 'var(--on-surface-variant)', textDecoration: 'none', fontWeight: '700', transition: 'color 0.2s', padding: '0.5rem', borderRadius: '8px' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--surface-container)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_back</span>
                    <span>Back to Login</span>
                  </Link>
                  <div style={{ width: '1px', height: '16px', backgroundColor: 'rgba(0,0,0,0.1)' }}></div>
                  <Link to="/menu" style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: 'var(--primary)', textDecoration: 'none', fontWeight: '700', transition: 'color 0.2s', padding: '0.5rem', borderRadius: '8px' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(249, 115, 22, 0.1)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>restaurant_menu</span>
                    <span>Guest Checkout</span>
                  </Link>
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
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
};

export default ForgotPasswordPage;
