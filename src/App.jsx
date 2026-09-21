import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import ForgotPasswordPage from './components/ForgotPasswordPage';
import Header from './components/Header';
import Footer from './components/Footer';
import MenuPage from './components/MenuPage';
import HomePage from './components/HomePage';
import CartDrawer from './components/CartDrawer';
import GuestCheckoutModal from './components/GuestCheckoutModal';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const handleAddToCart = (item) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { ...item, qty: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQty = (id, delta) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, qty: Math.max(0, item.qty + delta) };
      }
      return item;
    }).filter(item => item.qty > 0));
  };

  const handleRemove = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Header 
          cartItemCount={cartItems.reduce((acc, item) => acc + item.qty, 0)} 
          onOpenCart={() => setIsCartOpen(true)}
          onOpenOrderModal={() => setIsOrderModalOpen(true)}
        />
        <Routes>
          <Route path="/" element={<HomePage onAddToCart={handleAddToCart} onOpenOrderModal={() => setIsOrderModalOpen(true)} />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/menu" element={<MenuPage onAddToCart={handleAddToCart} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
        
        <CartDrawer 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)} 
          items={cartItems} 
          onUpdateQty={handleUpdateQty}
          onRemove={handleRemove}
        />

        <GuestCheckoutModal 
          isOpen={isOrderModalOpen}
          onClose={() => setIsOrderModalOpen(false)}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
