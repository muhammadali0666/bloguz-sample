import { NavLink } from "react-router-dom";
import "./login.css";
import {auth, provider} from "./googleConfig"
import {signInWithPopup} from "firebase/auth"
import { useEffect, useState } from "react";

export const Login = () => {

  const [value, setValue] = useState('')
  const [name, setName] = useState('')

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email)
      setName(data.user.displayName)
    })
  }

useEffect(() => {
  console.log(value);
  console.log(name);
},[value])

  return (
    <div className="container">
      <div className="register-inner">
        <h2 className="register-title">Tizimga kirish</h2>
        <p className="register-title-p">
          Ro'yxatdan o'tish paytida taqdim etilgan elektron pochta va parol
          yordamida hisobingizga kiring.
        </p>
        <div className="form">
        <fieldset className="fieldset">
          <label htmlFor="email" className="register-label">
            Email
          </label>
          <input
            type="email"
            className="register-input"
            id="email"
            placeholder="Email..."
          />
        </fieldset>
        <fieldset className="fieldset">
          <label htmlFor="password" className="register-label">
            Password
          </label>
          <input
            type="password"
            className="register-input"
            id="password"
            placeholder="Parol..."
          />
        </fieldset>
        <p className="register-text">
          Ro'yxatdan o'tmaganmisiz?{" "}
          <NavLink className="register-link" to={"/register"}>
            Sign up
          </NavLink>
        </p>
        <button className="register-btn">Ro'yxatdan o'tish</button>
        </div>
        <button
        onClick={handleClick}
          style={{ background: "red", padding: "10px 20px" }}
        >
          Sign in with google
        </button>
      </div>
    </div>
  );
};
