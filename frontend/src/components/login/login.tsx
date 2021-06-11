import React from 'react';

function Login({sendDataToParent}:any) {

  const inputHandler = (e: any) => {
    // e.preventDefault();
    sendDataToParent(e);
  }

  return (
    <div className="Login">
        <label>
          E-Mail:
          <input onChange={e => inputHandler(e)} type="email" name="email" />
        </label>
        <label>
          Password:
          <input onChange={e => inputHandler(e)} type="password" name="password"/>
        </label>
        <input type="submit" value="Submit" />
    </div>
  );
}

export default Login;