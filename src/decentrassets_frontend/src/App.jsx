import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Homepage from './components/common/Homepage'
import UserPortal from './portals/UserPortal';
import TraderPortal from './portals/TraderPortal';
import VerificationPortal from './portals/VerificationPortal';
const App = () => {

  return (
    <Router>
      <Routes>

        <Route path="/" element={<Homepage />} />

        <Route path="/user/*" element={<UserPortal />} />
        <Route path="/trader/*" element={<TraderPortal />} />
        <Route path="/verification/*" element={<VerificationPortal />} />

      </Routes>
    </Router>
  );
};

export default App;
