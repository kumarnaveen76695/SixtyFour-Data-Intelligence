// App.js
import React from 'react';

import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import ContentCard from './components/ContentCard';

import './App.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <MainContent />
      <ContentCard />
    </div>
  );
}

export default App; 