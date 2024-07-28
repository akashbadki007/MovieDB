import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/Pages/HomePage';
import TopRatedPage from './Components/Pages/TopRatedPage';
import UpcomingPage from './Components/Pages/UpcomingPage';
import MovieDetailPage from './Components/Pages/MovieDetailPage';
import SearchPage from './Components/Pages/SearchPage';
import SignIn from './Components/LoginPage/LoginPage';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/top-rated" element={<TopRatedPage />} />
        <Route path="/upcoming" element={<UpcomingPage />} />
        <Route path="/movie/:id" element={<MovieDetailPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>

      <Footer/>
    </Router>
  );
}

export default App;
