import React from 'react';
import Navbar from './Components/layout/Navbar';
import Landing from './Components/layout/Landing';
import Register from './Components/auth/Register';
import Login from './Components/auth/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Router>
      <>
        <Navbar />
        <Route exact path='/' component={Landing} />
        <section className='container'>
          <Switch>
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
          </Switch>
        </section>
      </>
    </Router>
  );
};
export default App;
