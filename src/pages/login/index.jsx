import { NavLink } from "react-router-dom"
import "./login.css"

export const Login = () => {
  return (
    <div className="container">
    <div className="register-inner">
      <h2 className="register-title">Tizimga kirish</h2>
      <p className="register-title-p">
      Ro'yxatdan o'tish paytida taqdim etilgan elektron pochta va parol yordamida hisobingizga kiring.
      </p>
      <form className="register">
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
          Ro'yxatdan o'tmaganmisiz? <NavLink className="register-link" to={"/register"}>Sign up</NavLink>
        </p>
      </form>
        <button className="register-btn">Ro'yxatdan o'tish</button>
    </div>
  </div>
  )
}
