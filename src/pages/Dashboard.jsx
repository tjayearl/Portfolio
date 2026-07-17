import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* First Impression Header */}
      <header className="dashboard-header">
        <div className="system-identity">
          <span className="status-label">System Identity</span>
          <h1>E.A.R.L OS // Developer Command Center</h1>
        </div>
        <div className="system-status-indicator">
          <span className="pulse-dot"></span>
          <span className="status-value" style={{ color: '#22c55e' }}>ONLINE</span>
        </div>
      </header>

      {/* Hero Area: Who, What, Working on */}
      <section className="hero-grid">
        <div className="os-card hero-main">
          <span className="status-label">Identity_Module</span>
          <h2>Tjay Earl</h2>
          <p className="subtitle">Full Stack Developer // System Builder</p>
          <p className="description">
            Building software, AI systems, web platforms, and future ventures with a focus on structured outcomes and scalable architecture.
          </p>
        </div>
        <div className="os-card hero-focus">
          <span className="status-label">Current_Focus</span>
          <ul className="focus-list">
            <li><span className="accent-text">&gt;</span> Vanguard</li>
            <li><span className="accent-text">&gt;</span> E.A.R.L AI</li>
            <li><span className="accent-text">&gt;</span> Portfolio OS</li>
          </ul>
        </div>
      </section>

      {/* System Status Cards */}
      <section className="status-grid">
        <div className="os-card status-mini">
          <span className="status-label">Status</span>
          <div className="status-value">ONLINE</div>
        </div>
        <div className="os-card status-mini">
          <span className="status-label">Projects</span>
          <div className="status-value">12+</div>
        </div>
        <div className="os-card status-mini">
          <span className="status-label">Experience</span>
          <div className="status-value">2+ YEARS</div>
        </div>
        <div className="os-card status-mini">
          <span className="status-label">Stack</span>
          <div className="status-value">React/Python</div>
        </div>
      </section>

      {/* Mid Grid: Mission, Active Projects, Profile */}
      <div className="dashboard-main-grid">
        <section className="os-card mission-panel">
          <span className="status-label">Mission_Directive</span>
          <h3>MISSION</h3>
          <p className="mission-statement">
            "Building useful systems, businesses, and technologies that can scale beyond a single project."
          </p>
        </section>

        <section className="os-card active-projects-panel">
          <span className="status-label">Live_Deployments</span>
          <h3>ACTIVE PROJECTS</h3>
          <div className="project-status-list">
            <div className="project-status-item"><span>Vanguard</span><span className="tag active">Active Development</span></div>
            <div className="project-status-item"><span>E.A.R.L AI</span><span className="tag research">Research & Development</span></div>
            <div className="project-status-item"><span>Portfolio OS</span><span className="tag online">Online</span></div>
          </div>
        </section>

        <section className="os-card profile-panel">
          <span className="status-label">Personnel_Data</span>
          <h3>DEVELOPER PROFILE</h3>
          <div className="profile-data">
            <div className="data-row"><span>Name:</span> <span>Tjay Earl</span></div>
            <div className="data-row"><span>Role:</span> <span>Full Stack Developer</span></div>
            <div className="data-row"><span>Status:</span> <span style={{color: '#22c55e'}}>Available</span></div>
            <div className="data-row"><span>Location:</span> <span>Kenya</span></div>
          </div>
        </section>
      </div>

      {/* Bottom Grid: Activity & Quick Access */}
      <div className="dashboard-bottom-grid">
        <section className="os-card activity-feed">
          <span className="status-label">System_Activity_Log</span>
          <div className="feed-container">
             <div className="feed-item"><span className="feed-date">[2026]</span> Vanguard Development Started</div>
             <div className="feed-item"><span className="feed-date">[2026]</span> Portfolio Migrated to React</div>
             <div className="feed-item"><span className="feed-date">[2025]</span> Machines Released</div>
             <div className="feed-item"><span className="feed-date">[2025]</span> Brain Freeze Completed</div>
          </div>
        </section>

        <section className="os-card quick-access">
          <span className="status-label">Quick_Access_Shortcuts</span>
          <div className="shortcut-grid">
            <Link to="/projects" className="shortcut-btn">OPEN PROJECT DATABASE</Link>
            <Link to="/cv" className="shortcut-btn">OPEN PERSONNEL FILE</Link>
            <Link to="/assistant" className="shortcut-btn">OPEN COMMAND CENTER</Link>
            <Link to="/contact" className="shortcut-btn">CONTACT DEVELOPER</Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;