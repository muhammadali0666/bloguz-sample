import { NavLink } from "react-router-dom";
import "./register.css";

export const Register = () => {
  return (
    <div className="container">
      <div className="register-inner">
        <h2 className="register-title">Ro'yxatdan o'tish</h2>
        <p className="register-title-p">
          Ro'yxatdan o'tish bir daqiqadan kamroq vaqtni oladi, lekin o'qishni
          to'liq nazorat qilish imkonini beradi.
        </p>
        <form className="register">
          <fieldset className="fieldset">
            <label htmlFor="name" className="register-label">
              Ism
            </label>
            <input
              type="text"
              className="register-input"
              id="name"
              placeholder="Ism..."
            />
          </fieldset>
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
            Ro'yxatdan o'tganmisiz? <NavLink className="register-link" to={"/login"}>Sign in</NavLink>
          </p>
        </form>
          <button className="register-btn">Ro'yxatdan o'tish</button>
      </div>
    </div>
  );
};
