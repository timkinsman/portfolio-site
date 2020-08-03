import React from 'react';

import About from './About';
import Contact from './Contact';
import Experience from './Experience';
import Footer from './Footer';
import Home from './Home';
import Nav from './Nav';
import Work from './Work';

const App = () => {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Experience />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
