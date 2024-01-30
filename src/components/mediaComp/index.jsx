import "./media.css"
import MediaImg from "../../assets/img/property-03.jpg"

export const MediaComp = () => {
  return (
    <section className="media">
      <div className="container">
        <div className="media-inner">
          <h2 className="media-title">
            Rasmlar
          </h2>

          <ul className="media-list">
            <li className="media-item">
              <img src={MediaImg} alt="img" className="media-img" />
            </li>
            <li className="media-item">
              <img src={MediaImg} alt="img" className="media-img" />
            </li>
            <li className="media-item">
              <img src={MediaImg} alt="img" className="media-img" />
            </li>
            <li className="media-item">
              <img src={MediaImg} alt="img" className="media-img" />
            </li>
            <li className="media-item">
              <img src={MediaImg} alt="img" className="media-img" />
            </li>
            <li className="media-item">
              <img src={MediaImg} alt="img" className="media-img" />
            </li>
            <li className="media-item">
              <img src={MediaImg} alt="img" className="media-img" />
            </li>
            <li className="media-item">
              <img src={MediaImg} alt="img" className="media-img" />
            </li>
            <li className="media-item">
              <img src={MediaImg} alt="img" className="media-img" />
            </li>
          </ul>
          <button className="media-btn">
            Yana ko'rish
          </button>
        </div>
      </div>
    </section>
  )
}
