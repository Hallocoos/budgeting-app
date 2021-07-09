import React from 'react';

function Register({formDataToParent}: any) {

  const inputHandler = (e: any) => {
    // e.preventDefault();
    formDataToParent(e);
  }

  return (
    <div className="Register">
        <label>
          Name:
          <input onChange={e => inputHandler(e)} type="text" name="username" />
        </label>
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

export default Register;