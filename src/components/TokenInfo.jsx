import React from 'react';
import './TokenInfo.css'; // Create this CSS file for custom styling if needed

const TokenInfo = () => {
  return (
    <div className="token-info-container" style={{fontFamily:'Arial, sans-serif'}}>
      <span>Total Token Supply: 0</span>
      <span>Total Minted Token: 0</span>
      <span>Next Token to be Released: 0</span>
      <span>Total Un-Minted Token: 0</span>
    </div>
  );
};

export default TokenInfo;
