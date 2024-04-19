import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Homepage from './Homepage';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Login />} />
        <Route path="/hompage" element={<Homepage />} />

      </Routes>
    </Router>
  );
}