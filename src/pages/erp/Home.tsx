export default function ERPHome() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>Dashboard Overview</h1>
          <p style={{ color: 'var(--on-surface-variant)' }}>Real-time metrics for today's operations.</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="btn btn-ghost" style={{ padding: '0.5rem 1rem' }}>Export Report</button>
          <button className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>+ New Order</button>
        </div>
      </div>
      
      {/* Metrics Row */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
        gap: '1.5rem',
        marginBottom: '2rem'
      }}>
        <MetricCard title="Total Orders" value="142" change="+12%" isPositive={true} />
        <MetricCard title="Revenue" value="$3,240.50" change="+8.4%" isPositive={true} />
        <MetricCard title="Avg Prep Time" value="12m 40s" change="-1.2m" isPositive={true} />
        <MetricCard title="Active Tickets" value="18" change="+3" isPositive={false} />
      </div>
      
      {/* Split Content Area */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
        {/* Recent Orders Table */}
        <div className="card" style={{ padding: '0' }}>
          <div style={{ padding: '1.5rem', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 style={{ fontSize: '1.25rem' }}>Recent Orders</h2>
            <button style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.875rem' }}>View All</button>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Status</th>
                <th>Items</th>
                <th>Total</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: '#AC-8492', status: 'new', items: 3, total: '$42.50', time: 'Just now' },
                { id: '#AC-8491', status: 'prep', items: 1, total: '$14.99', time: '4m ago' },
                { id: '#AC-8490', status: 'ready', items: 5, total: '$84.20', time: '12m ago' },
                { id: '#AC-8489', status: 'delivery', items: 2, total: '$28.00', time: '24m ago' },
              ].map(order => (
                <tr key={order.id}>
                  <td style={{ fontWeight: 600 }}>{order.id}</td>
                  <td>
                    <span className={`chip chip-${order.status}`}>
                      {(order.status === 'new' || order.status === 'prep') && <span className="indicator-dot"></span>}
                      {order.status}
                    </span>
                  </td>
                  <td>{order.items} items</td>
                  <td style={{ fontWeight: 600 }}>{order.total}</td>
                  <td style={{ color: 'var(--on-surface-variant)', fontSize: '0.875rem' }}>{order.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Alerts / Inventory Warning */}
        <div className="card">
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Low Stock Alerts</h2>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { item: 'Saffron Threads', qty: '40g', state: 'critical' },
              { item: 'Fresh Mint', qty: '200g', state: 'warning' },
              { item: 'Basmati Rice', qty: '12kg', state: 'warning' }
            ].map(stock => (
              <li key={stock.item} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem', backgroundColor: stock.state === 'critical' ? 'var(--error-container)' : 'var(--tertiary-container)', borderRadius: 'var(--radius-sm)' }}>
                <div>
                  <div style={{ fontWeight: 600, color: stock.state === 'critical' ? 'var(--on-error-container)' : 'var(--on-tertiary-container)' }}>{stock.item}</div>
                  <div style={{ fontSize: '0.75rem', opacity: 0.8 }}>Remaining: {stock.qty}</div>
                </div>
                <button className="btn" style={{ padding: '0.25rem 0.75rem', fontSize: '0.75rem', backgroundColor: 'var(--surface-container-lowest)', border: '1px solid rgba(0,0,0,0.1)' }}>Reorder</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function MetricCard({ title, value, change, isPositive }: { title: string, value: string, change: string, isPositive: boolean }) {
  return (
    <div className="card">
      <h3 style={{ color: 'var(--on-surface-variant)', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{title}</h3>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.25rem', fontWeight: 800, lineHeight: 1 }}>{value}</div>
        <div style={{ 
          color: isPositive ? 'var(--success)' : 'var(--error)', 
          fontWeight: 700, 
          fontSize: '0.875rem',
          backgroundColor: isPositive ? '#dcfce7' : '#fee2e2',
          padding: '0.125rem 0.375rem',
          borderRadius: 'var(--radius-sm)'
        }}>
          {change}
        </div>
      </div>
    </div>
  );
}
