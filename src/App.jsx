import React, { useState } from 'react';
import MoralmLogo from './assets/MoralmLogo.png';
import UserLogo from './assets/UserLogo.png';
import './App.css';

function App() {
  const [packages, setPackages] = useState([
    {
      id: '000001298420938',
      sender: 'Centra1',
      senderAddress: '123 Sender St, City',
      recipient: 'XYZ',
      recipientAddress: '456 Recipient Ave, Town',
      status: 'Pending',
      orderTime: '12/02/2020',
      weight: '5kg',
      expedition: 'Indonesian Military'
    },
    {
      id: '000001298420939',
      sender: 'Centra2',
      senderAddress: '234 Sender St, City',
      recipient: 'ABC',
      recipientAddress: '567 Recipient Ave, Town',
      status: 'Arrived in Harbor',
      orderTime: '13/02/2020',
      weight: '10kg',
      expedition: 'Indonesian Navy'
    },
    {
      id: '000001298420940',
      sender: 'Centra3',
      senderAddress: '345 Sender St, City',
      recipient: 'DEF',
      recipientAddress: '678 Recipient Ave, Town',
      status: 'Received by XYZ',
      orderTime: '14/02/2020',
      weight: '15kg',
      expedition: 'Indonesian Air Force'
    },
    {
      id: '000001298420941',
      sender: 'Centra4',
      senderAddress: '456 Sender St, City',
      recipient: 'GHI',
      recipientAddress: '789 Recipient Ave, Town',
      status: 'Cancelled',
      orderTime: '15/02/2020',
      weight: '20kg',
      expedition: 'Indonesian Army'
    },
    // Add more packages here as needed
  ]);

  const [filter, setFilter] = useState('all');
  const [showDropdown, setShowDropdown] = useState(null);

  const filteredPackages = packages.filter(pkg => {
    if (filter === 'all') {
      return true;
    } else {
      return pkg.status.toLowerCase() === filter.toLowerCase();
    }
  });

  const updateStatus = (id, newStatus) => {
    const updatedPackages = packages.map(pkg =>
      pkg.id === id ? { ...pkg, status: newStatus } : pkg
    );
    setPackages(updatedPackages);
  };
  
  const deletePackage = (id) => {
    const updatedPackages = packages.filter(pkg => pkg.id !== id);
    setPackages(updatedPackages);
  };

  return (
    <div className="App">
      <nav className="top-nav">
        <div className="nav-left">
          <img src={MoralmLogo} alt="Moralm Logo" className="logoimg" />
        </div>
        <div className="gradient-bar">
          <div className="segment segment1"></div>
          <div className="segment segment2"></div>
          <div className="segment segment3"></div>
          <div className="segment segment4"></div>
        </div>
        <div className="nav-right">
          <img src={UserLogo} alt="User Avatar" className="useravatar" />
          <div className="user-info">
            <p>Harbor 1</p>
            <p>129038447782</p>
          </div>
        </div>
      </nav>
      <div className='ShipmentTracking'>
        <h1>Shipment Tracking</h1>
      </div>
      <div className='filterbox'>
      <div className='filter'>
        <button onClick={() => setFilter('all')}>
          <span className="button-text">All</span>
          <span className="button-count">{packages.length}</span>
        </button>
        <button onClick={() => setFilter('pending')}>
          <span className="button-text">Pending</span>
          <span className="button-count">{packages.filter(pkg => pkg.status === 'Pending').length}</span>
        </button>
        <button onClick={() => setFilter('arrived in harbor')}>
          <span className="button-text">Arrived in Harbor</span>
          <span className="button-count">{packages.filter(pkg => pkg.status === 'Arrived in Harbor').length}</span>
        </button>
        <button onClick={() => setFilter('received by xyz')}>
          <span className="button-text">Received by XYZ</span>
          <span className="button-count">{packages.filter(pkg => pkg.status === 'Received by XYZ').length}</span>
        </button>
        <button onClick={() => setFilter('cancelled')}>
          <span className="button-text">Cancelled</span>
          <span className="button-count">{packages.filter(pkg => pkg.status === 'Cancelled').length}</span>
        </button>
      </div>
      </div>
      <div className='Box'>
      <div className='PackageBox'>
        {filteredPackages.map(pkg => (
          <div className='PackageList' key={pkg.id}>
            <div className="ellipsis" onClick={() => setShowDropdown(showDropdown === pkg.id ? null : pkg.id)}>...</div>
            {/* Dropdown menu */}
            {showDropdown === pkg.id && (
              <div className="dropdown-menu">
                {/* Render "Cancel" button only if the package status is not "Cancelled" */}
                                {/* Render "Cancel" button only if the package status is not "Cancelled" */}
                                {pkg.status !== 'Cancelled' && <button onClick={() => updateStatus(pkg.id, 'Cancelled')}>Cancel</button>}
                <button onClick={() => deletePackage(pkg.id)}>Delete Package</button>
              </div>
            )}

<div className='column'>
        <p>&nbsp;</p>
        <p><strong>Package ID -</strong> {pkg.id}</p>
        <p>&nbsp;</p>
        <p><strong className="underlined">Sender</strong></p>
        <p> {pkg.sender}</p>
        <p><strong className="small">{pkg.senderAddress}</strong></p>
        <p><strong className="underlined">Recipient</strong></p>
        <p>{pkg.recipient}</p>
        <p><strong className="small">{pkg.recipientAddress}</strong></p>
        <p>&nbsp;</p>
        <p><strong>Status:</strong> <span className={pkg.status.toLowerCase()}>{pkg.status}</span></p>
      </div>
      <div className='column'>
        <p>&nbsp;</p>
        <p><strong>Order Time -</strong> {pkg.orderTime}</p>
        <p>&nbsp;</p>
        <p><strong className="underlined">Weight</strong></p>
        <p> {pkg.weight}</p>
        <p>&nbsp;</p>
        <p><strong className="underlined">Expedition</strong></p>
        <p>{pkg.expedition}</p>
      </div>
            {/* Conditionally render button or text based on package status */}
            {pkg.status === 'Pending' && <button className="statsbutton" onClick={() => updateStatus(pkg.id, 'Arrived in Harbor')}>Arrived in Harbor</button>}
            {pkg.status === 'Arrived in Harbor' && <button className="statsbutton" onClick={() => updateStatus(pkg.id, 'Received by XYZ')}>Received by XYZ</button>}
            {pkg.status === 'Received by XYZ' && <p className="received-date">Received by XYZ - {pkg.orderTime}</p>}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default App;

