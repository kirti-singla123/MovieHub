import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import WishList from './components/WishList';
import Banner from './components/Banner';
import TrendingMovies from './components/TrendingMovies';
import { WishlistProvider } from './context/WishlistContext';

function App() {
  return (
    <WishlistProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<><Banner /><TrendingMovies /></>} />
          <Route path="/WishList" element={<WishList />} />
        </Routes>
      </Router>
    </WishlistProvider>
  );
}

export default App;
