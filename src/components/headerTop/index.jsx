import "./headertop.css";
import { MdEmail } from "react-icons/md";
import { FaMap } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

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
          <a className="header-top-link" target="_blank" href="https://muhammadalishuhratjonov50@gmail.com">
            <FaMap className="header-top-icon"/>
            Samarqand. sh
          </a>
         </div>
         <div className="header-top-right">
          <ul className="header-top-list">
            <li className="header-top-item">
              <a href="#" className="header-top-item-link">
                <FaFacebookF/>
              </a>
            </li>
            <li className="header-top-item">
              <a href="#" className="header-top-item-link">
                <BsInstagram/>
              </a>
            </li>
            <li className="header-top-item">
              <a href="#" className="header-top-item-link">
                <FaTelegramPlane/>
              </a>
            </li>
            <li className="header-top-item">
              <a href="#" className="header-top-item-link">
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
