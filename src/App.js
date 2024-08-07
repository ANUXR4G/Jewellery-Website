import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Headermain from './Components/header';
// import AboutUs from './pages/AboutUs';
// import Settings from './pages/Settings';
// import WorkerAccount from './pages/WorkerAccount';

const App = () => {
  return (
    <Router>
      <Headermain />
      <Routes>
        <Route path="/" element={<Headermain/>} />
        {/* <Route path="/about-us" element={<AboutUs />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/worker-account" element={<WorkerAccount />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
