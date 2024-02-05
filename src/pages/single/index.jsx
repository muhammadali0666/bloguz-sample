import "./single.css";
import { Layouts } from "../../components/layouts";
import Img from "../../assets/img/about-bg.png";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dateFormat, { masks } from "dateformat";

export const Single = () => {
  const [info, setInfo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(import.meta.env.VITE_APP_BASE_URL + "/post_one/" + id)
      .then((res) => res.json())
      .then((data) => setInfo(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Layouts>
      <div className="container">
        <div className="single-inner">
          <img src={Img} alt="img" className="single-img" />
          <h2 className="single-title">{info.title}</h2>
          <p className="single-text">{info.text}</p>
          <div className="single-bottom">
            <p className="single-date">{dateFormat(info.createdAt)}</p>
          </div>
        </div>
      </div>
    </Layouts>
  );
};
