export default function CustomerHome() {
  return (
    <div className="container" style={{ padding: '2rem 1rem' }}>
      <div style={{ 
        backgroundColor: 'var(--tertiary-container)', 
        borderRadius: 'var(--radius-xl)', 
        padding: '2.5rem 1.5rem',
        marginBottom: '2rem',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '2.25rem', marginBottom: '1rem', lineHeight: 1.1 }}>
          Craving something <span style={{ color: 'var(--primary)' }}>delicious?</span>
        </h1>
        <p style={{ color: 'var(--on-surface-variant)', marginBottom: '1.5rem', fontSize: '1.125rem' }}>
          Fresh, hot, and delivered in minutes.
        </p>
        <button className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
          Order Now
        </button>
      </div>
      
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Popular Categories</h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', 
        gap: '1rem',
        marginBottom: '3rem'
      }}>
        {['Biryani', 'Curries', 'Starters', 'Breads', 'Desserts', 'Beverages'].map((cat) => (
          <div key={cat} style={{ 
            backgroundColor: 'var(--surface-container-lowest)',
            border: '1px solid #e5e7eb',
            borderRadius: 'var(--radius-md)',
            padding: '1rem',
            textAlign: 'center',
            cursor: 'pointer',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <div style={{ width: '48px', height: '48px', backgroundColor: 'var(--surface-container-low)', borderRadius: '50%', margin: '0 auto 0.5rem' }}></div>
            <span style={{ fontWeight: 600, fontSize: '0.875rem' }}>{cat}</span>
          </div>
        ))}
      </div>
      
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Trending Items</h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
        gap: '1.5rem' 
      }}>
        {/* Placeholder for food cards */}
        <div className="card">
          <div style={{ height: '160px', backgroundColor: 'var(--surface-dim)', borderRadius: 'var(--radius-sm)', marginBottom: '1rem' }}></div>
          <h3 style={{ fontSize: '1.125rem', marginBottom: '0.25rem' }}>Hyderabadi Chicken Biryani</h3>
          <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.875rem', marginBottom: '1rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            Aromatic basmati rice layered with marinated chicken, cooked in authentic dum style.
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontWeight: 800, fontSize: '1.25rem' }}>$14.99</span>
            <button className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Add</button>
          </div>
        </div>
        
        <div className="card">
          <div style={{ height: '160px', backgroundColor: 'var(--surface-dim)', borderRadius: 'var(--radius-sm)', marginBottom: '1rem' }}></div>
          <h3 style={{ fontSize: '1.125rem', marginBottom: '0.25rem' }}>Butter Chicken</h3>
          <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.875rem', marginBottom: '1rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            Tender chicken cooked in a rich, creamy tomato and butter sauce.
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontWeight: 800, fontSize: '1.25rem' }}>$12.99</span>
            <button className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Add</button>
          </div>
        </div>
      </div>
    </div>
  );
}
