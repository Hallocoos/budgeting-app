import React from 'react';

function Login(props: any) {
  return (
    <div className="Login">
      <form>
        <label>
          E-Mail:
          <input type="email" name="email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Login;