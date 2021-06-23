import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Login from './components/login';
import Landing from './pages/landing';
import Navbar from './components/navbar';
import Register from './components/register';
import Home from './pages/home';

function App() {

  return (
        <Router>
          <div className="App">
            <header data-testid="header" className="App-header">
              <Navbar title="YNABB" />
            </header>
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/home" component={Home} />
          </div>
        </Router>
  );
}

export default App;
