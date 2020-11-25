import React from "react";
import { useHistory } from "react-router-dom";

const AuthOption = () => {
  const history = useHistory();
  const register = () => history.push("/register");
  const login = () => history.push("/login");
  return (
    <div>
      <button onClick={register}>Register</button>
      <button onClick={login}>Log in</button>
    </div>
  );
};

export default AuthOption;
