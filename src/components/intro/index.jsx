import "./intro.css";
import { PiTreeStructureDuotone } from "react-icons/pi";
import { MdFeedback } from "react-icons/md";
import { GrThreeDEffects } from "react-icons/gr";
import { FaTable } from "react-icons/fa";

export const Intro = () => {
  return (
    <section className="intro">
      <div className="container">
        <div className="intro-inner">
          <p className="intro-text">Biz har doim biz shuni tarafdorimiz</p>
          <h2 className="intro-title">Bizning asosiy qadriyatlarimiz</h2>
          <ul className="intro-list">
            <li className="intro-item">
              <PiTreeStructureDuotone className="intro-img" />
              <h4 className="intro-item-title">Strukturaviy yondashuv</h4>
            </li>
            <li className="intro-item">
              <MdFeedback className="intro-img" />
              <h4 className="intro-item-title">fikr-mulohazalar</h4>
            </li>
            <li className="intro-item">
              <GrThreeDEffects className="intro-img" />
              <h4 className="intro-item-title">Samaradorlik</h4>
            </li>
            <li className="intro-item">
              <FaTable className="intro-img" />
              <h4 className="intro-item-title">Moslashuvchan jadval</h4>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
