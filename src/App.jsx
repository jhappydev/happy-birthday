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
            <Route path="/happy-birthday" element={<Home />} />
            <Route path="/happy-birthday/about" element={<AboutUs />} />
            <Route path="/happy-birthday/present" element={<Present />} />
            <Route path="/happy-birthday/letter" element={<Letter />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
