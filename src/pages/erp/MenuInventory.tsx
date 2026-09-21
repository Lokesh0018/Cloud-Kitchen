export default function MenuInventory() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>Menu & Inventory</h1>
          <p style={{ color: 'var(--on-surface-variant)' }}>Manage items, pricing, and stock levels.</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="btn btn-ghost" style={{ padding: '0.5rem 1rem' }}>Import CSV</button>
          <button className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>+ Add Item</button>
        </div>
      </div>
      
      <div className="card" style={{ padding: 0 }}>
        <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid #e5e7eb', display: 'flex', gap: '1rem' }}>
          <input type="text" className="input-field" placeholder="Search menu items..." style={{ maxWidth: '320px' }} />
          <select className="input-field" style={{ maxWidth: '200px' }}>
            <option>All Categories</option>
            <option>Biryani</option>
            <option>Curries</option>
          </select>
        </div>
        
        <table className="data-table">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: 'Hyderabadi Chicken Biryani', cat: 'Biryani', price: '$14.99', stock: 'In Stock', st: 'ready' },
              { name: 'Butter Chicken', cat: 'Curries', price: '$12.99', stock: 'Low Stock', st: 'prep' },
              { name: 'Garlic Naan', cat: 'Breads', price: '$3.50', stock: 'In Stock', st: 'ready' },
              { name: 'Saffron Milk', cat: 'Beverages', price: '$4.99', stock: 'Out of Stock', st: 'cancelled' },
            ].map(item => (
              <tr key={item.name}>
                <td style={{ fontWeight: 600 }}>{item.name}</td>
                <td>{item.cat}</td>
                <td>{item.price}</td>
                <td>
                  <span className={`chip chip-${item.st}`}>{item.stock}</span>
                </td>
                <td>
                  <button style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.875rem' }}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
