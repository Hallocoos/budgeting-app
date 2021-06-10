import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import Login from '../../components/login/login';
import Register from '../../components/register/register';

function Home() {

  // USING ROUTES
  // const history = useHistory();
  // const toLogin = () => history.push('/login');
  // const toRegister = () => history.push('/register');

  // USING CONDITIONAL RENDERING
  let [login, setLogin] = useState(true);

  return (
    <div className="Home">
      <h1>Welcome to Home page...</h1>
      <hr />
      {login ? "Don't have an account? " : "Already have an account? "}<button onClick={()=>setLogin(!login)}>{login ? "Register" : "Log in"}</button>
      {
        login ?
          <div>
            <p>Log in:</p>
            <Login />
          </div> :
          <div>
            <p>Register</p>
            <Register />
          </div>
      }
      {/* USING ROUTES */}
      {/* Log in here: <button onClick={toLogin}>Log in</button><br/>
      Don't have an account? Register here: <button onClick={toRegister}>Register</button> */}
    </div>
  );
}

export default Home;