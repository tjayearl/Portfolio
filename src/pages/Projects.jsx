function Projects() {
  const projects = [
    { name: "Machines", desc: "Vehicle marketplace architecture", tech: "React" },
    { name: "Brain Freeze", desc: "Interactive learning platform", tech: "Python" },
    { name: "Vanguard", desc: "Security monitoring system", tech: "FastAPI" },
    { name: "E.A.R.L AI", desc: "Neural network assistant", tech: "OpenAI" }
  ];

  return (
    <div>
      <h1 style={{ marginBottom: '32px' }}>Project Repositories</h1>

      <div className="grid-dashboard">
        {projects.map(proj => (
          <div className="os-card" key={proj.name}>
            <span className="status-label">{proj.tech}</span>
            <h3 style={{ margin: '8px 0', color: '#38bdf8' }}>{proj.name}</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '20px' }}>{proj.desc}</p>
            <button style={{ 
              background: 'transparent', 
              border: '1px solid #38bdf8', 
              color: '#38bdf8', 
              padding: '8px 16px', 
              borderRadius: '4px',
              cursor: 'pointer'
            }}>
              ACCESS_FILE
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;