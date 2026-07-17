function Research() {
  const futureProjects = [
    { name: "E.A.R.L AI", status: "In Development", desc: "Autonomous neural network for task management." },
    { name: "Vanguard", status: "Active", desc: "Strategic monitoring and security infrastructure." },
    { name: "Future Ventures", status: "Planning", desc: "Proprietary software solutions for global scalability." }
  ];

  return (
    <div className="research-page">
      <div className="system-message" style={{ marginBottom: '40px' }}>
        <span className="status-label">Division</span>
        <h1 style={{ fontSize: '2.5rem' }}>RESEARCH & DEVELOPMENT</h1>
        <p style={{ color: 'var(--text-dim)' }}>Visionary projects and future system iterations.</p>
      </div>

      <div className="grid-dashboard">
        {futureProjects.map(proj => (
          <div className="os-card" key={proj.name}>
            <div style={{ 
              display: 'inline-block', 
              padding: '4px 8px', 
              background: proj.status === 'Active' ? '#22c55e33' : '#38bdf833',
              color: proj.status === 'Active' ? '#22c55e' : '#38bdf8',
              borderRadius: '4px',
              fontSize: '0.7rem',
              fontWeight: 'bold',
              marginBottom: '12px'
            }}>
              {proj.status.toUpperCase()}
            </div>
            <h3 style={{ margin: '0 0 10px 0' }}>{proj.name}</h3>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>{proj.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Research;