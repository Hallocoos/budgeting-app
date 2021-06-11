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
  const [login, setLogin] = useState(true);
  const [inputFields, setInputFields] = useState({
    name: '',
    email: '',
    password: ''
  } as any)

  const sendDataToParent = (data: any) => {
    setInputFields({
      ...inputFields,
      [data.target.name]: data.target.value
    });
  }

  const onSubmit = (event: any) => {
    event.preventDefault();
    console.log(inputFields);
    clearInputs();
    // subscribe to service? -> auth -> login
  }

  const clearInputs = () => {
    setInputFields({name: '',email: '',password: ''});
  }

  const switchForms = () => {
    return login ? <div>
                    <p>Log in:</p>
                    <Login sendDataToParent={sendDataToParent} />
                   </div>
                 : <div>
                    <p>Register</p>
                    <Register sendDataToParent={sendDataToParent} />
                   </div>
  }

  return (
    <div className="Home">
      <h1>Welcome to Home page...</h1>
      <hr />
      {login ? "Don't have an account? " : "Already have an account? "}
      <button onClick={()=>{setLogin(!login); clearInputs();}}>
      {login ? "Register" : "Log in"}</button>
      <form onSubmit={e => onSubmit(e)}>
        { switchForms() }
      </form>
      {/* USING ROUTES */}
      {/* Log in here: <button onClick={toLogin}>Log in</button><br/>
      Don't have an account? Register here: <button onClick={toRegister}>Register</button> */}
    </div>
  );
}


export default Home;