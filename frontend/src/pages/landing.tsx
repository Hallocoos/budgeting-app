import { Login } from '../components/login';
import { useHistory } from 'react-router-dom';
import { Register } from '../components/register';
import React, { useState, useEffect } from 'react';
import UserForm from '../interfaces/UserForm.interface';
import { loginUser, registerUser } from '../services/account.service';

function Landing({ jwtToParent }: any) {

  // USING ROUTES
  const history = useHistory();
  // const toLogin = () => history.push('/login');
  // const toRegister = () => history.push('/register');

  // USING CONDITIONAL RENDERING
  const [login, setLogin] = useState(true);
  // const [userToken, setUserToken] = useState({ token: null });
  const [inputFields, setInputFields] = useState({} as UserForm);
  const [formSubmitFunction, setFormSubmitFunction] = useState(() => loginUser);

  // const onSubmit = async (event: React.FormEvent) => {
  //   event.preventDefault();
  //   const token = await formSubmitFunction(inputFields);
  //   // if registering
  //   //    redir to /login
  //   history.push('/home');
  // }

  useEffect(() => {
    if (login) {
      setFormSubmitFunction(() => loginUser);
    } else if (!login) {
      setFormSubmitFunction(() => registerUser);
    }
  }, [login]);

  return (
    <div className="Landing">
      <h1>Welcome to the Landing page...</h1>
      <hr />
      {login ? "Don't have an account? " : "Already have an account? "}
      <button onClick={() => { setLogin(!login); }}>
        {login ? "Register" : "Log in"}</button>
      <form onSubmit={e => onSubmit(e)}>
        {login ?
          <Login /> :
          <Register />}
      </form>
    </div>
  );
}


export default Landing;