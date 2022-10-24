import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { About, Teams, Landing, Schedule } from '../views';


const Main = () => {
  return (
    <main className="y-wrap">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
  );
};

export default Main;