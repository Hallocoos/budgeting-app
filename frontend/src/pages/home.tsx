import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import Login from '../components/login';
import Register from '../components/register';
import{ loginUser, registerUser } from '../services/account.service';

function Home() {

  // USING ROUTES
  // const history = useHistory();
  // const toLogin = () => history.push('/login');
  // const toRegister = () => history.push('/register');

  // USING CONDITIONAL RENDERING
  const [login, setLogin] = useState(true);
  const [userToken, setUserToken] = useState({token: "not yet set"});
  const [inputFields, setInputFields] = useState({} as any);

  const sendDataToParent = (data: any) => {
    setInputFields({
      ...inputFields,
      [data.target.name]: data.target.value
    });
  }

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    let token: any;

    if (inputFields.username === undefined) {
      console.log('inputfields: ',inputFields);
      token = await loginUser(inputFields);
    } else {
      token = await registerUser(inputFields);
    }

    // TODO: handle error
    if (token !== undefined)
      setUserToken(token);
    else
      console.error("something went horribly wrong...")
    // clearInputs();

    // subscribe to service? -> auth -> login
  }

  const clearInputs = () => {
    setInputFields({});
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
      JWT: {userToken.token}
      {/* USING ROUTES */}
      {/* Log in here: <button onClick={toLogin}>Log in</button><br/>
      Don't have an account? Register here: <button onClick={toRegister}>Register</button> */}
    </div>
  );
}


export default Home;