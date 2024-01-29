import "./header.css"
import Logo from "../../assets/img/logo.png"
import { NavLink } from "react-router-dom"

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <NavLink to={'/'} className="header-logo-link">
            <img src={Logo} alt="logo" className="header-logo" width={158} height={58}/>
          </NavLink>

          <div className="header-box">
            <nav className="header-nav">
              <ul className="header-list">
                <li className="header-item">
                  <NavLink to='/home' className="header-item-link">Home</NavLink>
                </li>
                <li className="header-item">
                  <NavLink to='/about' className="header-item-link">About</NavLink>
                </li>
                <li className="header-item">
                  <NavLink to='/about' className="header-item-link">About</NavLink>
                </li>
                <li className="header-item">
                  <NavLink to='/about' className="header-item-link">About</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
