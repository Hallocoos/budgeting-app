import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Login from './components/login';
import Landing from './pages/landing';
import Navbar from './components/navbar';
import Register from './components/register';
import Home from './pages/home';
import Container from '@material-ui/core/Container';

function App() {
  //TODO:store jwt here
  const [userToken, setUserToken] = useState({token: null});

  const getDataFromChild = (data:any) => {
    console.log('getdatafromchild: ',data);
    if(data.token !== undefined)
      setUserToken(data);
  }

  return (
        <Router>
          <Navbar title="YNABB" /><br/><br/>
          <Container className="App" maxWidth="lg">
            <Route exact path="/" render={(props) => <Landing {...props} dataToParent={getDataFromChild} />} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/home" render={(props) => <Home {...props} token={userToken} />} />
          </Container>
        </Router>
  );
}

export default App;
