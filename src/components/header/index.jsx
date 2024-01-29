import "./header.css";
import Logo from "../../assets/img/logo.png";
import { NavLink } from "react-router-dom";
import { IoMdContact } from "react-icons/io";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <NavLink to={"/"} className="header-logo-link">
            <img
              src={Logo}
              alt="logo"
              className="header-logo"
              width={138}
              height={48}
            />
          </NavLink>

          <div className="header-box">
            <nav className="header-nav">
              <ul className="header-list">
                <li className="header-item">
                  <NavLink to="/" className="header-item-link">
                    Home
                  </NavLink>
                </li>
                <li className="header-item">
                  <NavLink to="/about" className="header-item-link">
                    About
                  </NavLink>
                </li>
                <li className="header-item">
                  <NavLink to="/media" className="header-item-link">
                    Media
                  </NavLink>
                </li>
                <li className="header-item">
                  <NavLink to="/faq" className="header-item-link">
                    FAQ
                  </NavLink>
                </li>
              </ul>
            </nav>
            <button className="header-btn"><IoMdContact style={{fontSize: "20px", marginRight: "10px"}}/> Contact</button>
          </div>
        </div>
      </div>
    </header>
  );
};
