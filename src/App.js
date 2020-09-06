import React from 'react';
import Navbar from './Components/layout/Navbar';
import Landing from './Components/layout/Landing';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Router>
      <>
        <Navbar />
        <Landing />
        <Route exact path='/' component={Landing} />
      </>
    </Router>
  );
};
export default App;
