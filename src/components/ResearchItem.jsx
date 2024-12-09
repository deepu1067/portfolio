import React from 'react'; 

const ResearchItem = ({ topic, status, tools }) => (
  <div className="mb-4 p-4" style={{ borderLeft: '5px solid #cad593' }}>
    <h3 className="mb-3">{topic}</h3>
    <p className="mb-3">
      {(status === 'ongoing' || status === 'under review') ? (
        <>Status: <span style={{ 
          color: status === 'ongoing' ? '#8B4513' : '#0066cc'
        }}>{status}</span></>
      ) : (
        <span style={{ color: '#243010' }}>{status}</span>
      )}
    </p>
    <div className="d-flex flex-wrap gap-2">
      {tools.map((tool, index) => (
        <span 
          key={index} 
          className="px-3 py-1 rounded-pill" 
          style={{ 
            backgroundColor: '#cad593',
            color: '#243010',
            fontSize: '0.9rem',
            boxShadow: '3px 3px 6px rgba(0,0,0,0.2), -1px -1px 4px rgba(255,255,255,0.3)',
            transition: 'all 0.2s ease',
            cursor: 'default',
            transform: 'translateY(0)',
            ':hover': {
              transform: 'translateY(-2px)',
              boxShadow: '4px 4px 8px rgba(0,0,0,0.3), -1px -1px 4px rgba(255,255,255,0.4)',
            }
          }}
        >
          {tool}
        </span>
      ))}
    </div>
  </div>
);

export default ResearchItem;