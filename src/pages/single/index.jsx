import "./single.css";
import { Layouts } from "../../components/layouts";
import Img from "../../assets/img/about-bg.png";

export const Single = () => {
  return (
    <Layouts>
      <div className="container">
        <div className="single-inner">
          <img src={Img} alt="img" className="single-img" />
          <h2 className="single-title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, harum?
          </h2>
          <p className="single-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
            doloribus praesentium, reiciendis, mollitia velit, ad cumque quae
            beatae sint facere adipisci. Mollitia, voluptatum vitae. Totam
            temporibus vel nesciunt repudiandae! Earum blanditiis animi magnam
            explicabo ipsam deserunt dolorum debitis excepturi magni pariatur
            dolor aspernatur cum, non exercitationem quam delectus odit placeat
            consequuntur error, alias dolorem id adipisci in sequi! Obcaecati
            illo dolore, qui possimus blanditiis quas consequuntur facere error
            voluptatem tempore quae eius facilis, fugiat nesciunt. Iusto,
            perferendis debitis. Sit, officiis atque fuga magnam velit
            exercitationem adipisci blanditiis consequuntur a quam perferendis
            minima nobis, ipsa fugit ipsam corrupti sunt obcaecati voluptate?
          </p>
          <div className="single-bottom">
            <p className="single-date">01/02/2024</p>
          </div>
        </div>
      </div>
    </Layouts>
  );
};
