import "./headertop.css";
import { MdEmail } from "react-icons/md";
import { FaMap } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdFeedback } from "react-icons/md";
import { NavLink } from "react-router-dom";

export const HeaderTop = () => {
  return (
    <div className="header-top">
      <div className="container">
        <div className="header-top-inner">
         <div className="header-top-left">
         <a className="header-top-link" target="_blank" href="https://muhammadalishuhratjonov50@gmail.com">
            <MdEmail className="header-top-icon"/>
            mshuhratjonov@gmail.com
          </a>
          <a className="header-top-link" target="_blank" href="https://maps.app.goo.gl/4aXR1PSWbjtwioj47">
            <FaMap className="header-top-icon"/>
            Samarqand. sh
          </a>
         </div>
         <div className="header-top-right">
          <div className="header-top-auth">
            <MdFeedback style={{fontSize: "20px"}}/>
            <NavLink to={'/login'} className="header-top-lgoin">Log in</NavLink>
            <NavLink to={'/register'} className="header-top-lgoin">Register</NavLink>
          </div>
          <ul className="header-top-list">
            <li className="header-top-item">
              <a target="_blank" href="https://www.facebook.com/profile.php?id=100076524691842&mibextid=ZbWKwL" className="header-top-item-link">
                <FaFacebookF/>
              </a>
            </li>
            <li className="header-top-item">
              <a target="_blank" href="https://www.instagram.com/muhammadali122222/?igshid=ZDc4ODBmNjlmNQ%3D%3D" className="header-top-item-link">
                <BsInstagram/>
              </a>
            </li>
            <li className="header-top-item">
              <a target="_blank" href="https://t.me/Sh_Muhammadali5" className="header-top-item-link">
                <FaTelegramPlane/>
              </a>
            </li>
            <li className="header-top-item">
              <a target="_blank" href="linkedin.com/in/muhammadali-shuhratjonov-6362b42a8" className="header-top-item-link">
                <FaLinkedinIn/>
              </a>
            </li>
          </ul>
         </div>
        </div>
      </div>
    </div>
  );
};
