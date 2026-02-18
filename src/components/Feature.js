import React from 'react';

const features = [
  {
    title: 'Online Banking',
    desc: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.',
    icon: '💳' // Replace with actual SVG icons later
  },
  {
    title: 'Simple Budgeting',
    desc: 'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.',
    icon: '📊'
  },
  {
    title: 'Fast Onboarding',
    desc: 'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.',
    icon: '👤'
  },
  {
    title: 'Open API',
    desc: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.',
    icon: '🔌'
  }
];

export default function Features() {
  return (
    <section className="features">
      <div className="features-intro">
        <h2>Why choose Digitalbank?</h2>
        <p>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
      </div>
      <div className="features-grid">
        {features.map((f, index) => (
          <div key={index} className="feature-item">
            <div className="feature-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}