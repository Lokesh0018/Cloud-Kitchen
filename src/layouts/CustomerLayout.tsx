import { Outlet, Link } from 'react-router-dom';
import { ShoppingBag, Menu, User, Search } from 'lucide-react';

export default function CustomerLayout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <header style={{ 
        backgroundColor: 'var(--surface-container-lowest)', 
        padding: '1rem', 
        borderBottom: '1px solid #e5e7eb',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 10
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button style={{ padding: '0.5rem' }} aria-label="Menu">
            <Menu size={24} />
          </button>
          <Link to="/" style={{ fontWeight: 800, fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: 'var(--primary)' }}>
            Amber & Clove
          </Link>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button style={{ padding: '0.5rem' }} aria-label="Search">
            <Search size={24} />
          </button>
          <button style={{ padding: '0.5rem' }} aria-label="Profile">
            <User size={24} />
          </button>
          <button style={{ padding: '0.5rem', position: 'relative' }} aria-label="Cart">
            <ShoppingBag size={24} />
            <span style={{ 
              position: 'absolute', 
              top: '2px', 
              right: '2px', 
              backgroundColor: 'var(--primary)', 
              color: 'white', 
              borderRadius: '50%', 
              width: '18px', 
              height: '18px', 
              fontSize: '10px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              fontWeight: 'bold'
            }}>3</span>
          </button>
        </div>
      </header>
      
      <main style={{ flex: 1, backgroundColor: 'var(--background)' }}>
        <Outlet />
      </main>
      
      <footer style={{ 
        backgroundColor: 'var(--surface-container-highest)', 
        padding: '2rem 1rem', 
        textAlign: 'center',
        color: 'var(--on-surface-variant)',
        fontSize: '0.875rem'
      }}>
        <p>&copy; 2026 Amber & Clove Cloud Kitchen. All rights reserved.</p>
        <div style={{ marginTop: '1rem' }}>
          <Link to="/erp" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Go to ERP Dashboard</Link>
        </div>
      </footer>
    </div>
  );
}
