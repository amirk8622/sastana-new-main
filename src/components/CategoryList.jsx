import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './CategoryList.css';

const CategoryList = ({ categories }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  const handleBackClick = (event) => {
    event.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      window.location.href = '/';
    }, 1000);
  };

  return (
    <div className="sidebar">
      {loading && (
        <div className="loader-overlay">
          <i className="fas fa-spinner fa-spin loader-icon"></i>
          <p className="loader-message">Loading...</p>
        </div>
      )}
      <div className="logo">
        <img
          src="https://i.tracxn.com/logo/company/sastana_3cb07932-4197-40d8-a540-9380fce947ae.png?height=120&width=120"
          alt="Logo"
          className="logo-img"
        />
        <h2 className="logo-name">Sastana</h2>
      </div>
      <Link to="/" onClick={handleBackClick} className="back-to-dashboard" style={{ color: 'black' }}>
        <i className="fas fa-arrow-left"></i> Back to Dashboard
      </Link>
      <ul className="category-list-items">
        {categories.map((category, index) => (
          <li key={index} className="category-list-item">
            <Link
              to={`/category/${category.name}`}
              className={`category-link ${location.pathname === `/category/${category.name}` ? 'active' : ''}`}
            >
              <span className="category-name">{category.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
