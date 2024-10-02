import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LeadsPage from './pages/LeadsPage';
import LandingPage from './pages/LandingPage';
import CardDetailsPage from './pages/CardDetailsPage/CardDetailsPage'
import { cards } from './data/data';
import KeywordAnalysis from './pages/KeywordAnalysis';
import Quill from './pages/Quill';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
        <Route path="/details" element={<HomePage/>} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/leads" element={<LeadsPage />} />
          <Route path="/card/:id" element={<CardDetailsPage cards={cards}/>} />
          <Route path="/keyword" element={<KeywordAnalysis/>} />
          <Route path="/essay" element={<Quill/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;