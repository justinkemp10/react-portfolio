import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';

import './App.css';

function App() {
  return (
    <main>
      <Nav />
      <About />
      <Portfolio />
      <Contact />
    </main>
  );
}

export default App;
