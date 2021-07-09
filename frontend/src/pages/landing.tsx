import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Login from '../components/login';
import Register from '../components/register';
import{ loginUser, registerUser } from '../services/account.service';
import UserForm from '../interfaces/UserForm.interface';
import { useEffect } from 'react';

function Landing({jwtToParent}: any) {

  // USING ROUTES
  const history = useHistory();
  // const toLogin = () => history.push('/login');
  // const toRegister = () => history.push('/register');

  // USING CONDITIONAL RENDERING
  const [login, setLogin] = useState(true);
  const [attempted, setAttempted] = useState(false);
  const [userToken, setUserToken] = useState({token: null});
  const [inputFields, setInputFields] = useState({} as UserForm);
  const [formSubmitFunction, setFormSubmitFunction] = useState(() => loginUser);

  const formDataFromChild = (data: any) => {
    setInputFields({
      ...inputFields,
      [data.target.name]: data.target.value
    });
  }

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setAttempted(true);
    const token = await formSubmitFunction(inputFields);
    setUserToken(token);
  }

  useEffect(()=> {
    if (userToken.token !== null){
      jwtToParent(userToken);
      history.push('/home');
    } else {
      if (attempted) {// TODO: handle error properly
        console.error("something went horribly wrong...")
        setAttempted(false);
        history.push('/');
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userToken]);

  useEffect(() => {
    if (login) {
      setFormSubmitFunction(() => loginUser);
    } else if (!login) {
      setFormSubmitFunction(() => registerUser);
    }
  }, [login])

  const clearInputs = () => {
    setInputFields({} as UserForm);
  }

  const loginForm = <div>
                     <p>Log in:</p>
                     <Login formDataToParent={formDataFromChild} />
                    </div>

  const registerForm = <div>
                        <p>Register</p>
                        <Register formDataToParent={formDataFromChild} />
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