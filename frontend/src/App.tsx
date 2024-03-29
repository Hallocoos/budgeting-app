import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Login from './components/login';
import Landing from './pages/landing';
import Navbar from './components/navbar';
import Register from './components/register';
import Home from './pages/home';
import Container from '@material-ui/core/Container';

function App() {

  const getJwtFromChild = (jwt:any) => {
    if(jwt.token !== undefined)
      sessionStorage.setItem('token', jwt.token);
  }

  return (
        <Router>
          <Navbar title="YNABB" /><br/><br/>
          <Container className="App" maxWidth="lg">
            <Route exact path="/" render={(props) => <Landing {...props} jwtToParent={getJwtFromChild} />} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/home" render={(props) => <Home {...props}  />} />
          </Container>
        </Router>
  );
}

export default App;
