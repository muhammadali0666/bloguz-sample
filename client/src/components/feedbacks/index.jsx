import "./feedback.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaRegUserCircle } from "react-icons/fa";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { MdFeedback } from "react-icons/md";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Feedback = () => {
  return (
    <section className="feedback">
      <div className="container">
        <div className="feedback-inner">
          <p className="feedback-text">Fikirlar</p>
          <h2 className="feedback-title">Biz haqimizdagi fikirlar</h2>

          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={50}
            navigation
            Autoplay
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide className="feedback-slide">
              <div className="feed-box">
                <MdFeedback className="intro-img" />
                <p className="feedback-p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque nostrum vel obcaecati explicabo ad. Minus, omnis, eum
                  optio blanditiis recusandae nisi iure assumenda neque at quia
                  totam illo consequuntur, veritatis quod quidem ut alias
                  pariatur tempore accusamus magni? Temporibus vel animi, quis
                  quia, officiis corporis velit adipisci asperiores distinctio
                  quas, laudantium rerum! Enim ut odit quasi unde omnis. Quia
                  odio natus inventore at autem repellat eum doloremque odit
                  esse veniam?
                </p>
                <div className="feedback-box">
                  <FaRegUserCircle className="feed-icon" />
                  <div className="feedback-box-mini">
                    <p className="feedback-p-mini">Ali Nosirov</p>
                    <p className="feedback-p-text">Designer</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="feedback-slide">
              <div className="feed-box">
                <MdFeedback className="intro-img" />
                <p className="feedback-p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate quam dolore consectetur dignissimos id! Quo maxime
                  in nostrum, modi quos totam eum dolores illum eveniet?
                  Aperiam, amet ullam voluptate aliquam tempore quisquam hic,
                  doloribus vel harum asperiores iure fugit velit natus modi
                  perferendis debitis sint, expedita nesciunt temporibus. Quos,
                  a esse adipisci iusto sit autem animi dolorem dignissimos
                  incidunt fugit.
                </p>
                <div className="feedback-box">
                  <FaRegUserCircle className="feed-icon" />
                  <div className="feedback-box-mini">
                    <p className="feedback-p-mini">Alisher</p>
                    <p className="feedback-p-text">Developer</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="feedback-slide">
              <div className="feed-box">
                <MdFeedback className="intro-img" />
                <p className="feedback-p">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Magnam fugit eos asperiores. Voluptatem omnis praesentium
                  adipisci, iusto illo quia eos sint ad beatae hic explicabo et.
                  Ipsam, adipisci. Ipsum a repellat numquam! Dolorum cum eius
                  blanditiis, esse atque magnam vero. Magni officia quae ipsa
                  consequatur veniam animi rerum reiciendis commodi?
                </p>
                <div className="feedback-box">
                  <FaRegUserCircle className="feed-icon" />
                  <div className="feedback-box-mini">
                    <p className="feedback-p-mini">Ubaydulloh</p>
                    <p className="feedback-p-text">SMM</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};
