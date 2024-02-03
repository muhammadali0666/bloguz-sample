import { NavLink } from "react-router-dom";
import "./register.css";
import { auth, provider } from "./googleConfig";
import { signInWithPopup } from "firebase/auth";
import { FaGooglePlusG } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();

  const handleClick = async () => {
    await signInWithPopup(auth, provider).then((data) => {
      localStorage.setItem("token", data.user.accessToken);
      fetch(import.meta.env.VITE_APP_BASE_URL + "/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: data.user.displayName,
          profilePhoto: data.user.providerData[0].photoURL,
          email: data.user.email,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.msg);
          localStorage.getItem("token") ? navigate("/") : navigate("/register");
        });
    });
  };

  return (
    <div className="container">
      <div className="register-inner">
        <h2 className="register-title">Ro'yxatdan o'tish</h2>
        <p className="register-title-p">
          Ro'yxatdan o'tish bir daqiqadan kamroq vaqtni oladi, lekin o'qishni
          to'liq nazorat qilish imkonini beradi.
        </p>
        <div className="register">
          {/* <fieldset className="fieldset">
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
          </fieldset> */}
        </div>
        {/* <button className="register-btn">Ro'yxatdan o'tish</button> */}
        <p className="register-text">
          Ro'yxatdan o'tganmisiz?{" "}
          <NavLink className="register-link" to={"/login"}>
            Sign in
          </NavLink>
        </p>
        <button onClick={handleClick} className="google-button">
          <FaGooglePlusG className="google-icon" /> Sign in with google
        </button>
      </div>
    </div>
  );
};
