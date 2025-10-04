import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Home from './pages/Home';
import Dictionary from './pages/Dictionary';
import Gastronomy from './pages/Gastronomy';
import Visa from './pages/Visa';
import Discover from './pages/Discover';
import RegionDetail from './pages/RegionDetail';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dictionary" element={<Dictionary />} />
            <Route path="/gastronomy" element={<Gastronomy />} />
            <Route path="/visa" element={<Visa />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/region/:regionId" element={<RegionDetail />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;