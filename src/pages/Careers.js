import React from 'react';

const careers = [
  { id: 1, title: 'Full-Stack Engineer', dept: 'Engineering', location: 'Remote', type: 'Full-time' },
  { id: 2, title: 'Product Manager', dept: 'Product', location: 'London, UK', type: 'Full-time' },
  { id: 3, title: 'Compliance Analyst', dept: 'Legal', location: 'Remote', type: 'Contract' },
  { id: 4, title: 'UX Designer', dept: 'Design', location: 'New York, US', type: 'Full-time' }
];

export default function Careers() {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Current Openings</h1>
        <p>Help us build the next generation of digital banking.</p>
      </header>

      <div className="jobs-list">
        {careers.map(job => (
          <div key={job.id} className="feature-item job-card">
            <span className="job-dept">{job.dept}</span>
            <h3>{job.title}</h3>
            <div className="job-details">
              <span>📍 {job.location}</span> | <span>🕒 {job.type}</span>
            </div>
            <button className="invite-btn small">Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}