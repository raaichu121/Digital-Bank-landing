import React from 'react';

export default function AboutPage() {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Our Mission</h1>
        <p>We’re on a mission to make financial freedom accessible to everyone.</p>
      </header>

      <div className="list-container">
        {/* Box 1 */}
        <div className="horizontal-card">
          <div className="card-main-info">
            <h3 style={{ color: '#2d314d', marginBottom: '10px' }}>Digital-First Approach</h3>
            <p>By removing the overhead of physical branches, we pass the savings directly to you through higher interest rates and zero fees.</p>
          </div>
        </div>

        {/* Box 2 */}
        <div className="horizontal-card">
          <div className="card-main-info">
            <h3 style={{ color: '#2d314d', marginBottom: '10px' }}>Secure & Transparent</h3>
            <p>Your security is our priority. We use world-class encryption and provide total transparency on how your money is managed.</p>
          </div>
        </div>
      </div>
    </div>
  );
}