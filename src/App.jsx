import { useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Present from './pages/Present';
import Letter from './pages/Letter';
import Header from './components/Header';

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/present" element={<Present />} />
            <Route path="/letter" element={<Letter />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
