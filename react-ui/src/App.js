import { useState } from 'react';
import Footer from './sectioning/footer'
import Header from './sectioning/header'
import Main from './sectioning/main'
import './App.css';

export default function App() {

  return (
    <div className="y-sticky">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
