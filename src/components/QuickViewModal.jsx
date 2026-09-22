import React, { useState, useEffect } from 'react';
import '../styles/QuickViewModal.css';

const QuickViewModal = ({ item, isOpen, onClose, onAddToCart }) => {
  const [spiceLevel, setSpiceLevel] = useState('medium');
  const [isAdding, setIsAdding] = useState(false);

  // Reset state when modal opens with new item
  useEffect(() => {
    if (isOpen) {
      setSpiceLevel('medium');
      setIsAdding(false);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, item]);

  if (!isOpen || !item) return null;

  const handleAdd = () => {
    setIsAdding(true);
    // Include custom options with the added item
    onAddToCart({ ...item, spiceLevel });
    setTimeout(() => {
      setIsAdding(false);
      onClose();
    }, 800);
  };

  return (
    <div className="quick-view-overlay" onClick={onClose}>
      <div 
        className="quick-view-modal" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button className="close-qv-btn" onClick={onClose} aria-label="Close modal">
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="qv-image-container">
          {/* Skeleton loader background built into the container via CSS */}
          <img src={item.image} alt={item.name} className="qv-image" loading="lazy" />
          
          <div className="qv-tags">
            <span className="qv-diet-badge">
              <span className={item.diet === 'veg' ? 'veg-dot' : 'non-veg-dot'}></span>
              {item.diet === 'veg' ? 'Pure Veg' : 'Non-Veg'}
            </span>
            <span className="qv-rating-badge">
              <span className="material-symbols-outlined icon-fill">star</span>
              {item.rating} <span className="qv-rating-count">({item.ratingCount})</span>
            </span>
          </div>
        </div>

        <div className="qv-content">
          <div className="qv-header">
            <h2 className="qv-title">{item.name}</h2>
            <p className="qv-desc">{item.desc}</p>
          </div>

          <div className="qv-meta">
            <div className="qv-meta-item">
              <span className="material-symbols-outlined">local_fire_department</span>
              <div>
                <span className="meta-val">{item.kcal}</span>
                <span className="meta-label">Calories</span>
              </div>
            </div>
            <div className="qv-meta-item">
              <span className="material-symbols-outlined">timer</span>
              <div>
                <span className="meta-val">{item.prep}</span>
                <span className="meta-label">Prep Time</span>
              </div>
            </div>
            <div className="qv-meta-item">
              <span className="material-symbols-outlined">restaurant</span>
              <div>
                <span className="meta-val">{item.portion}</span>
                <span className="meta-label">Portion</span>
              </div>
            </div>
          </div>

          <div className="qv-customization">
            <h3 className="qv-section-title">Customize Spice Level</h3>
            <div className="spice-selector">
              <label className={`spice-option ${spiceLevel === 'mild' ? 'active' : ''}`}>
                <input 
                  type="radio" 
                  name="spice" 
                  value="mild" 
                  checked={spiceLevel === 'mild'}
                  onChange={(e) => setSpiceLevel(e.target.value)} 
                />
                <span className="spice-icon">🌶️</span>
                <span>Mild</span>
              </label>
              <label className={`spice-option ${spiceLevel === 'medium' ? 'active' : ''}`}>
                <input 
                  type="radio" 
                  name="spice" 
                  value="medium" 
                  checked={spiceLevel === 'medium'}
                  onChange={(e) => setSpiceLevel(e.target.value)} 
                />
                <span className="spice-icon">🌶️🌶️</span>
                <span>Medium</span>
              </label>
              <label className={`spice-option ${spiceLevel === 'hot' ? 'active' : ''}`}>
                <input 
                  type="radio" 
                  name="spice" 
                  value="hot" 
                  checked={spiceLevel === 'hot'}
                  onChange={(e) => setSpiceLevel(e.target.value)} 
                />
                <span className="spice-icon">🔥</span>
                <span>Hot</span>
              </label>
            </div>
          </div>
        </div>

        <div className="qv-footer">
          <div className="qv-price-col">
            <span className="qv-price-label">Item Total</span>
            <span className="qv-price-val">₹{item.price}</span>
          </div>
          <button 
            className={`qv-add-btn ${isAdding ? 'adding' : ''}`}
            onClick={handleAdd}
          >
            {isAdding ? (
              <>
                <span className="material-symbols-outlined">check_circle</span>
                <span>Added to Cart</span>
              </>
            ) : (
              <>
                <span className="material-symbols-outlined">shopping_bag</span>
                <span>Add to Cart</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
