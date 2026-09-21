import React from 'react';
import '../styles/CartDrawer.css';

const CartDrawer = ({ isOpen, onClose, items, onUpdateQty, onRemove }) => {
  const totalAmount = items.reduce((sum, item) => sum + (item.price * item.qty), 0);

  return (
    <>
      <div 
        className={`cart-overlay ${isOpen ? 'open' : ''}`} 
        onClick={onClose}
      />
      
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2 className="cart-title">
            <span className="material-symbols-outlined">shopping_bag</span>
            Your Cart
          </h2>
          <button className="close-btn" onClick={onClose} aria-label="Close cart">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="cart-items">
          {items.length === 0 ? (
            <div className="empty-cart">
              <span className="material-symbols-outlined empty-cart-icon">shopping_cart</span>
              <h3>Your cart is empty</h3>
              <p>Looks like you haven't added anything yet.</p>
            </div>
          ) : (
            items.map(item => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} className="cart-item-image" />
                
                <div className="cart-item-details">
                  <div>
                    <h4 className="cart-item-name">{item.name}</h4>
                    <p className="cart-item-price">₹{item.price}</p>
                  </div>
                  
                  <div className="cart-item-actions">
                    <div className="quantity-control">
                      <button className="qty-btn" onClick={() => onUpdateQty(item.id, -1)} aria-label="Decrease quantity">
                        <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>remove</span>
                      </button>
                      <span className="qty-text">{item.qty}</span>
                      <button className="qty-btn" onClick={() => onUpdateQty(item.id, 1)} aria-label="Increase quantity">
                        <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>add</span>
                      </button>
                    </div>
                    
                    <button className="remove-btn" onClick={() => onRemove(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-footer">
            <div className="cart-summary-row">
              <span>Item Total</span>
              <span>₹{totalAmount}</span>
            </div>
            <div className="cart-summary-row">
              <span>Taxes & Charges</span>
              <span>₹{Math.round(totalAmount * 0.05)}</span>
            </div>
            
            <div className="cart-summary-total">
              <span>Grand Total</span>
              <span>₹{totalAmount + Math.round(totalAmount * 0.05)}</span>
            </div>
            
            <button className="checkout-btn" onClick={() => alert('Proceeding to Guest Checkout...')}>
              <span>Guest Checkout</span>
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>arrow_forward</span>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
