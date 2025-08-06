
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PrivatePage from './pages/PrivatePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/private" element={<PrivatePage />} />
      </Routes>
    </Router>
  );
}

export default App;
