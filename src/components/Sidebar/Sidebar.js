// components/Sidebar.js
import React, { useState } from 'react';
import './Sidebar.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      {/* Toggle Button */}
      <button onClick={() => setIsOpen(!isOpen)}>
        <i className="fa fa-bars"></i> {/* Assuming you're using Font Awesome */}
      </button>

      {/* Sidebar Items */}
      {/* ... */}
    </div>
  );
}

export default Sidebar;
