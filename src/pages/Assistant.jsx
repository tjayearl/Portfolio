function Assistant() {
  return (
    <div className="assistant-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div className="os-card" style={{ height: '70vh', display: 'flex', flexDirection: 'column' }}>
        <div className="chat-header" style={{ borderBottom: '1px solid #1e293b', paddingBottom: '16px', marginBottom: '16px' }}>
          <span className="status-label">AI Instance</span>
          <div className="status-value" style={{ fontSize: '1rem' }}>E.A.R.L-v1-Alpha</div>
        </div>

        <div className="chat-messages" style={{ flex: 1, overflowY: 'auto' }}>
          <div className="message" style={{ background: '#1e293b', padding: '12px', borderRadius: '8px', marginBottom: '12px', width: 'fit-content' }}>
            Hello. How can I assist you with Tjay's portfolio today?
          </div>
        </div>

        <div className="chat-input" style={{ marginTop: '20px' }}>
          <input 
            type="text" 
            placeholder="Type your command..." 
            style={{ width: '100%', padding: '12px', background: '#050816', border: '1px solid #1e293b', borderRadius: '4px', color: 'white' }}
          />
        </div>
      </div>
    </div>
  );
}

export default Assistant;