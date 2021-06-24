import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Login from '../components/login';
import Register from '../components/register';
import{ loginUser, registerUser } from '../services/account.service';
import UserForm from '../interfaces/UserForm.interface';
import { useEffect } from 'react';

function Landing({dataToParent}: any) {

  // USING ROUTES
  const history = useHistory();
  // const toLogin = () => history.push('/login');
  // const toRegister = () => history.push('/register');

  // USING CONDITIONAL RENDERING
  const [login, setLogin] = useState(true);
  const [userToken, setUserToken] = useState({token: null});
  const [inputFields, setInputFields] = useState({} as UserForm);

  const sendDataToParent = (data: any) => {
    setInputFields({
      ...inputFields,
      [data.target.name]: data.target.value
    });
  }

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (inputFields.username === undefined) {
      console.log('inputfields: ',inputFields);
      setUserToken(await loginUser(inputFields));
    } else {
      setUserToken(await registerUser(inputFields));
    }
  }

  useEffect(()=> {
    console.log('landing: ',userToken);
    if (userToken.token !== null){
      dataToParent(userToken);
      history.push('/home');
    } else { // TODO: handle error
      console.error("something went horribly wrong...")
      history.push('/');
    }
  }, [history, dataToParent, userToken]);

  const clearInputs = () => {
    setInputFields({} as UserForm);
  }

  const loginForm = <div>
                     <p>Log in:</p>
                     <Login sendDataToParent={sendDataToParent} />
                    </div>

  const registerForm = <div>
                        <p>Register</p>
                        <Register sendDataToParent={sendDataToParent} />
                       </div>

  return (
    <div className="Landing">
      <h1>Welcome to the Landing page...</h1>
      <hr />
      {login ? "Don't have an account? " : "Already have an account? "}
      <button onClick={()=>{setLogin(!login); clearInputs();}}>
      {login ? "Register" : "Log in"}</button>
      <form onSubmit={e => onSubmit(e)}>
        { login ? loginForm : registerForm }
      </form>
      {/* USING ROUTES */}
      {/* Log in here: <button onClick={toLogin}>Log in</button><br/>
      Don't have an account? Register here: <button onClick={toRegister}>Register</button> */}
    </div>
  );
}


export default Landing;