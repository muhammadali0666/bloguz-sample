import "./about.css";
import AboutImg from "../../assets/img/about-bg.png"
import { NavLink } from "react-router-dom";

export const AboutComp = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about-inner">
          <div className="about-box">
            <p className="about-p">Biz haqimizda</p>
            <h2 className="about-tile">Createx Online School</h2>
            <p className="about-text">
              We provide relevant approaches to online learning, internships and
              employment in the largest companies in the country. Our
              educational programs help you get a new specialty from scratch.
              During your studies, we will help you find a job. Check the
              courses and online events that we organise.
            </p>
            <NavLink to={'/contact'} className="header-btn about-btn">Bog'lanish</NavLink>
          </div>
          <img src={AboutImg} alt="img" className="about-img" />
        </div>
      </div>
    </section>
  );
};
