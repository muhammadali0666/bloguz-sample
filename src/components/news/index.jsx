import "./news.css";
import Cardimg from "../../assets/img/property-03.jpg";
import { FaArrowCircleRight } from "react-icons/fa";
import { GiNextButton } from "react-icons/gi";
import { GiPreviousButton } from "react-icons/gi";

export const News = () => {
  return (
    <section className="news">
      <div className="container">
        <div className="news-inner">
          <div className="news-box">
            <button className="news-btn">show all</button>
            <button className="news-btn">sport</button>
            <button className="news-btn">siyosat</button>
            <button className="news-btn">mashxurlar</button>
          </div>
          <ul className="news-list">
            <li className="news-item">
              <img src={Cardimg} alt="img" className="news-img" />
              <div className="card-box">
                <h4 className="card-title">Lorem ipsum dolor sit amet.</h4>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus voluptatibus, amet maxime minima praesentium sunt?
                </p>
                <div className="card-bottom">
                  <p className="card-time">01.30.2024</p>
                  <button className="card-btn">
                    read more <FaArrowCircleRight className="card-arrow" />
                  </button>
                </div>
              </div>
            </li>
            <li className="news-item">
              <img src={Cardimg} alt="img" className="news-img" />
              <div className="card-box">
                <h4 className="card-title">Lorem ipsum dolor sit amet.</h4>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus voluptatibus, amet maxime minima praesentium sunt?
                </p>
                <div className="card-bottom">
                  <p className="card-time">01.30.2024</p>
                  <button className="card-btn">
                    read more <FaArrowCircleRight className="card-arrow" />
                  </button>
                </div>
              </div>
            </li>
            <li className="news-item">
              <img src={Cardimg} alt="img" className="news-img" />
              <div className="card-box">
                <h4 className="card-title">Lorem ipsum dolor sit amet.</h4>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus voluptatibus, amet maxime minima praesentium sunt?
                </p>
                <div className="card-bottom">
                  <p className="card-time">01.30.2024</p>
                  <button className="card-btn">
                    read more <FaArrowCircleRight className="card-arrow" />
                  </button>
                </div>
              </div>
            </li>
            <li className="news-item">
              <img src={Cardimg} alt="img" className="news-img" />
              <div className="card-box">
                <h4 className="card-title">Lorem ipsum dolor sit amet.</h4>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus voluptatibus, amet maxime minima praesentium sunt?
                </p>
                <div className="card-bottom">
                  <p className="card-time">01.30.2024</p>
                  <button className="card-btn">
                    read more <FaArrowCircleRight className="card-arrow" />
                  </button>
                </div>
              </div>
            </li>
            <li className="news-item">
              <img src={Cardimg} alt="img" className="news-img" />
              <div className="card-box">
                <h4 className="card-title">Lorem ipsum dolor sit amet.</h4>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus voluptatibus, amet maxime minima praesentium sunt?
                </p>
                <div className="card-bottom">
                  <p className="card-time">01.30.2024</p>
                  <button className="card-btn">
                    read more <FaArrowCircleRight className="card-arrow" />
                  </button>
                </div>
              </div>
            </li>
            <li className="news-item">
              <img src={Cardimg} alt="img" className="news-img" />
              <div className="card-box">
                <h4 className="card-title">Lorem ipsum dolor sit amet.</h4>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus voluptatibus, amet maxime minima praesentium sunt?
                </p>
                <div className="card-bottom">
                  <p className="card-time">01.30.2024</p>
                  <button className="card-btn">
                    read more <FaArrowCircleRight className="card-arrow" />
                  </button>
                </div>
              </div>
            </li>
          </ul>
          <ul className="card-bottom-list">
            <li className="card-bottom-item">
              <button className="card-page">
                <GiPreviousButton />
              </button>
            </li>
            <li className="card-bottom-item">
              <button className="card-page">1</button>
            </li>
            <li className="card-bottom-item">
              <button className="card-page">2</button>
            </li>
            <li className="card-bottom-item">
              <button className="card-page">3</button>
            </li>
            <li className="card-bottom-item">
              <button className="card-page">
                <GiNextButton />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
