import "./about.css";
import AboutImg from "../../assets/img/about-bg.png";
import { NavLink } from "react-router-dom";

export const AboutComp = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about-inner">
          <div className="about-box">
            <p className="about-p">Biz haqimizda</p>
            <h2 className="about-tile">Yangiliklardan xabardor bo'ling</h2>
            <p className="about-text">
              Maqsadimiz hozirda ushbu loyihani qilish yordamida insonlar
              fikr-mulohazalarini tahlil qilgan holatda, startup bo'la oladigan
              kuchliroq platforma yaratishdir.Sizning fikringiz biz uchun muhim.
            </p>
            <NavLink to={"/contact"} className="header-btn about-btn">
              Bog'lanish
            </NavLink>
          </div>
          <img src={AboutImg} alt="img" className="about-img" />
        </div>
      </div>
    </section>
  );
};
