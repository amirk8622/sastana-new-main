import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './CategoryDetails.css';
import CategoryList from './CategoryList'; // Import your sidebar component

const CategoryDetails = ({ categories }) => {
    const { name } = useParams();
    const category = categories.find((cat) => cat.name === name);

    const [isTransactionDropdownOpen, setTransactionDropdownOpen] = useState(false);
    const [isWalletDropdownOpen, setWalletDropdownOpen] = useState(false);
    const [unlockTime, setUnlockTime] = useState('');
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);


    // Assuming the unlock date is a future date. You can modify this to be dynamic or retrieved from your data.
    const unlockDate = new Date(Date.now() + 309 * 24 * 60 * 60 * 1000); // Example: 309 days from now

    // Function to calculate remaining time until unlock date
    const calculateRemainingTime = () => {
        const now = new Date();
        const timeDiff = unlockDate - now;

        if (timeDiff <= 0) {
            return "Unlock time has passed.";
        }

        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        return `${days} Days: ${hours} Hrs: ${minutes} Min: ${seconds} Sec`;
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setUnlockTime(calculateRemainingTime());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    if (!category) {
        return <div>Category not found.</div>;
    }

    return (
        <div className="category-details">
            <div className="category-header">
            <button onClick={toggleSidebar} className="toggle-button">
                <i className="fas fa-bars"></i>
            </button>
                <span style={{ color: 'black' }}>{category.name}</span>
            </div>

            {isSidebarVisible && (
            <div className="category-overlay">

                 <ul>
                 {categories.map((cat, index) => (
                     <li key={index}>{cat.name}</li>
                 ))}
             </ul>
             <button className="close-overlay" onClick={toggleSidebar}>
                        Close
                    </button>
             </div>
            )}

            

            <div className="wallet-info">
                <span>Wallet Address for <b>{category.name} Category:</b></span>
                <p>{category.walletAddress}</p>
            </div>
            <div className="token-info">
                <span>Token Next Unlock Time: <b>Cliff Month:</b> <b>{unlockTime}</b></span>
                <span>Next Token to be Released: <b>0</b></span>
            </div>
            <div className="info-cards">
    <div className="info-card">
    <div className="card-content">

        <i className="fas fa-users info-card-icon"></i>
        <span>Total <b>{category.name}</b> Tokens:</span>
        <h4>650,000,000</h4>
        </div>
    </div>
    <div className="info-card">
    <div className="card-content">

        <i className="fas fa-coins info-card-icon"></i>
        <span>Total Minted Tokens (till Date):</span>
        <h4>0</h4>
        </div>
    </div>
    <div className="info-card">
    <div className="card-content">

        <i className="fas fa-lock-open info-card-icon"></i>
        <span>Un-Locked (Pending for Minting):</span>
        <h4>650,000,000</h4>
        </div>
    </div>
    <div className="info-card">
    <div className="card-content">
        <i className="fas fa-chart-line info-card-icon"></i>
        <span>Average Release (Month):</span>
        <h4>27,083,333</h4>
        </div>
    </div>
    <div className="info-card">
    <div className="card-content">
        <i className="fas fa-hourglass-half info-card-icon"></i>
        <span>Cliff Month:</span>
        <h4>12</h4>
        </div>
    </div>
    <div className="info-card">
    <div className="card-content">

        <i className="fas fa-calendar-alt info-card-icon"></i>
        <span>Vested Month:</span>
        <h4>24</h4>
        </div>
    </div>
</div>

            <div className="additional-info">
                <div className="dropdown">
                    <div 
                        className="dropdown-toggle"
                        onClick={() => setTransactionDropdownOpen(!isTransactionDropdownOpen)}
                    >
                        Transaction History
                    </div>
                    {isTransactionDropdownOpen && (
                        <div className="dropdown-content">
                            <input
                                type="text"
                                placeholder="Enter Wallet Address"
                                className="wallet-input"
                            />
                            <button className="btn btn-success" style={{ marginTop: '30px' , display:'flex' , justifyContent:'flex-start' }}>
                                Submit
                            </button>
                        </div>
                    )}
                </div>
                <div className="dropdown">
                    <div 
                        className="dropdown-toggle"
                        onClick={() => setWalletDropdownOpen(!isWalletDropdownOpen)}
                    >
                        Check Wallet Balance
                    </div>
                    {isWalletDropdownOpen && (
                        <div className="dropdown-content">
                            <input
                                type="text"
                                placeholder="Enter Wallet Address"
                                className="wallet-input"
                            />
                            <button className="btn btn-success" style={{ marginTop: '30px' , display:'flex' , justifyContent:'flex-start' }}>
                                Submit
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CategoryDetails;
