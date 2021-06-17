import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Login from './components/login';
import Home from './pages/home/home';
import Navbar from './components/navbar';

function App() {

  return (
        <Router>
          <div className="App">
            <header data-testid="header" className="App-header">
              <Navbar title="YNABB" />
            </header>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
          </div>
        </Router>
  );
}

export default App;
