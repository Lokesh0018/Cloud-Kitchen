export default function LiveOrders() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>Live Orders & KOT</h1>
          <p style={{ color: 'var(--on-surface-variant)' }}>Manage real-time kitchen tickets.</p>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <span className="chip chip-new"><span className="indicator-dot"></span> 3 New</span>
          <span className="chip chip-prep"><span className="indicator-dot"></span> 5 Prep</span>
        </div>
      </div>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(3, 1fr)', 
        gap: '1.5rem',
        flex: 1,
        minHeight: 0 // allow scrolling inside columns
      }}>
        <KanbanColumn title="New Orders (3)" status="new" />
        <KanbanColumn title="Preparing (5)" status="prep" />
        <KanbanColumn title="Ready for Pickup (2)" status="ready" />
      </div>
    </div>
  );
}

function KanbanColumn({ title, status }: { title: string, status: string }) {
  return (
    <div style={{ 
      backgroundColor: 'rgba(0,0,0,0.02)', 
      borderRadius: 'var(--radius-md)', 
      padding: '1rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>
      <h3 style={{ fontSize: '1rem', fontWeight: 700, padding: '0.5rem' }}>{title}</h3>
      
      <div style={{ overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1, paddingRight: '0.5rem' }}>
        <TicketCard id="#AC-8492" time="4m ago" items={['1x Hyderabadi Biryani', '2x Garlic Naan']} status={status} />
        <TicketCard id="#AC-8493" time="1m ago" items={['1x Butter Chicken']} status={status} />
      </div>
    </div>
  );
}

function TicketCard({ id, time, items, status }: { id: string, time: string, items: string[], status: string }) {
  return (
    <div className="card" style={{ padding: '1rem', cursor: 'grab' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
        <span style={{ fontWeight: 800 }}>{id}</span>
        <span style={{ color: status === 'new' ? 'var(--error)' : 'var(--on-surface-variant)', fontSize: '0.875rem', fontWeight: 600 }}>{time}</span>
      </div>
      <ul style={{ paddingLeft: '1.25rem', marginBottom: '1rem', listStyleType: 'disc', color: 'var(--on-surface)' }}>
        {items.map(item => (
          <li key={item} style={{ fontSize: '0.875rem', padding: '0.25rem 0' }}>{item}</li>
        ))}
      </ul>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        {status === 'new' && <button className="btn btn-primary" style={{ flex: 1, padding: '0.5rem', fontSize: '0.875rem' }}>Start Prep</button>}
        {status === 'prep' && <button className="btn" style={{ flex: 1, padding: '0.5rem', fontSize: '0.875rem', backgroundColor: 'var(--success)', color: 'white' }}>Mark Ready</button>}
      </div>
    </div>
  );
}
