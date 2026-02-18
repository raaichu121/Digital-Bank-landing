import React from 'react';

const blogs = [
  { 
    id: 1, 
    category: 'BANKING',
    author: 'Alex River', 
    title: 'The Rise of Neobanks', 
    date: 'Feb 17, 2026' 
  },
  { 
    id: 2, 
    category: 'TIPS',
    author: 'Jordan Smith', 
    title: '5-Minute Budgeting', 
    date: 'Feb 15, 2026'
  }
];

export default function Blog() {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Digitalbank Blog</h1>
        <p>Insights on the future of finance and technology.</p>
      </header>

      <div className="list-container">
        {blogs.map(post => (
            <div key={post.id} className="horizontal-card row-layout">
                <div className="category-tag">{post.category}</div>
                
                <div className="card-main-info">
                    <h3>{post.title}</h3>
                    <p className="author-name">By {post.author}</p>
                    
                    <div className="card-meta">
                        <span>📅 {post.date}</span>
                    </div>
                </div>
                
                <button className="read-more-btn">Read More</button>
            </div>
            ))}
      </div>
    </div>
  );
}