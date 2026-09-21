export default function CartCheckout() {
  return (
    <div className="container" style={{ padding: '2rem 1rem', maxWidth: '800px' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Your Cart</h1>
      
      <div style={{ display: 'grid', gap: '2rem' }}>
        <div className="card" style={{ padding: '0' }}>
          <div style={{ padding: '1.5rem', borderBottom: '1px solid #e5e7eb' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.125rem' }}>Hyderabadi Chicken Biryani</h3>
                <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.875rem' }}>Extra Raita</p>
              </div>
              <div style={{ fontWeight: 800, fontSize: '1.125rem' }}>$14.99</div>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <button style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--surface-container-low)', fontWeight: 'bold' }}>-</button>
                <span style={{ fontWeight: 600 }}>1</span>
                <button style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--surface-container-low)', fontWeight: 'bold' }}>+</button>
              </div>
              <button style={{ color: 'var(--error)', fontSize: '0.875rem', fontWeight: 600 }}>Remove</button>
            </div>
          </div>
          
          <div style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', color: 'var(--on-surface-variant)' }}>
              <span>Subtotal</span>
              <span>$14.99</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', color: 'var(--on-surface-variant)' }}>
              <span>Taxes & Fees</span>
              <span>$1.50</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #e5e7eb', fontWeight: 800, fontSize: '1.25rem' }}>
              <span>Total</span>
              <span>$16.49</span>
            </div>
          </div>
        </div>
        
        <div className="card">
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Delivery Details</h2>
          <div style={{ display: 'grid', gap: '1rem' }}>
            <input type="text" className="input-field" placeholder="Full Name" defaultValue="Jane Doe" />
            <input type="text" className="input-field" placeholder="Phone Number" defaultValue="(555) 123-4567" />
            <textarea className="input-field" style={{ height: 'auto', paddingTop: '0.75rem', paddingBottom: '0.75rem' }} rows={3} placeholder="Delivery Address" defaultValue="123 Cloud Kitchen Way, Apt 4B"></textarea>
          </div>
        </div>
        
        <button className="btn btn-primary" style={{ width: '100%', padding: '1.25rem', fontSize: '1.25rem' }}>
          Place Order - $16.49
        </button>
      </div>
    </div>
  );
}
