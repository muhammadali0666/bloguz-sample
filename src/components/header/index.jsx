import "./header.css";
import Logo from "../../assets/img/logo.png";
import { NavLink } from "react-router-dom";
import { IoMdContact } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { FaRegWindowClose } from "react-icons/fa";

export const Header = () => {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal((item) => !item);
  };
  return (
    <header className={modal ? "header-extra" : "header"}>
      <div className="container">
        <GiHamburgerMenu className="hamburger-header" onClick={handleModal} />
        <div className={modal ? "" : "header-inner"}>
              <FaRegWindowClose className="hamburger-header" style={{background: "#fff"}} onClick={handleModal}/>
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
                    Bosh sahifa
                  </NavLink>
                </li>
                <li className="header-item">
                  <NavLink to="/about" className="header-item-link">
                    Biz haqimizda
                  </NavLink>
                </li>
                <li className="header-item">
                  <NavLink to="/media" className="header-item-link">
                    Rasmlar
                  </NavLink>
                </li>
                <li className="header-item">
                  <NavLink to="/faq" className="header-item-link">
                    Savollar
                  </NavLink>
                </li>
              </ul>
            </nav>
            <NavLink to={"/contact"} className="header-btn">
              <IoMdContact style={{ fontSize: "20px", marginRight: "10px" }} />{" "}
              Bog'lanish
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};
