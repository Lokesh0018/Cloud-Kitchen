import { Outlet, Link } from 'react-router-dom';
import { LayoutDashboard, ReceiptText, Utensils, TrendingUp, Settings, Bell } from 'lucide-react';

export default function ERPLayout() {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      {/* Sidebar */}
      <aside style={{ 
        width: '260px', 
        backgroundColor: 'var(--secondary)', 
        color: 'var(--on-secondary)',
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0
      }}>
        <div style={{ padding: '1.5rem 1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 800 }}>Amber & Clove</h1>
          <div style={{ fontSize: '0.75rem', opacity: 0.7, marginTop: '0.25rem' }}>Kitchen OS ERP</div>
        </div>
        
        <nav style={{ flex: 1, padding: '1rem 0', overflowY: 'auto' }}>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            <NavItem to="/erp" icon={<LayoutDashboard size={20} />} label="Dashboard" />
            <NavItem to="/erp/orders" icon={<ReceiptText size={20} />} label="Live Orders & KOT" />
            <NavItem to="/erp/menu" icon={<Utensils size={20} />} label="Menu & Inventory" />
            <NavItem to="/erp/analytics" icon={<TrendingUp size={20} />} label="Analytics" />
          </ul>
        </nav>
        
        <div style={{ padding: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <button style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.75rem', 
            width: '100%', 
            padding: '0.75rem',
            borderRadius: 'var(--radius-md)',
            color: 'inherit',
            textAlign: 'left'
          }}>
            <Settings size={20} />
            <span>Settings</span>
          </button>
          <div style={{ marginTop: '1rem', fontSize: '0.75rem', textAlign: 'center' }}>
            <Link to="/" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>View Customer App</Link>
          </div>
        </div>
      </aside>
      
      {/* Main Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <header style={{ 
          height: '64px',
          backgroundColor: 'var(--surface-container-lowest)',
          borderBottom: '1px solid #e5e7eb',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 1.5rem'
        }}>
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Kitchen Status: <span style={{ color: 'var(--success)' }}>Optimal</span></h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button style={{ padding: '0.5rem', position: 'relative' }}>
              <Bell size={20} />
              <span style={{ position: 'absolute', top: 4, right: 4, width: 8, height: 8, backgroundColor: 'var(--primary)', borderRadius: '50%' }}></span>
            </button>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--surface-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '0.875rem', fontWeight: 'bold' }}>JD</span>
            </div>
          </div>
        </header>
        
        <main style={{ flex: 1, backgroundColor: 'var(--surface-container-low)', overflowY: 'auto', padding: '1.5rem' }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

function NavItem({ to, icon, label }: { to: string, icon: React.ReactNode, label: string }) {
  // Simplistic nav item without active state logic for now
  return (
    <li>
      <Link to={to} style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '0.75rem', 
        padding: '0.75rem 1.5rem',
        color: 'inherit',
        opacity: 0.8
      }}>
        {icon}
        <span>{label}</span>
      </Link>
    </li>
  );
}
