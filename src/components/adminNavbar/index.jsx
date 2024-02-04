import { Link, NavLink, Outlet } from "react-router-dom";
import "./admin.css";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaClosedCaptioning } from "react-icons/fa";
import { useState } from "react";

export const AdminNavbar = () => {

  const [modal, setModal] = useState(false)

  const handleModal = () => {
    setModal((item) => !item)
  }

  return (
    <>
      <div className="admin-navbar">
        <div className="container">
          <div className="admin-navbar-inner">
            <Link className="admin-navbar-logo-link" to={"/admin-page-scret-control/admin-home"}>
              <MdOutlineDashboardCustomize className="admin-navbar-logo"/>
            </Link>
            <nav className={modal ? "addmin-navbar-nav" : "addmin-navbar-nav-extra"}>
              <FaClosedCaptioning className="admin-navbar-close" onClick={handleModal}/>
              <ul className="admin-navbar-list">
                <li className="admin-navbar-item">
                  <NavLink to={"admin-home"} className="admin-navbar-item-link">
                    Bosh sahifa
                  </NavLink>
                </li>
                <li className="admin-navbar-item">
                  <NavLink
                    to={"admin-photo"}
                    className="admin-navbar-item-link"
                  >
                    Rasm
                  </NavLink>
                </li>
                <li className="admin-navbar-item">
                  <NavLink
                    to={"admin-contact"}
                    className="admin-navbar-item-link"
                  >
                    Bog'lanish
                  </NavLink>
                </li>
              </ul>
            </nav>
            <button className="admin-navbar-btn">Chiqish</button>
          </div>
          <GiHamburgerMenu className="admin-navbar-hamburger"  onClick={handleModal}/>
        </div>
      </div>
      <Outlet />
    </>
  );
};
