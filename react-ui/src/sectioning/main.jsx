import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { About, Teams, Landing, Search } from '../views';

const Main = () => {
  return (
    <main className="y-wrap">
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/" element={<Landing />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </main>
  );
};

export default Main;