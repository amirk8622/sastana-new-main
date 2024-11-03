import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './components/Navbar';
import TokenInfo from './components/TokenInfo';
import TokenTable from './components/TokenTable';
import CategoryList from './components/CategoryList';
import CategoryDetails from './components/CategoryDetails';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  const categories = [
    { name: 'Team', walletAddress: '0x0618EC2A09E651B1e9B92B351B74b9Dd16d90705' },
    { name: 'Advisors', walletAddress: '0x4695093aC41EBdad58d69EF003E311962580E48F' },
    { name: 'Partners', walletAddress: '0x2BA2F19F0951246f3c5dF4bEa4aF7EE9Af20F618' },
    { name: 'Private Sale', walletAddress: '0x44a575a6444eCe02f791732699D82d71537669A3' },
    { name: 'Seed Sale', walletAddress: '0x89c21335204eA061e1479067056E846fCC8CDb1F' },
    { name: 'Public Launch', walletAddress: '0xa88Ce5e881c9cE701A21351a01f9132064E253d3' },
    { name: 'Exchanges (Liquidity)', walletAddress: '0xb9Afb007A1d74B9C0f10a89B0Ca5E63BEC738718' },
    { name: 'Airdrop Rewards', walletAddress: '0x7a64110a2E89a1C5C3012B0d2bC39dc021d66a1D' },
    { name: 'Incentive Rewards', walletAddress: '0x857466861D01F7C7259F0dC472F546AD81890364' },
    { name: 'Treasury', walletAddress: '0xb4d57f89cC7bD7604974479d810c83d8a1ca93a2' },
    { name: 'Reserve Fund', walletAddress: '0x31201fDC68458d10A22B5dDaaacCAF58bFc6faB3' }
  ];

  const Layout = () => {
    const location = useLocation();

    const showNavBar = !location.pathname.includes('/category/');

    return (
      <div>
        {showNavBar && <NavBar />}
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <TokenInfo />
                <TokenTable categories={categories} />
              </div>
            }
          />
          <Route
            path="*"
            element={
              <div className="app-container">
                <div className="sidebar">
                  <CategoryList categories={categories} />
                </div>
                <div className="content">
                  <Routes>
                    <Route
                      path="/category/:name"
                      element={<CategoryDetails categories={categories} />}
                    />
                  </Routes>
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    );
  };

  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;
