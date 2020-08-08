import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';

import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Experience from './components/sections/Experience';
import Landing from './components/sections/Landing';
import NotFound from './components/sections/NotFound';
import Work from './components/sections/Work';

import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/about" component={About} />
        <Route exact path="/experience" component={Experience} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
