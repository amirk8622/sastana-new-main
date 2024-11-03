import React, { useState } from 'react';
import './TokenTable.css';
import { useNavigate } from 'react-router-dom';
import tokenData from '../data/data';
import 'bootstrap/dist/css/bootstrap.min.css';

const TokenTable = ({ categories }) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = tokenData.slice(firstIndex, lastIndex);
  const npages = Math.ceil(tokenData.length / recordsPerPage);
  const pageNumbers = Array.from({ length: npages }, (_, i) => i + 1);

  const handleCategoryClick = (categoryName) => {
    navigate(`/category/${categoryName}`);
  };

  return (
    <div className="container my-4" style={{ fontFamily: 'Arial, sans-serif' }}>
      <div className="table-responsive">
        <table className="table table-striped table-hover table-bordered">
          <thead className="thead-light">
            <tr>
              <th>Category Id</th>
              <th>Category Name</th>
              <th>Locked Period</th>
              <th>Vesting Period</th>
              <th>Total Tokens</th>
              <th>Genesis Amount</th>
              <th>Tokens to be Released</th>
              <th>Pending for Minting</th>
              <th>Total Minted Tokens</th>
              <th>Category Address</th>
            </tr>
          </thead>
          <tbody>
            {records.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td>{firstIndex + rowIndex + 1}</td>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>
                    {cellIndex === 0 ? (
                      <button
                        onClick={() => handleCategoryClick(cell)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: 'blue',
                          cursor: 'pointer',
                          fontWeight: 'lighter',
                        }}
                      >
                        {cell}
                      </button>
                    ) : (
                      cell
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <nav className="pagination-container">
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <a href="#" className="page-link" onClick={(e) => { e.preventDefault(); setCurrentPage(currentPage - 1); }}>
              Prev
            </a>
          </li>
          {pageNumbers.map((num) => (
            <li className={`page-item ${currentPage === num ? 'active' : ''}`} key={num}>
              <a href="#" className="page-link" onClick={(e) => { e.preventDefault(); setCurrentPage(num); }}>
                {num}
              </a>
            </li>
          ))}
          <li className={`page-item ${currentPage === npages ? 'disabled' : ''}`}>
            <a href="#" className="page-link" onClick={(e) => { e.preventDefault(); setCurrentPage(currentPage + 1); }}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default TokenTable;
