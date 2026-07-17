function CV() {
  return (
    <div style={{ maxWidth: '700px' }}>
      <div className="os-card" style={{ borderLeft: '4px solid #38bdf8' }}>
        <span className="status-label">Document: Developer Record // Classified</span>
        <h1 style={{ margin: '8px 0', fontSize: '2.5rem', letterSpacing: '4px' }}>PERSONNEL FILE</h1>
        
        <div style={{ marginTop: '32px', display: 'grid', gap: '16px' }}>
          <div>
            <span className="status-label">Name</span>
            <div className="status-value">Tjay Earl</div>
          </div>
          <div>
            <span className="status-label">Status</span>
            <div className="status-value" style={{ color: '#22c55e' }}>ACTIVE_DUTY</div>
          </div>
          <div>
            <span className="status-label">Designation</span>
            <div className="status-value">Full Stack Developer</div>
          </div>
        </div>

        <div style={{ marginTop: '48px' }}>
          <span className="status-label">Progression Timeline</span>
          <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', gap: '20px' }}>
              <span style={{ color: 'var(--accent-blue)', fontWeight: 'bold' }}>2024</span>
              <span>Started coding // Initializing systems</span>
            </div>
            <div style={{ display: 'flex', gap: '20px' }}>
              <span style={{ color: 'var(--accent-blue)', fontWeight: 'bold' }}>2025</span>
              <span>Built first portfolio // Deploying Machines</span>
            </div>
            <div style={{ display: 'flex', gap: '20px' }}>
              <span style={{ color: 'var(--accent-blue)', fontWeight: 'bold' }}>2025</span>
              <span>Refining full-stack capabilities</span>
            </div>
            <div style={{ display: 'flex', gap: '20px' }}>
              <span style={{ color: 'var(--accent-blue)', fontWeight: 'bold' }}>2026</span>
              <span>Started Vanguard // Active Development</span>
            </div>
            <div style={{ display: 'flex', gap: '20px' }}>
              <span style={{ color: 'var(--accent-blue)', fontWeight: 'bold' }}>2026</span>
              <span>Initiated E.A.R.L OS Project</span>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '40px', display: 'flex', gap: '12px' }}>
          <button className="os-card" style={{ padding: '12px 24px', cursor: 'pointer', background: '#38bdf8', color: '#050816', fontWeight: 'bold' }}>VIEW_RECORD</button>
          <button className="os-card" style={{ padding: '12px 24px', cursor: 'pointer' }}>DOWNLOAD_PDF</button>
        </div>
      </div>
    </div>
  );
}

export default CV;