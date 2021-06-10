import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Login from './components/login/login';
import Home from './pages/home/home';

function App() {

  return (
        <Router>
          <div className="App">
            <header className="App-header">
              YNABB
              {/* <Nav /> */}
            </header>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
          </div>
        </Router>
  );
}

export default App;
