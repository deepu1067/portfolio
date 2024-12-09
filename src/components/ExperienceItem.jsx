import React from 'react';

const ExperienceItem = ({ jobTitle, company, startDate, endDate, description }) => {
  return (
    <div className="experience-item mb-4 p-4" style={{ borderLeft: '4px solid #cad593' }}>
      <h3 style={{ color: '#243010' }}>{jobTitle}</h3>
      <h4 style={{ color: '#cad593' }}>{company}</h4>
      <p style={{ color: '#666' }}>
        {startDate} - {endDate}
      </p>
      <p style={{ color: '#243010' }}>{description}</p>
    </div>
  );
};

export default ExperienceItem;