import "./hero.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import Bg from "../../assets/img/banner-01.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Hero = () => {
  return (
    <section className="hero">
        <div className="hero-inner">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            navigation
            Autoplay
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide className="slide">
              <img className="swiper-img" src={Bg} alt="" />
            </SwiperSlide>
            <SwiperSlide className="slide">
              <img className="swiper-img" src={Bg} alt="" />
            </SwiperSlide>
            <SwiperSlide className="slide">
              <img className="swiper-img" src={Bg} alt="" />
            </SwiperSlide>
          </Swiper>
          <div className="container">
            <div className="hero-box">
              <button className="hero-btn">
                BlogUz <span>yangiliklari</span>
              </button>
              <h2 className="hero-title">Xush kelibsiz!<br/>blogimizga</h2>
            </div>
          </div>
        </div>
    </section>
  );
};
