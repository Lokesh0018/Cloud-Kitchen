import React from 'react';
import '../styles/GuestCheckoutModal.css';

const GuestCheckoutModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="guest-modal-overlay" onClick={onClose}>
      <div className="guest-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="guest-modal-close" onClick={onClose} aria-label="Close">
          <span className="material-symbols-outlined">close</span>
        </button>
        <div className="guest-modal-header">
          <h2>Start Your Order</h2>
          <p>Please enter your delivery details to continue.</p>
        </div>
        <form className="guest-modal-form" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
          <div className="form-group">
            <label htmlFor="delivery-address">Delivery Address</label>
            <input type="text" id="delivery-address" placeholder="e.g. 123 Main St, Apt 4B" required />
          </div>
          <div className="form-group">
            <label htmlFor="contact-number">Contact Number</label>
            <input type="tel" id="contact-number" placeholder="e.g. 9876543210" required />
          </div>
          <button type="submit" className="guest-modal-submit-btn">Continue to Menu</button>
        </form>
      </div>
    </div>
  );
};

export default GuestCheckoutModal;
